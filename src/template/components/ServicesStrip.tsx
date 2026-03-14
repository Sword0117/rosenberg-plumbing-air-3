"use client";
import Link from "next/link";
import { useConfig, useBasePath } from "@/template/ConfigProvider";
import { getIcon } from "./icons";
import styles from "./ServicesStrip.module.css";

export default function ServicesStrip() {
  const config = useConfig();
  const basePath = useBasePath();
  return (
    <section className={styles.section} aria-labelledby="services-heading">
      <div className={styles.container}>
        {/* Section header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>What We Do</p>
          <h2 className={styles.heading} id="services-heading">
            Our Services
          </h2>
          <div className={styles.headingUnderline} aria-hidden="true" />
          <p className={styles.subheading}>
            Expert solutions for every plumbing need — done right the first time.
          </p>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {config.services.map((service, index) => (
            <div
              key={service.name}
              className={styles.card}
              style={{ "--card-index": index } as React.CSSProperties}
            >
              <div className={styles.iconBadge} aria-hidden="true">
                {getIcon(service.icon)}
              </div>
              <h3 className={styles.cardTitle}>{service.name}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <Link
                href={`${basePath}/services`}
                className={styles.cardLink}
                aria-label={`Learn more about ${service.name}`}
              >
                Learn more
                <span aria-hidden="true" className={styles.cardLinkArrow}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
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
            </div>
          ))}
        </div>

        {/* View all link */}
        <div className={styles.viewAll}>
          <Link href={`${basePath}/services`} className={styles.viewAllLink}>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
