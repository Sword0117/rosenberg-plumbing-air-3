import config from "@/template.config";
import PageHeader from "@/template/components/PageHeader";
import AboutHero from "@/template/components/AboutHero";
import ValuesGrid from "@/template/components/ValuesGrid";
import CTABanner from "@/template/components/CTABanner";

export default function AboutPage() {
  const founded = (config.business as Record<string, unknown>).founded;
  const subtitle = founded
    ? `Trusted by homeowners since ${founded}`
    : "Your trusted local professionals";

  return (
    <>
      <PageHeader title="About Us" subtitle={subtitle} />
      <AboutHero />
      <ValuesGrid />
      <CTABanner />
    </>
  );
}
