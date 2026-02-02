'use client';

import { useState, useEffect } from 'react';

export interface CountdownTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isLaunched: boolean;
}

/**
 * Cinema-Grade Countdown Timer Hook
 * Target: February 6th, 2026, 6:00 AM IST (00:30 UTC)
 */
export function useCountdown(): CountdownTime {
    // Target launch date: Feb 6, 2026, 6:00 AM IST = Feb 6, 2026, 00:30 UTC
    const LAUNCH_DATE = new Date('2026-02-06T00:30:00Z').getTime();

    const calculateTimeRemaining = (): CountdownTime => {
        const now = new Date().getTime();
        const distance = LAUNCH_DATE - now;

        // Check if launch date has passed
        if (distance <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
                isLaunched: true,
            };
        }

        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return {
            days,
            hours,
            minutes,
            seconds,
            isLaunched: false,
        };
    };

    const [timeRemaining, setTimeRemaining] = useState<CountdownTime>(calculateTimeRemaining());

    useEffect(() => {
        // Update countdown every second
        const interval = setInterval(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);

    return timeRemaining;
}
