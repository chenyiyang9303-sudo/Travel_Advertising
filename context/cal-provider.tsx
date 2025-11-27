"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { getCalApi } from "@calcom/embed-react";

interface CalContextType {
  isReady: boolean;
  openModal: (eventType: string) => void;
}

const CalContext = createContext<CalContextType | undefined>(undefined);

export function CalProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false);
  const [calInstance, setCalInstance] = useState<any>(null);

  useEffect(() => {
    let mounted = true;

    console.log("🔧 Global Cal.com initialization started...");

    (async function () {
      try {
        console.log("📞 Calling getCalApi...");
        const cal = await getCalApi({ namespace: "chat-with-manu-demo" });

        if (!mounted) return; // Prevent setting state after component unmount

        console.log("✅ getCalApi success:", cal);

        console.log("🎨 Setting UI config...");
        cal("ui", {
          styles: {
            branding: {
              brandColor: "#3b82f6",
            },
          },
          layout: "month_view",
        });
        console.log("✅ UI config set");

        setCalInstance(cal);
        setIsReady(true);
        console.log("🎉 Cal.com global initialization complete!");

        // Check global Cal object
        setTimeout(() => {
          console.log("🔍 Global Cal object check:", (window as any).Cal);
          console.log("🔍 Cal object type:", typeof (window as any).Cal);
        }, 1000);

      } catch (error) {
        console.error("❌ Cal.com initialization failed:", error);
        if (mounted) {
          setIsReady(false);
        }
      }
    })();

    return () => {
      mounted = false;
    };
  }, []); // Empty dependency array, runs only once on mount

  const openModal = (eventType: string) => {
    console.log("🚀 CalProvider openModal called:", eventType);
    console.log("🔍 isReady:", isReady);
    console.log("📞 calInstance:", calInstance);
    console.log("🌐 window.Cal:", (window as any).Cal);

    if (isReady && typeof window !== 'undefined' && (window as any).Cal) {
      console.log("✅ Attempting to open Cal.com modal...");
      try {
        (window as any).Cal('openModal', eventType);
        console.log("🎉 Cal.com modal called successfully");
      } catch (error) {
        console.error("❌ Cal.com call failed:", error);
      }
    } else {
      console.warn("⚠️ Cal.com not ready:");
      console.warn("  - isReady:", isReady);
      console.warn("  - window:", typeof window !== 'undefined');
      console.warn("  - Cal exists:", !!(window as any).Cal);
    }
  };

  return (
    <CalContext.Provider value={{ isReady, openModal }}>
      {children}
    </CalContext.Provider>
  );
}

export function useCal() {
  const context = useContext(CalContext);
  if (context === undefined) {
    throw new Error("useCal must be used within a CalProvider");
  }
  return context;
}