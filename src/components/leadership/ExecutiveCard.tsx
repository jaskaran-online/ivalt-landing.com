import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { Initials } from './Initials';
import { Executive } from './data';

export function ExecutiveCard({ person, index }: { person: Executive; index: number }) {
  return (
    <FadeInOnScroll delay={index * 0.08}>
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
        {/* Photo */}
        <div className="relative w-full aspect-square overflow-hidden bg-gray-100">
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

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-navy-primary leading-tight">{person.name}</h3>
          <p className="text-teal-primary font-semibold text-sm mt-1 mb-3">{person.title}</p>
          <p className="text-gray-600 text-sm leading-relaxed flex-1">{person.bio}</p>

          <a
            href={person.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-navy-primary hover:text-teal-primary transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn Profile
          </a>
        </div>
      </div>
    </FadeInOnScroll>
  );
}
