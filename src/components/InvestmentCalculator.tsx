
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const InvestmentCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [rentalYield, setRentalYield] = useState(6);
  const [results, setResults] = useState({
    monthlyRental: 0,
    annualRental: 0,
    cashOnCash: 0,
    totalReturn: 0
  });

  const calculateReturns = () => {
    const annualRental = (propertyPrice * rentalYield) / 100;
    const monthlyRental = annualRental / 12;
    const cashOnCash = (annualRental / downPayment) * 100;
    const totalReturn = annualRental;

    setResults({
      monthlyRental,
      annualRental,
      cashOnCash,
      totalReturn
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-vestors-blue">
          <Calculator className="w-5 h-5" />
          Investment Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="property-price">Property Price (USD)</Label>
          <Input
            id="property-price"
            type="number"
            value={propertyPrice}
            onChange={(e) => setPropertyPrice(Number(e.target.value))}
            placeholder="500,000"
          />
        </div>
        
        <div>
          <Label htmlFor="down-payment">Down Payment (USD)</Label>
          <Input
            id="down-payment"
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            placeholder="100,000"
          />
        </div>
        
        <div>
          <Label htmlFor="rental-yield">Expected Rental Yield (%)</Label>
          <Input
            id="rental-yield"
            type="number"
            step="0.1"
            value={rentalYield}
            onChange={(e) => setRentalYield(Number(e.target.value))}
            placeholder="6.0"
          />
        </div>
        
        <Button 
          onClick={calculateReturns}
          className="w-full bg-vestors-blue hover:bg-vestors-gold"
        >
          Calculate Returns
        </Button>
        
        {results.annualRental > 0 && (
          <div className="mt-4 p-4 bg-vestors-lightgray rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Monthly Rental:</span>
              <span className="font-semibold text-vestors-blue">
                ${results.monthlyRental.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Annual Rental:</span>
              <span className="font-semibold text-vestors-blue">
                ${results.annualRental.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Cash-on-Cash Return:</span>
              <span className="font-semibold text-vestors-gold">
                {results.cashOnCash.toFixed(1)}%
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default InvestmentCalculator;
