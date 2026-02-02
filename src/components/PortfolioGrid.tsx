"use client";

import { motion, Variants } from "framer-motion";
import styles from "./PortfolioGrid.module.css";
import React from "react";

const films = [
    { id: 1, title: "The Raja Saad", role: "Digital Strategy", span: "span2" },
    { id: 2, title: "Janaka Ithe Ganaka", role: "Film Marketing", span: "" },
    { id: 3, title: "Azadi", role: "Promotions", span: "" },
    { id: 4, title: "Cinema Chronicle", role: "Brand Journey", span: "span2" },
    { id: 5, title: "Mystery Project X", role: "Teaser Campaign", span: "" },
    { id: 6, title: "Velvet Nights", role: "Creative Direction", span: "" },
    { id: 7, title: "Urban Hustle", role: "Ad Shoot", span: "" },
    { id: 8, title: "Neon Dreams", role: "Motion Graphics", span: "" },
];

const springTransition = {
    type: "spring",
    stiffness: 40,
    damping: 20,
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            ...springTransition
        }
    })
};

export default function PortfolioGrid() {
    return (
        <section className={styles.gridSection}>
            <motion.h2
                className={styles.sectionTitle}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Selected Filmography
            </motion.h2>

            <div className={styles.gridLayout}>
                {films.map((film, i) => (
                    <motion.div
                        key={film.id}
                        className={`${styles.card} ${film.span === "span2" ? styles.span2 : ""}`}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={cardVariants}
                        whileHover={{
                            y: -15,
                            boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)"
                        }}
                    >
                        <div className={styles.cardImagePlaceholder} />
                        <div className={styles.cardOverlay}>
                            <span className={styles.roleTag}>{film.role}</span>
                            <h3 className={styles.projectTitle}>{film.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
