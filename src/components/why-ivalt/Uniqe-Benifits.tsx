import React from 'react';
import { FadeInOnScroll } from '../ui/FadeInOnScroll';
import { Check } from 'lucide-react';

const Points = [
  'Scalable Growth in an Exponentially Faster AI Era',
  'Enhanced Compliance',
  'Unassailable Human Identity for Everything',
  'Consolidation of Fragmented Identity Solutions',
  'Stronger Privileged Access Step - Ups',
  'Cross Ecosystem Controls(partners, supply chain)',
];
export const UniqeBenifits = () => {
  return (
    <div className="p-4 sm:p-6 md:py-8 mt-6 sm:mt-8 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-primary">
        Unique Benefits
      </h1>
      <div className="space-y-4 sm:space-y-5 md:space-y-8 px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        {Points.map((point, index) => (
          <FadeInOnScroll
            delay={index * 2}
            key={index}
            className="flex items-center justify-start gap-4 mb-4 max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center bg-white rounded-full p-2 shadow-sm">
              <Check className="text-navy-primary w-6 h-6" width={24} height={24} />
            </div>
            <h1 className="md:text-2xl text-base text-primary text-left">{point}</h1>
          </FadeInOnScroll>
        ))}
      </div>
    </div>

    // </div>
  );
};
