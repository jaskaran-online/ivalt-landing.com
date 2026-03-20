import { Metadata } from "next";
import OpenVPNPageClient from "./page-client";

export const metadata: Metadata = {
  title: "OpenVPN + iVALT Integration",
  description: "iVALT and OpenVPN have partnered to deliver a next-generation secure remote access solution with passwordless VPN authentication.",
  openGraph: {
    title: "OpenVPN + iVALT Integration",
    description: "iVALT and OpenVPN have partnered to deliver a next-generation secure remote access solution.",
  },
  twitter: {
    title: "OpenVPN + iVALT Integration",
    description: "iVALT and OpenVPN have partnered to deliver a next-generation secure remote access solution.",
  },
};

export default function OpenVPNPage() {
  return <OpenVPNPageClient />;
}
