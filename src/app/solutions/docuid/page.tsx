import {
  FileLock,
  ShieldCheck,
  UserCheck,
  ExternalLink,
  Lock,
  Download,
} from "lucide-react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "DocuID® - Secure Document Access Control",
  description:
    "Learn how iVALT's DocuID empowers you to control who can access your sensitive documents with multi-factor authentication and full DRM protection.",
  openGraph: {
    title: "DocuID® - Secure Document Access Control",
    description:
      "Protect your documents from unauthorized access, forwarding, and screenshots with iVALT's DocuID.",
  },
  twitter: {
    title: "DocuID® - Secure Document Access Control",
    description:
      "Take control of your document security with iVALT's DocuID. Multi-factor authentication and DRM to prevent unauthorized access.",
  },
};

export default function DocuIdPage() {
  const features = [
    {
      icon: UserCheck,
      title: "Identity Verification",
      text: "Recipients verify identity via multi-factor authentication",
    },
    {
      icon: FileLock,
      title: "Digital Rights Management",
      text: "Full Digital Rights Management (DRM) protection",
    },
    {
      icon: ShieldCheck,
      title: "Leak Prevention",
      text: "Prevents forwarding, printing, and screenshots",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-gray-50/50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal-primary blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-navy-primary blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-sm font-medium mb-8">
            <Lock className="w-4 h-4" />
            <span>Document Security Solution</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-navy-primary mb-6 tracking-tight">
            DocuID®
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-teal-primary mb-8">
            Secure Document Access Control
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Authors embed authorized recipients (via mobile #) in encrypted
            documents.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.docuid.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-teal-primary hover:bg-teal-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-teal-primary/25 transition-all hover:shadow-xl hover:shadow-teal-primary/30 hover:-translate-y-0.5"
              >
                Visit DocuID.net
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <a
              href="/brochures/DocuID-Brochure.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white border border-teal-primary text-teal-primary hover:bg-teal-primary hover:text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
              >
                Download DocuID Brochure
                <Download className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-teal-primary/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-teal-primary to-teal-primary/80 flex items-center justify-center mb-6 shadow-lg shadow-teal-primary/25 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-navy-primary mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{feature.text}</p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-primary/5 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="bg-gradient-to-r from-navy-primary to-dark-navy rounded-3xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Secure Your Documents?
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Experience the future of document security with DocuID®.
          </p>
          <a
            href="https://www.docuid.net"
            target="_blank"
            rel="noopener noreferrer"
          >
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
