'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { contactData } from '../data';

export default function ContactFAQ() {
  const { faqs } = contactData;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='mt-16'>
      <motion.h2 
        className='text-2xl font-semibold mb-6 text-karyn-100'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Foire aux questions
      </motion.h2>
      
      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            className='border border-gray-300 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left p-4 flex justify-between items-center focus:outline-none ${
                openIndex === index ? 'bg-karyn-100' : 'bg-karyn-50'
              }`}
            >
              <h3 className='text-lg font-medium text-karyn-950'>{faq.question}</h3>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown className={`transition-colors ${
                  openIndex === index ? 'text-karyn-600' : 'text-gray-500'
                }`} />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto', 
                    opacity: 1,
                    transition: { duration: 0.3 }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: { duration: 0.2 }
                  }}
                  className='overflow-hidden bg-gray-50 border-t border-gray-200'
                >
                  <div className='p-4'>
                    <motion.p 
                      className='text-karyn-950'
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                    >
                      {faq.answer}
                    </motion.p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}