import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className={styles.header}>
      <div className={styles.inner}>
        <span className={styles.eyebrow} aria-hidden="true" />
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.bottomFade} aria-hidden="true" />
    </section>
  );
}
