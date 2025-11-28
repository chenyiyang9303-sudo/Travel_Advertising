import type { Metadata } from "next";
import type { ReactNode } from "react";

const COMPANY_NAME = "One World Global Travel Inc";
const SHORT_NAME = "One World Global Travel";
const CONTACT_EMAIL = "privacy@iglobaltravel.top";
const STREET_ADDRESS = "1270 Avenue of the Americas, Suite 2200";
const CITY_ADDRESS = "New York, NY 10020";

export const metadata: Metadata = {
  title: "Cookie Policy | One World Global Travel",
  description:
    "Learn how One World Global Travel uses cookies and similar technologies to help travel brands gain better content experiences and data insights, and manage your privacy preferences.",
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-app text-fg">
      <div className="border-b border-[#e9dfd4] bg-gradient-to-b from-[#fdfaf3] to-[#fbfcff] py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-semibold text-fg sm:text-5xl">
            Cookie Policy
          </h1>
          <p className="mt-4 text-sm tracking-[0.3em] text-muted uppercase">
            Last updated: January 15, 2025
          </p>
          <p className="mt-6 text-base leading-relaxed text-muted">
            {SHORT_NAME} uses cookies, pixels, and related technologies to ensure platform security, analyze the engagement performance of travel inspiration content, and provide more accurate insights for brand partners. The following content introduces how we use these technologies and the options you can manage.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-20">
        <div className="space-y-12">
          <CookieCard
            title="1. What Are Cookies?"
            body={
              <>
                <p>
                  Cookies are small text files placed on your device when you visit a website. They can
                  be session cookies (which expire when you close your browser) or persistent cookies
                  (which remain until deleted or expired). We also use web beacons, tags, and similar
                  technologies to measure campaign effectiveness and ensure platform resilience.
                </p>
              </>
            }
          />

          <CookieCard
            title="2. Categories of Cookies We Use"
            body={
              <>
                <ul>
                  <li>
                    <strong>Strictly necessary:</strong> Enable secure login, session management, and
                    load balancing. These cookies are essential to deliver our services and cannot be
                    disabled in our systems.
                  </li>
                  <li>
                    <strong>Performance and analytics:</strong> Provide aggregated statistics on page
                    performance, user flow, and content engagement so that we can refine our digital
                    experience.
                  </li>
                  <li>
                    <strong>Functional:</strong> Remember preferences such as language, region, and
                    saved form inputs to streamline repeat visits.
                  </li>
                  <li>
                    <strong>Marketing and personalisation:</strong> Support relationship management and
                    event outreach by tailoring communications to your expressed interests.
                  </li>
                </ul>
              </>
            }
          />

          <CookieCard
            title="3. Third-Party Technologies"
            body={
              <>
                <p>
                  We partner with carefully selected providers that deploy cookies or similar
                  technologies on our behalf. They process data strictly in line with contractual
                  safeguards.
                </p>
                <div className="mt-6 rounded-2xl border border-white/70 bg-white p-6 text-sm text-muted">
                  <ul className="space-y-3">
                    <li>
                      <strong>Google Analytics:</strong> Audience measurement, funnel diagnostics, and
                      website optimisation.
                    </li>
                    <li>
                      <strong>Cal.com:</strong> Schedule online meetings such as brand strategy sessions and creative co-creation meetings.
                    </li>
                    <li>
                      <strong>Vercel Analytics:</strong> Platform performance, deployment health, and
                      operational monitoring.
                    </li>
                  </ul>
                </div>
                <p className="mt-4">
                  Third-party cookies are governed by the privacy policies of the respective providers.
                  We encourage you to review those policies for details about their handling of data.
                </p>
              </>
            }
          />

          <CookieCard
            title="4. Managing Preferences"
            body={
              <>
                <p>You can control cookies through several mechanisms:</p>
                <ul>
                  <li>
                    <strong>Consent banner:</strong> Where required by law, our cookie management tool
                    allows you to accept or decline non-essential categories and revisit your choices at
                    any time.
                  </li>
                  <li>
                    <strong>Browser settings:</strong> Most browsers provide controls to block, delete,
                    or alert you about cookies. Refer to the help section of your browser for specific
                    instructions.
                  </li>
                  <li>
                    <strong>Third-party opt-outs:</strong> You may use tools such as the Google
                    Analytics opt-out browser add-on or the Digital Advertising Alliance opt-out portal
                    to manage certain analytics or marketing cookies.
                  </li>
                </ul>
                <p>
                  Disabling some cookies may impact site functionality, including secure login areas and
                  access to premium resources.
                </p>
              </>
            }
          />

          <CookieCard
            title="5. Retention"
            body={
              <>
                <p>
                  Cookie lifespans vary by category and are set to retain data only as long as necessary
                  to fulfil the purposes described above. Persistent cookies expire automatically after
                  the period specified in your consent tool or earlier if you delete them.
                </p>
              </>
            }
          />

          <CookieCard
            title="6. Updates"
            body={
              <>
                <p>
                  We may update this Policy to reflect changes to our technology stack, regulatory
                  developments, or business practices. We will revise the "Last updated" date and may
                  communicate significant changes through additional notices.
                </p>
              </>
            }
          />

          <CookieCard
            title="7. Contact"
            body={
              <>
                <p>
                  Questions about this Policy or our use of cookies can be directed to the privacy team
                  at {SHORT_NAME}.
                </p>
                <div className="mt-6 rounded-2xl border border-white/70 bg-white p-6 text-sm text-muted">
                  <p className="text-base font-semibold text-fg">{COMPANY_NAME}</p>
                  <p>{STREET_ADDRESS}</p>
                  <p>{CITY_ADDRESS}</p>
                  <p className="mt-2">
                    E:{" "}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-primary-600 underline decoration-primary-500/40 underline-offset-4 hover:text-primary-500"
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

function CookieCard({
  title,
  body,
}: {
  title: string;
  body: ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/70 bg-white p-8 shadow-[0_20px_60px_rgba(81,98,128,0.1)]">
      <div className="space-y-4 max-w-none">
        <h2 className="font-semibold text-fg text-lg">{title}</h2>
        <div className="text-sm leading-relaxed text-muted space-y-4">{body}</div>
      </div>
    </section>
  );
}
