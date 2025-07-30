'use client';
import fetchWeather from "@/components/api/CurrentWeather/fetchWeatherInfo";
import { useState, useEffect } from "react";
import Icon from "./Icon/icon";

export default function CurrentWeather() {

    // Type for the current weather data object.
    type CurrentWeather = {
        current: {
            weatherCode: number;
            temperature2m: number;
        };
    }

    const [weatherData, setWeatherData] = useState<CurrentWeather | null>(null);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchWeather("current") as CurrentWeather;
            setWeatherData(data);
            console.log(data);
        };

        fetchData();
    }, [weatherData?.current.temperature2m]);

    return (
        <div className="current-weather-panel w-full flex flex-col items-center justify-center">
            <h2 className="text-4xl font-montserrat font-light">Sioux City, IA</h2>
            <div className="current-temperature-icon">
                <Icon weatherCode={weatherData?.current.weatherCode} />
            </div>
            <p className="text-7xl font-montserrat font-medium">{weatherData?.current.temperature2m}&deg;</p>
        </div>
    );
}