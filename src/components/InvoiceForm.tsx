import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { THEME_COLORS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface InvoiceFormProps {
  onSubmit: (data: InvoiceData) => void;
}

export interface InvoiceData {
  companyName: string;
  themeColor: string;
  amount: number;
  description: string;
}

export function InvoiceForm({ onSubmit }: InvoiceFormProps) {
  const [formData, setFormData] = useState<InvoiceData>({
    companyName: "",
    themeColor: THEME_COLORS[0].value,
    amount: 0,
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-8 bg-white rounded-xl shadow-sm border border-blue-100">
      <div className="space-y-2">
        <Label htmlFor="companyName" className="text-gray-700">Company Name</Label>
        <Input
          id="companyName"
          required
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          placeholder="Enter your company name"
          className="border-gray-200 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <Label className="text-gray-700">Theme Color</Label>
        <div className="flex gap-3 flex-wrap">
          {THEME_COLORS.map((color) => (
            <button
              key={color.value}
              type="button"
              className={cn(
                "w-8 h-8 rounded-full border-2 transition-all",
                formData.themeColor === color.value
                  ? "border-blue-600 dark:border-white scale-110"
                  : "border-transparent hover:scale-105"
              )}
              style={{ backgroundColor: color.value }}
              onClick={() => setFormData({ ...formData, themeColor: color.value })}
              title={color.name}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="amount" className="text-gray-700">Amount</Label>
        <Input
          id="amount"
          type="number"
          required
          min="0"
          step="0.01"
          value={formData.amount || ""}
          onChange={(e) =>
            setFormData({ ...formData, amount: parseFloat(e.target.value) })
          }
          placeholder="Enter amount"
          className="border-gray-200 focus:border-blue-500"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-gray-700">Description</Label>
        <Textarea
          id="description"
          required
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="Enter invoice description"
          className="min-h-[100px] border-gray-200 focus:border-blue-500"
        />
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Generate Invoice
      </Button>
    </form>
  );
}