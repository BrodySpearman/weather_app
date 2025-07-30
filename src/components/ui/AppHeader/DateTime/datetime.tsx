'use client';
import styles from "./datetime.module.css";
import { useState, useEffect } from "react";

export default function DateTime() {

    const [time, setTime] = useState(new Date());

    const options = {
        weekday: 'long' as const,
        year: 'numeric' as const,    
        month: 'long' as const,
        day: 'numeric' as const,
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const currentDate = time.toLocaleDateString('en-US', options);
   
    return (
        <div className={styles.dateTimePanel}>
            <h2 className="text-[.95em] pl-[1em]">{currentDate}</h2>
            <h3 className="text-[.85em] pl-[1em]">{time.toLocaleTimeString()}</h3>
        </div>
    );
}