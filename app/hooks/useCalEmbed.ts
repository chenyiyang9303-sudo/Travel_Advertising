import { useEffect, useRef } from "react";
import { getCalApi } from "@calcom/embed-react";
import { CONSTANTS } from "@/constants/links";

// 全局标记防止重复初始化
let isCalInitialized = false;
let initPromise: Promise<void> | null = null;

export const useCalEmbed = () => {
  const initRef = useRef(false);

  useEffect(() => {
    // 如果已经在初始化中或已完成，直接返回
    if (initRef.current || isCalInitialized || initPromise) {
      return;
    }

    initRef.current = true;

    // 创建初始化 Promise 并缓存
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
        console.error("❌ Cal.com初始化失败:", error);
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