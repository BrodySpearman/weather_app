import styles from "./weatheroverview.module.css";
import SevenDayForecast from "./7DayForecast/7dayforecast";

export default function WeatherOverview() {
    return (
        <div className={styles.overviewPanel}>
            <div className={styles.overviewCard}>
                <p>Overview</p>
            </div>
            <div className={styles.overviewCard}>
                <SevenDayForecast />
            </div>
            <div className={styles.overviewCard}>
                <p>Overview</p>
            </div>
        </div>
    );
}