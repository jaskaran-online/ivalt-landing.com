import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { BodyText, Heading2 } from "@/components/ui/typography";
import { FadeInOnScroll } from "@/components/ui/FadeInOnScroll";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Contact() {
  return (
    <>
      <Container className="bg-[#FAF9F7] py-16">
        <SectionTitle
          title="Contact Us"
          description="Ready to revolutionize your security? Get in touch with our team to learn how iVALT® can protect your organization from identity fraud."
        />

        <div className="max-w-7xl mx-auto mt-16 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <FadeInOnScroll delay={0.2}>
              <Card className="bg-white border-4 border-gray-100 shadow-none">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy-primary">
                    Send us a Message
                  </CardTitle>
                  <BodyText className="text-gray-600">
                    Fill out the form below and we&apos;ll get back to you
                    within 24 hours.
                  </BodyText>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-navy-primary font-medium"
                      >
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        className="border-gray-200 focus:border-teal-primary focus:ring-teal-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-navy-primary font-medium"
                      >
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        className="border-gray-200 focus:border-teal-primary focus:ring-teal-primary/20"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-navy-primary font-medium"
                    >
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@company.com"
                      className="border-gray-200 focus:border-teal-primary focus:ring-teal-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="text-navy-primary font-medium"
                    >
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      className="border-gray-200 focus:border-teal-primary focus:ring-teal-primary/20"
                    />
                  </div>

                  {/* <div className="space-y-2">
                    <Label
                      htmlFor="subject"
                      className="text-navy-primary font-medium"
                    >
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="border-gray-200 focus:border-teal-primary focus:ring-teal-primary/20"
                    />
                  </div> */}

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-navy-primary font-medium"
                    >
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your needs..."
                      rows={5}
                      className="border-gray-200 focus:border-teal-primary focus:ring-teal-primary/20 resize-none"
                    />
                  </div>

                  <Button className="w-full bg-teal-primary hover:bg-navy-primary text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </FadeInOnScroll>

            {/* Contact Information */}
            <div className="space-y-8">
              <FadeInOnScroll delay={0.4}>
                <Card className="bg-white border-4 border-gray-100 shadow-none">
                  <CardHeader>
                    <CardTitle className="text-xl text-navy-primary">
                      Get in Touch
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
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-primary mb-1">
                          Email Us
                        </h3>
                        <BodyText className="text-gray-600">
                          info@ivalt.com
                        </BodyText>
                        <BodyText className="text-gray-600">
                          support@ivalt.com
                        </BodyText>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInOnScroll>

              <FadeInOnScroll delay={0.6}>
                <Card className="bg-gradient-to-br from-teal-primary to-navy-primary text-white shadow-none">
                  <CardContent className="p-8">
                    <Heading2 className="text-white text-xl mb-4">
                      Ready to Get Started?
                    </Heading2>
                    <BodyText className="text-white/90">
                      We will be in touch to talk about your needs and schedule
                      a demo.
                    </BodyText>
                  </CardContent>
                </Card>
              </FadeInOnScroll>
            </div>
          </div>

          {/* FAQ Section */}
          <FadeInOnScroll delay={0.8} className="mt-20">
            <div className="text-center mb-12">
              <Heading2 color="dark-navy" className="text-3xl mb-4">
                Frequently Asked Questions
              </Heading2>
              <BodyText className="text-gray-600 max-w-2xl mx-auto">
                Have questions? Here are some of the most common ones we
                receive.
              </BodyText>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <Card className="bg-white border-4 border-gray-100 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-primary mb-3">
                    How quickly can we implement iVALT®?
                  </h3>
                  <BodyText className="text-gray-600">
                    Implementation typically takes 2-4 weeks depending on your
                    existing infrastructure and requirements.
                  </BodyText>
                </CardContent>
              </Card>

              <Card className="bg-white border-4 border-gray-100 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-primary mb-3">
                    What support do you provide?
                  </h3>
                  <BodyText className="text-gray-600">
                    We offer 24/7 technical support, comprehensive
                    documentation, and dedicated customer success managers.
                  </BodyText>
                </CardContent>
              </Card>

              <Card className="bg-white border-4 border-gray-100 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-primary mb-3">
                    Is iVALT® compliant with industry standards?
                  </h3>
                  <BodyText className="text-gray-600">
                    Yes, iVALT® meets SOC 2, GDPR, HIPAA, and other major
                    compliance requirements.
                  </BodyText>
                </CardContent>
              </Card>

              <Card className="bg-white border-4 border-gray-100 shadow-none">
                <CardContent className="p-6">
                  <h3 className="font-bold text-navy-primary mb-3">
                    Can we customize the solution?
                  </h3>
                  <BodyText className="text-gray-600">
                    Absolutely! iVALT® can be customized to fit your specific
                    security policies and user workflows.
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
