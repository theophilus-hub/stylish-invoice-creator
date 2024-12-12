import { useState } from "react";
import { InvoiceForm, InvoiceData } from "@/components/InvoiceForm";
import { InvoicePreview } from "@/components/InvoicePreview";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [invoiceData, setInvoiceData] = useState<InvoiceData | null>(null);
  const { toast } = useToast();

  const handleSubmit = (data: InvoiceData) => {
    setInvoiceData(data);
    toast({
      title: "Invoice Generated!",
      description: "Your invoice has been generated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Invoice Generator</h1>
        {!invoiceData ? (
          <InvoiceForm onSubmit={handleSubmit} />
        ) : (
          <InvoicePreview
            data={invoiceData}
            onBack={() => setInvoiceData(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Index;