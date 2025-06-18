
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Shield, Users, Calculator, DollarSign, Clock, Target } from "lucide-react";

const SellerFinance = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-vestors-blue via-blue-900 to-blue-800 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex flex-col items-center space-y-8 mt-16">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Seller Finance
                <span className="block text-yellow-600">Your Next Investment</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Access premium Pattaya properties with flexible seller financing options. No bank hassles, faster closings, and customized payment terms.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-yellow-600" />
                <span>Flexible Terms</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-yellow-600" />
                <span>Fast Closings</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5 text-yellow-600" />
                <span>No Bank Required</span>
              </div>
            </div>

            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black text-lg py-3 px-8 font-semibold">
              Explore Seller Financed Properties
            </Button>
          </div>
        </div>
      </section>

      {/* What is Seller Finance Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              What is Seller Finance?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Seller financing allows you to purchase property directly from the seller without traditional bank loans. The seller acts as the bank, offering you flexible terms and faster transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <CheckCircle className="w-6 h-6 text-yellow-600" />
                  No Bank Approval
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Skip the lengthy bank approval process. Work directly with motivated sellers who want to close quickly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                  Flexible Terms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Negotiate custom payment schedules, interest rates, and down payment amounts that work for both parties.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <Clock className="w-6 h-6 text-yellow-600" />
                  Faster Closings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Close in weeks instead of months. No waiting for bank underwriting or lengthy approval processes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-vestors-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              Benefits for Investors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover why seller financing is becoming the preferred choice for smart property investors in Pattaya.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=600&h=400&q=80" 
                alt="Property Investment" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-vestors-blue mb-2">Lower Down Payments</h3>
                  <p className="text-gray-600">Often require smaller down payments than traditional bank loans, preserving your capital for other investments.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-vestors-blue mb-2">Creative Structuring</h3>
                  <p className="text-gray-600">Structure deals with balloon payments, graduated payments, or interest-only periods to maximize cash flow.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-vestors-blue mb-2">No Credit Restrictions</h3>
                  <p className="text-gray-600">Focus on the deal and property value rather than strict credit requirements that banks impose.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Calculator Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              Calculate Your Seller Finance Returns
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Use our calculator to estimate the potential returns on your seller-financed property investment.
            </p>
          </div>
          
          <div className="flex justify-center">
            <InvestmentCalculator />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-vestors-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              How Seller Finance Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process makes seller financing simple and secure for both buyers and sellers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-vestors-blue mb-2">Find Properties</h3>
              <p className="text-gray-600">Browse our curated selection of seller-financed properties in prime Pattaya locations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-vestors-blue mb-2">Negotiate Terms</h3>
              <p className="text-gray-600">Work with our team to structure favorable terms that benefit both you and the seller.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-vestors-blue mb-2">Close the Deal</h3>
              <p className="text-gray-600">Complete the transaction quickly with our legal team ensuring all documentation is proper.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-vestors-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Explore Seller Finance Options?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our team today to discover available seller-financed properties and start building your investment portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black text-lg py-3 px-8 font-semibold">
              View Available Properties
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-vestors-blue text-lg py-3 px-8 font-semibold">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SellerFinance;
