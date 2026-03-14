import PageHeader from "@/template/components/PageHeader";
import ContactForm from "@/template/components/ContactForm";
import ContactInfo from "@/template/components/ContactInfo";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <PageHeader
        title="Contact Us"
        subtitle="We&apos;re here to help — reach out any time"
      />
      <section className={styles.contactSection} aria-label="Contact information and form">
        <div className={styles.inner}>
          {/* Left: contact info — sticky on desktop */}
          <div className={styles.infoColumn}>
            <ContactInfo />
          </div>

          {/* Right: contact form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
