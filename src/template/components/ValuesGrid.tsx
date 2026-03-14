import { getIcon } from "./icons";
import styles from "./ValuesGrid.module.css";

const values = [
  {
    icon: "shield",
    title: "Licensed & Insured",
    description:
      "Every technician is fully licensed, bonded, and insured. You get professional protection on every job — no shortcuts, no surprises.",
  },
  {
    icon: "home",
    title: "Local & Responsive",
    description:
      "We live and work right here in your community. Same-day service is our standard, not an upsell. Your neighbors are our neighbors.",
  },
  {
    icon: "star",
    title: "100% Satisfaction",
    description:
      "We stand behind every job we complete. If something isn't right, we make it right — no arguments, no hassle, guaranteed.",
  },
];

export default function ValuesGrid() {
  return (
    <section className={styles.section} aria-labelledby="values-heading">
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowLine} aria-hidden="true" />
            Our Values
            <span className={styles.eyebrowLine} aria-hidden="true" />
          </span>
          <h2 id="values-heading" className={styles.heading}>
            What Sets Us Apart
          </h2>
          <span className={styles.headingAccent} aria-hidden="true" />
        </div>

        <div className={styles.grid}>
          {values.map((v) => (
            <div key={v.title} className={styles.card}>
              <div className={styles.iconCircle} aria-hidden="true">
                {getIcon(v.icon)}
              </div>
              <h3 className={styles.title}>{v.title}</h3>
              <p className={styles.description}>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
