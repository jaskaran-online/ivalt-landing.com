"use client";

import { motion } from "framer-motion";
import { Shield, Clock } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
                <Shield className="w-8 h-8 text-navy-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-4xl font-bold mb-4 text-navy-primary">
              IVALT, INC. PRIVACY POLICY &amp; EULA
            </h1>

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
            <p className="text-normal text-justify ">
              This Privacy Policy (“Policy”) describes how iVALT, Inc. and its
              related companies (“Company”) collect, use and share personal
              information of users in the use of its WordPress plug-in and
              authentication services.
            </p>
            <h3 className="text-2xl text-normal text-justify font-bold mt-7 mb-4 text-navy-primary">
              WHAT WE COLLECT
            </h3>
            <p className="text-normal text-justify ">
              The Company may collect information about you in several ways.
            </p>
            <p>
              This site is being monitored by one or more third-party monitoring
              software(s) and may capture information about your visit that will
              help us improve the quality of our service. You may opt-out from
              the data that&nbsp;
              <Link
                href="https://smartpixl.com/"
                target="_blank"
                rel="noopener"
                className="text-teal-primary underline"
                data-saferedirecturl="https://www.google.com/url?q=https://smartpixl.com&source=gmail&ust=1719434953666000&usg=AOvVaw2dDf1dtZC_dikm3ZpJSxe7"
              >
                https://smartpixl.com
              </Link>
              &nbsp;is collecting on your visit through a universal consumer
              options page located at&nbsp;
              <Link
                href="https://smartpixl.com/Unsub/unsub.html"
                target="_blank"
                rel="noopener"
                className="text-teal-primary underline"
                data-saferedirecturl="https://www.google.com/url?q=https://smartpixl.com/Unsub/unsub.html&source=gmail&ust=1719434953666000&usg=AOvVaw2FVPloyqM0WU0jTNXyCagK"
              >
                https://smartpixl.com/Unsub/
                <wbr />
                unsub.html
              </Link>
              .
            </p>
            <p className="text-normal text-justify ">
              Information You Give Us. The Company may collect your name, email
              address, website URL and mobile phone number, as well as any other
              information you directly give us in the course of using our
              plug-in and services. This information may be collected from the
              Company{"’"}s WordPress plug-in or through registering and
              enrolling on the associated mobile application made available by
              the Company.
            </p>
            <p className="text-normal text-justify ">
              Information We Collect from Our Mobile Application. The Company
              collects your mobile number and facial profile information on the
              Company{"’"}s mobile application you download in the course of
              setting up the WordPress authentication services. This information
              is collected separately from WordPress and is stored on your
              mobile phone. The Company collects and/or store biometrics
              information on the user{"’"}s mobile phone.
            </p>
            <p className="text-normal text-justify ">
              Therefore, we collect two types of data, i.e., metadata for the
              user and the encoded data of the user{"’"}s face. The user
              metadata is stored in our Server in encrypted manner. The face
              data is stored on the user{"’"}s mobile phone. The metadata is
              stored indefinitely unless the user explicitly asks us via email
              to remove it from our server.
            </p>
            <h3 className="text-2xl text-normal text-justify font-bold mt-7 mb-4 text-navy-primary">
              USE OF PERSONAL INFORMATION
            </h3>
            <p className="text-normal text-center font-bold ">
              The Company may use your personal information as follows:
            </p>
            <ul className="flex flex-col gap-3 list-disc mt-4">
              <li className="text-normal text-justify">
                The Company uses your personal information to enable and provide
                enhanced authentication services for your WordPress website.
              </li>
              <li className="text-normal text-justify">
                The Company may use your personal information to inform you of
                changes in our services and ask for your opinions in making our
                services better or for your recommendations of other services
                you might find valuable that could be delivered by the Company.
              </li>
            </ul>
            <h3 className="text-2xl text-normal text-justify font-bold mt-7 mb-4 text-navy-primary">
              SHARING OF PERSONAL INFORMATION
            </h3>
            <p className="text-normal text-center font-bold mt-4 mb-4 text-navy-primary">
              We may share personal information as follows:
            </p>
            <ul className="flex flex-col gap-4 list-disc">
              <li className="text-normal text-justify ">
                The Company may share personal information for legal,
                protection, and safety purposes.
                <ul className="flex flex-col gap-2 mt-4 list-decimal ml-8">
                  <li className="text-normal text-justify">
                    We may share information to comply with laws.
                  </li>
                  <li className="text-normal text-justify">
                    We may share information to respond to lawful requests and
                    legal processes.
                  </li>
                  <li className="text-normal text-justify">
                    We may share information to protect the rights and property
                    of the Company, our agents, customers, and others. This
                    includes enforcing our agreements, policies, and terms of
                    use.
                  </li>
                  <li className="text-normal text-justify">
                    We may share information in an emergency. This includes
                    protecting the safety of our employees and agents, our
                    customers, or any person.
                  </li>
                </ul>
              </li>
              <li>
                The Company may share personal information when we do a business
                deal, or negotiate a business deal, involving the sale or
                transfer of all or a part of our business or assets. These deals
                can include any merger, financing, acquisition, or other
                business transaction
              </li>
              <li>
                The Company may share information with those who need it to do
                work for us.
              </li>
              <li>
                The Company will only share information for Marketing with your
                consent.
              </li>
            </ul>
            <h3 className="text-normal text-justify font-bold">&nbsp;</h3>
            <h3 className="text-2xl text-normal text-justify font-bold mt-7 mb-4 text-navy-primary">
              INFORMATION CHANGES
            </h3>
            <p className="text-normal text-justify ">
              All information the Company collects from you can be modified
              within the WordPress dashboard or through the associated mobile
              application on your mobile phone. You may{" "}
              <strong className="text-navy-primary">“opt-out”</strong> at any
              time by discontinuing the use of the Company&apos;s WordPress
              plug-in and deleting the Company&apos;s mobile application from
              your mobile phone. The user may send us an email at{" "}
              <a
                href="mailto:support@ivalt.com"
                className="text-teal-primary underline"
              >
                support@ivalt.com
              </a>{" "}
              to explicitly ask for removal of their data. As a follow-up, we
              will ensure the removal of the data (metadata) from our system.
            </p>
            <p className="text-normal text-justify ">
              CHANGES TO THIS PRIVACY POLICY. We may change this Policy. If we
              make any changes, we will change the Last Updated date above.
              ACCEPTANCE OF TERMS. By using the Company’s authentication service
              for WordPress, you are hereby accepting the terms of this Policy.
              If you are not in agreement with the Policy and its terms and
              conditions, please refrain from use of the Company’s services
              immediately and “optout” within WordPress and delete the
              associated Company mobile app. If you continue using the Company’s
              services following the posting of changes or updates to this
              Privacy Policy, your use shall mean that you are in agreement with
              such changes.
            </p>
            <h3 className="text-2xl text-normal text-justify font-bold mt-7 mb-4 text-navy-primary">
              SOFTWARE END USER LICENSE AGREEMENT
            </h3>
            <p className="text-normal text-justify ">
              <strong> IMPORTANT-READ CAREFULLY:</strong> This End-User License
              Agreement (“EULA”) is a legal agreement between you (either an
              individual or a single entity) and (“Distributor”) for the
              software product identified above, which includes computer
              software and may include associated hardware, media, printed
              materials, and other “online” or electronic documentation
              (“SOFTWARE”). By installing, copying, or otherwise using the
              SOFTWARE, you agree to be bound by the terms and conditions of
              this EULA. If you do not agree to the terms of this EULA, do not
              install or use the SOFTWARE. The SOFTWARE is protected by
              copyright laws and international copyright treaties, as well as
              other intellectual property laws and treaties. The SOFTWARE is
              licensed, not sold. 1. LIMITED USE LICENSE. This EULA grants you
              the non-exclusive, non-transferable, limited right and license to
              install and use one copy of the SOFTWARE solely and exclusively
              for your use. All rights not specifically granted under this EULA
              are reserved by the Distributor. Your license confers no title or
              ownership in the SOFTWARE and should not be construed as a sale of
              any rights in the SOFTWARE. 2. OWNERSHIP AND INTELLECTUAL PROPERTY
              RIGHTS. All title, ownership rights and intellectual property
              rights in and to the SOFTWARE and any and all copies thereof are
              owned by Distributor or its licensors. This SOFTWARE is protected
              by the copyright laws of the United States, international
              copyright treaties and conventions and other laws. This SOFTWARE
              contains certain licensed materials and Distributor’s licensors
              may protect their rights in the event of any violation of this
              EULA. Therefore, you must treat the SOFTWARE like any other
              copyrighted material.
            </p>
            <h3 className="text-2xl text-normal text-justify font-bold mt-7 mb-4 text-navy-primary">
              DESCRIPTION OF OTHER RIGHTS AND LIMITATIONS.
            </h3>
            <ul className="flex flex-col gap-4 list-disc ml-8">
              <li className="text-normal text-justify">
                Limitations on Reverse-Engineering, Decompilation, and
                Disassembly. You may not reverse- engineer, decompile, or
                disassemble the SOFTWARE, except and only to the extent that
                such activity is expressly permitted by applicable law
                notwithstanding this limitation.
              </li>
              <li className="text-normal text-justify">
                Rental. You may not rent or lease the SOFTWARE.
              </li>
              <li className="text-normal text-justify">
                Software Transfer. You may permanently transfer all of your
                rights under this EULA, provided you retain no copies, you
                transfer all of the SOFTWARE (including all component parts, the
                media and printed materials, any upgrades, this EULA, and, if
                applicable, the Certificate of Authenticity), and the recipient
                agrees to the terms of this EULA. If the SOFTWARE is an upgrade,
                any transfer must include all prior versions of the SOFTWARE.
              </li>
              <li>
                Termination. Without prejudice to any other rights, Distributor
                may terminate this EULA if you fail to comply with the terms and
                conditions of this EULA. In such event, you must immediately
                destroy all copies of the SOFTWARE and all of its component
                parts.
              </li>
              <li className="text-normal text-justify">
                <strong className="my-4 text-navy-primary">
                  YOU SHALL NOT:
                </strong>
                <ul className="flex flex-col gap-2 list-decimal ml-8">
                  <li className="text-normal text-justify">
                    Use the SOFTWARE, or permit use of the SOFTWARE, on more
                    than one computer, computer terminal, or workstation at the
                    same time.
                  </li>
                  <li className="text-normal text-justify">
                    Make copies of the SOFTWARE or any part thereof, or make
                    copies of the materials accompanying the SOFTWARE.
                  </li>
                  <li className="text-normal text-justify">
                    Sell, rent, lease, distribute or otherwise transfer the
                    SOFTWARE, or any copies of the SOFTWARE, in whole or in
                    part.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="text-normal text-justify mt-4">
              <strong className="text-navy-primary">
                EXPORT RESTRICTIONS.
              </strong>{" "}
              You agree that neither you nor your customers intend to or will,
              directly or indirectly, export or transmit (a) the SOFTWARE or
              related documentation and technical data, or process, or service
              that is the direct product of the SOFTWARE, to any country to
              which such export or transmission is restricted by any applicable
              U.S. regulation or statute, without the prior written consent, if
              required, of the Bureau of Export Administration of the U.S.
              Department of Commerce, or such other governmental entity as may
              have jurisdiction over such export or transmission.
            </p>
            <h3 className="text-2xl text-normal text-justify font-bold mt-7 mb-4 text-navy-primary">
              MISCELLANEOUS
            </h3>
            <ul className="flex flex-col gap-4 list-disc ml-8">
              <li className="text-normal text-justify">
                This EULA is governed by the laws of the State of Illinois,
                United States of America.
              </li>
              <li className="text-normal text-justify">
                <strong className="text-navy-primary">NO WARRANTIES.</strong> To
                the maximum extent permitted by applicable law, Distributor
                expressly disclaims any warranty for the SOFTWARE. The SOFTWARE
                and any related documentation are provided “as is” without
                warranty of any kind, either express or implied, including,
                without limitation, the implied warranties of merchantability or
                fitness for a particular purpose. The entire risk arising out of
                use or performance of the SOFTWARE remains with you.
              </li>
              <li className="text-normal text-justify">
                <strong className="text-navy-primary">
                  LIMITATION OF LIABILITY.
                </strong>{" "}
                Distributor’s entire liability and your exclusive remedy under
                this EULA shall not exceed the purchase price of the SOFTWARE.
              </li>
              <li className="text-normal text-justify">
                <strong className="text-navy-primary">
                  NO LIABILITY FOR DAMAGES.
                </strong>{" "}
                To the maximum extent permitted by applicable law, in no event
                shall Distributor or its licensors be liable for any damages
                whatsoever (including, without limitation, damages for loss of
                business profit, business interruption, loss of business
                information, or any other pecuniary loss) arising out of the use
                of, or inability to use, the SOFTWARE, even if Distributor has
                been advised of the possibility of such damages. Because some
                states/jurisdictions do not allow the exclusion or limitation of
                liability for consequential or incidental damages, the above
                limitation may not apply to you.
              </li>
              <li className="text-normal text-justify">
                <strong className="text-navy-primary">INJUNCTION.</strong>{" "}
                Because Distributor would be irreparably damaged if the terms
                and conditions of the EULA were not specifically enforced, you
                agree that Distributor shall be entitled, without bond, other
                security or proof of damages, to appropriate equitable remedies
                with respect to breaches of this EULA, in addition to such other
                remedies as Distributor may otherwise have under applicable
                laws.
              </li>
              <li className="text-normal text-justify">
                <strong className="text-navy-primary">INDEMNITY.</strong> You
                agree to indemnify, defend and hold Distributor, its licensors,
                partners, affiliates, contractors, officers, directors,
                employees and agents harmless from all damages, losses and
                expenses arising directly or indirectly from your acts and
                omissions to act in using the SOFTWARE pursuant to the terms of
                this EULA.
              </li>
              <li className="text-normal text-justify">
                <strong className="text-navy-primary">
                  U.S. GOVERNMENT RESTRICTED RIGHTS.
                </strong>{" "}
                The software and documentation have been developed entirely at
                private expense and are provided as “Commercial Computer
                Software” or “restricted computer software.” Use, duplication or
                disclosure by the U.S. Government or a U.S. Government
                sub-contractor is subject to the restrictions set forth in
                subparagraph (c) (1) (ii) of the Rights in Technical Data and
                Computer Software clauses in DFARS 252.227-7013 or as set forth
                in subparagraph (c)(1) and (2) of the Commercial Computer
                Software Restricted Rights clauses at FAR 52.227-19, as
                applicable. The Contractor/Manufacturer is [DISTRIBUTOR’S NAME
                AND ADDRESS].
              </li>
            </ul>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
