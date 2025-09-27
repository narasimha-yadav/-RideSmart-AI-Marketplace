import { useState } from "react";
import { Search, Filter, Grid, List, Heart, Eye } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const VehicleListings = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([50000, 500000]);
  
  // Mock data - in real app this would come from API/database
  const vehicles = [
    {
      id: 1,
      name: "Honda CB Shine",
      brand: "Honda",
      price: "₹72,900",
      originalPrice: "₹75,900",
      image: "/placeholder.svg",
      category: "Commuter",
      fuelType: "Petrol",
      mileage: "65 kmpl",
      engineCC: "124.7 cc",
      rating: 4.5,
      reviews: 1247,
      isNew: true,
      discount: "₹3,000 off"
    },
    {
      id: 2,
      name: "Bajaj Pulsar 150",
      brand: "Bajaj",
      price: "₹1,08,618",
      originalPrice: null,
      image: "/placeholder.svg",
      category: "Sports",
      fuelType: "Petrol",
      mileage: "50 kmpl",
      engineCC: "149.5 cc",
      rating: 4.3,
      reviews: 892,
      isNew: false,
      discount: null
    },
    {
      id: 3,
      name: "TVS Jupiter",
      brand: "TVS",
      price: "₹73,400",
      originalPrice: "₹75,900",
      image: "/placeholder.svg",
      category: "Scooter",
      fuelType: "Petrol",
      mileage: "62 kmpl",
      engineCC: "109.7 cc",
      rating: 4.4,
      reviews: 1056,
      isNew: false,
      discount: "₹2,500 off"
    },
    {
      id: 4,
      name: "Hero Splendor Plus",
      brand: "Hero",
      price: "₹64,850",
      originalPrice: null,
      image: "/placeholder.svg",
      category: "Commuter",
      fuelType: "Petrol",
      mileage: "70 kmpl",
      engineCC: "97.2 cc",
      rating: 4.2,
      reviews: 2134,
      isNew: false,
      discount: null
    },
    {
      id: 5,
      name: "Yamaha FZ-S FI",
      brand: "Yamaha",
      price: "₹1,16,800",
      originalPrice: null,
      image: "/placeholder.svg",
      category: "Sports",
      fuelType: "Petrol",
      mileage: "45 kmpl",
      engineCC: "149 cc",
      rating: 4.6,
      reviews: 743,
      isNew: true,
      discount: null
    },
    {
      id: 6,
      name: "Honda Activa 6G",
      brand: "Honda",
      price: "₹74,536",
      originalPrice: null,
      image: "/placeholder.svg",
      category: "Scooter",
      fuelType: "Petrol",
      mileage: "60 kmpl",
      engineCC: "109.51 cc",
      rating: 4.5,
      reviews: 1823,
      isNew: false,
      discount: null
    }
  ];

  const brands = ["Honda", "Bajaj", "TVS", "Hero", "Yamaha", "Royal Enfield", "KTM"];
  const categories = ["Commuter", "Sports", "Scooter", "Cruiser", "Adventure"];
  const fuelTypes = ["Petrol", "Electric", "Hybrid"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">All Vehicles</h1>
          <p className="text-muted-foreground">Discover the perfect two-wheeler for your needs</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-80 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Filters</h3>
                
                {/* Search */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Search</label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input placeholder="Search vehicles..." className="pl-10" />
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Price Range</label>
                    <div className="space-y-2">
                      <Slider
                        value={priceRange}
                        onValueChange={setPriceRange}
                        max={1000000}
                        min={30000}
                        step={10000}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>₹{priceRange[0].toLocaleString()}</span>
                        <span>₹{priceRange[1].toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Brand */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Brand</label>
                    <div className="space-y-2 max-h-40 overflow-y-auto">
                      {brands.map((brand) => (
                        <div key={brand} className="flex items-center space-x-2">
                          <Checkbox id={brand} />
                          <label htmlFor={brand} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {brand}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Category */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Category</label>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center space-x-2">
                          <Checkbox id={category} />
                          <label htmlFor={category} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Fuel Type */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Fuel Type</label>
                    <div className="space-y-2">
                      {fuelTypes.map((fuel) => (
                        <div key={fuel} className="flex items-center space-x-2">
                          <Checkbox id={fuel} />
                          <label htmlFor={fuel} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            {fuel}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-muted-foreground">{vehicles.length} vehicles found</p>
              
              <div className="flex items-center gap-4">
                <Select defaultValue="price-low">
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="mileage">Mileage</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
                
                <div className="flex border rounded-md">
                  <Button 
                    variant={viewMode === "grid" ? "default" : "ghost"} 
                    size="sm"
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant={viewMode === "list" ? "default" : "ghost"} 
                    size="sm"
                    onClick={() => setViewMode("list")}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Vehicle Grid/List */}
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
              {vehicles.map((vehicle) => (
                <Card 
                  key={vehicle.id} 
                  className={`group cursor-pointer hover:shadow-lg transition-all duration-300 ${
                    viewMode === "list" ? "flex" : ""
                  }`}
                  onClick={() => navigate(`/vehicle/${vehicle.id}`)}
                >
                  <div className={viewMode === "list" ? "flex w-full" : ""}>
                    <div className={`relative ${viewMode === "list" ? "w-64 flex-shrink-0" : "aspect-video"} bg-muted overflow-hidden`}>
                      <img 
                        src={vehicle.image} 
                        alt={vehicle.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {vehicle.isNew && (
                        <Badge className="absolute top-2 left-2 bg-automotive-blue">New</Badge>
                      )}
                      {vehicle.discount && (
                        <Badge variant="destructive" className="absolute top-2 right-2">{vehicle.discount}</Badge>
                      )}
                      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="sm" variant="secondary">
                          <Heart className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <CardContent className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{vehicle.category}</Badge>
                          <Badge variant="outline">{vehicle.fuelType}</Badge>
                        </div>
                        
                        <h3 className="font-semibold text-lg group-hover:text-automotive-blue transition-colors">
                          {vehicle.name}
                        </h3>
                        
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <span>★ {vehicle.rating}</span>
                          <span>({vehicle.reviews} reviews)</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          <div>
                            <span className="text-muted-foreground">Mileage: </span>
                            <span className="font-medium">{vehicle.mileage}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Engine: </span>
                            <span className="font-medium">{vehicle.engineCC}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between pt-2">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-automotive-blue">{vehicle.price}</span>
                              {vehicle.originalPrice && (
                                <span className="text-sm text-muted-foreground line-through">{vehicle.originalPrice}</span>
                              )}
                            </div>
                          </div>
                          <Button size="sm" variant="outline" onClick={(e) => {
                            e.stopPropagation();
                            navigate(`/vehicle/${vehicle.id}`);
                          }}>
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VehicleListings;