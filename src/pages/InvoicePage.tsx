import { useLocation, useNavigate } from "react-router-dom";
import { InvoicePreview } from "@/components/InvoicePreview";
import { InvoiceData } from "@/components/InvoiceForm";

export default function InvoicePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const invoiceData = location.state?.data as InvoiceData;

  if (!invoiceData) {
    navigate("/dashboard");
    return null;
  }

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-8">
      <InvoicePreview data={invoiceData} onBack={handleBack} />
    </div>
  );
}