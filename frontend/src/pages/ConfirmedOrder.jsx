import { CheckCircle2 } from "lucide-react"; 
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ConfirmedOrder() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex  justify-center h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 h-fit flex flex-col items-center">
       
        <CheckCircle2 className="text-green-500 w-24 h-24 mb-4" />

       
        <h2 className="text-2xl font-semibold text-gray-800">
          Order has been placed!
        </h2>
        <p className="text-gray-500 mt-2">
          Thank you for shopping with us. Redirecting to home...
        </p>

        
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}