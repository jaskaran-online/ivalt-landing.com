import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";
import { 
  Shield, 
  Smartphone, 
  Lock, 
  Eye, 
  Fingerprint, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Users, 
  Bot, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  Globe
} from "lucide-react";

export default function Homepage2() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative md:py-30 py-12 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FadeInOnScroll>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-primary/10 text-teal-primary text-sm font-medium mb-6">
                Identity Validation Platform®
              </div>
              <h1 className="text-5xl font-bold tracking-tight text-primary mb-6">
                <span className="underline decoration-teal-primary">
                  iVALT – Identity Validation Platform®
                </span>
              </h1>
              <h2 className="text-4xl font-bold text-teal-primary mb-8">
                Authenticate Anywhere® & ANYONE
              </h2>
              <p className="mt-6 md:text-xl text-lg text-gray-600 max-w-4xl mx-auto">
                Revolutionary platform for verified trust across all digital interactions — without passwords.
                Validate the identity of humans, IoT devices, and AI agents with unprecedented security.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/solutions"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90"
                >
                  Learn More
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
                >
                  Get Started
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Identity Crisis Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <SectionTitle
              title="The Identity Crisis"
              description="Legacy identity methods are failing. It's time for a revolutionary approach."
            />
          </FadeInOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
            <FadeInOnScroll>
              <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-red-800">Critical Statistics</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">50% of cyberattacks start with stolen credentials</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">$10.5 trillion projected cybercrime costs by 2025</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">IoT devices now outnumber humans with poor security</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">AI deepfakes & social engineering attacks exploding</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-primary mb-4">Emerging Risks</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Lock className="h-5 w-5 text-teal-primary" />
                      <p className="text-gray-700">Passwords and basic 2FA are obsolete</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Bot className="h-5 w-5 text-teal-primary" />
                      <p className="text-gray-700">Lack of endpoint identity for humans, IoT, and AI agents</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-teal-primary" />
                      <p className="text-gray-700">Fragmented, complex identity solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Platform Overview Section */}
      <section className="py-16 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <SectionTitle
              title="iVALT Identity Validation Platform®"
              description="A single, unified platform for validating the identity of humans, IoT devices, and AI agents."
            />
          </FadeInOnScroll>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {/* Human Authentication */}
            <FadeInOnScroll>
              <div className="bg-white rounded-lg p-8 border-4 border-gray-100 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="h-8 w-8 text-teal-primary" />
                  <h3 className="text-xl font-semibold text-primary">Human Authentication: Mobile-Centric</h3>
                </div>
                
                <div className="bg-teal-primary/10 p-4 rounded-lg mb-6">
                  <p className="text-teal-primary font-semibold">
                    No usernames/passwords — mobile number as secure ID
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-primary mb-3">Multi-Factor (up to 25) Authentication:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Fingerprint className="h-5 w-5 text-teal-primary" />
                      <p className="text-gray-600">Biometrics: Face, fingerprint</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Smartphone className="h-5 w-5 text-teal-primary" />
                      <p className="text-gray-600">Device identity: Registered phone</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-teal-primary" />
                      <p className="text-gray-600">GPS & Time: Real-world context</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <TrendingUp className="h-5 w-5 text-teal-primary" />
                      <p className="text-gray-600">Dynamic Variables: Real-time random data</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Bot className="h-5 w-5 text-teal-primary" />
                      <p className="text-gray-600">AI-driven factor selection</p>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="text-primary font-semibold">
                    Result: Dynamic, context-aware authentication that is nearly impossible to hack, even by AI.
                  </p>
                </div>
              </div>
            </FadeInOnScroll>

            {/* IoT & AI Agent Authentication */}
            <FadeInOnScroll delay={0.1}>
              <div className="bg-white rounded-lg p-8 border-4 border-gray-100 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <Globe className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold text-primary">IoT & AI Agent Identification</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <p className="text-gray-600">Creator ID / Instance ID</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="text-gray-600">Time of creation</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-primary" />
                    <p className="text-gray-600">TOTP (Time-based One Time Password)</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-primary" />
                    <p className="text-gray-600">Expected network origin</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <p className="text-gray-600">Dynamic variables</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Key Applications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <SectionTitle
              title="Key Applications"
              description="Three initial focus areas transforming digital security"
            />
          </FadeInOnScroll>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* DocuID */}
            <FadeInOnScroll>
              <div className="bg-white rounded-lg p-8 border-4 border-gray-100 transition-all duration-300">
                <div className="text-accent mb-4">
                  <FileText className="w-8 h-8 text-teal-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  DocuID™
                </h3>
                <p className="text-gray-600 mb-2 text-sm">Secure Document Access Control</p>
                <p className="text-gray-600 mb-4">
                  Authors embed authorized recipients (via mobile #) in encrypted documents.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-primary rounded-full" />
                    <p className="text-sm text-gray-600">Multi-factor recipient verification</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-primary rounded-full" />
                    <p className="text-sm text-gray-600">Full Digital Rights Management (DRM)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-primary rounded-full" />
                    <p className="text-sm text-gray-600">Prevents forwarding, printing, screenshots</p>
                  </div>
                </div>
                <Link
                  href="/solutions"
                  className="mt-3 inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-sm text-white bg-primary hover:bg-opacity-90"
                >
                  Learn More
                </Link>
              </div>
            </FadeInOnScroll>

            {/* On-Demand ID */}
            <FadeInOnScroll delay={0.1}>
              <div className="bg-white rounded-lg p-8 border-4 border-gray-100 transition-all duration-300">
                <div className="text-accent mb-4">
                  <Eye className="w-8 h-8 text-teal-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  On-Demand ID™
                </h3>
                <p className="text-gray-600 mb-2 text-sm">Combatting Social Engineering & Deepfakes</p>
                <p className="text-gray-600 mb-4">
                  Real-time identity verification within our mobile app.
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-primary rounded-full" />
                    <p className="text-sm text-gray-600">Instant suspicious call/message verification</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-primary rounded-full" />
                    <p className="text-sm text-gray-600">Biometrics & location verification</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-primary rounded-full" />
                    <p className="text-sm text-gray-600">Only solution to defeat deepfake attacks</p>
                  </div>
                </div>
                <Link
                  href="/solutions"
                  className="mt-3 inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-sm text-white bg-primary hover:bg-opacity-90"
                >
                  Learn More
                </Link>
              </div>
            </FadeInOnScroll>

            {/* Universal Biometric ID */}
            <FadeInOnScroll delay={0.2}>
              <div className="bg-white rounded-lg p-8 border-4 border-gray-100 transition-all duration-300">
                <div className="text-accent mb-4">
                  <Fingerprint className="w-8 h-8 text-teal-primary" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Universal Biometric ID®
                </h3>
                <p className="text-gray-600 mb-2 text-sm">Enterprise Security</p>
                <p className="text-gray-600 mb-4">
                  Enhances corporate Identity and Access Management (IAM).
                </p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-primary rounded-full" />
                    <p className="text-sm text-gray-600">Real-time employee mobile verification</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-primary rounded-full" />
                    <p className="text-sm text-gray-600">Biometric and contextual verification</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-teal-primary rounded-full" />
                    <p className="text-sm text-gray-600">Makes stolen passwords useless</p>
                  </div>
                </div>
                <Link
                  href="/solutions"
                  className="mt-3 inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-sm text-white bg-primary hover:bg-opacity-90"
                >
                  Learn More
                </Link>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-16 bg-[#FAF9F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInOnScroll>
            <SectionTitle
              title="Market Opportunity & Competitive Advantage"
              description="iVALT is positioned to capture significant market share in the rapidly growing IAM space."
            />
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-white text-lg font-bold">
                $20B+ IAM Market
              </div>
            </div>
          </FadeInOnScroll>

          <div className="grid lg:grid-cols-2 gap-12">
            <FadeInOnScroll>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  iVALT Competitive Advantages
                </h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-teal-primary mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Holistic Identity</p>
                        <p className="text-gray-600 text-sm">One platform for Humans, IoT, AI</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <Lock className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">25-Factor Security</p>
                        <p className="text-gray-600 text-sm">Combines biometrics, location, randomness</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <Bot className="h-6 w-6 text-teal-primary mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Future-Proof</p>
                        <p className="text-gray-600 text-sm">Solves AI, IoT, Deepfake identity risks</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-start gap-3">
                      <Smartphone className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">User-Friendly</p>
                        <p className="text-gray-600 text-sm">No passwords, seamless mobile flow</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.2}>
              <div>
                <h3 className="text-2xl font-bold text-teal-primary mb-6">
                  Vision: Future Applications
                </h3>
                <div className="bg-white rounded-lg p-8 border-4 border-gray-100">
                  <p className="text-gray-600 mb-4">
                    iVALT's platform is extensible beyond the initial three applications—designed for future-proof identity validation across emerging AI, IoT, and human interaction scenarios.
                  </p>
                  <div className="bg-teal-primary/10 p-4 rounded-lg">
                    <p className="font-semibold text-teal-primary mb-2">
                      Fast Integration
                    </p>
                    <p className="text-gray-600 text-sm">OpenAPI, enterprise-ready</p>
                  </div>
                </div>
              </div>
            </FadeInOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}