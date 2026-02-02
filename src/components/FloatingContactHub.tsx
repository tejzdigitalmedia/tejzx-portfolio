'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import styles from './FloatingContactHub.module.css';

export default function FloatingContactHub() {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const contactOptions = [
        {
            icon: Instagram,
            label: 'Instagram',
            href: 'https://www.instagram.com/tejzx_official?igsh=dnNyN3M0d2NxZW5p',
        },
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:Tejzdigitalmedia@gmail.com',
        },
    ];

    // Close popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={styles.container} ref={containerRef}>
            {/* Pop-up Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.popup}
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 25,
                        }}
                    >
                        {contactOptions.map((option, index) => {
                            const IconComponent = option.icon;
                            return (
                                <motion.a
                                    key={option.label}
                                    href={option.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.popupItem}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.3,
                                    }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <IconComponent size={20} strokeWidth={1.5} />
                                    <span>{option.label}</span>
                                </motion.a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Trigger Pill */}
            <motion.button
                className={styles.trigger}
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <MessageCircle size={18} strokeWidth={1.5} />
                <span>Contact Us</span>
            </motion.button>
        </div>
    );
}
