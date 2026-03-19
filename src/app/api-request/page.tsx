import Container from '@/components/Container';
import SectionTitle from '@/components/SectionTitle';
import { BodyText, Heading2 } from '@/components/ui/typography';
import { FadeInOnScroll } from '@/components/ui/FadeInOnScroll';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ApiRequestForm from '@/components/ApiRequestForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Request API Access | iVALT',
  description:
    "Request API access to integrate iVALT's identity verification and biometric security solutions into your applications. Get your API key and start building.",
  keywords:
    'iVALT API, API access, identity verification API, biometric authentication API, developer API, integration',
  openGraph: {
    title: 'Request API Access | iVALT',
    description:
      "Get API access to integrate iVALT's identity verification solutions into your applications.",
    url: 'https://ivalt.com/api-request',
    type: 'website',
  },
  alternates: {
    canonical: 'https://ivalt.com/api-request',
  },
};

export default function ApiRequest() {
  return (
    <>
      <Container className="bg-[#FAF9F7] py-16">
        <SectionTitle
          title="Request API Access"
          description="Get started with iVALT's powerful API to integrate advanced identity verification and biometric security into your applications."
        />

        <div className="max-w-7xl mx-auto mt-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* API Request Form */}
            <FadeInOnScroll delay={0.2}>
              <ApiRequestForm />
            </FadeInOnScroll>

            {/* Information Section */}
            <div className="space-y-8">
              <FadeInOnScroll delay={0.4}>
                <Card className="bg-white border-4 border-gray-100 shadow-none">
                  <CardHeader>
                    <CardTitle className="text-xl text-navy-primary">
                      What You&apos;ll Get
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-teal-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-primary mb-1">API Key Access</h3>
                        <BodyText className="text-gray-600">
                          Receive your unique API key to authenticate requests to our identity
                          verification endpoints.
                        </BodyText>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-teal-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-primary mb-1">
                          Comprehensive Documentation
                        </h3>
                        <BodyText className="text-gray-600">
                          Access detailed API documentation with code examples and integration
                          guides.
                        </BodyText>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-teal-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-teal-primary"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-primary mb-1">Developer Support</h3>
                        <BodyText className="text-gray-600">
                          Get dedicated support from our technical team to help you integrate and
                          optimize your implementation.
                        </BodyText>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.6}>
                <Card className="bg-gradient-to-br from-teal-primary to-navy-primary text-white shadow-none">
                  <CardContent className="p-8">
                    <Heading2 className="text-white text-xl mb-4">Ready to Build?</Heading2>
                    <BodyText className="text-white/90">
                      Once you receive your API key, you can start integrating iVALT&apos;s identity
                      verification solutions into your application within minutes.
                    </BodyText>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            </div>
          </div>

          {/* API Features Section */}
          <FadeInOnScroll delay={0.8} className="mt-20">
            <div className="text-center mb-12">
              <Heading2 color="dark-navy" className="text-3xl mb-4">
                API Capabilities
              </Heading2>
              <BodyText className="text-gray-600 max-w-2xl mx-auto">
                Our API provides powerful endpoints for identity verification, biometric
                authentication, and secure document access.
              </BodyText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white border-4 border-gray-100 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-primary mb-3">Identity Verification</h3>
                  <BodyText className="text-gray-600">
                    Verify user identities in real-time using advanced biometric matching and
                    document validation.
                  </BodyText>
                </CardContent>
              </Card>

              <Card className="bg-white border-4 border-gray-100 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-primary mb-3">Biometric Authentication</h3>
                  <BodyText className="text-gray-600">
                    Integrate face recognition and fingerprint authentication for secure user
                    access.
                  </BodyText>
                </CardContent>
              </Card>

              <Card className="bg-white border-4 border-gray-100 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-primary mb-3">Document Security</h3>
                  <BodyText className="text-gray-600">
                    Secure document access and verification with DocuID integration endpoints.
                  </BodyText>
                </CardContent>
              </Card>
            </div>
          </FadeInOnScroll>
        </div>
      </Container>
    </>
  );
}
