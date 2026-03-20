"use client";

import Image from "next/image";
import openvpnHeroBg from "@/assets/openvpn-hero-bg.png";
import openvpnLogo from "@/assets/openvpn-logo.png";
import ivaltLogo from "@/assets/logo-transparent-bg.png";
import {
  Heading2,
  Heading3,
  BodyText,
  Heading4,
} from "@/components/ui/typography";
import { CheckCircle2 } from "lucide-react";
import { useScroll, useTransform, motion } from "framer-motion";

type YouTubePlayerProps = {
  videoId: string;
};

function YouTubePlayer({ videoId }: YouTubePlayerProps) {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative pt-[56.25%] bg-navy-primary rounded-xl overflow-hidden shadow-2xl">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

const benefits = [
  {
    title: "Passwordless VPN Login",
    description:
      "Users authenticate instantly using iVALT's mobile app—no passwords, codes, or tokens",
  },
  {
    title: "Human-Bound PKI Identity",
    description:
      "Every login is cryptographically tied to the individual user's device and biometrics",
  },
  {
    title: "Stronger Zero Trust Access",
    description:
      "Access decisions can include user authenticity, device binding, location, and time",
  },
  {
    title: "Stops Social Engineering & AI Deepfakes",
    description:
      "Prevents impersonation attacks against VPN access and admin actions",
  },
  {
    title: "Reduced IT Overhead",
    description:
      "Eliminates password resets, MFA friction, and certificate-authority management",
  },
  {
    title: "Higher Assurance for Regulated Environments",
    description:
      "Ideal for enterprises with compliance or privileged-access requirements",
  },
];

function ParallaxHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], ["0%", "20%"]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.9]);

  return (
    <section className="relative h-[650px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={openvpnHeroBg}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-[#FAF9F7]/80" />
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center h-full flex flex-col justify-center"
      >
        <div className="flex items-center justify-center gap-8 lg:gap-12 mb-0">
          <Image
            src={openvpnLogo}
            alt="OpenVPN"
            width={180}
            height={100}
            className="object-contain"
          />
          <span className="text-navy-primary text-6xl">+</span>
          <Image
            src={ivaltLogo}
            alt="iVALT"
            width={150}
            height={50}
            className="object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold text-navy-primary mb-6">
          Integration
        </h1>
        <BodyText className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto text-gray-700">
          iVALT and OpenVPN have partnered to deliver a next-generation secure
          remote access solution by integrating OpenVPN Access Server with
          iVALT's Human-Bound PKI™ identity platform.
        </BodyText>
        <BodyText className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto mt-6 text-gray-700">
          This integration enables one-click, passwordless VPN authentication
          that is cryptographically bound to a real, verified human.
          Authentication is secured using device-bound PKI keys, mobile
          biometrics, and contextual verification such as location and
          time—removing reliance on passwords, OTPs, or hardware tokens.
        </BodyText>
      </motion.div>
    </section>
  );
}

export default function OpenVPNPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <ParallaxHero />

      <section className="py-16 lg:py-24 bg-[#FAF9F7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading3 color="dark-navy" className="text-center mb-12">
            Why This Integration Matters
          </Heading3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <CheckCircle2 className="w-6 h-6 text-teal-primary flex-shrink-0 mt-1" />
                <div>
                  <Heading4 color="navy-primary" className="mb-2 text-lg">
                    {benefit.title}
                  </Heading4>
                  <BodyText color="default" className="text-gray-600">
                    {benefit.description}
                  </BodyText>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading3 color="dark-navy" className="text-center mb-12">
            Watch the Integration in Action
          </Heading3>
          <YouTubePlayer videoId="YdLjfqw72Cg" />
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-dark-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Heading3 color="dark-navy" className="mb-6 text-white">
                Ready to Transform Your VPN Security?
              </Heading3>
              <BodyText className="text-lg text-gray-300 mb-8">
                Join leading enterprises that are securing their remote access
                with passwordless, human-bound authentication. Our integration
                with OpenVPN Access Server makes deployment fast and seamless.
              </BodyText>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:openvpn@ivalt.com"
                  className="inline-flex items-center justify-center px-8 py-4 bg-teal-primary text-white font-semibold rounded-lg hover:bg-teal-dark transition-colors"
                >
                  Contact Sales
                </a>
                <a
                  href="https://openvpn.net/as-docs/tutorials/tutorial--ivalt-2fa-access-server.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
                >
                  View Documentation
                </a>
              </div>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <Heading4 color="dark-navy" className="mb-6 text-white text-xl">
                Get in Touch
              </Heading4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal-primary/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-teal-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a
                      href="mailto:openvpn@ivalt.com"
                      className="text-white hover:text-teal-primary transition-colors"
                    >
                      openvpn@ivalt.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-teal-primary/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-teal-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Website</p>
                    <a
                      href="https://www.ivalt.com"
                      className="text-white hover:text-teal-primary transition-colors"
                    >
                      www.ivalt.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
