"use client";

import { motion, Variants } from "framer-motion";
import styles from "./BentoGrid.module.css";
import React from "react";

// Mock Data
const projects = [
    {
        id: 1,
        title: "Neon Horizon",
        category: "Film Direction",
        span: "cardSpan2",
    },
    {
        id: 2,
        title: "Apex Strategy",
        category: "Digital Campaign",
        span: "",
    },
    {
        id: 3,
        title: "Void Walker",
        category: "Editing",
        span: "",
    },
    {
        id: 4,
        title: "Lumina",
        category: "Brand Identity",
        span: "cardSpan2",
    },
];

const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
};

export default function BentoGrid() {
    return (
        <div className={styles.gridContainer}>
            {projects.map((project) => (
                <motion.div
                    key={project.id}
                    className={`${styles.card} ${project.span ? styles[project.span] : ""}`}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                    whileHover={{
                        y: -10,
                        boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.3)"
                    }}
                >
                    <div className={styles.cardGlow} /> {/* Simplified Glow, ideally needs mouse tracking code */}
                    <div className={styles.cardContent}>
                        <p className={styles.cardCategory}>{project.category}</p>
                        <h3 className={styles.cardTitle}>{project.title}</h3>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
