"use client";
import Link from "next/link";
import { useConfig, useBasePath } from "@/template/ConfigProvider";
import { getIcon } from "./icons";
import styles from "./CTABanner.module.css";

export default function CTABanner() {
  const config = useConfig();
  const basePath = useBasePath();
  return (
    <section className={styles.banner} aria-labelledby="cta-heading">
      <div className={styles.patternOverlay} aria-hidden="true" />
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.headline} id="cta-heading">
            Ready to Get Started?
          </h2>
          <p className={styles.subtext}>
            Call us now for a free estimate. Fast response, expert service —
            every time.
          </p>
        </div>
        <div className={styles.actions}>
          <a
            href={`tel:${config.business.phone}`}
            className={styles.phoneButton}
          >
            <span className={styles.phoneIcon} aria-hidden="true">
              {getIcon("phone")}
            </span>
            {config.business.phone}
          </a>
          {config.integrations?.scheduling?.url && (
            <Link href={`${basePath}/booking`} className={styles.secondaryButton}>
              <span aria-hidden="true">{getIcon("clock")}</span>
              Book Online
            </Link>
          )}
          <p className={styles.subNote}>No obligation. Available 24/7.</p>
        </div>
      </div>
    </section>
  );
}
