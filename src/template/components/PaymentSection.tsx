"use client";

import { useConfig } from "@/template/ConfigProvider";
import { getIcon } from "./icons";
import styles from "./PaymentSection.module.css";

export default function PaymentSection() {
  const config = useConfig();
  const payments = config.integrations?.payments;

  if (!payments?.payment_link) return null;

  return (
    <section className={styles.section} aria-label="Make a payment">
      <div className={styles.card}>
        <div className={styles.iconCircle} aria-hidden="true">
          {getIcon("shield")}
        </div>
        <h2 className={styles.heading}>Make a Payment</h2>
        <p className={styles.description}>
          Pay your invoice securely online. We accept all major credit cards,
          Apple&nbsp;Pay, and Google&nbsp;Pay through our secure payment portal.
        </p>
        <a
          href={payments.payment_link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.payButton}
        >
          <span aria-hidden="true">{getIcon("check")}</span>
          Pay Now
        </a>
        <p className={styles.secureNote}>
          <span className={styles.secureIcon} aria-hidden="true">
            {getIcon("shield")}
          </span>
          Secured by Stripe — your payment info is never stored on our servers
        </p>
        <div className={styles.methods}>
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Amex</span>
          <span>Apple Pay</span>
          <span>Google Pay</span>
        </div>
      </div>
    </section>
  );
}
