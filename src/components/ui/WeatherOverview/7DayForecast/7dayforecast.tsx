'use client';
import fetchWeather from "@/components/api/CurrentWeather/fetchWeatherInfo";
import { useState, useEffect } from "react";


export default function sevenDayForecast() {
    // Type for the 7-day forecast data object.
    type Daily = {
        daily: {
            time: Date[] | string[];
            weatherCode: Float32Array;
            temperature2mMax: Float32Array;
            temperature2mMin: Float32Array;
        }
    }

    const [weatherData, setWeatherData] = useState<Daily | null>(null);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchWeather("daily");
            setWeatherData(data as Daily);
            console.log(data);
        }
        
        fetchData();
    }, []);
    
    // Converts Date objects to MM/DD format for display
    for(let i = 0; i < weatherData?.daily.time.length!; i++) {
        weatherData!.daily.time[i] = new Date(weatherData!.daily.time[i]).toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit"
        });
    };



    return (
        <div className="7day-forecast-panel w-full flex flex-col items-center justify-center">
            <h2 className="text-xl font-montserrat font-bold text-[#d3d3d3]">7-Day Forecast</h2>

            <div className="temp-bar flex flex-row items-center justify-between gap-4">

                {weatherData?.daily.time.map((date, index) => (
                    <div key={index} className="temp-card flex flex-col items-center">
                        <p className="text-lg font-medium text-gray-300">{date.toString()}</p>
                        <img src={`/weather-icons/${weatherData.daily.weatherCode[index]}.svg`} alt="Weather Icon" className="w-17 h-15" />
                        <p className="text-md font-medium text-[#dadada]">{weatherData.daily.temperature2mMax[index]}&deg;</p>
                        <p className="text-sm font-medium text-gray-400">{weatherData.daily.temperature2mMin[index]}&deg;</p>
                    </div>
                ))}

            </div>
        </div>
    );
}