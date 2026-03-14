"use client";

import { useState } from "react";
import { useConfig } from "@/template/ConfigProvider";
import { getIcon } from "./icons";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const config = useConfig();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const emailConfig = config.integrations?.email;

    if (!emailConfig?.to_email) {
      // No email config — just show success (current behavior)
      setSubmitted(true);
      return;
    }

    setSending(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/integrations/contact-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: formData.get("name"),
          customer_email: formData.get("email"),
          customer_phone: formData.get("phone") || "",
          service: formData.get("service") || "",
          message: formData.get("message"),
          business_name: config.business.name,
          to_email: emailConfig.to_email,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className={styles.success} role="alert">
        <div className={styles.checkCircle} aria-hidden="true">
          {getIcon("check")}
        </div>
        <h3 className={styles.successHeading}>Message Received!</h3>
        <p className={styles.successText}>
          Thank you for reaching out. We&rsquo;ll get back to you within one
          business day.
        </p>
        <p className={styles.successText}>
          Need immediate help? Call us at&nbsp;
          <a href={`tel:${config.business.phone}`} className={styles.phoneLink}>
            {config.business.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.formTitle}>Send Us a Message</h2>
      <p className={styles.formSubtitle}>
        Fill out the form below and we&rsquo;ll get back to you promptly.
      </p>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        {/* Name + Phone row */}
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="cf-name" className={styles.label}>
              Name<span className={styles.required} aria-hidden="true">*</span>
            </label>
            <input
              id="cf-name"
              type="text"
              name="name"
              className={styles.input}
              placeholder="Your full name"
              autoComplete="name"
              required
              aria-required="true"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="cf-phone" className={styles.label}>
              Phone
            </label>
            <input
              id="cf-phone"
              type="tel"
              name="phone"
              className={styles.input}
              placeholder="(555) 000-0000"
              autoComplete="tel"
            />
          </div>
        </div>

        {/* Email */}
        <div className={styles.field}>
          <label htmlFor="cf-email" className={styles.label}>
            Email<span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            name="email"
            className={styles.input}
            placeholder="you@example.com"
            autoComplete="email"
            required
            aria-required="true"
          />
        </div>

        {/* Service dropdown */}
        <div className={styles.field}>
          <label htmlFor="cf-service" className={styles.label}>
            Service Needed
          </label>
          <div className={styles.selectWrapper}>
            <select
              id="cf-service"
              name="service"
              className={styles.select}
              defaultValue=""
            >
              <option value="" disabled>
                Select a service…
              </option>
              {config.services.map((s) => (
                <option key={s.name} value={s.name}>
                  {s.name}
                </option>
              ))}
              <option value="Emergency Repairs">Emergency Repairs</option>
              <option value="Pipe Inspection">Pipe Inspection</option>
              <option value="Remodeling">Remodeling</option>
              <option value="Other">Other</option>
            </select>
            <span className={styles.selectArrow} aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </div>
        </div>

        {/* Message */}
        <div className={styles.field}>
          <label htmlFor="cf-message" className={styles.label}>
            Message<span className={styles.required} aria-hidden="true">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            className={styles.textarea}
            placeholder="Describe the issue or work you need done…"
            rows={5}
            required
            aria-required="true"
          />
        </div>

        <button type="submit" className={styles.submitButton} disabled={sending}>
          <span aria-hidden="true">{getIcon("envelope")}</span>
          {sending ? "Sending…" : "Send Message"}
        </button>
        {error && <p className={styles.errorText} role="alert">{error}</p>}
      </form>
    </div>
  );
}
