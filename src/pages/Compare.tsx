import { useState } from "react";
import { X, Plus, ArrowLeftRight } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Compare = () => {
  const [selectedVehicles, setSelectedVehicles] = useState([
    {
      id: 1,
      name: "Honda CB Shine",
      brand: "Honda",
      price: "₹72,900",
      image: "/placeholder.svg",
      category: "Commuter",
      fuelType: "Petrol",
      mileage: "65 kmpl",
      engineCC: "124.7 cc",
      maxPower: "10.16 bhp",
      maxTorque: "10.9 Nm",
      fuelCapacity: "10.5 L",
      weight: "123 kg",
      seatHeight: "780 mm",
      wheelbase: "1285 mm",
      groundClearance: "165 mm",
      rating: 4.5,
      warranty: "5 years or 75,000 km"
    },
    {
      id: 2,
      name: "Bajaj Pulsar 150",
      brand: "Bajaj",
      price: "₹1,08,618",
      image: "/placeholder.svg",
      category: "Sports",
      fuelType: "Petrol",
      mileage: "50 kmpl",
      engineCC: "149.5 cc",
      maxPower: "14 bhp",
      maxTorque: "13.25 Nm",
      fuelCapacity: "15 L",
      weight: "144 kg",
      seatHeight: "790 mm",
      wheelbase: "1320 mm",
      groundClearance: "165 mm",
      rating: 4.3,
      warranty: "2 years"
    }
  ]);

  const availableVehicles = [
    {
      id: 3,
      name: "TVS Jupiter",
      brand: "TVS",
      price: "₹73,400",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "Hero Splendor Plus",
      brand: "Hero",
      price: "₹64,850",
      image: "/placeholder.svg"
    },
    {
      id: 5,
      name: "Yamaha FZ-S FI",
      brand: "Yamaha",
      price: "₹1,16,800",
      image: "/placeholder.svg"
    }
  ];

  const removeVehicle = (id: number) => {
    setSelectedVehicles(prev => prev.filter(v => v.id !== id));
  };

  const addVehicle = (vehicle: any) => {
    if (selectedVehicles.length < 3) {
      const fullVehicle = {
        ...vehicle,
        category: "Commuter",
        fuelType: "Petrol",
        mileage: "60 kmpl",
        engineCC: "110 cc",
        maxPower: "8 bhp",
        maxTorque: "9 Nm",
        fuelCapacity: "12 L",
        weight: "120 kg",
        seatHeight: "760 mm",
        wheelbase: "1260 mm",
        groundClearance: "160 mm",
        rating: 4.2,
        warranty: "2 years"
      };
      setSelectedVehicles(prev => [...prev, fullVehicle]);
    }
  };

  const specs = [
    { label: "Price", key: "price" },
    { label: "Category", key: "category" },
    { label: "Fuel Type", key: "fuelType" },
    { label: "Mileage", key: "mileage" },
    { label: "Engine CC", key: "engineCC" },
    { label: "Max Power", key: "maxPower" },
    { label: "Max Torque", key: "maxTorque" },
    { label: "Fuel Capacity", key: "fuelCapacity" },
    { label: "Weight", key: "weight" },
    { label: "Seat Height", key: "seatHeight" },
    { label: "Wheelbase", key: "wheelbase" },
    { label: "Ground Clearance", key: "groundClearance" },
    { label: "Rating", key: "rating" },
    { label: "Warranty", key: "warranty" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Compare Vehicles</h1>
          <p className="text-muted-foreground">Compare specifications side by side to make the right choice</p>
        </div>

        {/* Selected Vehicles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {selectedVehicles.map((vehicle, index) => (
            <Card key={vehicle.id} className="relative">
              <Button
                size="sm"
                variant="destructive"
                className="absolute top-2 right-2 w-8 h-8 p-0"
                onClick={() => removeVehicle(vehicle.id)}
              >
                <X className="w-4 h-4" />
              </Button>
              
              <CardHeader className="pb-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-lg">{vehicle.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{vehicle.category}</Badge>
                  <Badge variant="outline">{vehicle.fuelType}</Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  {specs.map((spec) => (
                    <div key={spec.key} className="flex justify-between items-center py-1 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">{spec.label}</span>
                      <span className="text-sm font-medium">
                        {spec.key === "price" ? (
                          <span className="text-automotive-blue font-bold">{vehicle[spec.key]}</span>
                        ) : spec.key === "rating" ? (
                          <span className="flex items-center">
                            ★ {vehicle[spec.key]}
                          </span>
                        ) : (
                          vehicle[spec.key]
                        )}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 space-y-2">
                  <Button className="w-full">Book Test Ride</Button>
                  <Button variant="outline" className="w-full">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Add Vehicle Card */}
          {selectedVehicles.length < 3 && (
            <Card className="border-dashed border-2 border-border/50 hover:border-automotive-blue/50 transition-colors">
              <CardContent className="flex flex-col items-center justify-center h-full min-h-[400px] text-center">
                <Plus className="w-12 h-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold mb-2">Add Vehicle</h3>
                <p className="text-muted-foreground mb-6">Select a vehicle to compare</p>
                
                <div className="w-full space-y-4">
                  <Input placeholder="Search vehicles..." />
                  <div className="space-y-2">
                    {availableVehicles.slice(0, 3).map((vehicle) => (
                      <div 
                        key={vehicle.id}
                        className="flex items-center justify-between p-2 border rounded-lg hover:bg-muted/50 cursor-pointer"
                        onClick={() => addVehicle(vehicle)}
                      >
                        <div className="flex items-center gap-3">
                          <img 
                            src={vehicle.image} 
                            alt={vehicle.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                          <div className="text-left">
                            <p className="font-medium text-sm">{vehicle.name}</p>
                            <p className="text-xs text-muted-foreground">{vehicle.price}</p>
                          </div>
                        </div>
                        <Plus className="w-4 h-4" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Comparison Summary */}
        {selectedVehicles.length >= 2 && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowLeftRight className="w-5 h-5" />
                Quick Comparison
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-automotive-blue mb-2">Most Affordable</h4>
                  <p className="text-sm">
                    {selectedVehicles.reduce((prev, current) => 
                      parseInt(prev.price.replace(/[^\d]/g, '')) < parseInt(current.price.replace(/[^\d]/g, '')) ? prev : current
                    ).name}
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-automotive-blue mb-2">Best Mileage</h4>
                  <p className="text-sm">
                    {selectedVehicles.reduce((prev, current) => 
                      parseInt(prev.mileage.replace(/[^\d]/g, '')) > parseInt(current.mileage.replace(/[^\d]/g, '')) ? prev : current
                    ).name}
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-automotive-blue mb-2">Most Powerful</h4>
                  <p className="text-sm">
                    {selectedVehicles.reduce((prev, current) => 
                      parseFloat(prev.maxPower.replace(/[^\d.]/g, '')) > parseFloat(current.maxPower.replace(/[^\d.]/g, '')) ? prev : current
                    ).name}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {selectedVehicles.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-4">No vehicles selected</h3>
            <p className="text-muted-foreground mb-6">Add at least 2 vehicles to start comparing</p>
            <Button onClick={() => window.history.back()}>Browse Vehicles</Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Compare;