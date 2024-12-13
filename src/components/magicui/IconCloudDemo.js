// src/components/magicui/IconCloudDemo.js
import React from "react";
import IconCloud from "./IconCloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
];

export const IconCloudDemo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "15px",
        background: "#ffffff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <IconCloud iconSlugs={slugs} />
    </div>
  );
};
