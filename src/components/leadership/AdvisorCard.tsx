'use client';

import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { motion } from 'motion/react';
import { Initials } from './Initials';
import { Advisor } from './data';

export function AdvisorCard({ person, index }: { person: Advisor; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col h-full"
    >
      <div className="p-5 pb-0 flex items-center gap-4">
        <div className="relative size-16 rounded-full overflow-hidden shrink-0 border-2 border-teal-primary/20">
          {person.image ? (
            <Image
              src={person.image}
              alt={person.name}
              fill
              className="object-cover object-center"
            />
          ) : (
            <Initials name={person.name} />
          )}
        </div>
        <div>
          <h3 className="text-base font-bold text-navy-primary leading-tight text-balance">
            {person.name}
          </h3>
          <p className="text-xs text-teal-primary font-medium mt-0.5">Strategic Advisor</p>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-gray-600 text-sm leading-relaxed flex-1 text-pretty">{person.bio}</p>

        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-primary hover:text-teal-primary transition-colors duration-200"
        >
          <Linkedin className="size-4" aria-hidden="true" />
          LinkedIn Profile
        </a>
      </div>
    </motion.div>
  );
}
