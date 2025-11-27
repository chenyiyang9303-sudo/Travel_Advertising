import type { Metadata } from "next";
import type { ReactNode } from "react";

const COMPANY_NAME = "WanderAds Studio";
const SHORT_NAME = "WanderAds";
const CONTACT_EMAIL = "privacy@wanderads.studio";
const STREET_ADDRESS = "8 Wyndham Street, Level 22";
const CITY_ADDRESS = "Hong Kong";

export const metadata: Metadata = {
  title: "Privacy Policy | WanderAds",
  description:
    "Understand how WanderAds collects, governs, and safeguards personal data supporting our travel marketing advisory and digital platforms.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-app text-fg">
      <div className="border-b border-white/10 bg-[#050505] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-semibold uppercase tracking-[0.35em] text-white sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.4em] text-neutral-400">
            Last updated: January 15, 2025
          </p>
          <p className="mt-6 text-base leading-relaxed text-neutral-300">
            {COMPANY_NAME} (referred to as "{SHORT_NAME}", "we", or "our") protects the confidentiality
            of client, prospect, and website visitor information. This Privacy Policy explains how we
            collect, use, disclose, and secure personal data across our marketing services and digital
            experiences.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-20">
        <div className="space-y-12">
          <PolicyCard
            title="1. Scope and Controller"
            body={
              <>
                <p>
                  This Policy applies to personal data processed by {SHORT_NAME} in connection with
                  our marketing campaigns, content production, events, and platforms located at
                  wanderads.studio. {COMPANY_NAME}, headquartered at {STREET_ADDRESS}, {CITY_ADDRESS},
                  acts as the data controller unless we state otherwise.
                </p>
                <p>
                  We operate globally and maintain governance procedures to align
                  with the privacy expectations of international brands, partners,
                  and regulatory authorities.
                </p>
              </>
            }
          />

          <PolicyCard
            title="2. Categories of Personal Data"
            body={
              <>
                <p>
                  The data we process depends on how you engage with us and may include the following
                  categories:
                </p>
                <ul>
                  <li>
                    <strong>Professional identifiers:</strong> name, title, organisation, contact
                    details, and jurisdiction of residence.
                  </li>
                  <li>
                    <strong>Engagement records:</strong> notes from strategy sessions, campaign
                    briefs, and communications history.
                  </li>
                  <li>
                    <strong>Digital interaction data:</strong> device, browser, and IP information,
                    site usage analytics, and preferences derived from cookies or similar
                    technologies.
                  </li>
                  <li>
                    <strong>Third-party insights:</strong> public social media profiles, brand
                    mentions, and professional references obtained in accordance
                    with law.
                  </li>
                </ul>
              </>
            }
          />

          <PolicyCard
            title="3. Purposes of Processing"
            body={
              <>
                <p>We use personal data to:</p>
                <ul>
                  <li>structure and execute marketing and content mandates;</li>
                  <li>communicate campaign updates, reporting, and market intelligence;</li>
                  <li>perform diligence and suitability checks for partnerships;</li>
                  <li>manage events, subscriptions, and creator networks;</li>
                  <li>administer, secure, and enhance our digital interfaces; and</li>
                  <li>meet legal, regulatory, audit, and risk governance obligations.</li>
                </ul>
              </>
            }
          />

          <PolicyCard
            title="4. Lawful Bases"
            body={
              <>
                <p>
                  Where required, processing is grounded in one or more lawful bases: performance of a
                  contract, legitimate interest in operating our agency practice, compliance with
                  legal duties, protection of vital interests, or your explicit consent. We evaluate
                  and balance legitimate interests against potential impacts on your rights.
                </p>
              </>
            }
          />

          <PolicyCard
            title="5. Information Sharing"
            body={
              <>
                <p>We disclose personal data to trusted recipients subject to confidentiality:</p>
                <ul>
                  <li>
                    affiliates and partners assisting with campaign execution or production;
                  </li>
                  <li>
                    professional advisers, technology vendors, data hosts, and
                    analytics partners that support our operations;
                  </li>
                  <li>
                    regulators, auditors, and legal authorities where required or to safeguard our
                    rights; and
                  </li>
                  <li>
                    potential collaboration partners under strict confidentiality frameworks.
                  </li>
                </ul>
                <p>
                  We do not sell personal data, nor do we allow service providers to use it for their
                  own unrelated marketing.
                </p>
              </>
            }
          />

          <PolicyCard
            title="6. International Data Transfers"
            body={
              <>
                <p>
                  Transfers outside your home jurisdiction may occur when leveraging our global
                  infrastructure or third-party platforms. We apply safeguards such as standard
                  contractual clauses or other mechanisms recognised by the
                  relevant authorities to protect transferred data.
                </p>
              </>
            }
          />

          <PolicyCard
            title="7. Safeguards"
            body={
              <>
                <p>
                  {SHORT_NAME} maintains layered administrative, technical, and physical controls to
                  protect personal data against unauthorised access, alteration, or loss. These
                  measures include restricted access, secure infrastructure, encryption, incident
                  response protocols, and continual monitoring of cyber and operational risks.
                </p>
              </>
            }
          />

          <PolicyCard
            title="8. Retention"
            body={
              <>
                <p>
                  We retain personal data only as long as required to fulfil the purposes described in
                  this Policy, satisfy legal or regulatory obligations, maintain accurate records, and
                  resolve disputes. Retention schedules differ depending on engagement type and regional
                  requirements.
                </p>
              </>
            }
          />

          <PolicyCard
            title="9. Marketing Preferences"
            body={
              <>
                <p>
                  We may send briefings or event invitations aligned with your role or interests. You
                  can adjust preferences or opt out at any time via unsubscribe links or by emailing{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-primary-300 underline decoration-primary-500/40 underline-offset-4 hover:text-primary-200"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  . Transactional or service notices will continue where permitted by law.
                </p>
              </>
            }
          />

          <PolicyCard
            title="10. Your Rights"
            body={
              <>
                <p>
                  Depending on your jurisdiction, you may have rights to access, correct, restrict,
                  delete, or object to the processing of your personal data, as well as to request
                  data portability. We will respond to verifiable requests within the timelines
                  required by applicable regulation and may request supporting information to confirm
                  your identity.
                </p>
              </>
            }
          />

          <PolicyCard
            title="11. Cookies and Analytics"
            body={
              <>
                <p>
                  We use cookies, pixels, and related technologies to deliver secure functionality and
                  measure engagement. More detail, including ways to manage your preferences, is
                  available in our Cookie Policy.
                </p>
              </>
            }
          />

          <PolicyCard
            title="12. Updates"
            body={
              <>
                <p>
                  We review this Policy periodically. Significant changes will be communicated through
                  our website or, where appropriate, through direct outreach. The "Last updated" date
                  reflects the latest revision.
                </p>
              </>
            }
          />

          <PolicyCard
            title="13. Contact"
            body={
              <>
                <p>
                  Questions regarding this Policy or your personal data can be directed to our privacy
                  office using the details below.
                </p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-black/35 p-6 text-sm text-neutral-200">
                  <p className="text-base font-semibold text-white">{COMPANY_NAME}</p>
                  <p>{STREET_ADDRESS}</p>
                  <p>{CITY_ADDRESS}</p>
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

function PolicyCard({
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
