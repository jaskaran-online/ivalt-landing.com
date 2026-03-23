'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Download,
  Menu,
  ChevronDown,
  FileLock,
  Smartphone,
  ShieldCheck,
  Sparkles,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export const navItems = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Why iVALT',
    href: '/why-ivalt',
  },
  {
    label: 'Solutions',
    href: '/solutions',
    dropdown: [
      {
        label: 'DocuID®',
        href: '/solutions/docuid',
        icon: FileLock,
        description: 'Secure Document Access Control',
      },
      {
        label: 'On-Demand ID™',
        href: '/solutions/ondemandid',
        icon: Smartphone,
        description: 'Combat Deepfakes & Social Engineering',
      },
      {
        label: 'Human-Bound Authority',
        href: '/solutions/human-bound-authority',
        icon: ShieldCheck,
        description: 'Provable at Execution',
      },
    ],
  },
  // {
  //   label: 'Recent Updates',
  //   href: '/recent-updates',
  //   badge: 'New',
  // },
  // {
  //   label: 'Download Brochure',
  //   href: '/brochures',
  //   badge: 'New',
  //   dropdown: [
  //     {
  //       label: 'iVALT Brochure',
  //       href: '/brochures/iVALT-brochure-final-version.pdf',
  //       icon: Download,
  //       description: 'Company overview brochure',
  //     },
  //     {
  //       label: 'DocuID Brochure',
  //       href: '/brochures/DocuID-Brochure.pdf',
  //       icon: FileText,
  //       description: 'DocuID® solution brochure',
  //     },
  //     {
  //       label: 'Ondemandid Brochure',
  //       href: '/brochures/On-DemandID-Brochure.pdf',
  //       icon: FileText,
  //       description: 'On-Demand ID™ solution brochure',
  //     },
  //   ],
  // },
  {
    label: 'About',
    href: '/about',
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg shadow-gray-300/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-0">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-8 w-full justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <Image
                  src="/logo-transparent-bg.png"
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-30 h-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-8 h-full">
              {navItems.map(item => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

                if (item.dropdown) {
                  return (
                    <div
                      key={item.href}
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.href)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <div
                        className={`group inline-flex items-center border-b-2 transition-colors ${
                          isActive
                            ? 'border-navy-primary'
                            : 'border-transparent hover:border-gray-300'
                        }`}
                      >
                        <Link
                          href={item.href}
                          className={`inline-flex items-center py-5 pl-1 pr-0.5 text-md font-medium ${
                            isActive
                              ? 'text-navy-primary'
                              : 'text-gray-500 group-hover:text-gray-700'
                          }`}
                        >
                          {item.label}
                        </Link>
                        <span
                          className={`inline-flex items-center py-5 pr-1 ${
                            isActive
                              ? 'text-navy-primary'
                              : 'text-gray-500 group-hover:text-gray-700'
                          }`}
                          aria-hidden
                        >
                          <ChevronDown
                            className={`ml-0.5 h-4 w-4 shrink-0 transition-transform ${openDropdown === item.href ? 'rotate-180' : ''}`}
                          />
                        </span>
                      </div>

                      {/* Dropdown Menu */}
                      {openDropdown === item.href && (
                        <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                          {item.dropdown.map(subItem => {
                            const Icon = subItem.icon;
                            return (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                target={item.label === 'Download Brochure' ? '_blank' : undefined}
                                rel={
                                  item.label === 'Download Brochure'
                                    ? 'noopener noreferrer'
                                    : undefined
                                }
                                className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50 transition-colors"
                              >
                                <div className="w-10 h-10 rounded-lg bg-teal-primary/10 flex items-center justify-center flex-shrink-0">
                                  <Icon className="w-5 h-5 text-teal-primary" />
                                </div>
                                <div>
                                  <div className="font-semibold text-navy-primary text-sm">
                                    {subItem.label}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-0.5">
                                    {subItem.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`inline-flex items-center px-1 py-5 border-b-2 text-md font-medium transition-colors ${
                      isActive
                        ? 'border-navy-primary text-navy-primary'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-1.5 inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-bold bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-sm">
                        <Sparkles className="w-2.5 h-2.5" />
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="items-center gap-4 hidden md:flex">
              <Button variant="shiny" size="lg" className=" rounded-[15px]">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>

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
                  <SheetTitle>
                    <Image
                      src="/logo-transparent-bg.png"
                      alt="logo"
                      width={500}
                      height={500}
                      className="w-30 h-auto"
                    />
                  </SheetTitle>
                  <SheetDescription>
                    iVALT is a company that provides a platform for identity verification.
                  </SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-8 px-4">
                  {navItems.map(item => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

                    if (item.dropdown) {
                      return (
                        <div key={item.href} className="space-y-2">
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`block text-lg font-medium py-2 px-4 rounded-sm transition-colors ${
                              isActive
                                ? 'bg-primary text-white'
                                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                            }`}
                          >
                            {item.label}
                          </Link>
                          <div className="pl-4 space-y-1">
                            {item.dropdown.map(subItem => {
                              const Icon = subItem.icon;
                              const isSubActive = pathname === subItem.href;
                              return (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  target={item.label === 'Download Brochure' ? '_blank' : undefined}
                                  rel={
                                    item.label === 'Download Brochure'
                                      ? 'noopener noreferrer'
                                      : undefined
                                  }
                                  onClick={() => setIsOpen(false)}
                                  className={`flex items-center gap-2 py-2 px-4 rounded-sm transition-colors ${
                                    isSubActive
                                      ? 'bg-teal-primary text-white'
                                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                                  }`}
                                >
                                  <Icon className="w-4 h-4" />
                                  <span className="text-base">{subItem.label}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium py-2 px-4 rounded-sm transition-colors flex items-center justify-between ${
                          isActive
                            ? 'bg-primary text-white'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                        }`}
                      >
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-bold bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-sm">
                            <Sparkles className="w-2.5 h-2.5" />
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                  <div className="pt-4 border-t">
                    <div className="flex items-center gap-4 w-full flex-col">
                      <Button variant="shiny" size="lg" className=" rounded-[15px] w-full">
                        <Link href="/contact">Contact Us</Link>
                      </Button>
                      <Button
                        key={2}
                        size="lg"
                        variant="shiny"
                        className="h-10.5 rounded-xl bg-white px-5 border-primary border-1 text-primary hover:bg-primary hover:text-white transition-all duration-300 shadow-sm w-full"
                      >
                        <Link
                          href="/brochures/iVALT-brochure-final-version.pdf"
                          className="flex items-center gap-2"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="size-4 mr-2" />
                          <span className="text-nowrap">Download iVALT Brochure</span>
                        </Link>
                      </Button>
                    </div>
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
