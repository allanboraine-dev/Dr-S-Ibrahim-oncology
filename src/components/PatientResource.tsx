"use client";

import { motion } from "framer-motion";
import { Laptop, FileUp, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export function PatientResource() {
  const features = [
    {
      icon: Laptop,
      title: "Digital Registration",
      desc: "Complete intake forms from home.",
    },
    {
      icon: FileUp,
      title: "Secure Uploads",
      desc: "Share past scans and records safely.",
    },
    {
      icon: MessageSquare,
      title: "Direct Messaging",
      desc: "Reach our clinical team securely.",
    },
  ];

  return (
    <section id="patients" className="bg-slate-900 text-white py-20 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full mix-blend-screen filter blur-[80px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex lg:items-center lg:justify-between">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4">
              Streamlining Your Care with <span className="text-blue-400">Modern Technology.</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Skip the waiting room paperwork. Track your appointment status, securely upload clinical files, and communicate with our care team in real time through our secure digital portal.
            </p>
            
            <Link href="/portal" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 cursor-pointer"
              >
                Access Patient Portal
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 lg:mt-0 lg:w-5/12 grid gap-6"
          >
            {features.map((item, idx) => (
              <div key={idx} className="flex items-start bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 backdrop-blur-sm">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-blue-900/50 text-blue-400 border border-blue-800/50">
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
