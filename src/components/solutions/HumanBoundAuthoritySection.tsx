import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Fingerprint, Globe, Lock, MousePointerClick } from 'lucide-react';
import HumanBoundAuthorityImage from '@/assets/images/solutions/solutions-1.jpg';
import { solutionsHumanBoundAuthority } from '@/content/solutions-hub';

const featureIcons = [Fingerprint, Globe, MousePointerClick] as const;

export function HumanBoundAuthoritySection() {
  const { badgeLabel, title, subtitle, features, detailPath } = solutionsHumanBoundAuthority;

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-sm font-medium mb-6">
            <Lock className="w-4 h-4" />
            <span>{badgeLabel}</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-primary mb-4">{title}</h2>

          <p className="text-xl text-teal-primary font-semibold mb-8">{subtitle}</p>

          <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
            {features.map((text, index) => {
              const Icon = featureIcons[index];
              return (
                <div
                  key={text}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-teal-primary/20 transition-all"
                >
                  <div className="w-12 h-12 rounded-lg bg-teal-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-teal-primary" />
                  </div>
                  <p className="text-gray-700 font-medium">{text}</p>
                </div>
              );
            })}
          </div>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white"
          >
            <Link href={detailPath}>Learn more</Link>
          </Button>
        </div>

        <div className="flex justify-between max-w-7xl mx-auto items-center my-4 mb-6 gap-4 md:gap-16 px-8">
          <Image
            src={HumanBoundAuthorityImage}
            alt={title}
            width={1500}
            height={1500}
            className="w-full md:w-[60%] h-full object-cover mb-3"
          />
          <div className="flex flex-col justify-between gap-2 md:gap-8 h-[250px] md:h-[400px]">
            <div className="border-4 p-2 md:p-8 rounded-lg">
              <h3 className="text-lg md:text-2xl font-semibold md:font-bold text-navy-primary text-center">
                IAM Extended to AI with PKI as for Cryptographic User Identity
              </h3>
            </div>
            <div className="border-4 p-2 md:p-8 rounded-lg">
              <h3 className="text-lg md:text-2xl font-semibold md:font-bold text-navy-primary text-center">
                Human-Bound Authority Verified Before Execution
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
