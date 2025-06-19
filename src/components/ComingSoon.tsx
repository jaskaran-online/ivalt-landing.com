"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Heading1,
  Heading2,
  BodyText,
  SmallText,
  Caption,
} from "@/components/ui/typography";
import { Mail, Bell, CheckCircle } from "lucide-react";
import Image from "next/image";

interface ComingSoonProps {
  title?: string;
  subtitle?: string;
  description?: string;
  launchDate?: Date;
  showCountdown?: boolean;
  showEmailSignup?: boolean;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function ComingSoon({
  title = "Coming Soon",
  subtitle = "Something amazing is on the way",
  description = "We're working hard to bring you something special. Stay tuned for updates and be the first to know when we launch.",
  launchDate,
  showCountdown = false,
  showEmailSignup = false,
  className = "",
}: ComingSoonProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!launchDate || !showCountdown) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate, showCountdown]);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail("");

    // You can add actual email signup logic here
    console.log("Email signup:", email);
  };

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
      <div className="text-3xl md:text-4xl font-bold text-white mb-1">
        {value.toString().padStart(2, "0")}
      </div>
      <SmallText className="text-gray-200 uppercase tracking-wider">
        {label}
      </SmallText>
    </div>
  );

  return (
    <div className={` bg-[#FAF9F7]  px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="w-full text-center">
        {/* Main Content */}
        <div className="mb-12">
          <div className="flex justify-center mb-12">
            <Image
              src="/logo-transparent-bg.png"
              alt="logo"
              width={500}
              height={500}
              className="w-56 h-auto"
            />
          </div>
          {/* Title & Subtitle */}
          <Heading1 className="text-navy-primary mb-4">{title}</Heading1>
          <Heading2 color="teal-primary" className="mb-6 text-2xl">
            {subtitle}
          </Heading2>
          <BodyText className="text-gray-800 max-w-2xl mx-auto mb-8">
            {description}
          </BodyText>
        </div>

        {/* Countdown Timer */}
        {showCountdown && launchDate && (
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto">
              <CountdownBox value={timeLeft.days} label="Days" />
              <CountdownBox value={timeLeft.hours} label="Hours" />
              <CountdownBox value={timeLeft.minutes} label="Minutes" />
              <CountdownBox value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
        )}

        {/* Email Signup */}
        {showEmailSignup && (
          <div className="max-w-md mx-auto">
            {!isSubscribed ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center justify-center mb-4">
                  <Bell className="w-5 h-5 text-teal-primary mr-2" />
                  <SmallText weight="semibold" className="text-white">
                    Get notified when we launch
                  </SmallText>
                </div>
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:ring-teal-primary focus:border-teal-primary"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-teal-primary hover:bg-light-teal text-white font-semibold"
                  >
                    {isSubmitting ? "Subscribing..." : "Notify Me"}
                    {!isSubmitting && <Mail className="ml-2 h-4 w-4" />}
                  </Button>
                </form>
                <Caption className="text-gray-400 mt-3">
                  We&apos;ll never spam you. Unsubscribe at any time.
                </Caption>
              </div>
            ) : (
              <div className="bg-teal-primary/20 border border-teal-primary/30 rounded-lg p-6">
                <div className="flex items-center justify-center mb-3">
                  <CheckCircle className="w-6 h-6 text-teal-primary mr-2" />
                  <SmallText weight="semibold" className="text-white">
                    You&apos;re all set!
                  </SmallText>
                </div>
                <BodyText className="text-gray-300">
                  We&apos;ll email you as soon as we launch. Thanks for your
                  interest!
                </BodyText>
              </div>
            )}
          </div>
        )}

        {/* Social Links or Additional Info */}
        {/* <div className="mt-16 pt-8 border-t border-white/20">
          <SmallText className="text-gray-400 mb-4">
            Follow us for updates
          </SmallText>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-teal-primary transition-colors"
            >
              Twitter
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-teal-primary transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-teal-primary transition-colors"
            >
              GitHub
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
