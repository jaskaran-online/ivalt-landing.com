"use client";

import { motion } from "framer-motion";
import { Clock, Scale } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  const lastUpdated = "April 15, 2025";

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r bg-[#FAF9F7] py-12 mb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                <Scale className="w-8 h-8 text-navy-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-navy-primary">
              Terms &amp; Conditions
            </h1>
            <p className="text-xl text-gray-600">
              Agreement between you and iVALT
            </p>
            <div className="flex items-center justify-center mt-6 text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              <p>Last Updated: {lastUpdated}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-popup">
            <p className="text-normal text-justify">
              This website is operated by Mundial Financial Group, LLC
              (“Mundial”), a broker- dealer registered with the U.S. Securities
              and Exchange Commission (the “SEC”) and a member of the{" "}
              <Link
                href="https://www.finra.org/#/"
                className="hover:underline text-teal-primary underline"
                target="_blank"
              >
                Financial Industry Regulatory Authority (“FINRA”)
              </Link>{" "}
              and the{" "}
              <Link
                href="https://www.sipc.org/"
                className="hover:underline text-teal-primary underline"
                target="_blank"
              >
                Securities Investors Protection Corporation (“SIPC”)
              </Link>
              , which protects securities customers of its members in the amount
              of up to $500,000 (including $250,000 for claims for cash). An
              explanatory brochure can be found at{" "}
              <Link href="https://www.sipc.org/">www.sipc.org.</Link> Mundial is
              located at [address]. You may find the background of our
              broker-dealer and investment professionals on{" "}
              <Link href="#">FINRA{"'"}s broker/check.</Link> Investment
              opportunities accessible through this website include offerings
              made in reliance on the registration exemptions provided by
              Section 4(a)(2) of the Securities Act of 1933, as amended (the
              “Securities Act”), Rule 506 of Regulation D promulgated
              thereunder, Regulation A, or under Section 4(a)(6) of the
              Securities Act (“Regulation Crowdfunding”) Unless indicated
              otherwise with respect to a particular issuer, all
              securities-related activity is conducted by Mundial. Investment
              opportunities listed on this website are intended for investors
              who do not have a need for a liquid investment. Investments listed
              on this website are speculative in nature and involve a high
              degree of risk. Past performance is not indicative of future
              performance and the value of an investment may go down and result
              in partial or total loss of your investment. Investors who cannot
              afford to lose their entire investment should not invest. Neither
              the SEC nor any federal or state securities commission or
              regulatory authority has recommended or approved any investment or
              the accuracy or completeness of any of the information or
              materials provided by or through this website. All investors
              should read the offering memorandum provided in conjunction with
              this offering. Investment opportunities posted on this website are
              speculative, illiquid, and involve a high degree of risk,
              including the possible loss of your entire investment.&nbsp;
              Except as otherwise stated, all securities listed on this website
              are being offered by Mundial on behalf of the applicable issuer of
              such securities. Although Mundial does provide due diligence
              required by applicable laws and regulations, Mundial is not
              responsible to and does not verify the adequacy, accuracy or
              completeness of any information, representation or warranty, and
              no communication, through this website or in any other medium,
              should be construed as a recommendation for any security offering
              listed therein. In making an investment decision, prospective
              investors must rely on their own examination of the issuer and the
              terms of the offering, including the merits and risks involved,
              and are strongly encouraged to consult with their tax, legal and
              financial advisors. This website also contains offering which are
              being conducted by other broker dealers for which Mundial has a
              commission sharing agreement.&nbsp; Mundial makes no
              representations or warranties with respect to such offering and
              Investors seeking to invest in these offering must register an
              account with such broker dealers.&nbsp; All investors using the
              website must acknowledge the speculative nature of these
              investments and accept the high risks associated with investing in
              illiquid debt securities. These risks include holding your
              investment for one year from purchase, and even after this time,
              there may be no resale market available. And the ability to bear
              the total loss of your investment without a change in your
              lifestyle. All securities offered by companies on this Site
              involve high levels of risk. Only invest an amount that you can
              afford to lose and will not impact your lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
