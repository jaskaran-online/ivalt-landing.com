import Image from 'next/image';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { Heading2 } from '@/components/ui/typography';
import { Check } from 'lucide-react';

type MarketCardProps = {
  title: string;
  bullets: readonly string[];
  caption?: string;
  delay?: number;
  className?: string;
};

function MarketCard({ title, bullets, caption, delay = 0, className = '' }: MarketCardProps) {
  return (
    <FadeInOnScroll delay={delay}>
      <div
        className={`relative z-10 h-full p-6 border-[0.4px] bg-gradient-to-br from-white to-gray-50/30 transition-colors duration-300 hover:from-teal-50/30 hover:to-white ${className}`}
      >
        <h3 className="mb-4 text-xl font-bold text-primary">{title}</h3>
        <ul className="mb-4 space-y-3">
          {bullets.map((line) => (
            <li key={line} className="flex items-start gap-3">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal-primary" aria-hidden />
              <span className="font-medium leading-relaxed text-gray-700">{line}</span>
            </li>
          ))}
        </ul>
        {caption ? (
          <p className="mt-4 text-sm font-medium italic leading-snug text-primary/95">{caption}</p>
        ) : null}
      </div>
    </FadeInOnScroll>
  );
}

function HubCore({ className = '' }: { className?: string }) {
  return (
    <FadeInOnScroll>
      <div
        className={`relative z-10 mx-auto flex max-w-[280px] flex-col items-center justify-center rounded-2xl bg-primary px-8 py-10 text-center shadow-[0_20px_50px_-12px_rgba(15,51,102,0.45),0_0_40px_-8px_rgba(234,179,8,0.2)] ${className}`}
      >
        <Image
          src="/logo-transparent-bg.png"
          alt="iVALT"
          width={200}
          height={56}
          className="h-auto w-36 object-contain brightness-0 invert"
        />
        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.14em] text-white/95">
          Human-Bound Identity
        </p>
      </div>
    </FadeInOnScroll>
  );
}

const ON_DEMAND = {
  title: 'On-Demand ID',
  bullets: ['Help Desk', 'Customer Service', 'Stops Social Eng & AI Deepfakes'] as const,
  caption: 'Stops Social Engineering and AI Deepfakes.',
};

const DOCUID = {
  title: 'DocuID',
  bullets: ['PDFs, Images, Videos', 'Gen AI Content', 'Originator Control'] as const,
  caption: 'Originator Stays in Control of Documents.',
};

const AGENTIC = {
  title: 'Agentic AI',
  bullets: ['Human-Authorized AI Agents', 'Trusted AI Execution'] as const,
  caption: 'Human-in-the-Loop AI Execution Authority.',
};

const SAML = {
  title: 'SAML Federation',
  bullets: ['SAML / IAM Integration', 'PKI Protection', 'Passwordless'] as const,
  caption: 'Safely Bridges IAM to AI with No Infrastructure Changes.',
};

const EARLY = {
  title: 'Early Products',
  bullets: ['TV-ID', 'eLOK'] as const,
};

/**
 * Orthogonal “circuit” routes from hub (no diagonal shear). Uniform scale via `meet`.
 */
function HubSpokeLines() {
  const stroke = 'rgba(202, 138, 4, 0.65)';
  const hx = 500;
  const hy = 312;
  const routes = [
    `M ${hx} ${hy} L 132 ${hy} L 132 102`,
    `M ${hx} ${hy} L 868 ${hy} L 868 102`,
    `M ${hx} ${hy} L 132 ${hy} L 132 494`,
    `M ${hx} ${hy} L 868 ${hy} L 868 494`,
    `M ${hx} ${hy} L ${hx} 636`,
  ];

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none overflow-visible"
      viewBox="0 0 1000 688"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <g fill="none" stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.25}>
        {routes.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}

export function IdentityMarketsHubSection() {
  return (
    <section
      className="relative z-20 overflow-hidden py-16 md:py-20"
      aria-labelledby="identity-markets-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_45%,rgba(48,182,142,0.06),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
            <Heading2 id="identity-markets-heading" color="dark-navy" className="text-3xl font-bold md:text-4xl">
              A Platform for Multiple Identity Markets
            </Heading2>
          </div>
        </FadeInOnScroll>

        {/* Mobile / tablet */}
        <div className="flex flex-col gap-8 lg:hidden">
          <HubCore />
          <MarketCard {...ON_DEMAND} delay={0.05} />
          <MarketCard {...AGENTIC} delay={0.1} />
          <MarketCard {...DOCUID} delay={0.15} />
          <MarketCard {...SAML} delay={0.2} />
          <MarketCard {...EARLY} delay={0.25} />
        </div>

        {/* Desktop: symmetric flex + uniformly scaled spokes */}
        <div className="relative mx-auto hidden max-w-5xl lg:block">
          <HubSpokeLines />
          <div className="relative z-10 flex flex-col gap-10 xl:gap-12">
            <div className="flex flex-row justify-between gap-6 xl:gap-10">
              <div className="min-w-0 flex-1 basis-0 max-w-[46%]">
                <MarketCard {...ON_DEMAND} delay={0} />
              </div>
              <div className="min-w-0 flex-1 basis-0 max-w-[46%]">
                <MarketCard {...AGENTIC} delay={0.08} />
              </div>
            </div>

            <div className="flex justify-center py-1">
              <HubCore />
            </div>

            <div className="flex flex-row justify-between gap-6 xl:gap-10">
              <div className="min-w-0 flex-1 basis-0 max-w-[46%]">
                <MarketCard {...DOCUID} delay={0.12} />
              </div>
              <div className="min-w-0 flex-1 basis-0 max-w-[46%]">
                <MarketCard {...SAML} delay={0.16} />
              </div>
            </div>

            <div className="mx-auto w-full max-w-md">
              <MarketCard {...EARLY} delay={0.2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
