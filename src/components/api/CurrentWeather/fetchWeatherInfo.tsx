'use server';
import { fetchWeatherApi } from 'openmeteo';

export default async function fetchWeather(tInterval?: string) {
	const params = {
		"latitude": 42.4963,
		"longitude": -96.4049,
		"daily": "weathercode,temperature_2m_max,temperature_2m_min",
		"current": ["weathercode", "temperature_2m"],
		"timeformat": "unixtime",
		"timezone": "auto",
		"wind_speed_unit": "mph",
		"temperature_unit": "fahrenheit",
		"precipitation_unit": "inch"
	};
	const url = "https://api.open-meteo.com/v1/forecast";
	const responses = await fetchWeatherApi(url, params);

	// Process first location. Add a for-loop for multiple locations or weather models
	const response = responses[0];

	// Attributes for timezone and location
	const utcOffsetSeconds = response.utcOffsetSeconds();
	const timezone = response.timezone();
	const timezoneAbbreviation = response.timezoneAbbreviation();
	const latitude = response.latitude();
	const longitude = response.longitude();

	const current = response.current()!;
	const daily = response.daily()!;

	switch (tInterval) {
		case "current":
			const currentWeather = {
				current: {				
					time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000).toISOString(),
					weatherCode: current.variables(0)!.value(),
					temperature2m: Math.trunc(current.variables(1)!.value()),
				}
			};
			return currentWeather;

		case "daily":
			const dailyWeather = {
				daily: {
					time: [...Array((Number(daily.timeEnd()) - Number(daily.time())) / daily.interval())].map(
						(_, i) => new Date((Number(daily.time()) + i * daily.interval() + utcOffsetSeconds) * 1000)
					),
					weatherCode: daily.variables(0)!.valuesArray()!,
					temperature2mMax: daily.variables(1)!.valuesArray()!,
					temperature2mMin: daily.variables(2)!.valuesArray()!,
				}
			};

		

			for(let i = 0; i < dailyWeather.daily.temperature2mMax.length; i++) {
				// Converts Date objects to MM/DD


				// Truncates temperature values to whole numbers
				dailyWeather.daily.temperature2mMax[i] = Math.trunc(dailyWeather.daily.temperature2mMax[i]);
				dailyWeather.daily.temperature2mMin[i] = Math.trunc(dailyWeather.daily.temperature2mMin[i]);
			};
			console.log(dailyWeather.daily.time);
			return dailyWeather;

		default:
			throw new Error("Invalid time interval specified. Use 'current' or 'daily'.");
	};
} 







