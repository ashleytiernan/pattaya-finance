import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, Filter } from "lucide-react";

const PropertyFilters = () => {
  const [priceRange, setPriceRange] = useState([100000, 2000000]);
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [minYield, setMinYield] = useState([5]);

  return (
    <div className="w-full">
      {/* Headline Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-vestors-blue mb-4 leading-tight">
          WE HELP YOU BUILD
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-600 mb-6 leading-tight">
          PROFITABLE PROPERTY INVESTMENT PORTFOLIOS
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
          Build wealth & a profitable property portfolio without the hassle. We do the heavy lifting, so you can unlock your financial future faster.
        </p>
      </div>

      {/* Property Search Card */}
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-vestors-blue" />
            <h3 className="text-lg font-semibold text-vestors-blue">Advanced Property Search</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <Label>Property Type</Label>
              <Select value={propertyType} onValueChange={setPropertyType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
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
            
            <div>
              <Label>Location</Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="All Locations" />
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
            
            <div>
              <Label>Bedrooms</Label>
              <Select value={bedrooms} onValueChange={setBedrooms}>
                <SelectTrigger>
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Bedroom</SelectItem>
                  <SelectItem value="2">2 Bedrooms</SelectItem>
                  <SelectItem value="3">3 Bedrooms</SelectItem>
                  <SelectItem value="4">4+ Bedrooms</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label>Min. Rental Yield (%)</Label>
              <div className="mt-2">
                <Slider
                  value={minYield}
                  onValueChange={setMinYield}
                  max={15}
                  min={3}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>3%</span>
                  <span className="font-semibold text-vestors-blue">{minYield[0]}%+</span>
                  <span>15%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <Label>Price Range (USD)</Label>
            <div className="mt-2">
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={3000000}
                min={50000}
                step={25000}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>$50K</span>
                <span className="font-semibold text-vestors-blue">
                  ${priceRange[0].toLocaleString()} - ${priceRange[1].toLocaleString()}
                </span>
                <span>$3M</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex gap-4">
            <Button className="flex-1 bg-vestors-blue hover:bg-vestors-gold text-white">
              <Search className="w-4 h-4 mr-2" />
              Search Properties
            </Button>
            <Button variant="outline" className="border-vestors-blue text-vestors-blue hover:bg-vestors-blue hover:text-white">
              Reset Filters
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyFilters;
