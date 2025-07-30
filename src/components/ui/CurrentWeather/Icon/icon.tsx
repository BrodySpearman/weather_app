import Image from "next/image";

// Weather Code Rules (open-meteo.com/en/docs):

// 0, 1: Clear skies, Mainly clear.
// 2, 3: partly cloudy, overcast.
// 45, 48: Fog, depositing rime fog.
// 51, 53, 55: Drizzle: Light, moderate, dense intensity.
// 56, 57: Freezing Drizzle: Light and dense intensity.
// 61, 63, 65: Rain: Slight, moderate and heavy intensity.
// 66, 67: Freezing Rain: Light and heavy intensity.
// 71, 73, 75: Snow fall: Slight, moderate, and heavy intensity.
// 77: Snow grains.
// 80, 81, 82: Rain showers: Slight, moderate, and heavy intensity.
// 85, 86: Snow showers slight and heavy.
// 95: Thunderstorm: Slight or moderate.
// 96, 99: Thunderstorm with slight and heavy hail.

export default function Icon(props: any) {
    return(
        <Image src={`/weather-icons/${props.weatherCode}.svg`} alt="Weather Icon" priority width={400} height={400} className="mt-[-5px] pt-1 mb-[-5px] z-[-1]" />
    );
}