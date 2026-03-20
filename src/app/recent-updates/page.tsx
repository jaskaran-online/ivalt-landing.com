import RecentUpdatesClient from "./page-client";

export const metadata = {
  title: "Recent Updates | iVALT",
  description:
    "Latest news, updates and announcements from iVALT, a leading provider of identity verification and security solutions.",
  keywords:
    "iVALT, recent updates, company news, identity verification, security solutions, 5FA, OnDemand ID, DocuID",
  openGraph: {
    title: "Recent Updates | iVALT",
    description: "Latest news, updates and announcements from iVALT.",
    url: "https://ivalt.com/recent-updates",
    type: "website",
  },
  alternates: {
    canonical: "https://ivalt.com/recent-updates",
  },
};

export default function RecentUpdatesPage() {
  return <RecentUpdatesClient />;
}
