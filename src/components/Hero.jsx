import React from "react";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Code2,
} from "lucide-react";
import profilePhoto from "../assets/Profile.jpeg";
import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">
          <span>01</span>
          <i />
          ABOUT ME
        </p>

        <h1>
          Hi, I'm
          <br />
          <strong>{profile.name}</strong>
        </h1>

        <h2>{profile.role}</h2>

        <p className="hero-bio">{profile.bio}</p>

        <div className="hero-actions">
          <a className="btn primary" href="#achievements">
            Explore Achievements
            <ArrowUpRight size={17} />
          </a>

          <a className="btn" href="#documentation">
            View Documentation
          </a>
        </div>

        <div className="socials">
          <a href={profile.github} aria-label="GitHub">
            <Github />
          </a>

          <a href={profile.linkedin} aria-label="LinkedIn">
            <Linkedin />
          </a>

          <a href={profile.instagram} aria-label="Instagram">
            <Instagram />
          </a>

          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail />
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait">
          <img
            src={profilePhoto}
            alt={`Foto profil ${profile.name}`}
            className="profile-photo"
          />
          <div className="code-badge">
            <Code2 size={22} />
          </div>

          <div className="profile-card">
            <div>
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>

            <div>
              <span className="dot" />
              {profile.status}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
