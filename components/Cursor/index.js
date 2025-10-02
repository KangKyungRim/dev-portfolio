import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export default function Cursor() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const color = theme === "dark" ? "255,255,255" : "0,0,0";

  return (
    <AnimatedCursor
      clickables={[
        ".link",
        "a",
        "button",
        "[role='button']",
        "input",
        "textarea",
        "[data-cursor='grow']",
      ]}
      innerSize={10}
      outerSize={30}
      color={color}
      innerScale={1}
      outerScale={2}
      outerAlpha={0.2}
      showSystemCursor={false}
    />
  );
}