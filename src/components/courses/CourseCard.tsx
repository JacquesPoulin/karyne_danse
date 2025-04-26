'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export interface Schedule {
  day: string;
  time: string;
  level: string;
}

export interface Course {
  id: string;
  title: string;
  image: string;
  ageGroup: string;
  schedules: Schedule[];
  detailsLink?: string;
}

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className='border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300'
    >
      <div className='h-48 relative'>
        <Image
          src={course.image}
          alt={`Cours de ${course.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className='object-cover'
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/images/placeholder-course.jpg';
          }}
        />
      </div>
      <div className='p-4'>
        <h3 className='text-xl font-semibold mb-2'>{course.title}</h3>
        <p className='text-gray-600 mb-4'>{course.ageGroup}</p>
        <div className='mb-4'>
          <p className='font-medium'>Horaires :</p>
          <ul className='text-sm text-gray-600'>
            {course.schedules.map((schedule, index) => (
              <li key={index}>
                {schedule.day} : {schedule.time} ({schedule.level})
              </li>
            ))}
          </ul>
        </div>
        {course.detailsLink ? (
          <Link 
            href={course.detailsLink}
            className='text-karyn-500 font-medium hover:text-karyn-600 transition-colors'
          >
            Détails →
          </Link>
        ) : (
          <button className='text-karyn-500 font-medium hover:text-karyn-600 transition-colors'>
            <Link
              href='/contact'
              >
              Réserver →
            </Link>
          </button>
        )}
      </div>
    </motion.div>
  );
}