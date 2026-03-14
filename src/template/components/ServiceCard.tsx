"use client";
import type { ServiceItem } from "@/template/types";
import { useBasePath } from "@/template/ConfigProvider";
import { getIcon } from "./icons";
import styles from "./ServiceCard.module.css";

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const basePath = useBasePath();
  return (
    <a href={`${basePath}/contact`} className={styles.card}>
      <div className={styles.iconCircle} aria-hidden="true">
        {getIcon(service.icon)}
      </div>
      <h3 className={styles.name}>{service.name}</h3>
      <p className={styles.description}>{service.description}</p>
      <span className={styles.quoteLink} aria-label={`Get a quote for ${service.name}`}>
        Get a Quote
        <span className={styles.arrow} aria-hidden="true">&rarr;</span>
      </span>
    </a>
  );
}
