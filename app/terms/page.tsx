import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Orient Blackstone Asset Management",
  description:
    "Review the terms governing access to Orient Blackstone Asset Management LLC’s advisory services, digital platforms, and thought leadership resources.",
};

const companyName = "Orient Blackstone Asset Management LLC";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white py-20 px-4 dark:bg-neutral-950 md:px-8">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-neutral-800 dark:text-neutral-100 md:text-5xl">
            Terms of Service
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Last updated: July 13, 2025
          </p>
        </header>

        <div className="space-y-10">
          <p className="text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            These Terms of Service (“Terms”) are a binding agreement between{" "}
            {companyName} (“Orient Blackstone”, “we”, “us”, or “our”) and any
            individual or entity (“Client”, “you”, or “your”) that accesses our
            websites, downloads our materials, or engages our advisory services.
            By using our services or continuing to access our digital platforms,
            you acknowledge that you have read, understood, and agree to be bound
            by these Terms.
          </p>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>1. Services Overview</h2>
              <p>
                Orient Blackstone delivers institutional asset management,
                capital markets advisory, and strategic finance consulting
                services. The scope, deliverables, and commercial terms of any
                engagement are documented in a separate statement of work,
                mandate letter, or services agreement (each, an “Engagement
                Agreement”). These Terms supplement and, to the extent of any
                conflict, are superseded by the applicable Engagement Agreement.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>2. Eligibility and Authority</h2>
              <p>
                By engaging us or using our platforms, you represent that you are
                at least 18 years of age, legally capable of entering into
                binding agreements, and authorised to act on behalf of your
                organisation. If you access our materials on behalf of a legal
                entity, you warrant that you have the authority to bind that
                entity to these Terms.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>3. Client Responsibilities</h2>
              <ul>
                <li>
                  provide accurate, complete, and timely information necessary
                  for the delivery of services;
                </li>
                <li>
                  designate qualified decision makers and ensure their reasonable
                  availability;
                </li>
                <li>
                  review deliverables promptly and provide feedback in good faith;
                </li>
                <li>implement recommendations at your discretion and risk; and</li>
                <li>comply with applicable laws, regulations, and policies.</li>
              </ul>
              <p>
                Orient Blackstone is entitled to rely on information provided by
                you and is not responsible for delays or deficiencies resulting
                from inaccurate or incomplete inputs.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>4. Fees and Payment</h2>
              <p>
                Fees, expenses, invoicing cadence, and payment terms are outlined
                in the applicable Engagement Agreement. Unless otherwise agreed,
                invoices are due within thirty (30) days of issuance. Overdue
                amounts may accrue interest at the lesser of 1.5% per month or
                the maximum rate permitted by law. You are responsible for all
                taxes, duties, and levies arising from the services, excluding
                taxes based on our net income.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>5. Confidentiality</h2>
              <p>
                Each party agrees to maintain the confidentiality of non-public
                information received from the other party in connection with the
                services, using at least the same level of care it applies to its
                own confidential information. Confidentiality obligations do not
                apply to information that is or becomes publicly available
                through no fault of the receiving party, is independently
                developed without use of confidential information, or is
                disclosed pursuant to legal process after providing reasonable
                notice.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>6. Intellectual Property</h2>
              <p>
                Orient Blackstone retains ownership of pre-existing intellectual
                property, methodologies, models, software, templates, and
                know-how developed in the course of providing services. Upon full
                payment, you receive a non-exclusive, non-transferable licence to
                use deliverables for your internal business purposes. You may not
                distribute, sublicense, or otherwise exploit our materials
                without prior written consent.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>7. Regulatory Compliance</h2>
              <p>
                Orient Blackstone operates under applicable securities,
                investment advisory, and anti-money laundering regulations. You
                agree to cooperate with reasonable due diligence requests,
                including providing information necessary to satisfy “know your
                client” obligations and sanctions screening. We reserve the right
                to suspend or terminate services if compliance concerns arise.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>8. Disclaimer of Warranties</h2>
              <p>
                Services, analyses, forecasts, and recommendations are provided
                on an “as is” and “as available” basis. Orient Blackstone
                disclaims all warranties, express or implied, including
                merchantability, fitness for a particular purpose, and
                non-infringement. Financial projections and forward-looking
                statements are inherently uncertain; we do not guarantee outcomes
                or performance.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>9. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, neither party will be
                liable for any indirect, consequential, incidental, punitive, or
                special damages, including loss of profits, revenue, goodwill, or
                data, even if advised of the possibility of such damages. Orient
                Blackstone’s aggregate liability arising under these Terms will
                not exceed the fees paid to us for the services giving rise to
                the claim during the twelve (12) months preceding the event.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>10. Indemnification</h2>
              <p>
                You agree to indemnify and hold Orient Blackstone, its affiliates,
                partners, and personnel harmless from and against claims,
                liabilities, costs, and expenses (including reasonable attorneys’
                fees) arising out of your breach of these Terms, misuse of
                deliverables, or violation of applicable law, except to the extent
                resulting from our gross negligence or wilful misconduct.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>11. Term and Termination</h2>
              <p>
                These Terms apply for as long as you access our platforms or
                until superseded by updated terms. Either party may terminate an
                Engagement Agreement in accordance with its terms. Upon
                termination or expiration, you must pay outstanding invoices,
                cease using deliverables that you have not paid for, and return
                or destroy confidential information as requested.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>12. Governing Law and Disputes</h2>
              <p>
                These Terms and any disputes arising from them are governed by
                the laws of the State of New York, United States, without regard
                to its conflict-of-law rules. The parties consent to the
                exclusive jurisdiction of the state and federal courts located in
                New York County, New York, for the adjudication of any dispute,
                subject to each party’s right to seek injunctive relief in any
                competent court.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>13. Changes to These Terms</h2>
              <p>
                We may revise these Terms from time to time. The “Last updated”
                date will always reflect the most recent version. Material
                changes will be communicated through appropriate channels.
                Continued use of our services after changes take effect
                constitutes acceptance of the revised Terms.
              </p>
            </div>
          </section>

          <section className="not-prose rounded-3xl border border-subtle bg-surface px-6 py-6 md:px-8 md:py-8 shadow-soft">
            <div className="prose prose-neutral dark:prose-invert space-y-4">
              <h2>14. Contact</h2>
              <p>
                Questions regarding these Terms or our services can be directed
                to our legal and compliance team using the details below.
              </p>
              <div className="not-prose rounded-lg bg-neutral-50 p-6 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
                <p className="mb-2 text-lg font-bold">{companyName}</p>
                <p>575 Lexington Avenue, Suite 4200</p>
                <p>New York, NY 10022, USA</p>
                <p className="mt-2">P: +1 (212) 555-0198</p>
                <p>
                  E:{" "}
                  <a
                    href="mailto:legal@orientblackstone.com"
                    className="text-primary-600 hover:text-primary-700 dark:text-primary-300 dark:hover:text-primary-200"
                  >
                    legal@orientblackstone.com
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
