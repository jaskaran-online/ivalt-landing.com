import type { ReactNode } from 'react';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { Heading2 } from '@/components/ui/typography';
import { Briefcase, Bug, Check, Cpu, type LucideIcon } from 'lucide-react';

const BUSINESS_ATTACKS = [
  'Ransomware',
  'Data breaches',
  'Business email (BEC)',
  'Financial fraud',
  'Account takeover',
  'Cloud account takeover',
  'Infrastructure takeover',
  'Supply chain attacks',
] as const;

const TECH_ATTACKS = [
  'Token theft',
  'Session hijacking',
  'Credential stuffing',
  'Password spraying',
  'Phishing attacks',
  'API abuse',
  'Active Directory',
] as const;

const MALWARE_EXPLOITS = [
  'Trojans',
  'Infostealer malware',
  'Keyloggers',
  'Backdoors',
  'Zero-day exploits',
  'Rootkits',
  'Lateral movement',
  'Privilege escalation',
] as const;

function ThreatPartnershipCard({
  icon: Icon,
  title,
  subtitle,
  items,
  delay = 0,
  footer,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  items: readonly string[];
  delay?: number;
  footer?: ReactNode;
}) {
  return (
    <FadeInOnScroll delay={delay}>
      <div className="h-full p-6 border-[0.4px] bg-gradient-to-br from-white to-gray-50/30 hover:from-teal-50/30 hover:to-white">
        <div className="flex min-h-[320px] flex-col h-full md:min-h-[350px]">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-full bg-teal-primary/10 p-3">
              <Icon className="h-8 w-8 text-teal-primary" aria-hidden />
            </div>
            <div>
              <h3 className="mb-1 text-xl font-bold text-primary transition-colors duration-300">
                {title}
              </h3>
              <p className="text-sm font-medium text-teal-primary">{subtitle}</p>
            </div>
          </div>

          <div className="mb-6 flex-grow space-y-3">
            {items.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="mt-1 shrink-0">
                  <Check className="h-5 w-5 text-teal-primary" aria-hidden />
                </div>
                <p className="font-medium leading-relaxed text-gray-700">{item}</p>
              </div>
            ))}
          </div>

          {footer}
        </div>
      </div>
    </FadeInOnScroll>
  );
}

export function CyberThreatsSection() {
  return (
    <section className="relative z-20 overflow-hidden py-16 md:mb-16" aria-labelledby="cyber-threats-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <div className="mb-8 text-center">
            <Heading2
              id="cyber-threats-heading"
              color="dark-navy"
              className="text-3xl font-bold"
            >
              Attackers Don&apos;t Break In.
            </Heading2>
            <p className="mx-auto mt-4 max-w-3xl text-xl font-bold italic text-teal-primary sm:text-2xl">
              They Log In and Are Immediately Trusted.
            </p>
          </div>
        </FadeInOnScroll>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <ThreatPartnershipCard
            icon={Briefcase}
            title="Business Attacks"
            subtitle="Operations & trust"
            items={BUSINESS_ATTACKS}
            delay={0}
          />
          <ThreatPartnershipCard
            icon={Cpu}
            title="Tech Attacks"
            subtitle="Sessions & APIs"
            items={TECH_ATTACKS}
            delay={0.1}
            footer={
              <div className="rounded-[20px] border-2 border-teal-primary/20 bg-gradient-to-r from-teal-primary/10 to-teal-primary/5 p-4 backdrop-blur-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-primary">
                  AI execution risks
                </p>
                <p className="mt-1 text-sm font-medium italic text-gray-700">Agents &amp; Workflows</p>
              </div>
            }
          />
          <ThreatPartnershipCard
            icon={Bug}
            title="Malware / Exploits"
            subtitle="Payloads & privilege"
            items={MALWARE_EXPLOITS}
            delay={0.2}
          />
        </div>

        <FadeInOnScroll delay={0.25}>
          <div className="mt-12 rounded-[30px] border-2 border-teal-primary/20 bg-gradient-to-r from-teal-primary/10 to-teal-primary/5 p-8 text-center backdrop-blur-sm">
            <p className="text-xl font-bold italic text-primary sm:text-2xl">
              80-90% of All Cyber Breaches Start with Stolen Credentials
            </p>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
