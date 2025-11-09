import type { Metadata } from "next";
import type { ReactNode } from "react";

const COMPANY_NAME = "Radiant Soaring Fund Management LLC";
const SHORT_NAME = "RSFM";
const CONTACT_EMAIL = "legal@radiantsoaringfm.com";
const CONTACT_PHONE = "+1 (212) 555-0198";
const STREET_ADDRESS = "30 N Gould St Ste R";
const CITY_ADDRESS = "Sheridan, WY 82801";

export const metadata: Metadata = {
  title: "Terms of Service | RSFM",
  description:
    "Review the engagement terms governing access to RSFM advisory services, market intelligence, and digital platforms.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-app text-fg">
      <div className="border-b border-white/10 bg-[#050505] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-semibold uppercase tracking-[0.35em] text-white sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.4em] text-neutral-400">
            Last updated: January 15, 2025
          </p>
          <p className="mt-6 text-base leading-relaxed text-neutral-300">
            These Terms govern your access to {SHORT_NAME}&apos;s advisory services, research, and
            digital resources. By engaging with {SHORT_NAME} ({`"${COMPANY_NAME}"`}, `"we"`, `"us"`),
            you acknowledge that you have read, understood, and agree to comply with the clauses
            below. When applicable, these Terms supplement a written engagement letter or mandate.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-20">
        <div className="space-y-12">
          <TermsCard
            title="1. Scope"
            body={
              <>
                <p>
                  These Terms apply to access and use of our website, reports, events, and investment
                  or corporate finance advisory services. Specific mandates are documented in a
                  statement of work, engagement letter, or advisory agreement. If a conflict exists,
                  the executed agreement prevails.
                </p>
              </>
            }
          />

          <TermsCard
            title="2. Eligibility and Authority"
            body={
              <>
                <p>
                  You represent that you are authorised to engage {SHORT_NAME} on behalf of your
                  organisation, meet all regulatory eligibility criteria, and are at least 18 years of
                  age. If you access our materials on behalf of an entity, you confirm you can bind
                  that entity to these Terms.
                </p>
              </>
            }
          />

          <TermsCard
            title="3. Client Responsibilities"
            body={
              <>
                <ul>
                  <li>provide timely, accurate, and complete information required for our work;</li>
                  <li>
                    ensure decision makers are available to review deliverables and provide feedback;
                  </li>
                  <li>
                    implement recommendations at your discretion and manage resulting business or
                    investment decisions; and
                  </li>
                  <li>
                    maintain compliance with all applicable laws, including securities, data
                    protection, and anti-corruption requirements.
                  </li>
                </ul>
                <p>
                  {SHORT_NAME} may rely on information supplied by you and is not responsible for
                  delays or costs arising from incomplete or inaccurate inputs.
                </p>
              </>
            }
          />

          <TermsCard
            title="4. Fees and Expenses"
            body={
              <>
                <p>
                  Fees, retainers, success-based compensation, and reimbursable expenses are defined
                  in the applicable engagement documentation. Invoices are payable within the stated
                  period; overdue balances may accrue interest at the lesser of 1.5% per month or the
                  maximum rate permitted by law. You are responsible for taxes associated with our
                  services other than taxes on {SHORT_NAME}&apos;s net income.
                </p>
              </>
            }
          />

          <TermsCard
            title="5. Intellectual Property"
            body={
              <>
                <p>
                  All methodologies, analyses, models, templates, and materials developed by{" "}
                  {SHORT_NAME} remain our intellectual property. Subject to full payment, you receive a
                  non-exclusive, non-transferable licence to use deliverables for internal business
                  purposes. You may not distribute, publish, or resell deliverables without written
                  consent.
                </p>
              </>
            }
          />

          <TermsCard
            title="6. Confidentiality"
            body={
              <>
                <p>
                  Each party will protect information designated as confidential or that reasonably
                  should be understood as confidential. Confidential information may be disclosed to
                  affiliates, advisers, or service providers bound by comparable obligations, or when
                  required by law, regulation, or court order.
                </p>
              </>
            }
          />

          <TermsCard
            title="7. Regulatory Compliance"
            body={
              <>
                <p>
                  You agree to cooperate with due diligence, sanctions screening, and anti-money
                  laundering requests required by {SHORT_NAME} or applicable regulators. We may suspend
                  or terminate services if compliance concerns arise or if information is withheld.
                </p>
              </>
            }
          />

          <TermsCard
            title="8. Disclaimers"
            body={
              <>
                <p>
                  Services are provided on an "as is" basis without warranties of merchantability,
                  fitness for a particular purpose, or non-infringement. Financial projections and
                  forward-looking statements are inherently uncertain; {SHORT_NAME} does not guarantee
                  outcomes or market performance.
                </p>
              </>
            }
          />

          <TermsCard
            title="9. Limitation of Liability"
            body={
              <>
                <p>
                  To the maximum extent permitted by law, neither party will be liable for indirect,
                  consequential, punitive, or special damages, including loss of profits, revenue, or
                  goodwill. {SHORT_NAME}&apos;s aggregate liability under these Terms will not exceed
                  fees paid for the services that gave rise to the claim during the twelve months prior
                  to the event.
                </p>
              </>
            }
          />

          <TermsCard
            title="10. Indemnification"
            body={
              <>
                <p>
                  You will indemnify and hold {SHORT_NAME}, its affiliates, and personnel harmless from
                  claims, losses, and expenses (including reasonable attorneys&apos; fees) arising out
                  of your breach of these Terms, misuse of deliverables, or violation of law, except to
                  the extent caused by our gross negligence or wilful misconduct.
                </p>
              </>
            }
          />

          <TermsCard
            title="11. Term and Termination"
            body={
              <>
                <p>
                  These Terms remain in effect while you access our platforms or until replaced by an
                  updated version. Either party may terminate an engagement per the notice provisions
                  in the governing agreement. Sections that by their nature should survive termination
                  (including confidentiality, IP, limitation of liability, and governing law) remain in
                  effect.
                </p>
              </>
            }
          />

          <TermsCard
            title="12. Governing Law and Dispute Resolution"
            body={
              <>
                <p>
                  These Terms are governed by the laws of the State of New York, without regard to its
                  conflict-of-laws rules. The parties consent to the exclusive jurisdiction of state
                  and federal courts located in New York County for disputes arising from these Terms,
                  subject to any alternative dispute resolution process set forth in the applicable
                  engagement agreement.
                </p>
              </>
            }
          />

          <TermsCard
            title="13. Notices"
            body={
              <>
                <p>
                  Formal notices under these Terms should be delivered in writing to the contact
                  details below or to any updated address communicated by either party. Routine updates
                  may be provided via email or secure client portals.
                </p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/35 p-6 text-sm text-neutral-200">
                  <p className="text-base font-semibold text-white">{COMPANY_NAME}</p>
                  <p>{STREET_ADDRESS}</p>
                  <p>{CITY_ADDRESS}, USA</p>
                  <p className="mt-2">T: {CONTACT_PHONE}</p>
                  <p className="mt-1">
                    E:{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-primary-300 underline decoration-primary-500/40 underline-offset-4 hover:text-primary-200"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                </div>
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

function TermsCard({
  title,
  body,
}: {
  title: string;
  body: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-soft">
      <div className="space-y-4 prose prose-invert max-w-none">
        <h2 className="font-semibold text-white">{title}</h2>
        {body}
      </div>
    </section>
  );
}
