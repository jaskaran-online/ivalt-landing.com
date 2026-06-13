import Link from 'next/link';
import Image from 'next/image';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { executives } from './data';

export function Hero() {
  const featuredExecutives = executives.filter(e => e.image !== null).slice(0, 3);

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-1 lg:order-1">
            <FadeInOnScroll>
              <p className="text-teal-primary font-semibold text-sm uppercase tracking-widest mb-4">
                Leadership
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-primary leading-tight max-w-3xl">
                Leadership Driving the Future of{' '}
                <span className="text-teal-primary">Human Trust</span>
              </h1>
              <p className="mt-6 text-lg text-gray-700 max-w-2xl leading-relaxed">
                iVALT&apos;s leadership team combines deep expertise in cybersecurity, identity
                verification, enterprise infrastructure, compliance, and digital trust innovation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center px-6 py-3 bg-teal-primary text-white font-semibold rounded-xl hover:bg-navy-primary transition-colors duration-200"
                >
                  Meet the Team
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-navy-primary text-navy-primary font-semibold rounded-xl hover:bg-navy-primary hover:text-white transition-colors duration-200"
                >
                  Contact Leadership
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
          <div className="order-2 lg:order-2 relative min-h-[300px] lg:min-h-0">
            <Image
              src="/world-map.svg"
              alt=""
              width={2100}
              height={1312}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-auto opacity-60 scale-120"
              aria-hidden="true"
            />

            {/* Floating Person Cards */}
            <div className="absolute top-12 md:top-20 left-4 md:left-10 animate-float" style={{ animationDelay: '0s' }}>
              <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
                <div className="size-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={featuredExecutives[0].image}
                    alt={featuredExecutives[0].name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-primary">{featuredExecutives[0].name.split(',')[0]}</p>
                  <p className="text-xs text-gray-600">{featuredExecutives[0].title}</p>
                </div>
              </div>
            </div>

            <div className="absolute top-36 md:top-40 right-4 md:right-20 animate-float" style={{ animationDelay: '1s' }}>
              <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
                <div className="size-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={featuredExecutives[1].image}
                    alt={featuredExecutives[1].name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-primary">{featuredExecutives[1].name}</p>
                  <p className="text-xs text-gray-600">{featuredExecutives[1].title}</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-16 md:bottom-32 left-1/4 animate-float max-md:hidden" style={{ animationDelay: '2s' }}>
              <div className="bg-white rounded-xl shadow-lg p-3 flex items-center gap-3">
                <div className="size-12 rounded-full overflow-hidden bg-gray-100">
                  <Image
                    src={featuredExecutives[2].image}
                    alt={featuredExecutives[2].name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-navy-primary">{featuredExecutives[2].name}</p>
                  <p className="text-xs text-gray-600">{featuredExecutives[2].title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
