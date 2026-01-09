"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-zinc-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Contactez-moi
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300">
            N'hésitez pas à me contacter pour discuter de vos projets ou d'opportunités de collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold mb-6">Informations de Contact</h3>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a href="mailto:tahzima.i@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                  tahzima.i@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Téléphone</h4>
                <a href="tel:+212684324889" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                  +212 684 324 889
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Localisation</h4>
                <p className="text-gray-600 dark:text-gray-400">Safi, Maroc</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/20 rounded-full flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Linkedin size={24} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">LinkedIn</h4>
                <a href="https://www.linkedin.com/in/ilyass-tahzima/" className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 transition-colors">
                  Ilyass Tahzima
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                  placeholder="Comment puis-je vous aider ?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                Envoyer le message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
