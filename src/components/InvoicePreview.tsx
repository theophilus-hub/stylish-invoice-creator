import { InvoiceData } from "./InvoiceForm";
import { generateInvoiceNumber } from "@/lib/constants";
import { Button } from "./ui/button";
import html2pdf from "html2pdf.js";
import { useRef } from "react";

interface InvoicePreviewProps {
  data: InvoiceData;
  onBack: () => void;
}

export function InvoicePreview({ data, onBack }: InvoicePreviewProps) {
  const invoiceRef = useRef<HTMLDivElement>(null);
  const invoiceNumber = generateInvoiceNumber();
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDownloadPDF = () => {
    if (invoiceRef.current) {
      const opt = {
        margin: 1,
        filename: `invoice-${invoiceNumber}.pdf`,
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      html2pdf().set(opt).from(invoiceRef.current).save();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <div ref={invoiceRef} className="bg-white rounded-lg shadow-lg p-8">
        <div
          className="h-2 w-full rounded-t-lg mb-8"
          style={{ backgroundColor: data.themeColor }}
        />

        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: data.themeColor }}>
              {data.companyName}
            </h1>
            <p className="text-gray-600 mt-1">Invoice #{invoiceNumber}</p>
          </div>
          <div className="text-right">
            <p className="text-gray-600">Date</p>
            <p className="font-medium">{currentDate}</p>
          </div>
        </div>

        <div className="border-t border-b border-gray-200 py-8 my-8">
          <div className="mb-4">
            <h2 className="text-sm text-gray-600 uppercase">Description</h2>
            <p className="mt-2 text-lg">{data.description}</p>
          </div>
        </div>

        <div className="flex justify-end mb-8">
          <div className="text-right">
            <p className="text-sm text-gray-600 uppercase mb-2">Total Amount</p>
            <p className="text-3xl font-bold" style={{ color: data.themeColor }}>
              ${data.amount.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <Button variant="outline" onClick={onBack}>
          Back to Form
        </Button>
        <Button
          onClick={handleDownloadPDF}
          style={{
            backgroundColor: data.themeColor,
          }}
        >
          Download PDF
        </Button>
      </div>
    </div>
  );
}