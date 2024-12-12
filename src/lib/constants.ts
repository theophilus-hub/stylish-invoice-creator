export const THEME_COLORS = [
  { name: "Ocean Blue", value: "#0EA5E9" },
  { name: "Royal Purple", value: "#8B5CF6" },
  { name: "Business Blue", value: "#1EAEDB" },
  { name: "Professional Gray", value: "#403E43" },
  { name: "Deep Charcoal", value: "#221F26" },
] as const;

export const generateInvoiceNumber = () => {
  return `INV-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};