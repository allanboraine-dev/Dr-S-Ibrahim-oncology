import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & Intro */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight text-slate-900 block">
                DR. S. IBRAHIM
              </span>
              <span className="text-xs font-semibold tracking-widest text-blue-600 block">
                ONCOLOGY CARE
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Providing empathetic, precision-driven oncology care locally. We partner with our patients to ensure a journey marked by dignity, clarity, and cutting-edge medical support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 lg:col-span-4 lg:justify-self-center">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#services" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                  About Dr. Ibrahim
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                  POPIA Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-slate-500 hover:text-blue-600 transition-colors">
                  Terms of Access
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 lg:col-span-4">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Contact Details</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-500 leading-relaxed">
                  Oncology Suite, Lenmed Hospital,<br />
                  Kimberley, Northern Cape, 8301
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-sm text-slate-500">+27 (0) 53 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                <span className="text-sm text-slate-500">reception@ibrahimoncology.co.za</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © 2026 Boraine Tech. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-400">
            <span className="hover:text-slate-600 cursor-pointer transition-colors">Designed for Modern Medical Practices</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
