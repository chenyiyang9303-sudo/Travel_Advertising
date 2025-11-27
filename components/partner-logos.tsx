"use client";

import { motion } from "framer-motion";

const partners = [
  "Marriott Bonvoy",
  "Atlantis Resorts",
  "Lake Como Tourism",
  "Bali Tourism Board",
  "Ctrip Destination Lab",
  "Club Med",
  "Santorini Experience",
  "Airbnb Luxe",
  "Expedia Group",
  "Banff National Park",
  "Visit Scotland",
  "Maldives Resorts",
  "Rosewood",
  "InterContinental Hotels",
  "Alila Resorts",
];

export function PartnerWall() {
  return (
    <section id="partners" className="w-full bg-app py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        <p className="text-sm font-semibold tracking-[0.4em] uppercase text-subtle">
          Trusted By
        </p>
        <h2 className="font-display text-3xl md:text-4xl">
          50+ Destination, Hotel & City Tourism Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="rounded-2xl border border-white/40 bg-white/70 px-4 py-6 text-sm font-semibold text-[#2b2b2b] shadow-[0_10px_40px_rgba(15,25,45,0.08)] uppercase tracking-[0.1em]"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
