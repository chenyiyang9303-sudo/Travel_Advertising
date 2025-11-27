import { useEffect, useRef } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CONSTANTS } from "@/constants/links";

// Global flag to prevent duplicate initialization
let isCalInitialized = false;
let initPromise: Promise<void> | null = null;

export const useCalEmbed = () => {
  const initRef = useRef(false);

  useEffect(() => {
    // If already initializing or completed, return immediately
    if (initRef.current || isCalInitialized || initPromise) {
      return;
    }

    initRef.current = true;

    // Create initialization Promise and cache it
    initPromise = (async function () {
      try {
        const cal = await getCalApi({ namespace: CONSTANTS.CALCOM_NAMESPACE });

        cal("ui", {
          styles: {
            branding: {
              brandColor: CONSTANTS.CALCOM_BRAND_COLOR,
            },
          },
          hideEventTypeDetails: CONSTANTS.CALCOM_HIDE_EVENT_TYPE_DETAILS,
          layout: CONSTANTS.CALCOM_LAYOUT as any,
        });

        isCalInitialized = true;

      } catch (error) {
        console.error("❌ Cal.com initialization failed:", error);
        initRef.current = false;
        initPromise = null;
        isCalInitialized = false;
      }
    })();

    return () => {
      // Cleanup on unmount
      initRef.current = false;
    };
  }, []);

  return {
    namespace: CONSTANTS.CALCOM_NAMESPACE,
    link: CONSTANTS.CALCOM_LINK,
    layout: CONSTANTS.CALCOM_LAYOUT,
  };
};