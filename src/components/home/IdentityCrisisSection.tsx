import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import SectionTitle from "@/components/SectionTitle";
import { AlertTriangle, Lock, Bot, Shield } from "lucide-react";

export default function IdentityCrisisSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionTitle
            title="The Identity Crisis"
            description="Legacy identity methods—passwords, basic 2FA, device certificates—are not enough."
          />
          <div className="flex justify-center mt-6">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-100 text-red-800 text-lg font-bold">
              80-90% of cyberattacks start with stolen credentials
            </div>
          </div>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <FadeInOnScroll>
            <div className="bg-red-50 border border-red-200 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-red-600" />
                <h3 className="text-xl font-semibold text-red-800">
                  Emerging Risks
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">
                    <strong>$10.5 trillion</strong> projected cybercrime costs
                    annually in 2025
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">
                    IoT devices now outnumber humans, often with{" "}
                    <strong>poor security</strong>
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">
                    AI <strong>deepfakes & social engineering</strong> attacks
                    are exploding
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">
                    Lack of <strong>endpoint identity</strong> for humans, IoT,
                    and AI agents is a root cause of breaches
                  </p>
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="space-y-6">
              <div className="bg-teal-primary/10 p-6 rounded-lg border-2 border-teal-primary/20">
                <h3 className="text-2xl font-bold text-teal-primary mb-4">
                  <span className="text-primary">iVALT</span> Solution
                </h3>
                <p className="text-gray-700 text-lg">
                  iVALT delivers a mobile-centric/SaaS platform for verified trust
                  across all digital interactions —{" "}
                  <strong>using existing infrastructure</strong>.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-none hover:shadow-sm transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-teal-primary" />
                    <p className="text-gray-700">
                      Stolen credentials become worthless
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-none hover:shadow-sm transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Bot className="h-5 w-5 text-teal-primary" />
                    <p className="text-gray-700">
                      User experience is simplified to 1-Click
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-none hover:shadow-sm transition-all duration-300 cursor-pointer">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-teal-primary" />
                    <p className="text-gray-700">
                      Social engineering and AI deepfakes are blocked
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </div>
      </div>
    </section>
  );
}
