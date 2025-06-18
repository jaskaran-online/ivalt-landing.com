import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import SectionTitle from "@/components/SectionTitle";
import {
  Smartphone,
  Fingerprint,
  MapPin,
  Clock,
  TrendingUp,
  Users,
  Bot,
  CheckCircle,
  Globe,
  Lock,
} from "lucide-react";

export default function PlatformOverviewSection() {
  return (
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
                <h3 className="text-xl font-semibold text-primary">
                  Human Authentication: Mobile-Centric
                </h3>
              </div>

              <div className="bg-teal-primary/10 p-4 rounded-lg mb-6">
                <p className="text-teal-primary font-semibold">
                  No usernames/passwords — mobile number as secure ID
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-primary mb-3">
                  Multi-Factor (up to 25) Authentication:
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Fingerprint className="h-5 w-5 text-teal-primary" />
                    <p className="text-gray-600">
                      Biometrics: Face, fingerprint
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-5 w-5 text-teal-primary" />
                    <p className="text-gray-600">
                      Device identity: Registered phone
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-teal-primary" />
                    <p className="text-gray-600">
                      GPS & Time: Real-world context
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-teal-primary" />
                    <p className="text-gray-600">
                      Dynamic Variables: Real-time random data (weather, stocks,
                      etc.)
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Bot className="h-5 w-5 text-teal-primary" />
                    <p className="text-gray-600">AI-driven factor selection</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-primary font-semibold">
                  Result: Dynamic, context-aware authentication that is{" "}
                  <strong>nearly impossible to hack, even by AI</strong>.
                </p>
              </div>
            </div>
          </FadeInOnScroll>

          {/* IoT & AI Agent Authentication */}
          <FadeInOnScroll delay={0.1}>
            <div className="bg-white rounded-lg p-8 border-4 border-gray-100 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-semibold text-primary">
                  IoT & AI Agent Identification
                </h3>
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
                  <p className="text-gray-600">
                    TOTP (Time-based One Time Password)
                  </p>
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
  );
}
