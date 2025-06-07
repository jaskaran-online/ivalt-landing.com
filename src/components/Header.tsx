"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Why Ivalt",
    href: "/why-ivalt",
  },
  // {
  //   label: "Products",
  //   href: "/products",
  // },
  {
    label: "Solutions",
    href: "/solutions",
  },
  {
    label: "Research",
    href: "/research",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-0">
        <div className="flex justify-between">
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-30 h-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8 h-full">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center px-1 py-5 border-b-2 text-md font-medium transition-colors ${
                      isActive
                        ? "border-navy-primary text-navy-primary"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA Button */}
          {/* <div className="hidden md:flex md:items-center">
            <Button className="bg-primary text-white hover:bg-primary/90">
              Try Now
            </Button>
          </div> */}

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full">
                <SheetHeader>
                  <SheetTitle>Navigation</SheetTitle>
                  <SheetDescription>
                    Navigate through our website sections
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium py-2 px-4 rounded-md transition-colors ${
                          isActive
                            ? "bg-primary text-white"
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                  <div className="pt-4 border-t">
                    <Button className="w-full bg-primary text-white hover:bg-primary/90">
                      Try Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
