import config from "@/template.config";
import PageHeader from "@/template/components/PageHeader";
import AboutHero from "@/template/components/AboutHero";
import ValuesGrid from "@/template/components/ValuesGrid";
import CTABanner from "@/template/components/CTABanner";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle={`Trusted by homeowners since ${config.business.founded}`}
      />
      <AboutHero />
      <ValuesGrid />
      <CTABanner />
    </>
  );
}
