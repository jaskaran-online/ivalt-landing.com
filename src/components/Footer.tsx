"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Heading4, 
  BodyText, 
  SmallText, 
  Caption 
} from "@/components/ui/typography";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const footerLinks = {
  products: [
    { label: "Universal Biometric ID®", href: "/products/universal-biometric-id" },
    { label: "On-Demand ID™", href: "/products/on-demand-id" },
    { label: "DocuID™", href: "/products/docuid" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Sol", href: "/careers" },
    { label: "Press", href: "/press" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Help Center", href: "/help" },
    { label: "Community", href: "/community" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "GDPR", href: "/gdpr" },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [inquiryType, setInquiryType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setEmail("");
    setMessage("");
    setInquiryType("");
    setIsSubmitting(false);
    
    // You can add actual form submission logic here
    console.log("Form submitted:", { email, message, inquiryType });
  };

  return (
    <footer className="bg-white border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Company Info & Contact Form */}
            <div className="lg:col-span-5">
              <div className="space-y-8">
                {/* Company Logo & Description */}
                <div>
                  <Link href="/" className="inline-block mb-6">
                    <Image
                      src="/logo.png"
                      alt="Company Logo"
                      width={500}
                      height={500}
                      className="w-30 h-auto"
                    />
                  </Link>
                  <BodyText className="text-gray-800 max-w-md">
                    Innovative identity solutions for modern security
                    challenges. Protecting your digital future with advanced
                    authentication technology.
                  </BodyText>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {/* Products */}
                <div>
                  <Heading4 color="navy-primary" className="mb-6">
                    Products
                  </Heading4>
                  <ul className="space-y-3">
                    {footerLinks.products.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-navy-primary transition-colors duration-200"
                        >
                          <SmallText>{link.label}</SmallText>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <Heading4 color="navy-primary" className="mb-6">
                    Company
                  </Heading4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-navy-primary transition-colors duration-200"
                        >
                          <SmallText>{link.label}</SmallText>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal */}
                <div>
                  <Heading4 color="navy-primary" className="mb-6">
                    Legal
                  </Heading4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-gray-600 hover:text-navy-primary transition-colors duration-200"
                        >
                          <SmallText>{link.label}</SmallText>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="border-t border-[#E5E7EB] py-8">
          <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
              {/* Contact Info */}
              <div className="space-y-4">
                <Heading4 color="navy-primary" className="mb-4">
                  Contact Us
                </Heading4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-teal-primary" />
                    <SmallText className="text-gray-700">
                      hello@ivalt.com
                    </SmallText>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-teal-primary" />
                    <SmallText className="text-gray-700">
                      +1 (555) 123-4567
                    </SmallText>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-teal-primary" />
                    <SmallText className="text-gray-700">
                      123 Main St, San Francisco, CA 94101
                    </SmallText>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div>
                <Heading4 color="navy-primary" className="mb-4">
                  Quick Contact
                </Heading4>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white border-gray-300 focus:ring-teal-primary focus:border-teal-primary py-6 placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <Select value={inquiryType} onValueChange={setInquiryType}>
                          <SelectTrigger className="bg-white border-gray-300 focus:ring-teal-primary focus:border-teal-primary w-full py-6 placeholder:text-gray-500">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">
                          Technical Support
                        </SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={4}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-primary focus:border-teal-primary resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-primary hover:bg-teal-primary/90 text-white font-semibold py-6 rounded-lg transition-colors duration-200"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <Caption className="text-gray-500">
              © 2025 iVALT. All rights reserved.
            </Caption>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-navy-primary transition-colors duration-200"
              >
                <Caption>Privacy</Caption>
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-navy-primary transition-colors duration-200"
              >
                <Caption>Terms</Caption>
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-navy-primary transition-colors duration-200"
              >
                <Caption>Cookies</Caption>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 