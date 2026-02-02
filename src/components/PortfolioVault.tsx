"use client";
import { motion } from "framer-motion";
import styles from "./PortfolioVault.module.css";
import { vaultItems } from "@/data";
import React, { useRef } from "react";

export default function PortfolioVault() {
    const ref = useRef(null);

    return (
        <section id="vault" className={styles.vaultSection} ref={ref}>
            <div className={styles.vaultHeader}>
                <motion.h2
                    className={styles.vaultTitle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    The Vault
                </motion.h2>
                <motion.span
                    className={styles.vaultSubtitle}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Filmography
                </motion.span>
            </div>

            <div className={styles.grid}>
                {vaultItems.map((item, i) => (
                    <VaultCard key={item.id} item={item} index={i} />
                ))}
            </div>
        </section>
    );
}

function VaultCard({ item, index }: { item: any, index: number }) {
    const [imgError, setImgError] = React.useState(false);

    return (
        <motion.div
            className={`${styles.card} ${styles.floating}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: (index % 4) * 0.1
            }}
            whileHover={{
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 25 }
            }}
            style={{
                animationDelay: `${index * 0.2}s`
            }}
        >
            {/* Cinematic Scrim - Always visible at lower opacity for legibility */}
            <div className={styles.scrim} />

            {imgError ? (
                <div className={styles.fallback}>TEJZX</div>
            ) : (
                <img
                    src={item.imagePath}
                    alt={item.title}
                    className={styles.cardImage}
                    loading="lazy"
                    onError={() => setImgError(true)}
                />
            )}

            <motion.div
                className={styles.cardContent}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
                {/* Role Tag Reveal */}
                <div className={styles.roleTag}>
                    {item.role || "CREATIVE PRODUCTION"}
                </div>

                {/* Cinematic Project Title */}
                <h4 className={styles.projectTitle}>
                    {item.title}
                </h4>

                {/* Bottom Decorative Element */}
                <motion.div
                    className={styles.bottomBar}
                    initial={{ width: 0 }}
                    whileHover={{ width: "40px" }}
                    transition={{ duration: 0.4 }}
                />
            </motion.div>
        </motion.div>
    );
}
