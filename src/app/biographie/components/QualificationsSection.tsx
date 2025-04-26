'use client';

import { motion } from 'framer-motion';

interface Certification {
  name: string;
}

interface Experience {
  year: string;
  title: string;
  place: string;
}

export default function QualificationsSection() {
  const certifications: Certification[] = [
    { name: "Diplôme d'État de professeur de danse (2010)" },
    { name: "Formation au Conservatoire National de Paris (2005-2008)" },
    { name: "Certification d'enseignement en danse contemporaine (2012)" },
    { name: "Formation de jury pour compétitions nationales (2015)" }
  ];

  const experiences: Experience[] = [
    {
      year: "2015-2023",
      title: "Fondatrice & Directrice",
      place: "Studio Karyn' Danse"
    },
    {
      year: "2010-2015",
      title: "Danseuse & Chorégraphe",
      place: "Compagnie Mouvements Urbains"
    },
    {
      year: "2008-2010",
      title: "Assistante pédagogique",
      place: "École Nationale de Danse"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-gray-700/50"
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
        <span className="block w-12 h-1 bg-purple-500 mr-4"></span>
        Formations & Qualifications
      </h2>

      <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
        {/* Qualifications */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-4">
            Diplômes & Certifications
          </h3>
          <ul className="space-y-3">
            {certifications.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-purple-500 mr-2">✦</span>
                <span className="text-gray-300">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Expériences */}
        <div>
          <h3 className="text-lg font-semibold text-purple-300 mb-4">
            Expériences professionnelles
          </h3>
          <ul className="space-y-4">
            {experiences.map((item, index) => (
              <li
                key={index}
                className="relative pl-6 border-l border-purple-600"
              >
                <span className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-purple-600"></span>
                <span className="text-sm text-purple-400">{item.year}</span>
                <p className="text-white font-medium">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.place}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}