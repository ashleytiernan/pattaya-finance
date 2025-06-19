import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingUp, Shield, Award, Users } from "lucide-react";

const Hero = () => {
  const [condoType, setCondoType] = useState("");
  const [pattayaArea, setPattayaArea] = useState("");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-vestors-blue via-blue-900 to-blue-800 overflow-hidden pt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 animate-bounce">
        <div className="w-16 h-16 bg-yellow-600/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
          <TrendingUp className="w-8 h-8 text-yellow-600" />
        </div>
      </div>
      <div className="absolute bottom-32 left-20 animate-pulse">
        <div className="w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
          <Shield className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="flex flex-col items-center space-y-8 mt-16">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Invest in
              <span className="block text-yellow-600">Pattaya Condominiums</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Discover premium condominium investments in Pattaya's most sought-after locations with guaranteed returns and professional management
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-600" />
              <span>Licensed Real Estate</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-yellow-600" />
              <span>Legal Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-yellow-600" />
              <span>500+ Happy Investors</span>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
            <span className="text-gray-200">Happy investors already earning passive income</span>
          </div>
          
          {/* Property Search - now full width */}
          <div className="w-full max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-2xl border-t-4 border-yellow-600">
              <div className="flex items-center gap-2 mb-4 justify-center">
                <TrendingUp className="w-5 h-5 text-vestors-blue" />
                <h3 className="text-lg font-semibold text-vestors-blue text-center">Start Your Pattaya Condo Investment Journey</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Condominium Type
                  </label>
                  <Select value={condoType} onValueChange={setCondoType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Choose condo type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="one-bed">One Bedroom</SelectItem>
                      <SelectItem value="two-bed">Two Bedroom</SelectItem>
                      <SelectItem value="three-bed">Three Bedroom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pattaya Area
                  </label>
                  <Select value={pattayaArea} onValueChange={setPattayaArea}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select area" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="central-south">Central/South</SelectItem>
                      <SelectItem value="pratumnak">Pratumnak</SelectItem>
                      <SelectItem value="jomtien">Jomtien</SelectItem>
                      <SelectItem value="na-jomtien">Na Jomtien</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full bg-vestors-blue hover:bg-yellow-600 text-white text-lg py-3 font-semibold transition-all duration-300 transform hover:scale-105">
                Find My Perfect Condo Investment
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-3">
                Free consultation • No obligation • Expert guidance included
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
