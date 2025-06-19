
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Shield, Users, Calculator, DollarSign, Clock, Target, Home, FileText, Briefcase, HeadphonesIcon, MapPin, Star, BarChart3, BookOpen, Award, Building2 } from "lucide-react";

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
                Complete
                <span className="block text-yellow-600">Investor Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                Professional property management and investment advisory services designed to maximize your returns and minimize your effort.
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 text-white/90">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-yellow-600" />
                <span>Property Management</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-yellow-600" />
                <span>Investment Advisory</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-600" />
                <span>24/7 Support</span>
              </div>
            </div>

            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black text-lg py-3 px-8 font-semibold">
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              Our Core Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From property acquisition to ongoing management, we handle every aspect of your real estate investment journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <Building2 className="w-6 h-6 text-yellow-600" />
                  Property Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Full-service property management including tenant screening, rent collection, maintenance coordination, and regular property inspections.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Tenant screening & placement</li>
                  <li>• Monthly rent collection</li>
                  <li>• Maintenance & repairs</li>
                  <li>• Property inspections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                  Investment Advisory
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Strategic investment guidance to help you build a profitable and diversified real estate portfolio in Thailand's growing markets.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Market analysis & research</li>
                  <li>• Portfolio optimization</li>
                  <li>• Investment strategy planning</li>
                  <li>• Risk assessment</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <FileText className="w-6 h-6 text-yellow-600" />
                  Legal Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive legal assistance for all property transactions, ensuring compliance with Thai property laws and regulations.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Contract preparation & review</li>
                  <li>• Due diligence services</li>
                  <li>• Legal compliance</li>
                  <li>• Dispute resolution</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <Calculator className="w-6 h-6 text-yellow-600" />
                  Financial Planning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional financial planning services to optimize your investment returns and tax efficiency across your property portfolio.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• ROI optimization</li>
                  <li>• Tax planning strategies</li>
                  <li>• Cash flow analysis</li>
                  <li>• Financial reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <HeadphonesIcon className="w-6 h-6 text-yellow-600" />
                  24/7 Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Round-the-clock support for all your property investment needs, with dedicated account managers for personalized service.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• 24/7 emergency support</li>
                  <li>• Dedicated account manager</li>
                  <li>• Multi-language support</li>
                  <li>• Regular check-ins</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-vestors-blue">
                  <BarChart3 className="w-6 h-6 text-yellow-600" />
                  Performance Reporting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Detailed performance reports and analytics to track your investment progress and identify new opportunities.
                </p>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Monthly performance reports</li>
                  <li>• Market trend analysis</li>
                  <li>• Portfolio dashboard</li>
                  <li>• Investment recommendations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-vestors-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine local expertise with international standards to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-vestors-blue mb-2">Proven Track Record</h3>
              <p className="text-gray-600">Over 500 successful property investments with an average 15% annual return.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-vestors-blue mb-2">Fully Licensed</h3>
              <p className="text-gray-600">Licensed real estate professionals with full legal compliance and insurance coverage.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-vestors-blue mb-2">Local Expertise</h3>
              <p className="text-gray-600">Deep understanding of Thai property markets with over 10 years of local experience.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-vestors-blue mb-2">Results Focused</h3>
              <p className="text-gray-600">Dedicated to maximizing your returns with data-driven investment strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              Service Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose the service level that best fits your investment goals and portfolio size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-vestors-blue mb-2">Essential</CardTitle>
                <p className="text-gray-600 mb-4">Perfect for first-time investors</p>
                <div className="text-4xl font-bold text-yellow-600">$299<span className="text-lg text-gray-500">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Property search assistance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Basic legal documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Monthly market reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full bg-vestors-blue hover:bg-blue-800 text-white mt-6">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-600 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <CardHeader className="text-center pt-8">
                <CardTitle className="text-2xl font-bold text-vestors-blue mb-2">Professional</CardTitle>
                <p className="text-gray-600 mb-4">Complete investment management</p>
                <div className="text-4xl font-bold text-yellow-600">$599<span className="text-lg text-gray-500">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Everything in Essential</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Full property management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Tenant screening & placement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Monthly performance reports</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Phone & chat support</span>
                  </li>
                </ul>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black mt-6">
                  Choose Professional
                </Button>
              </CardContent>
            </Card>

            <Card className="border border-gray-200 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-vestors-blue mb-2">Premium</CardTitle>
                <p className="text-gray-600 mb-4">For serious investors</p>
                <div className="text-4xl font-bold text-yellow-600">$999<span className="text-lg text-gray-500">/month</span></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>VIP property previews</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>Portfolio optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <span>24/7 priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-vestors-blue hover:bg-blue-800 text-white mt-6">
                  Go Premium
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-vestors-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-200">
              Numbers that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-white text-lg">Properties Managed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-yellow-600 mb-2">₿2.5B</div>
              <div className="text-white text-lg">Assets Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-yellow-600 mb-2">95%</div>
              <div className="text-white text-lg">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-yellow-600 mb-2">15%</div>
              <div className="text-white text-lg">Average Annual Returns</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-vestors-lightgray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Real feedback from satisfied investors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-600 text-yellow-600" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The team's expertise in Thai property law and market dynamics gave me the confidence to invest. My portfolio has grown by 25% in just 18 months."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-vestors-blue">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">UK Investor</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-600 text-yellow-600" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional service from day one. They handle everything while I enjoy passive income. The monthly reports keep me informed of my investment performance."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-vestors-blue">Michael Chen</div>
                    <div className="text-sm text-gray-500">Singapore Investor</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-600 text-yellow-600" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Their 24/7 support and local knowledge are invaluable. When issues arise, they're resolved quickly and professionally. Highly recommend their services."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-semibold text-vestors-blue">Emma Williams</div>
                    <div className="text-sm text-gray-500">Australian Investor</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-vestors-blue mb-4">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your investment goals and discover how our services can help you build wealth through Thai real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-600 hover:bg-yellow-700 text-black text-lg py-3 px-8 font-semibold">
              Schedule Free Consultation
            </Button>
            <Button variant="outline" className="border-vestors-blue text-vestors-blue hover:bg-vestors-blue hover:text-white text-lg py-3 px-8 font-semibold">
              Download Investment Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InvestorServices;
