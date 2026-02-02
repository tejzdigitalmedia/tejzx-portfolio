"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import styles from "./Hero.module.css";
import React from "react";
import LaunchCountdown from "./LaunchCountdown";
import { useCountdown } from "@/hooks/useCountdown";

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const rotate = useTransform(scrollY, [0, 1000], [0, 45]);

    const { isLaunched } = useCountdown();

    return (
        <section className={styles.heroSection}>


            {/* Hero Content */}
            <motion.div
                className={styles.contentWrapper}
                style={{ y: y2 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
                <motion.h1
                    className={styles.headline}
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    TEJZX
                </motion.h1>

                <motion.div
                    className={styles.subheadline}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Film • Digital • Creative Agency
                </motion.div>

                <AnimatePresence mode="wait">
                    {!isLaunched ? (
                        <motion.div
                            key="countdown"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8 }}
                        >
                            <LaunchCountdown />
                        </motion.div>
                    ) : (
                        <motion.button
                            key="cta"
                            className={styles.ctaButton}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(249, 115, 22, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                document.getElementById('vault')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Explore the Vault
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Founder Credit */}
            <motion.div
                className={styles.founderCredit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                Founder & CEO: Kodam Sai Vishwa Teja
            </motion.div>
        </section>
    );
}
