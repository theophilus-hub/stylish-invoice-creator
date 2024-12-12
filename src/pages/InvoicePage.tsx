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

  return <InvoicePreview data={invoiceData} onBack={handleBack} />;
}