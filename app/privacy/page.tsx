import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Orient Blackstone Asset Management",
  description:
    "Understand how Orient Blackstone Asset Management LLC collects, uses, and safeguards personal data across our advisory relationships and digital properties.",
};

const controllerName = "Orient Blackstone Asset Management LLC";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 dark:bg-neutral-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-neutral-800 dark:text-neutral-100 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Last updated: July 13, 2025
          </p>
        </header>

        <div className="space-y-10">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {controllerName} (“Orient Blackstone”, “we”, “us”, or “our”) is
            committed to protecting the privacy of clients, prospective clients,
            and visitors to our digital properties. This Privacy Policy explains
            how we collect, use, disclose, and safeguard personal data in the
            course of delivering institutional asset management and advisory
            services.
          </p>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>1. Scope and Controller</h2>
              <p>
                This Policy applies to personal data processed by Orient
                Blackstone in connection with our advisory services, marketing
                initiatives, events, and the websites owned or operated by us.
                Orient Blackstone Asset Management LLC, headquartered at 575
                Lexington Avenue, Suite 4200, New York, NY 10022, United States,
                is the data controller unless we notify you otherwise.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>2. Information We Collect</h2>
              <p>
                The personal data we collect depends on how you interact with us
                and may include:
              </p>
              <ul>
                <li>
                  <strong>Direct interactions:</strong> contact details, role,
                  company affiliation, investment objectives, and any information
                  shared during consultations, diligence, or onboarding
                  processes.
                </li>
                <li>
                  <strong>Digital engagement data:</strong> technical
                  identifiers, geolocation derived from IP address, device
                  information, usage data, browsing patterns, and interactions
                  with our online materials.
                </li>
                <li>
                  <strong>Third-party sources:</strong> information from industry
                  databases, event partners, referral networks, and compliance
                  screening providers, subject to applicable law.
                </li>
                <li>
                  <strong>Aggregated insights:</strong> statistical or
                  demographic data derived from personal information that does
                  not identify an individual unless combined with other data.
                </li>
              </ul>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>3. How We Use Personal Data</h2>
              <p>We process personal data to:</p>
              <ul>
                <li>deliver advisory mandates and manage client relationships;</li>
                <li>
                  evaluate investment suitability, risk alignment, and compliance
                  requirements;
                </li>
                <li>
                  provide insights, market commentary, and thought leadership
                  that align with your stated interests;
                </li>
                <li>respond to inquiries, schedule meetings, and manage events;</li>
                <li>
                  operate, secure, and enhance our websites and digital channels;
                </li>
                <li>
                  comply with legal, regulatory, audit, and risk management
                  obligations.
                </li>
              </ul>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>4. Legal Bases for Processing</h2>
              <p>
                Where required by applicable law, we rely on one or more of the
                following legal bases to process personal data:
              </p>
              <ul>
                <li>your consent, which you may revoke at any time;</li>
                <li>performance of a contract or steps taken at your request;</li>
                <li>
                  our legitimate interests in operating and growing our business,
                  balanced against your rights and freedoms;
                </li>
                <li>compliance with legal or regulatory obligations;</li>
                <li>
                  protection of vital interests or those of another person, when
                  necessary.
                </li>
              </ul>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>5. How We Share Information</h2>
              <p>
                We may disclose personal data to trusted recipients, each bound
                by appropriate confidentiality and data protection obligations,
                including:
              </p>
              <ul>
                <li>affiliated entities within the Orient Blackstone group;</li>
                <li>
                  professional advisers, placement agents, technology providers,
                  and analytics partners who support our services;
                </li>
                <li>
                  regulators, auditors, and other authorities when disclosure is
                  required by law or in the defence of legal claims;
                </li>
                <li>
                  potential counterparties or service providers during due
                  diligence, subject to confidentiality controls.
                </li>
              </ul>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>6. International Transfers</h2>
              <p>
                Orient Blackstone operates globally. When personal data is
                transferred across borders, we implement appropriate safeguards
                such as standard contractual clauses, intra-group agreements, or
                other mechanisms recognised by applicable data protection laws.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>7. Data Retention</h2>
              <p>
                We retain personal data only for as long as necessary to fulfil
                the purposes outlined in this Policy, comply with legal and
                regulatory requirements, and manage risk. Retention periods
                differ depending on the type of engagement and jurisdictional
                mandates.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>8. Safeguarding Measures</h2>
              <p>
                Our security programme combines administrative, technical, and
                physical controls designed to protect personal data against
                unauthorised access, alteration, disclosure, or destruction.
                While we strive to protect information, no online transmission
                or storage system can be guaranteed to be 100% secure.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>9. Marketing Preferences</h2>
              <p>
                We may send insights or event invitations that align with your
                interests. You can opt out of marketing communications at any
                time by using the unsubscribe links provided or by contacting us
                directly. Opting out from marketing does not affect transactional
                or service-related communications.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>10. Your Privacy Rights</h2>
              <p>
                Subject to local law, you may have rights to access, correct,
                update, restrict, object to, or request deletion of your personal
                data, as well as the right to data portability. You may also
                lodge a complaint with your supervisory authority if you believe
                we have processed your information in violation of applicable
                law.
              </p>
              <p>
                To exercise these rights, please contact us using the details in
                Section 12. We will respond to legitimate requests within the
                timeframes required by law and may request additional information
                to verify your identity.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>11. Cookies and Similar Technologies</h2>
              <p>
                Our websites use cookies, pixels, and similar technologies to
                deliver core functionality, understand engagement, and tailor
                content. For further details, including controls available to
                you, please refer to our Cookie Policy.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>12. Updates to This Policy</h2>
              <p>
                We may revise this Policy from time to time to reflect changes in
                our practices or regulatory requirements. Any updates will be
                posted on this page with a revised “Last updated” date. Material
                changes may be communicated through additional channels.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>13. Contact Details</h2>
              <p>
                Please keep us informed if your personal data changes or if you
                have questions about this Policy. You can reach our privacy
                office at:
              </p>
              <div className="not-prose rounded-lg bg-neutral-50 p-6 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                <p className="mb-2 text-lg font-bold">{controllerName}</p>
                <p>575 Lexington Avenue, Suite 4200</p>
                <p>New York, NY 10022, USA</p>
                <p className="mt-2">P: +1 (212) 555-0198</p>
                <p>
                  E:{" "}
                  <a
                    href="mailto:privacy@orientblackstone.com"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200"
                  >
                    privacy@orientblackstone.com
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
