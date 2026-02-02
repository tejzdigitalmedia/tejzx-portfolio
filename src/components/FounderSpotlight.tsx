"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./FounderSpotlight.module.css";
import React, { useRef, useState } from "react";
import Image from "next/image";

export default function FounderSpotlight() {
    const ref = useRef(null);
    const [imgError, setImgError] = useState(false);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const yImage = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yText = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section className={styles.section} ref={ref}>
            <div className={styles.container}>
                {/* Left Column: Image */}
                <motion.div
                    className={styles.imageColumn}
                    style={{ y: yImage }}
                >
                    <div className={styles.glow} />
                    <motion.div
                        className={styles.glassCard}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {imgError ? (
                            <div className={styles.monogram}>TEJZX</div>
                        ) : (
                            <Image
                                src="/images/founder.jpg.jpeg"
                                alt="Kodam Sai Vishwa Teja"
                                fill
                                priority
                                className={styles.founderImage}
                                onError={() => setImgError(true)}
                                style={{ objectFit: 'cover' }}
                            />
                        )}
                    </motion.div>
                </motion.div>

                {/* Right Column: Content */}
                <motion.div
                    className={styles.contentColumn}
                    style={{ y: yText }}
                >
                    <motion.span
                        className={styles.sectionLabel}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        The Visionary
                    </motion.span>

                    <motion.h3
                        className={styles.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Kodam Sai Vishwa Teja
                    </motion.h3>

                    <motion.h4
                        className={styles.roleTitle}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Founder & CEO
                    </motion.h4>

                    <motion.p
                        className={styles.bio}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Bridging the gap between cinematic storytelling and digital dominance. Leading the TejzX hybrid agency to redefine film marketing.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
