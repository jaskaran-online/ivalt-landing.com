import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import SectionTitle from '@/components/SectionTitle';
import { AlertTriangle, Lock, Bot, Shield } from 'lucide-react';

export default function IdentityCrisisSection() {
  return (
    <section className="py-16 bg-white z-30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInOnScroll>
          <SectionTitle
            title="The Identity Tipping Point"
            description=" Decades of Legacy identity methods continue to enable devastating hacker attacks."
          />
          <div className="flex justify-center mt-6">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 text-primary text-lg font-bold">
              80-90% of cyber attacks start with stolen credentials
            </div>
          </div>
        </FadeInOnScroll>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-12">
          <FadeInOnScroll>
            <div className="bg-primary rounded-[30px] pt-4 z-0  h-96  relative shadow-lg">
              <div className="flex items-center  gap-3 mb-3 px-8 py-2 ">
                <AlertTriangle className="h-6 w-6 text-white" />
                <h3 className="text-xl font-semibold text-white ">AI Changes Identity FOREVER</h3>
              </div>
              <div className="bg-white flex sm:text-sm  sm:space-y-4 justify-evenly   border-2 border-primary rounded-[30px] h-80 px-4 lg:py-8 md:py-11 z-10">
                <div className="space-y-8   lg:text-xl md:text-xl text-gray-700 mt-2">
                  <div className="flex items-start  gap-3">
                    <div className="w-2 h-2  bg-primary rounded-full mt-2 flex-shrink-0" />
                    AI Requires Continuous (Loop-Back) Accountability for ALL ACTIONS - Far Beyond
                    ACCESS Logins
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    Traditional “Access-Only” Identity does Not Work for AI Ecosystems
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      AI <strong>deepfakes & social engineering</strong> attacks are exploding
                    </p>
                  </div>
                  {/* <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">
                      Lack of <strong>endpoint identity</strong> for humans,
                      IoT, and AI agents is a root cause of breaches
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <div className="space-y-2">
              <div className="bg-teal-primary/10 p-6 rounded-xl border-2 border-teal-primary/20">
                <h3 className="text-2xl font-bold text-teal-primary mb-3">
                  <span className="text-primary">iVALT</span> Solves Current Identity Threats
                </h3>
                <p className="text-gray-700 text-lg">
                  iVALT delivers a mobile-centric/SaaS platform for verified trust across all
                  digital interactions <strong>using existing infrastructure</strong>.
                </p>
              </div>
              <div className="space-y-3 mt-3">
                <div className="bg-white rounded-xl p-4 border border-gray-200  cursor-pointer ">
                  <div className="flex items-center gap-3">
                    <Lock className="h-5 w-5 text-teal-primary group-hover:scale-110 transition-all duration-300" />
                    <p className="text-gray-700">Stolen credentials become worthless</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-none  cursor-pointer ">
                  <div className="flex items-center gap-3">
                    <Bot className="h-5 w-5 text-teal-primary group-hover:scale-110 transition-all duration-300" />
                    <p className="text-gray-700">User experience is simplified to 1-Click</p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-none cursor-pointer ">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-teal-primary group-hover:scale-110 transition-all duration-300" />
                    <p className="text-gray-700">Social engineering and AI deepfakes are blocked</p>
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
