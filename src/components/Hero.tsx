
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import InvestmentCalculator from "./InvestmentCalculator";

const Hero = () => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560103104-4283ad4d760f?auto=format&fit=crop&w=1920&q=80')",
          backgroundPositionY: "30%",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4 pt-16">
        <div className="text-center max-w-6xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Smart Property Investment in Thailand
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Discover high-yield investment opportunities with expert guidance and guaranteed returns
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {/* Property Search */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-vestors-blue mb-4">Find Your Investment Property</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Select value={propertyType} onValueChange={setPropertyType}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Property Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="condo">Condominium</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                      <SelectItem value="commercial">Commercial</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex-1">
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bangkok">Bangkok</SelectItem>
                      <SelectItem value="phuket">Phuket</SelectItem>
                      <SelectItem value="chiangmai">Chiang Mai</SelectItem>
                      <SelectItem value="pattaya">Pattaya</SelectItem>
                      <SelectItem value="samui">Koh Samui</SelectItem>
                      <SelectItem value="huahin">Hua Hin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button className="w-full mt-4 bg-vestors-blue hover:bg-vestors-gold text-white" size="lg">
                Search Properties
              </Button>
            </div>

            {/* Investment Calculator */}
            <div className="flex justify-center">
              <InvestmentCalculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
