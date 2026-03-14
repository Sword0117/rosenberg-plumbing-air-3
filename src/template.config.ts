// OPERATOR: Edit this file to personalize the template for your prospect.
// Visit localhost:3000/template to preview — changes apply on save (Next.js hot reload).
import type { TemplateConfig } from "@/template/types";

const config: TemplateConfig = {
  business: {
    name: "Sunrise Plumbing",
    tagline: "Fast, reliable, done right.",
    phone: "(555) 867-5309",
    email: "hello@sunriseplumbing.com",
    address: "123 Main St, Austin TX 78701",
    founded: "2009",
  },
  industry: "plumbing",
  hero: {
    photo: "/template/photos/hero-plumber.svg",
    headline: "Your Local Plumbing Experts",
    subheadline: "Available 24/7 for emergencies. Licensed, bonded, insured.",
  },
  services: [
    { name: "Drain Cleaning", icon: "wrench", description: "Fast unclogging, no mess." },
    { name: "Water Heater Install", icon: "thermometer", description: "Same-day service available." },
    { name: "Leak Repair", icon: "droplet", description: "We find it, we fix it." },
  ],
  palette: {
    primary: "#0F172A",
    secondary: "#334155",
    accent: "#0369A1",
    text: "#020617",
    background: "#F8FAFC",
  },
  logo: "",
};

export default config;
