import { StarRating } from "./icons";
import styles from "./TestimonialsStrip.module.css";

const TESTIMONIALS = [
  {
    quote:
      "They showed up on time and did amazing work. Fixed our burst pipe in under an hour. Highly recommend!",
    author: "Sarah M.",
    location: "Austin, TX",
  },
  {
    quote:
      "Professional, affordable, and friendly. Called at midnight for an emergency and they were at my door within 30 minutes.",
    author: "James R.",
    location: "Austin, TX",
  },
  {
    quote:
      "Best service experience I've ever had. They went above and beyond, explained everything clearly, and left the place spotless.",
    author: "Maria L.",
    location: "Austin, TX",
  },
];

/* Decorative large quote SVG */
function QuoteMark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={styles.quoteMark}
    >
      <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.95.76-3 .66-1.05 1.5-1.86 2.55-2.43L9.963 5.14c-1.5.78-2.75 1.9-3.75 3.36-.99 1.46-1.49 3.04-1.49 4.74 0 1.55.42 2.8 1.27 3.75.84.95 1.97 1.42 3.37 1.42.97 0 1.78-.31 2.44-.93.66-.62.98-1.44.98-2.46l.4-.24zm8.2 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.072-.132-1.54-.022-.16-.95.1-1.95.76-3 .66-1.05 1.5-1.86 2.55-2.43L18.163 5.14c-1.5.78-2.75 1.9-3.75 3.36-.99 1.46-1.49 3.04-1.49 4.74 0 1.55.42 2.8 1.27 3.75.84.95 1.97 1.42 3.37 1.42.97 0 1.78-.31 2.44-.93.66-.62.98-1.44.98-2.46l.38-.24z" />
    </svg>
  );
}

export default function TestimonialsStrip() {
  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>Customer Stories</p>
          <h2 className={styles.heading} id="testimonials-heading">
            What Our Customers Say
          </h2>
          <div className={styles.headingUnderline} aria-hidden="true" />
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {TESTIMONIALS.map((t) => (
            <figure key={t.author} className={styles.card}>
              <QuoteMark />
              <blockquote className={styles.quote}>
                <p>{t.quote}</p>
              </blockquote>
              <div className={styles.cardBottom}>
                <p className={styles.stars} aria-label="5 out of 5 stars">
                  <StarRating count={5} />
                </p>
                <figcaption className={styles.authorBlock}>
                  <span className={styles.author}>{t.author}</span>
                  <span className={styles.verifiedBadge} aria-label="Verified Customer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={12}
                      height={12}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Verified Customer
                  </span>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
