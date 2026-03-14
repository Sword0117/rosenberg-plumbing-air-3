import config from "@/template.config";
import type { ServiceItem } from "@/template/types";
import PageHeader from "@/template/components/PageHeader";
import ServiceCard from "@/template/components/ServiceCard";
import CTABanner from "@/template/components/CTABanner";
import styles from "./services.module.css";

const additionalServices: ServiceItem[] = [
  {
    name: "Emergency Repairs",
    icon: "alert",
    description:
      "Around-the-clock emergency response. When a burst pipe or sudden failure threatens your home, our technicians arrive fast and work until the problem is solved.",
  },
  {
    name: "Pipe Inspection",
    icon: "search",
    description:
      "Camera-assisted inspection of your entire plumbing system. We identify leaks, blockages, and wear before they escalate into expensive damage.",
  },
  {
    name: "Remodeling",
    icon: "hammer",
    description:
      "Full plumbing rough-in and finish work for kitchen, bathroom, and whole-home remodels. We coordinate with your contractor to keep your project on schedule.",
  },
];

export default function ServicesPage() {
  return (
    <div className={styles.page}>
      <PageHeader
        title="Our Services"
        subtitle="Professional solutions tailored to your home and budget"
      />

      {/* Core Services */}
      <section className={styles.section} aria-labelledby="core-services-heading">
        <div className={styles.sectionInner}>
          <h2 id="core-services-heading" className={styles.sectionHeading}>
            Core Services
          </h2>
          <span className={styles.sectionHeadingAccent} aria-hidden="true" />
          <p className={styles.sectionSubtext}>
            Our most requested services, delivered by licensed technicians with a
            satisfaction guarantee on every job.
          </p>
          <div className={styles.grid}>
            {config.services.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>

      <div className={styles.divider} aria-hidden="true" />

      {/* Additional Services */}
      <section className={styles.section} aria-labelledby="additional-services-heading">
        <div className={styles.sectionInner}>
          <h2 id="additional-services-heading" className={styles.sectionHeading}>
            Additional Services
          </h2>
          <span className={styles.sectionHeadingAccent} aria-hidden="true" />
          <p className={styles.sectionSubtext}>
            From urgent emergencies to major renovations, we handle the full scope
            of residential and light-commercial plumbing needs.
          </p>
          <div className={styles.grid}>
            {additionalServices.map((service) => (
              <ServiceCard key={service.name} service={service} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
