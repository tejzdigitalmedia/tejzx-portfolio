"use client";

import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import styles from "./AboutContact.module.css";
import { aboutContent } from "@/data";
import React from "react";

export function About() {
    return (
        <section className={styles.aboutSection}>
            <div className={styles.container}>
                <motion.h2
                    className={styles.heading}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    The Origin
                </motion.h2>
                <motion.p
                    className={styles.text}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    {aboutContent.journey}
                </motion.p>

                <div className={styles.valuesGrid}>
                    {aboutContent.values.map((val, i) => (
                        <motion.div
                            key={i}
                            className={styles.valueItem}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {val}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function Contact() {
    return (
        <footer className={styles.footer}>
            <motion.h2
                className={styles.ctaHeading}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Let's Build the Next Blockbuster Campaign.
            </motion.h2>

            <div className={styles.links}>
                <a href="mailto:Tejzdigitalmedia@gmail.com" className={styles.link}>
                    <Mail size={20} strokeWidth={1.5} className={styles.icon} />
                    Email
                    <span className={styles.underline} />
                </a>
                <a
                    href="https://www.instagram.com/tejzx_official?igsh=dnNyN3M0d2NxZW5p"
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Instagram size={20} strokeWidth={1.5} className={styles.icon} />
                    Instagram
                    <span className={styles.underline} />
                </a>
            </div>
        </footer>
    );
}
