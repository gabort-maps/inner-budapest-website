"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navigation, type Section } from "../content/site-registry";

export function SiteHeader({ activeSection }: { activeSection?: Section }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const closeDropdown = (event: globalThis.PointerEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".nav-group")) setOpenDropdown(null);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeDropdown);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeDropdown);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const closeMenus = () => {
    setOpenDropdown(null);
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <Link className={`brand ${activeSection ? "" : "active"}`} href="/" aria-label="My neighbourhood, home">
        My neighbourhood
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        onClick={() => {
          setMenuOpen(!menuOpen);
          setOpenDropdown(null);
        }}
      >
        Menu <span aria-hidden="true">{menuOpen ? "×" : "+"}</span>
      </button>
      <nav id="primary-navigation" className={menuOpen ? "primary-nav open" : "primary-nav"} aria-label="Primary navigation">
        {navigation.map((item) =>
          item.items.length ? (
            <details className={`nav-group ${activeSection === item.label ? "current" : ""}`} key={item.label} open={openDropdown === item.label}>
              <summary
                onClick={(event) => {
                  event.preventDefault();
                  setOpenDropdown(openDropdown === item.label ? null : item.label);
                }}
              >
                <Link href={item.href} onClick={(event) => event.stopPropagation()}>{item.label}</Link>
                <span aria-hidden="true">⌄</span>
              </summary>
              <div className="dropdown">
                {item.items.map((subitem) => (
                  <Link href={subitem.href} key={subitem.label} onClick={closeMenus}>
                    {subitem.label}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link className={`nav-link ${activeSection === item.label ? "current" : ""}`} href={item.href} key={item.label} onClick={closeMenus}>
              {item.label}
            </Link>
          ),
        )}
      </nav>
    </header>
  );
}
