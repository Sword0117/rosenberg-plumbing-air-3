export interface PaletteConfig {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}

export interface ServiceItem {
  name: string;
  /** Icon name recognised by `getIcon()` in components/icons.tsx (e.g. "wrench", "droplet"). */
  icon: string;
  description: string;
}

export interface TestimonialItem {
  text: string;
  author: string;
  role: string;
}

export interface SchedulingConfig {
  provider: "calendly" | "cal";
  url: string;
}

export interface EmailConfig {
  provider: "sendgrid";
  to_email: string;
}

export interface PaymentsConfig {
  provider: "stripe";
  payment_link?: string;
  publishable_key?: string;  // Phase 2: for embedded checkout
}

export interface IntegrationsConfig {
  scheduling?: SchedulingConfig;
  email?: EmailConfig;
  payments?: PaymentsConfig;
}

export interface TemplateConfig {
  business: {
    name: string;
    tagline: string;
    phone: string;
    email: string;
    address: string;
    founded: string;
  };
  industry: "plumbing" | "electrical" | "hvac" | "landscaping" | "cleaning" | "handyman" | string;
  hero: {
    photo: string;
    headline: string;
    subheadline: string;
    owner_photo?: string;
  };
  services: ServiceItem[];
  palette: PaletteConfig;
  logo: string;
  about_text?: string;
  testimonials?: TestimonialItem[];
  integrations?: IntegrationsConfig;
}
