import type { Metadata } from 'next';
import DynamicWorkshops from '@/components/workshops/DynamicWorkshops';
import CoursesGrid from '@/components/courses/CoursesGrid';
import { regularCourses } from '@/data/courses';

export const metadata: Metadata = {
    title: "Cours & Workshops - Karyn' Danse",
    description: 'Découvrez mes cours de Hip Hop, Ragga, DanceHall et workshops',
};

export default function CoursWorkshops() {
    return (
        <div className='container mx-auto px-4 py-12'>
            <h1 className='text-3xl md:text-4xl font-bold mb-8'>Cours & Workshops</h1>

            {/* Section Cours réguliers avec le nouveau composant */}
            <section className='mb-12'>
                <h2 className='text-2xl font-semibold mb-6'>Cours réguliers</h2>
                <CoursesGrid courses={regularCourses} />
            </section>

            {/* Section Workshops DYNAMIQUE - INCHANGÉE */}
            <section>
                <h2 className='text-2xl font-semibold mb-6'>Workshops & Stages</h2>
                
                {/* Remplacement du contenu statique par le composant dynamique */}
                <DynamicWorkshops />
            </section>
        </div>
    );
}
