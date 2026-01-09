"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, FileText, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden relative bg-gradient-to-b from-transparent to-emerald-50/50 dark:to-emerald-900/10"
    >
      {/* Background decoration */}
      <div className="absolute top-20 right-0 -z-10 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 left-0 -z-10 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
      
      {/* Mesh grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
                Créons le futur <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 animate-gradient">
                  Ensemble
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                Je suis <strong>Ilyass Tahzima</strong>, un ingénieur logiciel passionné par la conception de solutions web innovantes.
                Spécialisé en <strong>Spring Boot</strong> et <strong>Angular</strong>, je transforme des idées complexes en applications performantes.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Link
                  href="#projects"
                  className="px-8 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center gap-2"
                >
                  Voir mes Projets <ArrowRight size={18} />
                </Link>
                <a
                  href="/Ilyass tahzima PDF 2025.pdf"
                  download
                  className="px-8 py-3 glass text-gray-800 dark:text-white rounded-full font-medium hover:bg-white/10 transition-all flex items-center gap-2 border border-gray-200 dark:border-gray-700"
                >
                  Télécharger CV <Download size={18} />
                </a>
              </div>

              <div className="mt-12 flex items-center gap-6 justify-center md:justify-start text-gray-500 dark:text-gray-400">
                <a href="https://www.linkedin.com/in/ilyass-tahzima/" className="hover:text-emerald-600 transition-colors" title="LinkedIn">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/tahzima" className="hover:text-emerald-600 transition-colors" title="GitHub">
                  <Github size={24} />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 relative flex justify-center"
          >
            {/* Image Placeholder - User can replace with their actual photo */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl">
               <Image 
                 src="/profile.JPG" 
                 alt="Ilyass Tahzima" 
                 fill 
                 className="object-cover" 
                 priority
               />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
