"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Settings, Terminal, BookOpen, GraduationCap, Languages } from "lucide-react";

const skillCategories = [
  {
    title: "Langages de programmation",
    icon: <Code size={24} />,
    skills: ["Java", "C#", "JavaScript", "PHP"]
  },
  {
    title: "Frameworks & Libs",
    icon: <Layout size={24} />,
    skills: ["Spring Boot", "Spring MVC", "Angular", "Swing", "ADO.NET"]
  },
  {
    title: "Bases de données",
    icon: <Database size={24} />,
    skills: ["PostgreSQL", "MySQL", "SQL Server"]
  },
  {
    title: "Blockchain & Design",
    icon: <Settings size={24} />,
    skills: ["Hyperledger Fabric", "UML", "Merise"]
  },
  {
    title: "Outils & DevOps",
    icon: <Terminal size={24} />,
    skills: ["Git/GitHub", "SonarQube", "Postman", "Swagger", "Trello"]
  },
  {
    title: "Langues",
    icon: <Languages size={24} />,
    skills: ["Arabe (Langue maternelle)", "Français (Courant)", "Anglais (Technique)"]
  }
];

const education = [
  {
    year: "2024",
    degree: "Diplôme d'Ingénieur d'État en Génie Logiciel et Développement Informatique",
    school: "ESTEM, Casablanca"
  },
  {
    year: "2022",
    degree: "Licence Professionnelle en Génie Logiciel",
    school: "ESTEM, Casablanca"
  },
  {
    year: "2019",
    degree: "Technicien Spécialisé en Développement Informatique",
    school: "Institut Spécialisé en Nouvelles Technologies de l'Information et de la Communication (OFPPT NTIC), Safi"
  },
  {
    year: "2015",
    degree: "Baccalauréat en Sciences Mathématiques B",
    school: "Lycée Charif Al Idrissi, Safi"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50/50 dark:bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Skills Section */}
        <div id="skills" className="mb-20 pt-20 -mt-20">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Compétences Techniques
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 dark:text-gray-300"
            >
              Un ensemble complet d'outils et de technologies pour le développement full-stack moderne.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center text-emerald-600 mb-4 border border-emerald-200 dark:border-emerald-800">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4"
            >
              Formations Académiques
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                 {/* Timeline Line (Desktop) */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 dark:bg-zinc-800 -translate-x-1/2" />
                
                <div className={`md:flex items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12" />
                  
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-gray-600 border-4 border-white dark:border-zinc-900 -translate-x-[5px] md:-translate-x-1/2 mt-1.5 md:mt-0 z-10" />

                  <div className="md:w-5/12 bg-white dark:bg-zinc-900 p-6 rounded-xl border border-gray-200 dark:border-zinc-800 shadow-sm">
                    <span className="inline-block px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 text-xs font-bold rounded-full mb-2">
                      {edu.year}
                    </span>
                    <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <GraduationCap size={16} className="mr-2" />
                      {edu.school}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
