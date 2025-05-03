
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-vestors-lightgray py-20">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-vestors-blue mb-6">404</h1>
          <p className="text-2xl text-vestors-darkgray mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Button asChild className="bg-vestors-blue hover:bg-vestors-gold text-white">
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
