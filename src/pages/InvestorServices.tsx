
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Shield, Users, Calculator, DollarSign, Clock, Target, Home, FileText, Briefcase, HeadphonesIcon } from "lucide-react";

const InvestorServices = () => {
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
                Investor
                <span className="block text-yellow-600">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Comprehensive investment support services designed to maximize your property investment success in Thailand's thriving real estate market.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <Home className="w-5 h-5 text-yellow-600" />
                <span>Property Management</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-yellow-600" />
                <span>Legal Support</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-yellow-600" />
                <span>Investment Advisory</span>
              </div>
            </div>

            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black text-lg py-3 px-8 font-semibold">
              Explore Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              Complete Investment Support
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From property selection to ongoing management, we provide end-to-end services to ensure your investment success in Thailand's dynamic real estate market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <Home className="w-6 h-6 text-yellow-600" />
                  Property Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Full-service property management including tenant screening, rent collection, and maintenance coordination.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <FileText className="w-6 h-6 text-yellow-600" />
                  Legal Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Expert legal guidance for property transactions, contracts, and compliance with Thai property laws.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                  Investment Advisory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Strategic investment advice to maximize returns and build a diversified property portfolio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <HeadphonesIcon className="w-6 h-6 text-yellow-600" />
                  24/7 Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Round-the-clock support for all your investment needs, ensuring peace of mind for international investors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-20 bg-vestors-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              Our Service Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive services tailored to meet the unique needs of property investors in Thailand.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-vestors-blue mb-2">Property Acquisition</h3>
                  <p className="text-gray-600">Expert guidance through the entire property acquisition process, from market analysis to closing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-vestors-blue mb-2">Rental Management</h3>
                  <p className="text-gray-600">Complete rental management services including marketing, tenant screening, and ongoing support.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-vestors-blue mb-2">Financial Planning</h3>
                  <p className="text-gray-600">Comprehensive financial planning to optimize your investment strategy and tax efficiency.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-vestors-blue mb-2">Market Analysis</h3>
                  <p className="text-gray-600">Regular market reports and analysis to keep you informed about investment opportunities.</p>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&w=600&h=500&q=80" 
                alt="Investment Services" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with international standards to deliver exceptional investment services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <Shield className="w-6 h-6 text-yellow-600" />
                  Trusted Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Years of experience in Thai property markets with a proven track record of successful investments.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <Users className="w-6 h-6 text-yellow-600" />
                  Personalized Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tailored investment strategies and personalized support to meet your specific investment goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <Target className="w-6 h-6 text-yellow-600" />
                  Results-Driven
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Focus on delivering measurable results and maximizing returns on your property investments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-20 bg-vestors-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the service package that best fits your investment needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">
                  <h3 className="text-2xl font-bold text-vestors-blue mb-2">Essential</h3>
                  <p className="text-gray-600">Perfect for first-time investors</p>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">Property search assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">Legal documentation support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">Basic market analysis</span>
                  </li>
                </ul>
                <Button className="w-full bg-vestors-blue hover:bg-blue-800 text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-600 shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">
                  <div className="bg-yellow-600 text-white px-3 py-1 rounded-full text-sm mb-2 inline-block">
                    Most Popular
                  </div>
                  <h3 className="text-2xl font-bold text-vestors-blue mb-2">Professional</h3>
                  <p className="text-gray-600">Complete investment management</p>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">Full property management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">Rental management service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">Monthly performance reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">24/7 support</span>
                  </li>
                </ul>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black">
                  Choose Professional
                </Button>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">
                  <h3 className="text-2xl font-bold text-vestors-blue mb-2">Premium</h3>
                  <p className="text-gray-600">For serious investors</p>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">Everything in Professional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">Personal investment advisor</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">Exclusive investment opportunities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm">Portfolio optimization</span>
                  </li>
                </ul>
                <Button className="w-full bg-vestors-blue hover:bg-blue-800 text-white">
                  Go Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-vestors-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your investment goals and discover how our services can help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black text-lg py-3 px-8 font-semibold">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-vestors-blue text-lg py-3 px-8 font-semibold">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorServices;
