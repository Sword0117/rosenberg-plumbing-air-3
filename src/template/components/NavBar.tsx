"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useConfig, useBasePath } from "@/template/ConfigProvider";
import type { TemplateConfig } from "@/template/types";
import { getIcon } from "./icons";
import styles from "./NavBar.module.css";

function getNavLinks(config: TemplateConfig, basePath: string) {
  const links = [
    { label: "Home", href: basePath },
    { label: "Services", href: `${basePath}/services` },
    { label: "About", href: `${basePath}/about` },
  ];

  if (config.integrations?.scheduling?.url) {
    links.push({ label: "Book Now", href: `${basePath}/booking` });
  }

  if (config.integrations?.payments?.payment_link) {
    links.push({ label: "Payments", href: `${basePath}/payments` });
  }

  links.push({ label: "Contact", href: `${basePath}/contact` });

  return links;
}

export default function NavBar() {
  const config = useConfig();
  const basePath = useBasePath();
  const navLinks = getNavLinks(config, basePath);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <>
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}
        aria-label="Main navigation"
      >
        <div className={styles.inner}>
          {/* Logo */}
          {(() => { const logoSrc = typeof config.logo === "string" ? config.logo : config.logo?.src; return logoSrc && !logoSrc.includes("nitro-empty"); })() ? (
            <Link href={basePath} className={styles.logoLink} onClick={close}>
              <Image
                src={typeof config.logo === "string" ? config.logo : config.logo?.src || ""}
                alt={config.business.name}
                width={160}
                height={40}
                className={styles.logoImg}
              />
            </Link>
          ) : (
            <Link href={basePath} className={styles.logo} onClick={close}>
              <span className={styles.logoAccent} aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </span>
              <span className={styles.logoText}>{config.business.name}</span>
            </Link>
          )}

          {/* Desktop navigation */}
          <ul className={styles.navLinks} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={`tel:${config.business.phone}`}
            className={styles.ctaButton}
          >
            <span className={styles.ctaIcon} aria-hidden="true">
              {getIcon("phone")}
            </span>
            <span>{config.business.phone}</span>
          </a>

          {/* Mobile toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? getIcon("close") : getIcon("menu")}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOpen : ""}`}
        aria-hidden={!isOpen}
      >
        <ul className={styles.mobileLinks} role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={styles.mobileLink}
                onClick={close}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={`tel:${config.business.phone}`}
              className={styles.mobileCta}
              onClick={close}
            >
              <span aria-hidden="true">{getIcon("phone")}</span>
              <span>Call {config.business.phone}</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
