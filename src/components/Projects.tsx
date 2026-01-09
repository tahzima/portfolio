"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "Omnishore, Casablanca",
    role: "Développeur Web Java/Angular",
    period: "Février 2024 - Mai 2024",
    project: "TransactSecure",
    description: "Participation au développement d'une plateforme web décentralisée basée sur la blockchain pour sécuriser et optimiser les transactions inter-organisationnelles. Contribution à l'amélioration de l'intégrité des données et de la transparence.",
    features: [
      "Sécurité blockchain",
      "Traçabilité des actifs",
      "Réduction des fraudes",
      "Interface intuitive"
    ],
    tags: ["Spring Boot", "Angular", "Hyperledger Fabric", "PostgreSQL"]
  },
  {
    company: "Agora Technology, Casablanca",
    role: "Développeur Web",
    period: "Février 2023 - Mai 2023",
    project: "CRM Sur Mesure",
    description: "Participation au développement d'un système CRM sur mesure. Conception et implémentation des fonctionnalités back-end assurant la gestion et le traitement des données clients.",
    features: [
      "Gestion base clients",
      "Suivi des interactions",
      "Pipeline de vente",
      "Reporting commercial"
    ],
    tags: ["PHP", "CRM", "Web Development"]
  },
  {
    company: "Marsa Maroc, Safi",
    role: "Développeur Web Java/Angular",
    period: "Mars 2022 - Mai 2022",
    project: "TechTrack",
    description: "Développement d'une application web de gestion des pannes matérielles et de suivi des stocks. Mise en place de fonctionnalités de traitement des incidents en temps réel.",
    features: [
      "Gestion des pannes",
      "Suivi temps réel",
      "Gestion des stocks",
      "Tableau de bord analytique"
    ],
    tags: ["Spring Boot", "Angular", "MySQL", "Swagger"]
  },
  {
    company: "Capgemini Technology Services, Casablanca",
    role: "Développeur Web Java/Angular",
    period: "Septembre 2021 - Octobre 2021",
    project: "EcoCapChecker",
    description: "Conception et développement d'un outil d'évaluation de l'empreinte écologique des sites web. Participation au développement full-stack de l'application.",
    features: [
      "Analyse écologique",
      "Classement des sites",
      "Métriques détaillées",
      "Rapports automatisés"
    ],
    tags: ["Spring Boot", "Angular", "Green IT", "Rest API"]
  },
  {
    company: "Société SoftWare, Marrakech",
    role: "Développeur Java",
    period: "Février 2020 - Juin 2020",
    project: "AutoSchool Manager",
    description: "Conception et développement d'une application de bureau pour la gestion d'une auto-école (planning, inscriptions, facturation). Implémentation de la logique métier.",
    features: [
      "Gestion des élèves",
      "Planification des cours",
      "Suivi des progrès",
      "Facturation intégrée"
    ],
    tags: ["Java", "Swing", "SQL Server", "Desktop App"]
  },
  {
    company: "ONCF, Safi",
    role: "Développeur ADO.NET",
    period: "Février 2019 - Mars 2019",
    project: "Depot Manager",
    description: "Développement d'une application de bureau pour la gestion du dépôt, des commandes et du traitement des demandes de maintenance.",
    features: [
      "Gestion de stock",
      "Suivi des commandes",
      "Maintenance préventive",
      "Historique mouvements"
    ],
    tags: ["ADO.NET", "SQL Server", "Desktop App"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Expériences Professionnelles
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-300">
            Un parcours riche en projets techniques variés, allant du développement web full-stack aux applications desktop et blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-1"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-emerald-600 transition-colors">
                      {exp.project}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                      <Briefcase size={14} className="mr-1" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="text-xs font-medium px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 rounded text-emerald-600 dark:text-emerald-400 whitespace-nowrap border border-emerald-100 dark:border-emerald-800">
                    {exp.period}
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
                  {exp.description}
                </p>

                {exp.features && (
                  <div className="mb-6 space-y-2">
                    {exp.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CheckCircle2 size={14} className="text-emerald-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-gray-600 text-xs rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
