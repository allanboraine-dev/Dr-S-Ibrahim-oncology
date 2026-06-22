"use client";

import { motion } from "framer-motion";
import { Stethoscope, Activity, HeartHandshake } from "lucide-react";

const services = [
  {
    title: "Specialized Oncology Consultations",
    description:
      "Comprehensive evaluation, secondary opinions, and personalized treatment mapping.",
    icon: Stethoscope,
  },
  {
    title: "Advanced Chemotherapy & Infusion",
    description:
      "Comfort-first infusion therapies managed by dedicated oncology nursing staff.",
    icon: Activity,
  },
  {
    title: "Multidisciplinary Care Coordination",
    description:
      "Seamless collaboration with radiologists, surgeons, and pathology networks.",
    icon: HeartHandshake,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
              Specialized Services
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Comprehensive Cancer Care
            </p>
            <p className="mt-4 text-xl text-slate-500">
              Delivering evidence-based treatments with a focus on patient well-being and clinical excellence.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group bg-slate-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 border border-slate-100"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <service.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
