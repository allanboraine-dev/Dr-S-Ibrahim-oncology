"use client";

import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 pt-16 sm:pt-24 lg:pt-32 pb-16">
      {/* Background Decorative Elements */}
      <div className="absolute inset-y-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48">
        <div className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#60a5fa] to-[#1e3a8a] opacity-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:max-w-2xl lg:col-span-6 lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
              <Activity className="h-4 w-4" />
              Lenmed Hospital, Kimberley
            </div>
            
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6">
              Precision Oncology. <br className="hidden md:block" />
              <span className="text-blue-700">Compassionate Patient Journeys.</span>
            </h1>
            
            <p className="mt-4 text-lg text-slate-600 sm:mt-5 sm:text-xl max-w-xl">
              Providing world-class, specialized cancer care locally at Lenmed Hospital, Kimberley. We stand by you through every step of diagnosis, treatment, and recovery.
            </p>
            
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="#services" className="w-full sm:w-auto block">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 cursor-pointer"
                >
                  Explore Our Care Services
                </motion.div>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Image/Geometric Area */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 relative"
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-2xl bg-white shadow-2xl p-2 sm:p-4 ring-1 ring-slate-200">
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative bg-slate-100 flex items-center justify-center">
                  
                  <Image 
                    src="/hero-image.png" 
                    alt="Oncology Ward and Caring Staff" 
                    fill 
                    className="object-cover"
                    priority
                  />
                  
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl ring-1 ring-slate-100 flex items-center gap-4"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-slate-200 ring-2 ring-white border border-slate-300" />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">500+</p>
                  <p className="text-xs text-slate-500">Patients Cared For</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
