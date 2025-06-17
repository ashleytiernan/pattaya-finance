
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Shield, Award, Users } from "lucide-react";
import InvestmentCalculator from "./InvestmentCalculator";

const Hero = () => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1560103104-4283ad4d760f?auto=format&fit=crop&w=1920&q=80')",
        backgroundPositionY: "30%"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 pt-16">
        <div className="text-center max-w-6xl animate-fade-in">
          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-6 mb-6 text-sm text-yellow-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Trusted by 500+ Investors</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Award-Winning Service</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              <span>15% Average Returns</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Your Savings Into
            <span className="block mt-2 text-yellow-500">Pattaya Property Gold</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
            Join thousands of smart investors earning <strong className="text-yellow-600">8-15% returns</strong> from premium Pattaya real estate
          </p>
          
          <p className="text-lg mb-10 max-w-2xl mx-auto text-gray-200">
            Expert guidance • Guaranteed returns • Full legal support • No hidden fees
          </p>

          {/* Social Proof */}
          <div className="flex justify-center items-center gap-4 mb-8 text-sm">
            <div className="flex -space-x-2">
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face" alt="Investor" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108755-2616b612b1b8?w=32&h=32&fit=crop&crop=face" alt="Investor" />
              <img className="w-8 h-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Investor" />
              <div className="w-8 h-8 rounded-full border-2 border-white bg-yellow-600 flex items-center justify-center text-xs font-bold text-vestors-blue">
                +500
              </div>
            </div>
            <span className="text-gray-200">Happy investors already earning passive income</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {/* Property Search */}
            <div className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-yellow-600">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-vestors-blue" />
                <h3 className="text-lg font-semibold text-vestors-blue">Start Your Investment Journey</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">Find properties with verified 8-15% annual returns</p>
              
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="condo">Condominium (8-12% ROI)</SelectItem>
                      <SelectItem value="villa">Villa (10-15% ROI)</SelectItem>
                      <SelectItem value="house">House (9-13% ROI)</SelectItem>
                      <SelectItem value="land">Land (12-18% ROI)</SelectItem>
                      <SelectItem value="commercial">Commercial (15-20% ROI)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex-1">
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Prime Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bangkok">Bangkok (High Growth)</SelectItem>
                      <SelectItem value="phuket">Phuket (Tourist Hotspot)</SelectItem>
                      <SelectItem value="chiangmai">Chiang Mai (Digital Nomad Hub)</SelectItem>
                      <SelectItem value="pattaya">Pattaya (Rental Goldmine)</SelectItem>
                      <SelectItem value="samui">Koh Samui (Luxury Market)</SelectItem>
                      <SelectItem value="huahin">Hua Hin (Royal Resort)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full mt-4 bg-vestors-blue hover:bg-yellow-600 text-white font-semibold py-3" size="lg">
                🔍 Find My Perfect Investment
              </Button>
              
              <p className="text-xs text-gray-500 mt-2 text-center">
                Free consultation • No obligation • Expert guidance included
              </p>
            </div>

            {/* Investment Calculator */}
            <div className="flex justify-center">
              <InvestmentCalculator />
            </div>
          </div>

          {/* Urgency/Scarcity Element */}
          <div className="mt-8 bg-yellow-600 bg-opacity-20 backdrop-blur-sm rounded-lg p-4 border border-yellow-600 max-w-2xl mx-auto">
            <p className="text-sm font-medium">
              🔥 <strong>Limited Time:</strong> Properties under $500K with guaranteed 12% returns
            </p>
            <p className="text-xs mt-1 text-gray-200">
              Only 23 units remaining in our current portfolio • Expires Dec 31st
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
