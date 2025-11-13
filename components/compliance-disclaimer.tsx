"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

export function ComplianceDisclaimer() {
  return (
    <div className="w-full bg-primary-50 dark:bg-primary-900/20 border-t border-b border-primary-200 dark:border-primary-900/30 py-8 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-primary-600 dark:text-primary-300 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-primary-900 dark:text-primary-100 mb-2">
              Important Disclosure
            </h3>
            <div className="text-sm text-primary-800 dark:text-primary-100/80 space-y-2">
              <p>
                <strong>Advisory Services Only:</strong> Radiant Soaring Fund Management LLC provides strategic consulting and advisory services for corporate finance matters. We do not manage, hold, or have access to client funds or assets. All financial and operational decisions remain with the client.
              </p>
              <p>
                <strong>No Fund Management:</strong> We specialize in advisory services for mergers and acquisitions, financial restructuring, fundraising, valuation, and tax/compliance optimization. We are not registered investment advisors and do not provide fund management or portfolio management services.
              </p>
              <p>
                <strong>Professional Consultation:</strong> The information and guidance provided is for strategic planning purposes and should not be considered as legal, tax, or investment advice. Clients should consult with licensed legal, tax, and financial professionals for implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
