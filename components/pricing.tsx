"use client";
import React from "react";
import { IconCheck } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export enum plan {
  hobby = "hobby",
  starter = "starter",
  pro = "pro",
}

export type Plan = {
  id: string;
  name: string;
  price: number | string;
  subText?: string;
  currency: string;
  features: string[];
  featured?: boolean;
  buttonText?: string;
  additionalFeatures?: string[];
  onClick: () => void;
};

const plans: Array<Plan> = [
  {
    id: plan.hobby,
    name: "Launch Sprint",
    price: 68000,
    subText: "/ Campaign starting from",
    currency: "¥",
    features: [
      "2-day travel shoot + aerial footage",
      "Creator/media lite collaboration",
      "AI copywriting & asset workflows",
      "Ad strategy & 14-day management",
      "Campaign review report",
    ],
    buttonText: "Get Proposal",
    onClick: () => {
      window.location.href = "/contact";
    },
  },
  {
    id: plan.starter,
    name: "Growth Retainer",
    price: 180000,
    subText: "/ month",
    currency: "¥",
    featured: true,
    features: [
      "Magazine-quality travel content + multilingual editing",
      "Creator network + livestream synergy",
      "Omni-channel advertising & data dashboard",
      "Full AI tools suite license",
      "Weekly co-creation meetings & on-site event support",
    ],
    buttonText: "Reserve Spot",
    additionalFeatures: ["Includes all Launch Sprint deliverables"],
    onClick: () => {
      window.location.href = "/contact";
    },
  },
  {
    id: plan.pro,
    name: "Destination Lab",
    price: "Custom",
    subText: "",
    currency: "",
    features: [
      "City/regional integrated marketing strategy",
      "Immersive installations + offline activations",
      "International market localization & PR",
      "Long-term private domain/membership operations",
      "Data platform & training programs",
    ],
    additionalFeatures: ["Includes all Growth Retainer deliverables", "Dedicated on-site team"],
    buttonText: "Contact Team",
    onClick: () => {
      window.location.href = "/contact";
    },
  },
];

export function Pricing() {
  return (
    <div
      id="pricing"
      className="relative isolate w-full px-4 py-20 md:px-8 bg-surface-subtle"
    >
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-sm font-semibold tracking-[0.4em] uppercase text-primary-500">
          Pricing
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-fg mt-4">
          Flexible Combinations by Journey Stage
        </h2>
        <p className="text-lg text-muted mt-4">
          Whether peak-season campaigns or city-level integrated marketing, we offer phased deliverables and can integrate with your existing creative or media teams.
        </p>
      </div>

      <div
        className={cn(
          "mx-auto grid grid-cols-1 gap-6 mt-16",
          "max-w-6xl md:grid-cols-2 xl:grid-cols-3"
        )}
      >
        {plans.map((tier) => {
          return <Card plan={tier} key={tier.id} onClick={tier.onClick} />;
        })}
      </div>
    </div>
  );
}

const Card = ({ plan, onClick }: { plan: Plan; onClick: () => void }) => {
  return (
    <div
      className={cn(
        "p-1 sm:p-4 md:p-4 rounded-3xl border bg-white shadow-[0_25px_70px_rgba(80,96,120,0.12)]",
        plan.featured && "border-primary-200 shadow-[0_30px_80px_rgba(255,107,74,0.25)]"
      )}
    >
      <div className="flex flex-col gap-4 h-full justify-start">
        <div
          className={cn(
            "p-5 rounded-2xl bg-white border border-white/80",
            plan.featured && "bg-gradient-to-br from-primary-500/10 via-white to-white"
          )}
        >
          <div className="flex justify-between items-start ">
            <div className="flex gap-2 flex-col">
              <p
                className={cn("font-semibold text-2xl text-fg font-display")}
              >
                {plan.name}
              </p>
            </div>

            {plan.featured && (
              <div
                className={cn(
                  "font-medium text-xs px-3 py-1 rounded-full bg-primary-500/90 text-white uppercase tracking-[0.3em]"
                )}
              >
                Popular
              </div>
            )}
          </div>
          <div className="mt-8 ">
            <div className="flex items-end">
              <span
                className={cn(
                  "text-lg font-bold text-muted"
                )}
              >
                {plan.currency}
              </span>
              <p
                className={cn(
                  "text-4xl text-fg font-semibold leading-none"
                )}
              >
                {plan.price}
              </p>
              <span className="ml-2 text-sm text-muted">{plan.subText}</span>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3">
            {plan.features.map((feature) => (
              <div className="flex items-center gap-2" key={feature}>
                <div
                  className={cn(
                    "h-6 w-6 rounded-full border border-primary-200 flex items-center justify-center text-primary-600"
                  )}
                >
                  <IconCheck className="w-4 h-4" />
                </div>
                <p className="text-sm text-muted">
                  {feature}
                </p>
              </div>
            ))}
          </div>
          {plan.additionalFeatures && (
            <div className="mt-4 border-t border-white/60 pt-4 space-y-2">
              {plan.additionalFeatures.map((feature) => (
                <p key={feature} className="text-xs text-subtle">
                  {feature}
                </p>
              ))}
            </div>
          )}

          <Button as="button" onClick={onClick} className="mt-8 w-full">
            <span>{plan.buttonText ? plan.buttonText : "Contact Team"}</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
