"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function About() {
  const metrics = [
    { label: "Years of Care", value: "15+" },
    { label: "Lenmed Oncology Network Site", value: "Certified" },
    { label: "POPIA Compliant Secure Records", value: "100%" },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left: Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl mb-6">
              Expertise Rooted in <span className="text-blue-600">Empathy</span>
            </h2>
            
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                Dr. S. Ibrahim leads the oncology practice at Lenmed Hospital, Kimberley, combining deep clinical expertise with a steadfast commitment to patient-first care. Our practice is built on the philosophy that true healing requires both cutting-edge science and unwavering human support.
              </p>
              <p>
                We specialize in formulating data-driven, highly personalized treatment plans tailored to the unique genetic and clinical profiles of our patients. By leveraging advanced diagnostics and multidisciplinary collaboration, we ensure every decision is informed, precise, and aligned with your care goals.
              </p>
              
              <ul className="space-y-3 pt-4">
                {[
                  "Individualized Genomic Profiling",
                  "Integrative Supportive Care",
                  "Continuous Family & Patient Counseling"
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-slate-700">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Metrics & Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-12 lg:mt-0"
          >
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="aspect-[4/3] bg-slate-50 relative flex items-center justify-center p-12">
                <Image 
                  src="/lenlogo.png" 
                  alt="Lenmed Hospital Logo" 
                  width={300} 
                  height={100}
                  className="object-contain w-full max-w-[280px] h-auto drop-shadow-sm"
                />
              </div>
              
              {/* Metrics Callout Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 bg-white">
                {metrics.map((metric, index) => (
                  <div key={index} className="p-6 text-center">
                    <p className="text-2xl font-bold text-blue-600 mb-1">{metric.value}</p>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide leading-tight">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
