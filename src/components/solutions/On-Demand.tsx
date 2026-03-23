import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import onDemandId from '@/assets/images/solutions/solutions-4.jpg';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Lock } from 'lucide-react';
import { solutionsOnDemandId } from '@/content/solutions-hub';

export function OnDemand() {
  const c = solutionsOnDemandId;

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-sm font-medium mb-6">
            <Lock className="w-4 h-4" />
            <span>{c.badgeLabel}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-primary mb-4">{c.title}</h2>

          <p className="text-xl text-teal-primary font-semibold mb-8">{c.subtitle}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href={c.visitUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-teal-primary hover:bg-teal-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-teal-primary/25 transition-all hover:shadow-xl hover:shadow-teal-primary/30 hover:-translate-y-0.5"
              >
                Visit OnDemandId.com
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href={c.brochureHref} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white border border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                Download OnDemandID Brochure
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          <Button
            asChild
            variant="outline"
            className="border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white"
          >
            <Link href="/solutions/ondemandid">Full On-Demand ID overview</Link>
          </Button>
        </div>

        <div className="flex justify-center">
          <Image
            src={onDemandId}
            alt={c.title}
            width={1500}
            height={1500}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
