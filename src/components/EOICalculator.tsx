
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const EOICalculator = () => {
  const [purchasePrice, setPurchasePrice] = useState(500000);
  const [weeklyRental, setWeeklyRental] = useState(600);
  const [annualExpenses, setAnnualExpenses] = useState(15000);
  const [results, setResults] = useState({
    annualRental: 0,
    netRental: 0,
    grossYield: 0,
    netYield: 0
  });

  const calculateYield = () => {
    const annualRental = weeklyRental * 52;
    const netRental = annualRental - annualExpenses;
    const grossYield = (annualRental / purchasePrice) * 100;
    const netYield = (netRental / purchasePrice) * 100;

    setResults({
      annualRental,
      netRental,
      grossYield,
      netYield
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-vestors-blue">
          <Calculator className="w-5 h-5" />
          EOI Rental Yield Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="purchase-price">Purchase Price (USD)</Label>
          <Input
            id="purchase-price"
            type="number"
            value={purchasePrice}
            onChange={(e) => setPurchasePrice(Number(e.target.value))}
            placeholder="500,000"
          />
        </div>
        
        <div>
          <Label htmlFor="weekly-rental">Weekly Rental Income (USD)</Label>
          <Input
            id="weekly-rental"
            type="number"
            value={weeklyRental}
            onChange={(e) => setWeeklyRental(Number(e.target.value))}
            placeholder="600"
          />
        </div>
        
        <div>
          <Label htmlFor="annual-expenses">Annual Expenses (USD)</Label>
          <Input
            id="annual-expenses"
            type="number"
            value={annualExpenses}
            onChange={(e) => setAnnualExpenses(Number(e.target.value))}
            placeholder="15,000"
          />
        </div>
        
        <Button 
          onClick={calculateYield} 
          className="w-full bg-vestors-blue hover:bg-vestors-gold"
        >
          Calculate Rental Yield
        </Button>
        
        {results.annualRental > 0 && (
          <div className="mt-4 p-4 bg-vestors-lightgray rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Annual Rental:</span>
              <span className="font-semibold text-vestors-blue">
                ${results.annualRental.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Net Annual Rental:</span>
              <span className="font-semibold text-vestors-blue">
                ${results.netRental.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Gross Yield:</span>
              <span className="font-semibold text-vestors-gold">
                {results.grossYield.toFixed(2)}%
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Net Yield:</span>
              <span className="font-semibold text-vestors-gold">
                {results.netYield.toFixed(2)}%
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EOICalculator;
