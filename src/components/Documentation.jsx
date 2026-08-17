import React from "react";
import { ArrowUpRight } from "lucide-react";
import { documentation } from "../data/documentation";

export default function Documentation() {
  return (
    <section className="section docs" id="documentation">
      <div className="section-intro">
        <p className="eyebrow">
          <span>03</span>
          <i /> DOCUMENTATION
        </p>
        <h2>Documentation</h2>
        <p>
          Learning journey, project, eksperimen, dan catatan perkembangan saya.
        </p>
        <a className="text-link" href="#documentation">
          View All Documentation <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="doc-grid">
        {documentation.map((d, i) => (
          <article
            className="doc-card"
            key={i}
            style={{
              "--delay": `${i * 140}ms`,
            }}
          >
            <div className="doc-image">
              <img src={d.image} alt={d.title} />
              <a href={d.link} className="image-link">
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="doc-body">
              <div className="doc-top">
                <span>{d.type}</span>
                <small>{d.date}</small>
              </div>
              <h3>{d.title}</h3>
              <p>{d.description}</p>
              <div className="tags">
                {d.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
