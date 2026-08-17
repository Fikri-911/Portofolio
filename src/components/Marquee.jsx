import React from "react";

export default function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <div className="marquee-content">
          <span>PORTOFOLIO</span>
          <span>PORTOFOLIO</span>
          <span>PORTOFOLIO</span>
          <span>PORTOFOLIO</span>
        </div>

        <div className="marquee-content" aria-hidden="true">
          <span>PORTOFOLIO</span>
          <span>PORTOFOLIO</span>
          <span>PORTOFOLIO</span>
          <span>PORTOFOLIO</span>
        </div>
      </div>
    </div>
  );
}