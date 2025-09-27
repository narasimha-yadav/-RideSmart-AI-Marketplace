import { useState } from "react";
import { Calculator, TrendingDown, Clock, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const EMICalculator = () => {
  const [vehiclePrice, setVehiclePrice] = useState([200000]);
  const [downPayment, setDownPayment] = useState([40000]);
  const [loanTenure, setLoanTenure] = useState([36]);
  const [interestRate, setInterestRate] = useState([10.5]);

  const calculateEMI = () => {
    const principal = vehiclePrice[0] - downPayment[0];
    const monthlyRate = interestRate[0] / 100 / 12;
    const tenure = loanTenure[0];
    
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / 
                (Math.pow(1 + monthlyRate, tenure) - 1);
    
    return {
      emi: Math.round(emi),
      totalAmount: Math.round(emi * tenure + downPayment[0]),
      totalInterest: Math.round(emi * tenure - principal)
    };
  };

  const { emi, totalAmount, totalInterest } = calculateEMI();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-automotive-dark mb-4">
            EMI Calculator
          </h2>
          <p className="text-automotive-gray text-lg max-w-2xl mx-auto">
            Calculate your monthly installments and plan your vehicle purchase with our 
            easy-to-use EMI calculator.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Calculator Form */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-automotive-light/50 rounded-t-lg">
              <CardTitle className="flex items-center space-x-2 text-automotive-dark">
                <Calculator className="w-5 h-5" />
                <span>Loan Calculator</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Vehicle Price */}
              <div className="space-y-3">
                <Label className="text-automotive-dark font-medium">Vehicle Price</Label>
                <div className="space-y-2">
                  <Input
                    type="number"
                    value={vehiclePrice[0]}
                    onChange={(e) => setVehiclePrice([parseInt(e.target.value) || 0])}
                    className="text-lg"
                  />
                  <Slider
                    value={vehiclePrice}
                    onValueChange={setVehiclePrice}
                    max={1000000}
                    min={50000}
                    step={10000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-automotive-gray">
                    <span>₹50K</span>
                    <span>₹10L</span>
                  </div>
                </div>
              </div>

              {/* Down Payment */}
              <div className="space-y-3">
                <Label className="text-automotive-dark font-medium">Down Payment</Label>
                <div className="space-y-2">
                  <Input
                    type="number"
                    value={downPayment[0]}
                    onChange={(e) => setDownPayment([parseInt(e.target.value) || 0])}
                    className="text-lg"
                  />
                  <Slider
                    value={downPayment}
                    onValueChange={setDownPayment}
                    max={vehiclePrice[0] * 0.5}
                    min={vehiclePrice[0] * 0.1}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-automotive-gray">
                    <span>10% (₹{Math.round(vehiclePrice[0] * 0.1 / 1000)}K)</span>
                    <span>50% (₹{Math.round(vehiclePrice[0] * 0.5 / 1000)}K)</span>
                  </div>
                </div>
              </div>

              {/* Interest Rate */}
              <div className="space-y-3">
                <Label className="text-automotive-dark font-medium">Interest Rate (%)</Label>
                <div className="space-y-2">
                  <Input
                    type="number"
                    value={interestRate[0]}
                    onChange={(e) => setInterestRate([parseFloat(e.target.value) || 0])}
                    step="0.1"
                    className="text-lg"
                  />
                  <Slider
                    value={interestRate}
                    onValueChange={setInterestRate}
                    max={18}
                    min={8}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-automotive-gray">
                    <span>8%</span>
                    <span>18%</span>
                  </div>
                </div>
              </div>

              {/* Loan Tenure */}
              <div className="space-y-3">
                <Label className="text-automotive-dark font-medium">Loan Tenure (Months)</Label>
                <div className="space-y-2">
                  <Input
                    type="number"
                    value={loanTenure[0]}
                    onChange={(e) => setLoanTenure([parseInt(e.target.value) || 0])}
                    className="text-lg"
                  />
                  <Slider
                    value={loanTenure}
                    onValueChange={setLoanTenure}
                    max={84}
                    min={12}
                    step={6}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-automotive-gray">
                    <span>1 Year</span>
                    <span>7 Years</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="shadow-lg border-0">
            <CardHeader className="bg-automotive-blue text-white rounded-t-lg">
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5" />
                <span>Loan Summary</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* EMI Amount */}
              <div className="text-center bg-gradient-to-r from-automotive-blue to-purple-600 text-white rounded-xl p-6">
                <div className="text-sm opacity-80 mb-2">Monthly EMI</div>
                <div className="text-4xl font-bold">₹{emi.toLocaleString()}</div>
              </div>

              {/* Breakdown */}
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between p-4 bg-automotive-light/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <TrendingDown className="w-5 h-5 text-automotive-blue" />
                    <span className="font-medium">Total Amount</span>
                  </div>
                  <span className="text-lg font-semibold">₹{totalAmount.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-automotive-light/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-automotive-blue" />
                    <span className="font-medium">Total Interest</span>
                  </div>
                  <span className="text-lg font-semibold">₹{totalInterest.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between p-4 bg-automotive-light/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-5 h-5 text-automotive-blue" />
                    <span className="font-medium">Loan Amount</span>
                  </div>
                  <span className="text-lg font-semibold">₹{(vehiclePrice[0] - downPayment[0]).toLocaleString()}</span>
                </div>
              </div>

              <Button variant="premium" className="w-full" size="lg">
                Apply for Loan
              </Button>
              
              <p className="text-xs text-automotive-gray text-center">
                * Interest rates may vary based on your credit profile and lender policies
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EMICalculator;