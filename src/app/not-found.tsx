import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Heading1, 
  Heading2, 
  BodyText, 
  SmallText 
} from "@/components/ui/typography";
import { Home, ArrowLeft, Search, Mail } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-primary/5 to-navy-primary/10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full text-center">
        {/* Large 404 Number */}
        <div className="mb-8">
          <Heading1 
            color="teal-primary" 
            className="text-8xl sm:text-9xl lg:text-[12rem] font-bold leading-none mb-4"
          >
            404
          </Heading1>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-primary to-navy-primary mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-12">
          <Heading2 color="navy-primary" className="mb-4">
            Page Not Found
          </Heading2>
          <BodyText color="muted" className="mb-6 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. 
            The page might have been moved, deleted, or you entered the wrong URL.
          </BodyText>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4 mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="bg-teal-primary hover:bg-teal-primary/90 text-white"
            >
              <Link href="/" className="inline-flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white"
            >
              <Link href="javascript:history.back()" className="inline-flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back
              </Link>
            </Button>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border border-gray-200">
          <SmallText weight="semibold" color="navy-primary" className="mb-3">
            Need help? Try these options:
          </SmallText>
          <div className="space-y-3">
            <Link 
              href="/search" 
              className="flex items-center justify-center text-gray-600 hover:text-teal-primary transition-colors"
            >
              <Search className="mr-2 h-4 w-4" />
              <SmallText>Search our site</SmallText>
            </Link>
            <Link 
              href="/contact" 
              className="flex items-center justify-center text-gray-600 hover:text-teal-primary transition-colors"
            >
              <Mail className="mr-2 h-4 w-4" />
              <SmallText>Contact support</SmallText>
            </Link>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="mt-8">
          <SmallText color="muted" className="mb-4">
            Popular pages:
          </SmallText>
          <div className="flex flex-wrap justify-center gap-2">
            <Link 
              href="/products" 
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
            >
              Products
            </Link>
            <Link 
              href="/about" 
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm hover:bg-teal-primary/10 hover:text-teal-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 