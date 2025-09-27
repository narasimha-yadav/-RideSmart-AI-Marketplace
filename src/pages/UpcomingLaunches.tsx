import { useState } from "react";
import { Calendar, Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UpcomingLaunches = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const upcomingVehicles = [
    {
      id: 1,
      name: "Honda CB300R",
      brand: "Honda",
      category: "Sports",
      expectedPrice: "₹2,50,000 - ₹2,80,000",
      launchDate: "March 2024",
      status: "confirmed",
      image: "/placeholder.svg",
      features: ["LED Lighting", "Digital Display", "ABS", "Liquid Cooling"],
      specs: {
        engine: "286cc Single Cylinder",
        power: "31 PS",
        torque: "27.4 Nm",
        fuelType: "Petrol"
      },
      description: "Naked streetfighter with aggressive styling and premium features."
    },
    {
      id: 2,
      name: "Bajaj Pulsar N250",
      brand: "Bajaj",
      category: "Sports",
      expectedPrice: "₹1,40,000 - ₹1,60,000",
      launchDate: "April 2024",
      status: "confirmed",
      image: "/placeholder.svg",
      features: ["Bi-LED Headlight", "USB Charging", "Split Seat", "Tubeless Tyres"],
      specs: {
        engine: "249.07cc Single Cylinder",
        power: "24.1 PS",
        torque: "21.5 Nm",
        fuelType: "Petrol"
      },
      description: "Next-gen Pulsar with modern design and enhanced performance."
    },
    {
      id: 3,
      name: "TVS Apache RR 310",
      brand: "TVS",
      category: "Sports",
      expectedPrice: "₹2,80,000 - ₹3,20,000",
      launchDate: "May 2024",
      status: "rumored",
      image: "/placeholder.svg",
      features: ["TFT Display", "Ride Modes", "Traction Control", "Quick Shifter"],
      specs: {
        engine: "312.2cc Single Cylinder",
        power: "34 PS",
        torque: "27.3 Nm",
        fuelType: "Petrol"
      },
      description: "Track-focused sportsbike with advanced electronics."
    },
    {
      id: 4,
      name: "Hero Electric Vida V1 Pro",
      brand: "Hero",
      category: "Electric",
      expectedPrice: "₹1,45,000 - ₹1,65,000",
      launchDate: "June 2024",
      status: "confirmed",
      image: "/placeholder.svg",
      features: ["Smart Connectivity", "Fast Charging", "Anti-theft", "OTA Updates"],
      specs: {
        motor: "6 kW BLDC Motor",
        range: "165 km",
        topSpeed: "80 kmph",
        fuelType: "Electric"
      },
      description: "Premium electric scooter with smart features and long range."
    },
    {
      id: 5,
      name: "Royal Enfield Hunter 350",
      brand: "Royal Enfield",
      category: "Roadster",
      expectedPrice: "₹1,50,000 - ₹1,70,000",
      launchDate: "July 2024",
      status: "confirmed",
      image: "/placeholder.svg",
      features: ["Tripper Navigation", "Dual Channel ABS", "USB Charging"],
      specs: {
        engine: "349cc Single Cylinder",
        power: "20.2 PS",
        torque: "27 Nm",
        fuelType: "Petrol"
      },
      description: "Retro-modern roadster with classic Royal Enfield charm."
    },
    {
      id: 6,
      name: "Yamaha R15M",
      brand: "Yamaha",
      category: "Sports",
      expectedPrice: "₹1,80,000 - ₹2,00,000",
      launchDate: "August 2024",
      status: "rumored",
      image: "/placeholder.svg",
      features: ["TFT Display", "Quickshifter", "Traction Control", "Aerodynamic Fairing"],
      specs: {
        engine: "155cc Liquid Cooled",
        power: "18.4 PS",
        torque: "14.2 Nm",
        fuelType: "Petrol"
      },
      description: "Track-ready sportsbike with MotoGP-inspired design."
    }
  ];

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "Sports", label: "Sports" },
    { value: "Electric", label: "Electric" },
    { value: "Roadster", label: "Roadster" },
    { value: "Commuter", label: "Commuter" }
  ];

  const filteredVehicles = selectedCategory === "all" 
    ? upcomingVehicles 
    : upcomingVehicles.filter(v => v.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-500";
      case "rumored": return "bg-yellow-500";
      case "delayed": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Upcoming Launches</h1>
          <p className="text-muted-foreground">Stay updated with the latest two-wheeler launches in India</p>
        </div>

        {/* Category Tabs */}
        <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
          <TabsList className="grid w-full grid-cols-5">
            {categories.map((category) => (
              <TabsTrigger key={category.value} value={category.value}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Launch Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Vehicles List */}
          <div className="lg:col-span-2 space-y-6">
            {filteredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-64 h-48 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-semibold">{vehicle.name}</h3>
                          <Badge variant="outline">{vehicle.brand}</Badge>
                          <Badge variant="secondary">{vehicle.category}</Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(vehicle.status)}`}></div>
                          <span className="text-sm text-muted-foreground capitalize">{vehicle.status}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground">{vehicle.description}</p>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Expected Price</span>
                          <p className="font-semibold text-automotive-blue">{vehicle.expectedPrice}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Launch Date</span>
                          <p className="font-semibold">{vehicle.launchDate}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Engine</span>
                          <p className="font-medium">{vehicle.specs.engine}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Power</span>
                          <p className="font-medium">{vehicle.specs.power}</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <span className="text-sm text-muted-foreground">Key Features:</span>
                        <div className="flex flex-wrap gap-1">
                          {vehicle.features.map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button size="sm">
                          <Bell className="w-4 h-4 mr-2" />
                          Notify Me
                        </Button>
                        <Button size="sm" variant="outline">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Launch Calendar */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Launch Calendar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {["March 2024", "April 2024", "May 2024", "June 2024"].map((month) => (
                    <div key={month} className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="font-medium">{month}</span>
                      <Badge variant="outline">
                        {upcomingVehicles.filter(v => v.launchDate === month).length} launches
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Stay Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Get notified about new launches, price updates, and exclusive previews.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-border rounded-md"
                  />
                  <Button className="w-full">Subscribe to Updates</Button>
                </div>
              </CardContent>
            </Card>

            {/* Popular Brands */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Brands</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-2">
                  {["Honda", "Bajaj", "TVS", "Hero", "Yamaha", "Royal Enfield"].map((brand) => (
                    <Badge key={brand} variant="outline" className="justify-center cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      {brand}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default UpcomingLaunches;