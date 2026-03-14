"use client";
import Link from "next/link";
import { useConfig, useBasePath } from "@/template/ConfigProvider";
import { getIcon } from "./icons";
import styles from "./Footer.module.css";

export default function Footer() {
  const config = useConfig();
  const basePath = useBasePath();
  const navLinks = [
    { label: "Home", href: basePath },
    { label: "Services", href: `${basePath}/services` },
    { label: "About", href: `${basePath}/about` },
    { label: "Contact", href: `${basePath}/contact` },
  ];
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Company info */}
        <div className={styles.col}>
          <div className={styles.logoBlock}>
            <span className={styles.logoAccent} aria-hidden="true">
              {getIcon("wrench")}
            </span>
            <span className={styles.logoName}>{config.business.name}</span>
          </div>
          <p className={styles.tagline}>{config.business.tagline || "Your trusted local professionals"}</p>
          <p className={styles.description}>
            Serving the Austin area with honest, reliable plumbing since{" "}
            {config.business.founded || ""}.
          </p>
        </div>

        {/* Quick links */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Quick Links</h3>
          <ul className={styles.navLinks} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div className={styles.col}>
          <h3 className={styles.colHeading}>Contact Us</h3>
          <ul className={styles.contactList} role="list">
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">
                {getIcon("phone")}
              </span>
              <a
                href={`tel:${config.business.phone}`}
                className={styles.contactLink}
              >
                {config.business.phone}
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">
                {getIcon("envelope")}
              </span>
              <a
                href={config.business.email ? `mailto:${config.business.email || "Contact us"}` : "#"}
                className={styles.contactLink}
              >
                {config.business.email || "Contact us"}
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon} aria-hidden="true">
                {getIcon("map-pin")}
              </span>
              <span className={styles.contactText}>
                {config.business.address}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          &copy; {currentYear} {config.business.name}. All rights reserved.
        </p>
        <p className={styles.license}>Licensed &middot; Bonded &middot; Insured</p>
      </div>
    </footer>
  );
}
