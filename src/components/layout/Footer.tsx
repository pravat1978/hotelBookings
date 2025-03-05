import React from "react";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps = {}) => {
  return (
    <footer
      className={cn(
        "w-full bg-gradient-to-r from-[#001233] to-[#023e8a] text-white py-12 px-4 md:px-6 lg:px-8",
        className,
      )}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serko</h3>
            <p className="text-slate-300 mb-4">
              Find your perfect stay with our curated selection of hotels
              worldwide. Best prices guaranteed and exclusive deals for our
              members.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Search Hotels
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Special Offers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Popular Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Travel Guides
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  123 Hotel Street, Cityville, Country, 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-slate-400" />
                <a
                  href="tel:+11234567890"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-slate-400" />
                <a
                  href="mailto:info@hotelfinder.com"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  info@hotelfinder.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Serko. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
