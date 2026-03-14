"use client";
import Image from "next/image";
import { useConfig } from "@/template/ConfigProvider";
import { getIcon } from "./icons";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
  const config = useConfig();
  const { business, hero } = config;
  const ownerPhoto = hero.owner_photo;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* Left: text content */}
        <div className={styles.textCol}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            Our Story
          </span>

          <h2 className={styles.heading}>
            Serving Our Community Since {business.founded}
          </h2>

          <p className={styles.story}>
            {business.name} was founded in {business.founded} with a simple
            belief: every homeowner deserves honest, dependable plumbing service
            at a fair price. What started as a one-truck operation has grown into
            a trusted local team — but our values have never changed.
          </p>

          <p className={styles.story}>
            Our certified technicians bring decades of combined experience to
            every job, whether it&rsquo;s a leaky faucet or a full bathroom
            renovation. We show up on time, explain the work clearly, and stand
            behind everything we do. When you call us, you get a neighbor — not
            a faceless call center.
          </p>

          <blockquote className={styles.missionStatement}>
            <p className={styles.missionText}>
              &ldquo;{business.tagline} That&rsquo;s not just our tagline — it&rsquo;s
              the standard we hold ourselves to on every single job.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* Right: owner photo or branded visual fallback */}
        <div className={styles.imageCol}>
          {ownerPhoto ? (
            <div className={styles.ownerPhotoCard}>
              <Image
                src={ownerPhoto}
                alt={`${business.name} owner`}
                width={480}
                height={600}
                className={styles.ownerPhoto}
              />
              <div className={styles.ownerOverlay}>
                <p className={styles.ownerName}>{business.name}</p>
                <div className={styles.foundedBadge}>
                  <span className={styles.foundedLabel}>Est.</span>
                  <span className={styles.foundedYear}>{business.founded}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.visualCard}>
              <div className={styles.visualInner}>
                <span className={styles.visualIcon} aria-hidden="true">
                  {getIcon("wrench")}
                </span>
                <p className={styles.visualCompanyName}>{business.name}</p>
                <p className={styles.visualTagline}>{business.tagline}</p>
                <div className={styles.foundedBadge}>
                  <span className={styles.foundedLabel}>Est.</span>
                  <span className={styles.foundedYear}>{business.founded}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
