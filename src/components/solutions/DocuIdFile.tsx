import React from "react";
import Image from "next/image";
import Docuid from "@/assets/images/solutions/Douc-Id.jpg";
import protectDocoId from "@/assets/images/solutions/docuId-protection.jpg";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileLock, ShieldCheck, UserCheck } from "lucide-react";

export const DocuIdFile = () => {
  const features = [
    {
      icon: UserCheck,
      text: "Recipients verify identity via multi-factor authentication",
    },
    { icon: FileLock, text: "Full Digital Rights Management (DRM)" },
    {
      icon: ShieldCheck,
      text: "Prevents forwarding, printing, and screenshots",
    },
  ];

  return (
    <section className="py-16">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-sm font-medium mb-6">
            <FileLock className="w-4 h-4" />
            <span>Document Security Solution</span>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-navy-primary mb-4">
            DocuID®
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-teal-primary font-semibold mb-4">
            Secure Document Access Control
          </p>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Authors embed authorized recipients (via mobile #) in encrypted
            documents. Control who can access your sensitive documents with
            multi-factor authentication and full DRM protection.
          </p>

          {/* Visit Link Button */}
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
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md hover:border-teal-primary/20 transition-all"
            >
              <div className="w-12 h-12 rounded-lg bg-teal-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-6 h-6 text-teal-primary" />
              </div>
              <p className="text-gray-700 font-medium">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Images Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex justify-center">
          <Image
            src={Docuid}
            alt="DocuID - Secure Document Access Control"
            width={1100}
            height={1100}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src={protectDocoId}
            alt="DocuID Protection Features"
            width={1100}
            height={1100}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
