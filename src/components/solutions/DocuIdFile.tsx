import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import docuid from '@/assets/images/solutions/solutions-2.jpg';
import docuid3 from '@/assets/images/solutions/solutions-3.jpg';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, Lock } from 'lucide-react';
import { solutionsDocuId } from '@/content/solutions-hub';

export function DocuIdFile() {
  const c = solutionsDocuId;

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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href={c.visitUrl} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-teal-primary hover:bg-teal-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-teal-primary/25 transition-all hover:shadow-xl hover:shadow-teal-primary/30 hover:-translate-y-0.5"
              >
                Visit DocuID.net
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a href={c.brochureHref} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-white border border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                Download DocuID Brochure
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            {c.features.map(feature => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md hover:border-teal-primary/20 transition-all"
              >
                <h3 className="text-navy-primary font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>

          <Button
            asChild
            variant="outline"
            className="border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white mb-10"
          >
            <Link href="/solutions/docuid">Full DocuID overview</Link>
          </Button>
        </div>

        <div className="flex justify-center mb-16">
          <Image
            src={docuid}
            alt={c.title}
            width={1500}
            height={1500}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy-primary mb-4 tracking-tight">
            {c.futureTitle}
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-teal-primary">{c.futureSubtitle}</p>
        </div>

        <div className="flex justify-center mb-16">
          <Image
            src={docuid3}
            alt={c.futureTitle}
            width={1500}
            height={1500}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="bg-gradient-to-r from-navy-primary to-dark-navy rounded-tr-[80px] rounded-bl-[80px] p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">{c.ctaTitle}</h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">{c.ctaDescription}</p>
          <a href={c.visitUrl} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-navy-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              Get Started
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
