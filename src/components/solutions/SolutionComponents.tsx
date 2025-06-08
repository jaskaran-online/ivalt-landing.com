import Container from "../Container";
import SectionTitle from "../SectionTitle";

import { FadeInOnScroll } from "../ui/FadeInOnScroll";
import Image from "next/image";

import swager from "@/assets/images/solutions/components/swager.png";
import okta from "@/assets/images/solutions/components/okta.png";
import npm from "@/assets/images/solutions/components/npm.png";
import auth0 from "@/assets/images/solutions/components/auth0.png";
import ping from "@/assets/images/solutions/components/ping-identity.png";

import logos from "@/assets/images/solutions/components/logos.png";
import admin from "@/assets/images/solutions/components/admin.png";
import mobile from "@/assets/images/solutions/components/mobile.png";
import mobileScreens from "@/assets/images/solutions/components/mobile-screens.png";

export default function SolutionComponents() {
  return (
    <FadeInOnScroll className="py-12">
      <Container className="max-w-7xl">
        <SectionTitle
          title="Solution Components"
          description="Easy Deployments.  Fast User Onboarding.  User Management."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto h-full w-full">
          <div className="bg-white h-full w-full p-4 rounded-lg md:p-8">
            <h1 className="text-lg font-bold text-center mb-4 text-navy-primary">
              Enterprise IT and Dev Tools for New Prod Dev and IAM
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg flex flex-col items-center justify-center gap-4">
                <Image src={swager} alt="Swager" width={100} height={100} />
                <Image src={npm} alt="NPM" width={100} height={100} />
                <Image src={okta} alt="Okta" width={100} height={100} />
                <Image src={auth0} alt="Auth0" width={100} height={100} />
                <Image
                  src={ping}
                  alt="Ping Identity"
                  width={100}
                  height={100}
                />
              </div>
              <div className="p-4 flex flex-col items-center justify-center gap-4">
                <h1 className="text-lg font-semibold text-center">OpenAPI</h1>
                <h1 className="text-md text-gray-500 font-semibold">
                  Libraries
                </h1>
                <h1 className="text-md text-gray-500 font-semibold">
                  Integrations
                </h1>
                <h1 className="text-md text-gray-500 font-semibold text-center">
                  OAuth 2.0, OIDC, SAML, FIDO2 (MFA, CIBA)
                </h1>
              </div>
            </div>
            <h2 className="text-md text-gray-500 font-bold mt-4 text-center">
              Only Required for IAM, Application and New Product Integrations
            </h2>
          </div>
          <div className="bg-white h-full w-full p-4 rounded-lg md:p-8 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-lg font-bold text-center mb-2 text-navy-primary">
                Unique SaaS Tenant
              </h1>
              <Image src={logos} alt="Logos" width={600} height={400} />
              <h1 className="text-lg font-bold text-center mb-2 text-navy-primary">
                “ID Connection”
              </h1>
              <Image src={admin} alt="Admin" width={600} height={400} />
              <h1 className="text-lg font-bold text-center mb-2 text-navy-primary">
                User Management
              </h1>
            </div>
          </div>
          <div className="bg-white h-full w-full p-4 rounded-lg md:p-8 flex flex-col items-center justify-between relative">
            <h1 className="text-lg font-bold text-center mb-2 text-navy-primary">
              Users Download Mobile App
            </h1>
            <Image
              src={mobile}
              alt="Mobile"
              width={400}
              height={300}
              className="w-[60%] rounded-lg shadow-lg border-4 border-navy-primary p-2"
            />
            <Image
              src={mobileScreens}
              alt="Mobile Screens"
              width={600}
              height={400}
              className="w-44 absolute top-[40%] -right-4 md:-right-12 rounded-lg shadow-lg border-4 border-teal-primary p-2 bg-white"
            />
          </div>
        </div>
        {/* 
        <div className="flex flex-col items-start justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
            {Points.map((point, index) => (
              <FadeInOnScroll
                delay={index * 2}
                key={index}
                className="inline-flex items-center justify-start gap-4 mb-2 text-left"
              >
                <div className="flex items-center justify-center bg-[#FAF9F7] rounded-full p-2 shadow-sm">
                  <Check
                    className="text-navy-primary w-6 h-6"
                    width={24}
                    height={24}
                  />
                </div>
                <h1 className="text-lg text-navy-primary text-left">{point}</h1>
              </FadeInOnScroll>
            ))}
          </div>
        </div> */}
      </Container>
    </FadeInOnScroll>
  );
}
