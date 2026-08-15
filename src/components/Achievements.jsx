import React, { useState } from "react";

import {
  Trophy,
  Award,
  GraduationCap,
  ExternalLink,
  Calendar,
} from "lucide-react";

import { achievements, achievementCategories } from "../data/achievements";

const icons = {
  trophy: Trophy,
  certificate: Award,
  academic: GraduationCap,
};

export default function Achievements() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? achievements
      : achievements.filter((achievement) => achievement.category === filter);

  return (
    <section className="section archive" id="achievements">
      <div className="section-intro">
        <p className="eyebrow">
          <span>02</span>
          <i />
          ACHIEVEMENTS
        </p>

        <h2>Achievements</h2>

        <p>
          A collection of pencapaian, milestone, sertifikasi, dan hal-hal yang
          ingin saya dokumentasikan.
        </p>
      </div>

      <div className="archive-content">
        <div className="filters">
          {achievementCategories.map((category) => (
            <button
              key={category}
              className={filter === category ? "active" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="timeline">
          {filtered.map((achievement, index) => {
            const Icon = icons[achievement.icon] || Trophy;

            return (
              <article className="achievement" key={index}>
                <div className="year">{achievement.year}</div>

                <div className="timeline-line">
                  <span />
                </div>

                <div className="achievement-card">
                  <div className="achievement-icon">
                    <Icon size={23} />
                  </div>

                  <div className="achievement-main">
                    <span className="category">{achievement.category}</span>

                    <h3>{achievement.title}</h3>

                    <p>{achievement.description}</p>
                  </div>

                  <div className="achievement-meta">
                    <span>
                      <Calendar size={14} />
                      {achievement.date}
                    </span>

                    <a href={achievement.link}>
                      View Credential
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
