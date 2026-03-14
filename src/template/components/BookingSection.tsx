"use client";

import { useState } from "react";
import { useConfig } from "@/template/ConfigProvider";
import { getIcon } from "./icons";
import styles from "./BookingSection.module.css";

export default function BookingSection() {
  const config = useConfig();
  const [embedError, setEmbedError] = useState(false);
  const scheduling = config.integrations?.scheduling;

  if (!scheduling?.url) return null;

  const isCalendly = scheduling.provider === "calendly" || scheduling.url.includes("calendly.com");
  const embedUrl = isCalendly
    ? `${scheduling.url}?embed_type=Inline&embed_domain=${typeof window !== "undefined" ? window.location.hostname : ""}`
    : scheduling.url;

  return (
    <section className={styles.section} aria-label="Book an appointment">
      <h2 className={styles.heading}>Schedule an Appointment</h2>
      <p className={styles.subtitle}>
        Choose a time that works best for you. We&rsquo;ll confirm your appointment promptly.
      </p>

      {embedError ? (
        <div className={styles.fallback}>
          <p className={styles.fallbackText}>
            Book your appointment directly through our scheduling page.
          </p>
          <a
            href={scheduling.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookButton}
          >
            <span aria-hidden="true">{getIcon("clock")}</span>
            Book Appointment
          </a>
        </div>
      ) : (
        <div className={styles.embedWrapper}>
          <iframe
            src={embedUrl}
            className={styles.iframe}
            title={`Book an appointment with ${config.business.name}`}
            loading="lazy"
            onError={() => setEmbedError(true)}
          />
        </div>
      )}
    </section>
  );
}
