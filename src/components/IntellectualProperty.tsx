import { 
  Heading2, 
  Heading3, 
  BodyText, 
  SmallText 
} from "@/components/ui/typography";
import { CheckIcon } from "lucide-react";

const patentsGranted = [
  {
    title: "Biometric Access for Streaming",
    number: "(10,931,667)"
  },
  {
    title: "Device Identity for IoT",
    number: "(11,115,403)"
  },
  {
    title: "Biometric Password Management",
    number: "(10,491,588)"
  },
  {
    title: "Identity Release & Sharing between Devices",
    number: "(11,736,475)"
  },
  {
    title: "Identity Verification in IoT Networks",
    number: "(12,028,335)"
  },
  {
    title: "Method and System for User Authentication",
    number: "(12,267,321)"
  },
  {
    title: "China: Use of Mobile Biometrics for Online Authentication",
    number: "ZL201980012921.0"
  }
];

const patentsPending = [
  "Wide Variety of Use Cases w/AI",
  "User Data Protection and Control",
  "Streamlined User Experiences",
  "Media Identity Applications",
  "India – Biometrics for Online Auth"
];

const trademarks = [
  "Universal Biometric ID®",
  "iVALT®",
  "Authenticate Anywhere®",
  "IDENTITY Validation Platform®",
  "1-Click to Zero Trust™",
  "On-Demand ID™",
  "DocuID™"
];

export default function IntellectualProperty() {
  return (
    <div className="bg-[#FAF9F7] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <Heading2 color="navy-primary" className="text-3xl mb-4">
            Intellectual Property
          </Heading2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Patents Granted */}
          <div className="bg-white rounded-md shadow-sm p-6">
            <Heading3 color="navy-primary" className="text-xl mb-6 text-center">
              7 Patents Granted:
            </Heading3>
            <div className="space-y-4">
              {patentsGranted.map((patent, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="flex items-center justify-center w-8 h-8 bg-[#FAF9F7] rounded-full mr-2">
                    <CheckIcon className="w-6 h-6 text-teal-primary " />
                  </div>
                  <div>
                    <SmallText className="text-base font-medium text-navy-primary">
                      {patent.title}
                    </SmallText>
                    <SmallText className="text-gray-600 ml-1">
                      {patent.number}
                    </SmallText>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Patents Pending */}
            <div className="bg-white rounded-md shadow-sm p-6">
              <Heading3
                color="navy-primary"
                className="text-xl mb-6 text-center"
              >
                10+ Patents Filed and Pending:
              </Heading3>
              <div className="space-y-4">
                {patentsPending.map((patent, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-[#FAF9F7] rounded-full mr-2">
                      <CheckIcon className="w-6 h-6 text-teal-primary" />
                    </div>
                    <SmallText className="text-base font-medium text-navy-primary">
                      {patent}
                    </SmallText>
                  </div>
                ))}
              </div>
            </div>

            {/* Trademarks */}
            <div className="bg-white rounded-md shadow-sm p-6">
              <Heading3
                color="navy-primary"
                className="text-xl mb-6 text-center"
              >
                Trademarks:
              </Heading3>
              <div className="space-y-4">
                {trademarks.map((trademark, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-[#FAF9F7] rounded-full mr-2">
                      <CheckIcon className="w-6 h-6 text-teal-primary" />
                    </div>
                    <SmallText className="text-base font-medium text-navy-primary">
                      {trademark}
                    </SmallText>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 