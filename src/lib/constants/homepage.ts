import {
  FileText,
  Eye,
  Fingerprint,
  Shield,
  Lock,
  Bot,
  Smartphone,
  Zap,
  AlertTriangle,
  TrendingUp,
  Globe,
  Users,
} from "lucide-react";

export const HERO_CONTENT = {
  badge: "Identity Validation Platform®",
  title: "iVALT – Identity Validation Platform®",
  subtitle: "Authenticate Anywhere® & ANYONE",
  description:
    "Revolutionary platform for verified trust across all digital interactions — without passwords. Validate the identity of humans, IoT devices, and AI agents with unprecedented security.",
  buttons: {
    primary: { text: "Learn More", href: "/solutions" },
    secondary: { text: "Get Started", href: "/contact" },
  },
};

export const IDENTITY_CRISIS_CONTENT = {
  title: "The Identity Crisis",
  description:
    "Legacy identity methods—passwords, basic 2FA, device certificates—are failing.",
  statistic: "Roughly 50% of cyberattacks start with stolen credentials",
  risks: [
    "$10.5 trillion projected cybercrime costs annually by 2025",
    "IoT devices now outnumber humans, often with poor security",
    "AI deepfakes & social engineering attacks are exploding",
    "Lack of endpoint identity for humans, IoT, and AI agents is a root cause of breaches",
  ],
  solution: {
    title: "iVALT Solution",
    description:
      "iVALT delivers a revolutionary platform for verified trust across all digital interactions — without passwords.",
  },
};

export const APPLICATIONS_DATA = [
  {
    icon: FileText,
    title: "DocuID®",
    subtitle: "Secure Document Access Control",
    description:
      "Authors embed authorized recipients (via mobile #) in encrypted documents.",
    features: [
      "Recipients verify identity via multi-factor authentication",
      "Full Digital Rights Management (DRM)",
      "Prevents forwarding, printing, screenshots",
    ],
    delay: 0,
  },
  {
    icon: Eye,
    title: "On-Demand ID™",
    subtitle: "Combatting Social Engineering & Deepfakes",
    description: "Real-time identity verification within our mobile app.",
    features: [
      "Instantly verify identity of suspicious calls/messages",
      "Via biometrics & location verification",
      "The only solution worldwide to truly defeat deepfake & social engineering attacks",
    ],
    delay: 0.1,
  },
  {
    icon: Fingerprint,
    title: "Universal Biometric ID®",
    subtitle: "Enterprise Security",
    description: "Enhances corporate Identity and Access Management (IAM).",
    features: [
      'When an employee logs in, iVALT "pings" their mobile',
      "Real-time biometric and contextual verification",
      "Makes stolen passwords useless",
    ],
    delay: 0.2,
  },
];

export const COMPETITIVE_ADVANTAGES = [
  {
    icon: Shield,
    title: "Holistic Identity",
    description: "One platform for Humans, IoT, AI",
    borderColor: "border-l-4 border-teal-primary",
    iconColor: "text-teal-primary",
  },
  {
    icon: Lock,
    title: "5-Factor Security",
    description: "Combines biometrics, location, randomness",
    borderColor: "border-l-4 border-primary",
    iconColor: "text-primary",
  },
  {
    icon: Bot,
    title: "Future-Proof",
    description: "Solves AI, IoT, Deepfake identity risks",
    borderColor: "border-l-4 border-teal-primary",
    iconColor: "text-teal-primary",
  },
  {
    icon: Smartphone,
    title: "User-Friendly",
    description: "No passwords, seamless mobile flow",
    borderColor: "border-l-4 border-primary",
    iconColor: "text-primary",
  },
  {
    icon: Zap,
    title: "Fast Integration",
    description: "OpenAPI, enterprise-ready",
    borderColor: "border-l-4 border-teal-primary",
    iconColor: "text-teal-primary",
  },
];

export const WHY_NOW_ITEMS = [
  {
    icon: AlertTriangle,
    text: "Legacy identity methods are failing at scale",
    iconColor: "text-primary",
  },
  {
    icon: TrendingUp,
    text: "Exponential growth in AI and IoT deployments",
    iconColor: "text-primary",
  },
  {
    icon: Eye,
    text: "Deepfake attacks becoming mainstream threat",
    iconColor: "text-primary",
  },
  {
    icon: Globe,
    text: "Need for universal identity standards",
    iconColor: "text-primary",
  },
];

export const FUTURE_APPLICATIONS = [
  {
    icon: Bot,
    text: "AI Agent Authentication & Authorization",
    color: "text-teal-primary",
  },
  {
    icon: Globe,
    text: "IoT Device Identity Management",
    color: "text-teal-primary",
  },
  {
    icon: Users,
    text: "Advanced Human-AI Interaction Security",
    color: "text-teal-primary",
  },
  {
    icon: Shield,
    text: "Cross-Platform Identity Verification",
    color: "text-teal-primary",
  },
];

export const MARKET_CONTENT = {
  title: "Market Opportunity & Competitive Advantage",
  description:
    "Positioned to capture significant market share in the rapidly growing IAM space",
  marketSize: "$20B+ IAM market, growing rapidly with AI and IoT",
  conclusion:
    "iVALT is positioned to become the global standard for identity validation",
};
