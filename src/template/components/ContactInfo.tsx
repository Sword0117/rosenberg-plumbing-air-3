"use client";
import { useConfig } from "@/template/ConfigProvider";
import { getIcon } from "./icons";
import styles from "./ContactInfo.module.css";

export default function ContactInfo() {
  const config = useConfig();
  const { business } = config;

  return (
    <div className={styles.card}>
      <p className={styles.companyName}>{business.name}</p>
      <p className={styles.tagline}>{business.tagline}</p>
      <div className={styles.divider} aria-hidden="true" />

      <ul className={styles.list}>
        <li className={styles.item}>
          <div className={styles.iconCircle} aria-hidden="true">
            {getIcon("phone")}
          </div>
          <div className={styles.itemContent}>
            <span className={styles.itemLabel}>Phone</span>
            <a href={`tel:${business.phone}`} className={styles.itemValue}>
              {business.phone}
            </a>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.iconCircle} aria-hidden="true">
            {getIcon("envelope")}
          </div>
          <div className={styles.itemContent}>
            <span className={styles.itemLabel}>Email</span>
            <a href={`mailto:${business.email}`} className={styles.itemValue}>
              {business.email}
            </a>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.iconCircle} aria-hidden="true">
            {getIcon("map-pin")}
          </div>
          <div className={styles.itemContent}>
            <span className={styles.itemLabel}>Address</span>
            <span className={styles.itemValue}>{business.address}</span>
          </div>
        </li>

        <li className={styles.item}>
          <div className={styles.iconCircle} aria-hidden="true">
            {getIcon("clock")}
          </div>
          <div className={styles.itemContent}>
            <span className={styles.itemLabel}>Business Hours</span>
            <span className={styles.itemValue}>
              Mon–Fri: 7:00 AM – 7:00 PM
              <br />
              Saturday: 8:00 AM – 5:00 PM
              <br />
              Sunday: Emergency Only
            </span>
          </div>
        </li>
      </ul>

      {/* Emergency call-out */}
      <div className={styles.emergencyBox}>
        <span className={styles.emergencyLabel}>
          <span aria-hidden="true">{getIcon("alert")}</span>
          Emergency? Call now
        </span>
        <a href={`tel:${business.phone}`} className={styles.emergencyPhone}>
          {business.phone}
        </a>
      </div>
    </div>
  );
}
