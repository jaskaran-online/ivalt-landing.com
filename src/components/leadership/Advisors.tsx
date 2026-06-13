import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { AdvisorCard } from './AdvisorCard';
import { advisors } from './data';

export function Advisors() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <p className="text-teal-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Strategic Advisors
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-primary">
              Strategic Advisors
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Industry leaders and advisors guiding iVALT&apos;s vision across cybersecurity,
              enterprise identity, and digital transformation.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map((person, index) => (
            <AdvisorCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
