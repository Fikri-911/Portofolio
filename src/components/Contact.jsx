import React from "react";
import { Github, Linkedin, Instagram, Mail, MapPin, Send } from "lucide-react";
import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="contact-info">
        <p className="eyebrow"><span>04</span><i/> CONTACT</p>
        <h2>Let's connect.</h2>
        <p>Feel free to reach out for collaboration, discussion, or just a friendly hello.</p>
        <div className="contact-details">
          <a href={`mailto:${profile.email}`}><Mail/> {profile.email}</a>
          <span><MapPin/> {profile.location}</span>
        </div>
        <div className="socials">
          <a href={profile.github}><Github/></a>
          <a href={profile.linkedin}><Linkedin/></a>
          <a href={profile.instagram}><Instagram/></a>
        </div>
      </div>

      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <div className="form-row">
          <input placeholder="Your Name" aria-label="Your Name"/>
          <input type="email" placeholder="Your Email" aria-label="Your Email"/>
        </div>
        <textarea placeholder="Your Message" aria-label="Your Message"/>
        <button className="btn primary" type="submit">Send Message <Send size={16}/></button>
      </form>
    </section>
  );
}