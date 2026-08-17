import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "home"], ["Achievements", "achievements"],
    ["Project", "documentation"], ["Contact", "contact"]
  ];

  return (
    <header className="navbar">
      <a className="logo" href="#home" onClick={() => setOpen(false)}>MF</a>
      <nav className={open ? "nav-links open" : "nav-links"}>
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <div className="nav-actions">
        <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
          {dark ? <Sun size={18}/> : <Moon size={18}/>}
        </button>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X/> : <Menu/>}
        </button>
      </div>
    </header>
  );
}