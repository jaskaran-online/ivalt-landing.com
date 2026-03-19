import { Smartphone, ShieldAlert, Bot, Download } from 'lucide-react';
import { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'On-Demand ID™ - Combat Deepfakes & Social Engineering',
  description:
    "Discover how iVALT's On-Demand ID provides real-time identity verification to protect you from deepfakes, scams, and social engineering attacks.",
  openGraph: {
    title: 'On-Demand ID™ - Combat Deepfakes & Social Engineering',
    description:
      "Verify the identity of anyone, anytime, with iVALT's On-Demand ID. The ultimate tool against modern digital threats.",
  },
  twitter: {
    title: 'On-Demand ID™ - Combat Deepfakes & Social Engineering',
    description:
      "Don't fall for deepfakes or scams. Use iVALT's On-Demand ID for instant, reliable identity verification.",
  },
};

export default function OnDemandIdPage() {
  const features = [
    {
      icon: Smartphone,
      text: 'Instantly verify identity of suspicious calls/messages',
    },
    { icon: ShieldAlert, text: 'Biometrics, registered device and location' },
    {
      icon: Bot,
      text: 'The only solution worldwide to truly defeat deepfake & social engineering attacks',
    },
  ];

  return (
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-extrabold text-navy-primary mb-4">On-Demand ID™</h1>
        <h2 className="text-2xl font-semibold text-teal-primary mb-12">
          Combatting Social Engineering & Deepfakes
        </h2>

        <p className="text-xl text-gray-700 mb-16 leading-relaxed">
          Real-time identity verification within our mobile app.
        </p>

        <div className="space-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <feature.icon className="w-12 h-12 text-teal-primary mb-4" />
              <p className="text-xl text-gray-800 font-medium max-w-md">{feature.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14">
          <a href="/brochures/On-DemandID-Brochure.pdf" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-teal-primary hover:bg-teal-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-teal-primary/25 transition-all hover:shadow-xl hover:shadow-teal-primary/30 hover:-translate-y-0.5"
            >
              Download Ondemandid Brochure
              <Download className="ml-2 w-5 h-5" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
