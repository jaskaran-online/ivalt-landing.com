import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { ExecutiveCard } from './ExecutiveCard';
import { executives } from './data';

export function ExecutiveTeam() {
  return (
    <section className="py-20 bg-[#f8f8f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="text-center mb-14">
            <p className="text-teal-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Executive Team
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy-primary">
              Executive Leadership
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the executives leading iVALT&apos;s mission to establish provable human trust
              across digital ecosystems.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {executives.map((person, index) => (
            <ExecutiveCard key={person.name} person={person} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
