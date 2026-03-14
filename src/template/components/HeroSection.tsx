"use client";
import Image from "next/image";
import Link from "next/link";
import { useConfig, useBasePath } from "@/template/ConfigProvider";
import { getIcon } from "./icons";
import styles from "./HeroSection.module.css";

const TRUST_BADGES = [
  { icon: "badge", label: "Licensed & Bonded" },
  { icon: "clock", label: "24/7 Emergency" },
  { icon: "check", label: "Satisfaction Guaranteed" },
];

export default function HeroSection() {
  const config = useConfig();
  const basePath = useBasePath();
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background gradient — no photo needed */}
      <div className={styles.bgGradient} aria-hidden="true" />
      <div className={styles.bgPattern} aria-hidden="true" />

      <div className={styles.container}>
        {/* Left content */}
        <div className={styles.content}>
          <p className={styles.eyebrow}>
            <span className={styles.eyebrowDot} aria-hidden="true" />
            Serving Austin Since {config.business.founded}
          </p>

          <h1 className={styles.headline}>{config.hero.headline}</h1>

          <p className={styles.subheadline}>{config.hero.subheadline}</p>

          {/* CTA buttons */}
          <div className={styles.ctaRow}>
            <a
              href={`tel:${config.business.phone}`}
              className={styles.ctaPrimary}
            >
              <span className={styles.ctaIcon} aria-hidden="true">
                {getIcon("phone")}
              </span>
              Call Now
            </a>
            <Link href={`${basePath}/services`} className={styles.ctaSecondary}>
              Our Services
              <span className={styles.ctaArrow} aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            {config.integrations?.scheduling?.url && (
              <Link href={`${basePath}/booking`} className={styles.ctaSecondary}>
                Book Appointment
                <span className={styles.ctaArrow} aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            )}
          </div>

          {/* Trust badges */}
          <div className={styles.badges} role="list">
            {TRUST_BADGES.map((badge) => (
              <span key={badge.label} className={styles.badge} role="listitem">
                <span className={styles.badgeIcon} aria-hidden="true">
                  {getIcon(badge.icon)}
                </span>
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        {/* Right illustration */}
        <div className={styles.illustrationWrapper} aria-hidden="true">
          <div className={styles.illustrationCard}>
            <Image
              src={config.hero.photo}
              alt=""
              width={480}
              height={480}
              className={styles.illustration}
              priority
            />
          </div>
          {/* Owner photo badge */}
          {config.hero.owner_photo && (
            <div className={styles.ownerBadge}>
              <Image
                src={config.hero.owner_photo}
                alt={`${config.business.name} owner`}
                width={64}
                height={64}
                className={styles.ownerBadgeImg}
              />
              <span className={styles.ownerBadgeLabel}>Owner</span>
            </div>
          )}
          {/* Floating stat card */}
          <div className={styles.floatCard}>
            <span className={styles.floatStar} aria-hidden="true">
              {getIcon("star")}
            </span>
            <div>
              <p className={styles.floatNumber}>4.9</p>
              <p className={styles.floatLabel}>Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
