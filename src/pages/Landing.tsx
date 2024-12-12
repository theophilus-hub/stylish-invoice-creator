import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <h2 className="text-2xl font-bold text-blue-600">Ervoice</h2>
          <Button variant="ghost" onClick={() => navigate("/login")}>
            Sign In
          </Button>
        </nav>
        
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900">
            Professional Invoices in <span className="text-blue-600">Seconds</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create, customize, and send professional invoices instantly with our easy-to-use platform. Perfect for freelancers and businesses of all sizes.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate("/login")}
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/login")}
              className="text-lg px-8"
            >
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Easy to Use</h3>
              <p className="text-gray-600">
                Create professional invoices with just a few clicks
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Professional Design</h3>
              <p className="text-gray-600">
                Choose from beautiful themes for your invoices
              </p>
            </div>
            <div className="p-8 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Instant Download</h3>
              <p className="text-gray-600">
                Download your invoices instantly as PDF
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}