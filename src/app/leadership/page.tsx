import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { Linkedin } from 'lucide-react';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';

import Baldev from '@/assets/images/leadership/baldev.png';
import Brian from '@/assets/images/leadership/brian.png';
import Marc from '@/assets/images/leadership/marc.jpg';
import Matt from '@/assets/images/leadership/matt.png';
import Gary from '@/assets/images/leadership/gary.png';
import Skip from '@/assets/images/leadership/skip.png';
import Chuck from '@/assets/images/leadership/chuck.png';
import Leroy from '@/assets/images/leadership/leroy.png';
import Roger from '@/assets/images/leadership/roger.png';
import Philip from '@/assets/images/leadership/philip.png';
import John from '@/assets/images/leadership/john.png';

export const metadata: Metadata = {
  title: 'Leadership | iVALT',
  description:
    "Meet iVALT's leadership team — executives and strategic advisors driving the future of human trust across cybersecurity, identity verification, and digital transformation.",
  alternates: {
    canonical: '/leadership',
  },
};

type Executive = {
  name: string;
  title: string;
  bio: string;
  linkedin: string;
  image: StaticImageData | null;
};

type Advisor = {
  name: string;
  bio: string;
  linkedin: string;
  image: StaticImageData | null;
};

const executives: Executive[] = [
  {
    name: 'Baldev Krishan, Ph.D.',
    title: 'Founder & CEO',
    bio: "Silicon Valley veteran with 30+ years building technology companies across telecom, security, and wireless. Holds 20 patents and pioneered iVALT's mobile-centric, multi-factor authentication platform.",
    linkedin: 'https://www.linkedin.com/in/baldev-krishan-1ab14b9',
    image: Baldev,
  },
  {
    name: 'Brian Stout',
    title: 'Co-Founder & Chief Product Officer',
    bio: 'Product leader with a proven track record of building innovative solutions and scaling startups. At iVALT, Brian drives product strategy and execution to deliver technical excellence and market relevance.',
    linkedin: 'https://www.linkedin.com/in/bstoutco',
    image: Brian,
  },
  {
    name: 'Marc J. Ricker',
    title: 'EVP, Business Development & Strategy',
    bio: '25+ years across manufacturing, media, technology, and startups. Leads business development and strategic initiatives at iVALT, focusing on market expansion, partnerships, and accelerated growth.',
    linkedin: 'https://www.linkedin.com/in/marc-ricker-121b61128',
    image: Marc,
  },
  {
    name: 'Matt Salerno',
    title: 'Chief Technology Officer',
    bio: 'Engineering leader known for building scalable systems and resilient technology organizations. Expertise spans cloud infrastructure, SaaS architecture, DevOps, and engineering strategy.',
    linkedin: 'https://www.linkedin.com/in/matt-salerno',
    image: Matt,
  },
  {
    name: 'Gary Potts',
    title: 'Chief Financial Officer',
    bio: 'Experienced CFO and trusted advisor to CEOs and investors. Deep expertise in financial planning, operational optimization, and scaling businesses. Previously CFO at Service Champions and Satmetrix.',
    linkedin: 'https://www.linkedin.com/in/gary-potts-cfo',
    image: Gary,
  },
  {
    name: 'Ashish Goel',
    title: 'GM, Offshore Team',
    bio: "Leads iVALT's offshore operations, driving execution, delivery, and team performance. Key role in scaling development capabilities and ensuring alignment between global teams.",
    linkedin: 'https://www.linkedin.com/in/ashish-goel-23287336',
    image: null,
  },
];

const advisors: Advisor[] = [
  {
    name: 'Skip Sanzeri',
    bio: 'Seasoned entrepreneur with 6 exits over 35 years. Founder of QuSecure, a leading post-quantum cybersecurity company. Author of The Quantum Design Sprint and former Forbes Technology Council member.',
    linkedin: 'https://www.linkedin.com/in/skipsanzeri',
    image: Skip,
  },
  {
    name: 'Chuck Mackey',
    bio: 'Cybersecurity expert specializing in governance, risk, and compliance. As a CISO advisor, leads enterprise initiatives that strengthen cybersecurity posture and translate complex security challenges into actionable strategies.',
    linkedin: 'https://www.linkedin.com/in/charlesmackey1',
    image: Chuck,
  },
  {
    name: 'Leroy Williams',
    bio: 'Forward-thinking executive with C-level experience at Faction Networks, Samsung Electronics, and Verizon. Specializes in go-to-market strategy, customer acquisition, and operational excellence.',
    linkedin: 'https://www.linkedin.com/in/leroy-williams-jr',
    image: Leroy,
  },
  {
    name: 'Roger Grimes',
    bio: 'Globally recognized cybersecurity expert with nearly four decades of experience. Author of 16 books and 1,500+ articles. Dedicated to improving global cybersecurity through data-driven, scientific approaches.',
    linkedin: 'https://www.linkedin.com/in/rogeragrimes',
    image: Roger,
  },
  {
    name: 'Philip Niedermair',
    bio: 'Global strategy leader with 35+ years across 40+ countries in corporate development and cybersecurity. Serves on the US Cyberspace Solarium Commission 2.0 and chairs the TAC Technology Advancement Centre.',
    linkedin: 'https://www.linkedin.com/in/philipniedermair',
    image: Philip,
  },
  {
    name: 'John Warcaba',
    bio: 'Seasoned entrepreneur and founder of Park Place Technologies and CloudWave, both led to successful private equity exits. 25+ years in IT Lifecycle Management, Data Center Management, and Managed Cloud Services.',
    linkedin: 'https://www.linkedin.com/in/john-warcaba-2093693b',
    image: John,
  },
];

function Initials({ name }: { name: string }) {
  const parts = name.replace(/,.*/, '').trim().split(' ');
  const initials =
    parts.length >= 2 ? `${parts[0][0]}${parts[parts.length - 1][0]}` : parts[0][0];
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-primary to-teal-primary">
      <span className="text-white text-3xl font-bold tracking-wide">{initials.toUpperCase()}</span>
    </div>
  );
}

function ExecutiveCard({ person, index }: { person: Executive; index: number }) {
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

function AdvisorCard({ person, index }: { person: Advisor; index: number }) {
  return (
    <FadeInOnScroll delay={index * 0.08}>
      <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
        {/* Avatar + name */}
        <div className="p-5 pb-0 flex items-center gap-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-teal-primary/20">
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

export default function LeadershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-dark-navy via-navy-primary to-teal-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-primary blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-navy-primary blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <FadeInOnScroll>
            <p className="text-teal-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Leadership
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
              Leadership Driving the Future of{' '}
              <span className="text-teal-primary">Human Trust</span>
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-2xl leading-relaxed">
              iVALT&apos;s leadership team combines deep expertise in cybersecurity, identity
              verification, enterprise infrastructure, compliance, and digital trust innovation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-white text-navy-primary font-semibold rounded-xl hover:bg-teal-primary hover:text-white transition-colors duration-200"
              >
                Meet the Team
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-colors duration-200"
              >
                Contact Leadership
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>

      {/* Executive Team */}
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

      {/* Strategic Advisors */}
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

      {/* CTA strip */}
      <section className="py-14 bg-gradient-to-r from-dark-navy to-navy-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInOnScroll>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              Connect with iVALT Leadership
            </h2>
            <p className="text-white/70 mb-7 max-w-xl mx-auto">
              Learn how iVALT&apos;s team is establishing provable human trust. Schedule a demo or
              reach out directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center px-7 py-3 bg-teal-primary text-white font-semibold rounded-xl hover:bg-light-teal transition-colors duration-200"
              >
                Schedule a Demo
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-7 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:border-white hover:bg-white/10 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </FadeInOnScroll>
        </div>
      </section>
    </>
  );
}
