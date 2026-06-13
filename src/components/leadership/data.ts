import { StaticImageData } from 'next/image';

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

export type Executive = {
  name: string;
  title: string;
  bio: string;
  linkedin: string;
  image: StaticImageData | null;
};

export type Advisor = {
  name: string;
  bio: string;
  linkedin: string;
  image: StaticImageData | null;
};

export const executives: Executive[] = [
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

export const advisors: Advisor[] = [
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
