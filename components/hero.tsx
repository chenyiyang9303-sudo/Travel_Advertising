"use client";
import React, { useRef } from "react";
import Balancer from "react-wrap-balancer";
import { useCalEmbed } from "@/app/hooks/useCalEmbed";

export function Hero() {
  const parentRef = useRef<HTMLDivElement>(null);
  const calConfig = useCalEmbed();
  
  return (
    <div
      ref={parentRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40 bg-app"
    >
      {/* Radiant-themed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-white/80 to-amber-100/20 dark:from-primary-900/25 dark:via-surface-subtle dark:to-black/40 opacity-80" />

      {/* Professional grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(249,115,22,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.06)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(249,115,22,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(249,115,22,0.035)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-20 mx-auto max-w-5xl text-center px-4">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50/70 dark:bg-primary-900/30 border border-primary-200/80 dark:border-primary-800/50 mb-8">
            <span className="text-orange-600 dark:text-orange-400 text-sm font-medium">
              Elevating Global Financial Excellence
            </span>
          </div>
        </div>

        <h1 className="font-display text-display-lg md:text-display-xl text-fg mb-8 animate-fade-in">
          <Balancer>Radiant Soaring Fund Management</Balancer>
        </h1>

        <p className="text-xl text-muted max-w-3xl mx-auto mb-12 animate-slide-up">
          Premier fund management and financial advisory services — empowering institutional investors and high-net-worth clients to achieve exceptional returns.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <button
            data-cal-namespace={calConfig.namespace}
            data-cal-link={calConfig.link}
          data-cal-config={`{"layout":"${calConfig.layout}"}`}
          className="group flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 min-w-[200px]"
        >
          Schedule Consultation
          <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            onClick={() => {
              console.log('Hero button clicked - View Services');
              window.location.href = '/#services';
            }}
            className="group flex items-center justify-center px-8 py-4 bg-surface border border-subtle text-fg font-semibold rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 min-w-[200px] hover:text-primary-600 dark:hover:text-primary-400"
          >
            Explore Services
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-2xl font-bold text-fg">$5B+</div>
            <div className="text-sm text-muted">Assets Under Management</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-fg">18+</div>
            <div className="text-sm text-muted">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-fg">200+</div>
            <div className="text-sm text-muted">Institutional Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-fg">15%</div>
            <div className="text-sm text-muted">Avg. Annual Returns</div>
          </div>
        </div>
      </div>
    </div>
  );
}
