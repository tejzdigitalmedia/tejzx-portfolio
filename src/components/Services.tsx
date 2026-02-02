"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";
import { services } from "@/data";
import { Clapperboard, MonitorPlay, Palette } from "lucide-react";
import React from "react";

const icons = {
    film: Clapperboard,
    digital: MonitorPlay,
    creative: Palette,
};

export default function Services() {
    return (
        <section className={styles.servicesSection}>
            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Our Expertise
            </motion.h2>

            <div className={styles.bentoGrid}>
                {services.map((service, i) => {
                    // Explicitly type the key to match keys of icons object
                    const iconKey = service.id as keyof typeof icons;
                    const IconComponent = icons[iconKey];

                    return (
                        <motion.div
                            key={service.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, type: "spring", stiffness: 40 }}
                            animate={{ y: [0, -10, 0] }} // Gentle drift
                            // @ts-ignore - framer motion types drift
                            transition={{
                                y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" }
                            }}
                            whileHover={{ y: -20, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
                        >
                            <div className={styles.iconWrapper}>
                                {IconComponent && <IconComponent size={32} />}
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDesc}>{service.description}</p>

                            <ul className={styles.servicesList}>
                                {service.items.map((item, idx) => (
                                    <li key={idx} className={styles.serviceItem}>
                                        <span className={styles.bullet} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
