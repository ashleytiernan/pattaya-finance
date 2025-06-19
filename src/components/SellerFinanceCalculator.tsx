
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const SellerFinanceCalculator = () => {
  const [propertyPrice, setPropertyPrice] = useState(500000);
  const [downPayment, setDownPayment] = useState(100000);
  const [interestRate, setInterestRate] = useState(6);
  const [loanTerm, setLoanTerm] = useState(25);
  const [results, setResults] = useState({
    loanAmount: 0,
    monthlyPayment: 0,
    totalInterest: 0,
    totalPayment: 0
  });

  const calculatePayment = () => {
    const loanAmount = propertyPrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    const monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                          (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const totalPayment = monthlyPayment * numPayments;
    const totalInterest = totalPayment - loanAmount;

    setResults({
      loanAmount,
      monthlyPayment,
      totalInterest,
      totalPayment
    });
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-vestors-blue">
          <Calculator className="w-5 h-5" />
          Seller Finance Calculator
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
          <Label htmlFor="interest-rate">Interest Rate (%)</Label>
          <Input
            id="interest-rate"
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            placeholder="6.0"
          />
        </div>

        <div>
          <Label htmlFor="loan-term">Loan Term (Years)</Label>
          <Input
            id="loan-term"
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            placeholder="25"
          />
        </div>
        
        <Button 
          onClick={calculatePayment} 
          className="w-full bg-vestors-blue hover:bg-vestors-gold"
        >
          Calculate Monthly Payment
        </Button>
        
        {results.monthlyPayment > 0 && (
          <div className="mt-4 p-4 bg-vestors-lightgray rounded-lg space-y-2">
            <div className="flex justify-between">
              <span className="text-sm">Loan Amount:</span>
              <span className="font-semibold text-vestors-blue">
                ${results.loanAmount.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Monthly Payment:</span>
              <span className="font-semibold text-vestors-gold">
                ${results.monthlyPayment.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Total Interest:</span>
              <span className="font-semibold text-vestors-blue">
                ${results.totalInterest.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm">Total Payment:</span>
              <span className="font-semibold text-vestors-blue">
                ${results.totalPayment.toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SellerFinanceCalculator;
