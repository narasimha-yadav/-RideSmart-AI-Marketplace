import { Star, Heart, Eye, Zap } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const vehicles = [
  {
    id: 1,
    name: "Yamaha YZF R15 V4",
    brand: "Yamaha",
    price: "₹1,77,500",
    originalPrice: "₹1,85,000",
    image: "/placeholder.svg",
    type: "Sports",
    fuel: "Petrol",
    mileage: "40 kmpl",
    rating: 4.5,
    reviews: 324,
    isElectric: false,
    badge: "Most Popular"
  },
  {
    id: 2,
    name: "Ather 450X",
    brand: "Ather",
    price: "₹1,46,926",
    originalPrice: "₹1,52,000",
    image: "/placeholder.svg",
    type: "Electric",
    fuel: "Electric",
    mileage: "116 km range",
    rating: 4.7,
    reviews: 189,
    isElectric: true,
    badge: "Eco Friendly"
  },
  {
    id: 3,
    name: "Royal Enfield Classic 350",
    brand: "Royal Enfield",
    price: "₹1,93,814",
    originalPrice: "₹2,05,000",
    image: "/placeholder.svg",
    type: "Cruiser",
    fuel: "Petrol",
    mileage: "35 kmpl",
    rating: 4.3,
    reviews: 567,
    isElectric: false,
    badge: "Best Seller"
  },
  {
    id: 4,
    name: "TVS Jupiter 125",
    brand: "TVS",
    price: "₹73,400",
    originalPrice: "₹78,000",
    image: "/placeholder.svg",
    type: "Scooter",
    fuel: "Petrol",
    mileage: "68 kmpl",
    rating: 4.4,
    reviews: 234,
    isElectric: false,
    badge: "Fuel Efficient"
  }
];

const FeaturedVehicles = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-automotive-dark mb-4">
            Featured Vehicles
          </h2>
          <p className="text-automotive-gray text-lg max-w-2xl mx-auto">
            Discover our handpicked selection of the most popular bikes and scooters, 
            chosen for their performance, reliability, and value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md">
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge 
                      variant={vehicle.isElectric ? "default" : "secondary"}
                      className={vehicle.isElectric ? "bg-green-500 hover:bg-green-600" : ""}
                    >
                      {vehicle.badge}
                    </Badge>
                  </div>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white h-8 w-8">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white h-8 w-8">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                  {vehicle.isElectric && (
                    <div className="absolute bottom-3 left-3">
                      <div className="bg-green-500 p-1 rounded-full">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-automotive-dark group-hover:text-automotive-blue transition-colors">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-automotive-gray">{vehicle.brand} • {vehicle.type}</p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium ml-1">{vehicle.rating}</span>
                    </div>
                    <span className="text-sm text-automotive-gray">({vehicle.reviews} reviews)</span>
                  </div>

                  <div className="flex justify-between text-sm text-automotive-gray">
                    <span>{vehicle.fuel}</span>
                    <span>{vehicle.mileage}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-automotive-dark">{vehicle.price}</span>
                      <span className="text-sm text-automotive-gray line-through ml-2">{vehicle.originalPrice}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 pt-2">
                    <Button variant="automotive" size="sm" className="flex-1">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Compare
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="premium" size="lg">
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;