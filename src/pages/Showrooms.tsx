import { useState } from "react";
import { MapPin, Phone, Clock, Star, Navigation } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Showrooms = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const showrooms = [
    {
      id: 1,
      name: "Honda BigWing",
      brand: "Honda",
      address: "123 MG Road, Bangalore, Karnataka 560001",
      city: "Bangalore",
      phone: "+91 98765 43210",
      rating: 4.5,
      reviews: 234,
      timing: "9:00 AM - 8:00 PM",
      services: ["Sales", "Service", "Spare Parts", "Test Ride"],
      image: "/placeholder.svg",
      latitude: 12.9716,
      longitude: 77.5946
    },
    {
      id: 2,
      name: "Bajaj Pro Biking",
      brand: "Bajaj",
      address: "456 Commercial Street, Bangalore, Karnataka 560001",
      city: "Bangalore",
      phone: "+91 98765 43211",
      rating: 4.3,
      reviews: 189,
      timing: "9:30 AM - 7:30 PM",
      services: ["Sales", "Service", "Insurance", "Finance"],
      image: "/placeholder.svg",
      latitude: 12.9716,
      longitude: 77.5946
    },
    {
      id: 3,
      name: "TVS Motor Zone",
      brand: "TVS",
      address: "789 Brigade Road, Bangalore, Karnataka 560001",
      city: "Bangalore",
      phone: "+91 98765 43212",
      rating: 4.4,
      reviews: 156,
      timing: "9:00 AM - 8:30 PM",
      services: ["Sales", "Service", "Accessories", "Test Ride"],
      image: "/placeholder.svg",
      latitude: 12.9716,
      longitude: 77.5946
    },
    {
      id: 4,
      name: "Hero MotoCorp",
      brand: "Hero",
      address: "321 Residency Road, Bangalore, Karnataka 560025",
      city: "Bangalore",
      phone: "+91 98765 43213",
      rating: 4.2,
      reviews: 298,
      timing: "9:00 AM - 7:00 PM",
      services: ["Sales", "Service", "Spare Parts", "Insurance"],
      image: "/placeholder.svg",
      latitude: 12.9716,
      longitude: 77.5946
    },
    {
      id: 5,
      name: "Yamaha Blue Square",
      brand: "Yamaha",
      address: "654 Koramangala, Bangalore, Karnataka 560034",
      city: "Bangalore",
      phone: "+91 98765 43214",
      rating: 4.6,
      reviews: 167,
      timing: "10:00 AM - 8:00 PM",
      services: ["Sales", "Service", "Test Ride", "Accessories"],
      image: "/placeholder.svg",
      latitude: 12.9716,
      longitude: 77.5946
    }
  ];

  const cities = ["Bangalore", "Mumbai", "Delhi", "Chennai", "Hyderabad", "Pune", "Kolkata"];
  const brands = ["Honda", "Bajaj", "TVS", "Hero", "Yamaha", "Royal Enfield", "KTM"];

  const filteredShowrooms = showrooms.filter(showroom => {
    const cityMatch = !selectedCity || showroom.city === selectedCity;
    const brandMatch = !selectedBrand || showroom.brand === selectedBrand;
    return cityMatch && brandMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Find Showrooms</h1>
          <p className="text-muted-foreground">Locate authorized dealers and showrooms near you</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Search Location</label>
                <Input placeholder="Enter city or pincode" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">City</label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Cities</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Brand</label>
                <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select brand" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Brands</SelectItem>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Showrooms
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Showroom List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">
                {filteredShowrooms.length} showrooms found
              </h2>
            </div>

            {filteredShowrooms.map((showroom) => (
              <Card key={showroom.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-48 h-32 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                      <img 
                        src={showroom.image} 
                        alt={showroom.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-lg font-semibold">{showroom.name}</h3>
                          <Badge variant="outline">{showroom.brand}</Badge>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{showroom.rating}</span>
                          <span className="text-muted-foreground">({showroom.reviews} reviews)</span>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{showroom.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{showroom.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{showroom.timing}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {showroom.services.map((service, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        <Button size="sm">
                          <Navigation className="w-4 h-4 mr-2" />
                          Get Directions
                        </Button>
                        <Button size="sm" variant="outline">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                        <Button size="sm" variant="outline">
                          Book Test Ride
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Map View</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-muted-foreground">Interactive map</p>
                    <p className="text-sm text-muted-foreground">showing all showrooms</p>
                  </div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <h4 className="font-semibold">Quick Filters</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      Open Now
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      Test Ride Available
                    </Badge>
                    <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                      Service Center
                    </Badge>
                  </div>
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

export default Showrooms;