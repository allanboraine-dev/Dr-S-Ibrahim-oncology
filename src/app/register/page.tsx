"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, UserPlus, Loader2, CheckCircle2 } from "lucide-react";

export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API registration call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-24 transform-gpu overflow-hidden blur-3xl lg:mr-24 xl:mr-48 pointer-events-none">
        <div className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tl from-[#60a5fa] to-[#1e3a8a] opacity-20" />
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <Image 
            src="/lenlogo.png" 
            alt="Lenmed Hospital Logo" 
            width={180} 
            height={50}
            className="object-contain h-12 w-auto"
            priority
          />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-center text-3xl font-extrabold text-slate-900 tracking-tight"
        >
          New Patient Digital Intake
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-2 text-center text-sm text-slate-600 max-w-lg mx-auto"
        >
          Complete your registration securely. This ensures your first consultation with Dr. S. Ibrahim focuses entirely on your care, rather than paperwork.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl"
      >
        <div className="bg-white py-8 px-4 shadow-xl shadow-blue-900/5 sm:rounded-2xl sm:px-10 border border-slate-100">
          
          {isSuccess ? (
            <div className="text-center py-12">
              <motion.div 
                initial={{ scale: 0 }} 
                animate={{ scale: 1 }} 
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-6"
              >
                <CheckCircle2 className="h-10 w-10 text-blue-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Registration Complete</h3>
              <p className="text-slate-600 mb-8 max-w-sm mx-auto">
                Your medical profile has been securely created. Our coordination team will contact you shortly to schedule your first appointment.
              </p>
              <Link 
                href="/portal"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                Proceed to Patient Portal
              </Link>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleRegister}>
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                
                {/* Personal Info */}
                <div className="sm:col-span-2">
                  <h3 className="text-lg font-medium text-slate-900 border-b border-slate-200 pb-2 mb-4">Personal Information</h3>
                </div>

                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">First name</label>
                  <div className="mt-1">
                    <input type="text" id="firstName" required className="block w-full py-2.5 px-3 border border-slate-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">Last name</label>
                  <div className="mt-1">
                    <input type="text" id="lastName" required className="block w-full py-2.5 px-3 border border-slate-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <label htmlFor="idNumber" className="block text-sm font-medium text-slate-700">South African ID Number</label>
                  <div className="mt-1">
                    <input type="text" id="idNumber" required className="block w-full py-2.5 px-3 border border-slate-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Contact Number</label>
                  <div className="mt-1">
                    <input type="tel" id="phone" required className="block w-full py-2.5 px-3 border border-slate-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 sm:text-sm" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                  <div className="mt-1">
                    <input type="email" id="email" required className="block w-full py-2.5 px-3 border border-slate-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 sm:text-sm" />
                  </div>
                </div>

                {/* Medical Aid Info */}
                <div className="sm:col-span-2 mt-4">
                  <h3 className="text-lg font-medium text-slate-900 border-b border-slate-200 pb-2 mb-4">Medical Aid Details</h3>
                </div>

                <div>
                  <label htmlFor="medicalAid" className="block text-sm font-medium text-slate-700">Provider Name</label>
                  <div className="mt-1">
                    <input type="text" id="medicalAid" placeholder="e.g. Discovery Health" className="block w-full py-2.5 px-3 border border-slate-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <label htmlFor="medicalAidNumber" className="block text-sm font-medium text-slate-700">Membership Number</label>
                  <div className="mt-1">
                    <input type="text" id="medicalAidNumber" className="block w-full py-2.5 px-3 border border-slate-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 sm:text-sm" />
                  </div>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="referringDoctor" className="block text-sm font-medium text-slate-700">Referring Physician (Optional)</label>
                  <div className="mt-1">
                    <input type="text" id="referringDoctor" className="block w-full py-2.5 px-3 border border-slate-300 rounded-lg focus:ring-blue-600 focus:border-blue-600 sm:text-sm" />
                  </div>
                </div>

              </div>

              <div className="pt-4 flex items-center">
                <input id="consent" type="checkbox" required className="h-4 w-4 text-blue-600 focus:ring-blue-600 border-slate-300 rounded" />
                <label htmlFor="consent" className="ml-2 block text-sm text-slate-600">
                  I consent to the secure processing of my medical data in accordance with the POPI Act.
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" />
                      Encrypting & Submitting...
                    </>
                  ) : (
                    <>
                      <UserPlus className="-ml-1 mr-2 h-5 w-5 text-white" />
                      Submit Secure Registration
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

        </div>
      </motion.div>

      {/* Back Links */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 text-center flex justify-center gap-6"
      >
        <Link href="/portal" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-700 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Login
        </Link>
      </motion.div>
    </div>
  );
}
