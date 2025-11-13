"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
import { Twitter, Instagram, Github, Linkedin } from "lucide-react";

function Footer() {
  const { user } = useUser();
  return (
    user && (
      <footer className="bg-gray-900 text-gray-300 pt-12 mt-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">DigitalStore</h3>
            <p className="text-gray-400 text-sm">
              The best place to buy and sell premium digital products. Fast,
              secure, and user-friendly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/help" className="hover:text-white transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-white transition">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-3">
              Get updates about new digital products, promotions, and more.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder=" Your email"
                className="flex-1 border border-gray-700 bg-gray-800 text-gray-300 px-4 py-2 rounded focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-4 py-2 rounded">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 pb-6">
          <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} DigitalStore. All rights
              reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="hover:text-white transition"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
  );
}

export default Footer;
