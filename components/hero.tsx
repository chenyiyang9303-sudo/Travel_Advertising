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
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20 md:px-8 md:py-40 bg-white dark:bg-gray-900"
    >
      {/* 移除 3D 特效，改用专业渐变背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-blue-950 dark:to-slate-900 opacity-80" />

      {/* 专业网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative z-20 mx-auto max-w-5xl text-center px-4">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800/30 mb-8">
            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium">
              Trusted by Leading Corporations & Financial Institutions
            </span>
          </div>
        </div>

        <h1 className="font-display text-display-lg md:text-display-xl text-accent-900 dark:text-white mb-8 animate-fade-in">
          <Balancer>Corporate Finance Consulting for Strategic Growth</Balancer>
        </h1>

        <p className="text-xl text-accent-600 dark:text-accent-300 max-w-3xl mx-auto mb-12 animate-slide-up">
          Expert advisory services in corporate finance, risk management, and compliance — empowering businesses to make informed strategic decisions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <button
            data-cal-namespace={calConfig.namespace}
            data-cal-link={calConfig.link}
            data-cal-config={`{"layout":"${calConfig.layout}"}`}
            className="group flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 min-w-[200px]"
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
            className="group flex items-center justify-center px-8 py-4 bg-white dark:bg-accent-800 border border-accent-200 dark:border-accent-700 text-accent-900 dark:text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 min-w-[200px]"
          >
            Explore Services
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto animate-fade-in">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-900 dark:text-white">15+</div>
            <div className="text-sm text-accent-600 dark:text-accent-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-900 dark:text-white">120+</div>
            <div className="text-sm text-accent-600 dark:text-accent-400">Advisory Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-900 dark:text-white">98%</div>
            <div className="text-sm text-accent-600 dark:text-accent-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-900 dark:text-white">24/7</div>
            <div className="text-sm text-accent-600 dark:text-accent-400">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}

