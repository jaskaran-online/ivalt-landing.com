import { Heading4, SmallText } from "@/components/ui/typography";
import { Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function FooterContact() {
  return (
    <div className="bg-[#FAF9F7] py-8">
      <div className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Contact Info */}
          <div className="space-y-4">
            <Heading4 color="navy-primary" className="mb-4">
              Contact Us
            </Heading4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-lg bg-teal-primary/10 flex items-center justify-center transition-colors duration-200 group-hover:bg-teal-primary/20">
                  <Mail className="h-5 w-5 text-teal-primary transition-transform duration-200 group-hover:scale-110" />
                </div>
                <SmallText className="text-gray-700">info@ivalt.com</SmallText>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
