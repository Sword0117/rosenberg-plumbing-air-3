import PageHeader from "@/template/components/PageHeader";
import BookingSection from "@/template/components/BookingSection";

export default function BookingPage() {
  return (
    <div>
      <PageHeader
        title="Book an Appointment"
        subtitle="Schedule a time that works for you — we&rsquo;ll handle the rest"
      />
      <BookingSection />
    </div>
  );
}
