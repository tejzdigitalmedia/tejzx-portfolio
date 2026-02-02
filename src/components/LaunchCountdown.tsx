"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCountdown } from "@/hooks/useCountdown";
import styles from "./LaunchCountdown.module.css";
import React from "react";

interface TimeUnitProps {
    value: number;
    label: string;
    delay?: number;
}

const TimeUnit = ({ value, label, delay = 0 }: TimeUnitProps) => {
    // Pad single digits with a leading zero
    const formattedValue = value < 10 ? `0${value}` : value.toString();

    return (
        <motion.div
            className={styles.timeBlock}
            animate={{ y: [0, -4, 0], x: [0, 2, 0] }}
            transition={{
                duration: 5 + delay,
                repeat: Infinity,
                ease: "easeInOut"
            }}
        >
            <div className={styles.numberWrapper}>
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={formattedValue}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                        className={styles.number}
                    >
                        {formattedValue}
                    </motion.span>
                </AnimatePresence>
            </div>
            <span className={styles.label}>{label}</span>
        </motion.div>
    );
};

export default function LaunchCountdown() {
    const { days, hours, minutes, seconds, isLaunched } = useCountdown();

    if (isLaunched) return null;

    return (
        <div className={styles.countdownContainer}>
            <motion.p
                className={styles.headline}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
            >
                THE VAULT UNLOCKS IN...
            </motion.p>

            <div className={styles.timerGrid}>
                <TimeUnit value={days} label="DAYS" delay={0.2} />
                <div className={styles.divider}>|</div>
                <TimeUnit value={hours} label="HRS" delay={0.4} />
                <div className={styles.divider}>|</div>
                <TimeUnit value={minutes} label="MIN" delay={0.6} />
                <div className={styles.divider}>|</div>
                <TimeUnit value={seconds} label="SEC" delay={0.8} />
            </div>
        </div>
    );
}
