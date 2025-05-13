'use client'; // Adiciona esta linha no topo do ficheiro

import React from "react";
import Link from "next/link";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <button className="logo-text" onClick={() => window.location.href = '/'}>
            DevTech Masters Crew
          </button>
        </div>
        <ul className="nav-menu">
          <li><Link href="/" className="nav-link">Início</Link></li>
          <li><Link href="/about" className="nav-link">Sobre Nós</Link></li>
          <li><Link href="/team" className="nav-link">Equipa</Link></li>
          <li><Link href="/projects" className="nav-link">Projetos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;