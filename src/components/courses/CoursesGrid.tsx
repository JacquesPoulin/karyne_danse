import React from 'react';
import CourseCard, { Course } from './CourseCard';

interface CoursesGridProps {
  courses: Course[];
}

export default function CoursesGrid({ courses }: CoursesGridProps) {
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}