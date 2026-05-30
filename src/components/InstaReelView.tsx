"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

interface InstagramReelProps {
  reelUrl: string;
}

export default function InstagramReel({
  reelUrl,
}: InstagramReelProps) {
  useEffect(() => {
    const existingScript = document.getElementById(
      "instagram-embed-script"
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;

      script.onload = () => {
        window.instgrm?.Embeds?.process();
      };

      document.body.appendChild(script);
    } else {
      window.instgrm?.Embeds?.process();
    }
  }, [reelUrl]);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={reelUrl}
      data-instgrm-version="14"
      style={{
        width: "100%",
        margin: "0 auto",
      }}
    />
  );
}