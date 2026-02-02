'use client';

import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import FounderSpotlight from "@/components/FounderSpotlight";
import Services from "@/components/Services";
import PortfolioVault from "@/components/PortfolioVault";
import { About, Contact } from "@/components/AboutContact";
import FloatingContactHub from "@/components/FloatingContactHub";
import { useCountdown } from "@/hooks/useCountdown";

export default function Home() {
  // Cinema-Grade Countdown Timer
  const { days, hours, minutes, seconds, isLaunched } = useCountdown();

  return (
    <main>
      <Hero />
      <FounderSpotlight />

      <AnimatePresence>
        {isLaunched && (
          <motion.div
            key="gated-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <Services />
            <PortfolioVault />
            <About />
            <Contact />
            <FloatingContactHub />
            <footer style={{
              padding: '6rem 2rem',
              textAlign: 'center',
              color: 'var(--text-secondary)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              borderTop: '1px solid rgba(255,255,255,0.05)',
              opacity: 0.5
            }}>
              © 2026 TEJZX • Crafting Visual Gravity
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
