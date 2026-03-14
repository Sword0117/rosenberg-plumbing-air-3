import PageHeader from "@/template/components/PageHeader";
import PaymentSection from "@/template/components/PaymentSection";

export default function PaymentsPage() {
  return (
    <div>
      <PageHeader
        title="Make a Payment"
        subtitle="Pay your invoice securely online"
      />
      <PaymentSection />
    </div>
  );
}
