"use client";

import { Pointer } from "@/components/magicui/pointer";
import { useState, useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const resources = ["/video/video.mp4"];

    let loadedCount = 0;
    let totalResources = resources.length;

    const incrementProgress = () => {
      loadedCount++;
      const newProgress = Math.round((loadedCount / totalResources) * 100);
      setProgress(newProgress);

      if (loadedCount === totalResources) {
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }
    };

    resources.forEach((resourceUrl) => {
      if (resourceUrl.endsWith(".mp4")) {
        const video = document.createElement("video");
        video.preload = "auto";

        video.addEventListener("loadeddata", incrementProgress);
        video.addEventListener("error", incrementProgress);

        video.src = resourceUrl;
      }
    });

    const fallbackTimer = setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
    }, 8000);

    return () => {
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <html lang="en" className="dark">
      <title>KASIM SAIFI</title>
      <body>
        {isLoading ? (
          <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-2 text-white">
                KASIM SAIFI
              </h1>
              <p className="text-gray-400">Loading your experience...</p>
            </div>

            {/* Loading bar */}
            <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-white transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="mt-3 text-sm text-gray-500">{progress}%</p>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
