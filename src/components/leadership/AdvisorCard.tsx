import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { Initials } from './Initials';
import { Advisor } from './data';

export function AdvisorCard({ person, index }: { person: Advisor; index: number }) {
  return (
    <FadeInOnScroll delay={index * 0.08}>
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
        {/* Avatar + name */}
        <div className="p-5 pb-0 flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden shrink-0 border-2 border-teal-primary/20">
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
            <h3 className="text-base font-bold text-navy-primary leading-tight">{person.name}</h3>
            <p className="text-xs text-teal-primary font-medium mt-0.5">Strategic Advisor</p>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
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
