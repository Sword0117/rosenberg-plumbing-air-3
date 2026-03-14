"use client";
import { useConfig } from "@/template/ConfigProvider";
import { getIcon } from "./icons";
import styles from "./WhyChooseUs.module.css";

const VALUE_PROPS = [
  {
    icon: "badge",
    title: "Licensed & Insured",
    description:
      "Fully certified professionals backed by comprehensive insurance. You're protected every step of the way.",
  },
  {
    icon: "clock",
    title: "Available 24/7",
    description:
      "Plumbing emergencies don't keep business hours. Our team is always ready to respond — day or night.",
  },
  {
    icon: "check",
    title: "Satisfaction Guaranteed",
    description:
      "We stand behind every job we do. Not happy? We'll make it right — no questions asked.",
  },
];

export default function WhyChooseUs() {
  const config = useConfig();

  const STATS = [
    {
      value: config.business.founded ? `${new Date().getFullYear() - parseInt(config.business.founded)}+` : "Many",
      label: "Years in Business",
    },
    { value: "5,000+", label: "Jobs Completed" },
    { value: "4.9★", label: "Average Rating" },
  ];

  return (
    <section className={styles.section} aria-labelledby="why-heading">
      <div className={styles.bgAccent} aria-hidden="true" />

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our Promise</p>
          <h2 className={styles.heading} id="why-heading">
            Why Choose {config.business.name}?
          </h2>
          <div className={styles.headingUnderline} aria-hidden="true" />
        </div>

        {/* Feature cards */}
        <div className={styles.grid}>
          {VALUE_PROPS.map((prop) => (
            <div key={prop.title} className={styles.card}>
              <div className={styles.cardAccentBar} aria-hidden="true" />
              <div className={styles.iconWrap} aria-hidden="true">
                {getIcon(prop.icon)}
              </div>
              <h3 className={styles.cardTitle}>{prop.title}</h3>
              <p className={styles.cardDesc}>{prop.description}</p>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className={styles.statsRow} role="list">
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.stat} role="listitem">
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
