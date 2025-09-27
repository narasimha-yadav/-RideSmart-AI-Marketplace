import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Star } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - in real app this would come from API/database
  const vehicle = {
    id: 1,
    name: "Honda CB Shine",
    brand: "Honda",
    price: "₹72,900",
    originalPrice: "₹75,900",
    discount: "₹3,000 off",
    rating: 4.5,
    reviews: 1247,
    image: "/placeholder.svg",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    category: "Commuter",
    fuelType: "Petrol",
    mileage: "65 kmpl",
    engineCC: "124.7 cc",
    maxPower: "10.16 bhp",
    maxTorque: "10.9 Nm",
    transmission: "5-speed manual",
    fuelCapacity: "10.5 L",
    seatHeight: "780 mm",
    weight: "123 kg",
    colors: ["Black", "Red", "Blue", "Silver"],
    features: [
      "LED headlight",
      "Digital speedometer",
      "Side stand indicator",
      "Pass switch",
      "Low maintenance",
      "Fuel efficiency"
    ],
    pros: [
      "Excellent fuel efficiency",
      "Comfortable riding position",
      "Low maintenance cost",
      "Good build quality"
    ],
    cons: [
      "Limited power for highways",
      "Basic features",
      "Average styling"
    ],
    emiStartsFrom: "₹2,430",
    launchDate: "Available Now",
    warranty: "5 years or 75,000 km"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <img 
                src={vehicle.image} 
                alt={vehicle.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {vehicle.images.map((img, index) => (
                <div key={index} className="aspect-video bg-muted rounded-lg overflow-hidden cursor-pointer hover:opacity-80">
                  <img src={img} alt={`${vehicle.name} ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{vehicle.category}</Badge>
                <Badge variant="outline">{vehicle.fuelType}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{vehicle.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium">{vehicle.rating}</span>
                </div>
                <span className="text-muted-foreground">({vehicle.reviews} reviews)</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-automotive-blue">{vehicle.price}</span>
                <span className="text-lg text-muted-foreground line-through">{vehicle.originalPrice}</span>
              </div>
              <Badge variant="destructive">{vehicle.discount}</Badge>
              <p className="text-muted-foreground">EMI starts from {vehicle.emiStartsFrom}/month</p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-y">
              <div>
                <span className="text-muted-foreground">Mileage</span>
                <p className="font-semibold">{vehicle.mileage}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Engine</span>
                <p className="font-semibold">{vehicle.engineCC}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Max Power</span>
                <p className="font-semibold">{vehicle.maxPower}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Weight</span>
                <p className="font-semibold">{vehicle.weight}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button size="lg" className="flex-1">
                Book Test Ride
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Specs */}
        <Tabs defaultValue="specs" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="compare">Compare</TabsTrigger>
          </TabsList>
          
          <TabsContent value="specs" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Engine & Performance</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Engine Displacement</span>
                    <span>{vehicle.engineCC}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max Power</span>
                    <span>{vehicle.maxPower}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Max Torque</span>
                    <span>{vehicle.maxTorque}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Transmission</span>
                    <span>{vehicle.transmission}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Dimensions & Weight</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Kerb Weight</span>
                    <span>{vehicle.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Seat Height</span>
                    <span>{vehicle.seatHeight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fuel Tank Capacity</span>
                    <span>{vehicle.fuelCapacity}</span>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="features" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {vehicle.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-automotive-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Available Colors</h3>
                <div className="flex gap-2">
                  {vehicle.colors.map((color, index) => (
                    <Badge key={index} variant="outline">{color}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{vehicle.rating}</h3>
                <div className="flex justify-center mb-2">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground">Based on {vehicle.reviews} reviews</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Pros</h4>
                  <ul className="space-y-1">
                    {vehicle.pros.map((pro, index) => (
                      <li key={index} className="text-muted-foreground">• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-600 mb-2">Cons</h4>
                  <ul className="space-y-1">
                    {vehicle.cons.map((con, index) => (
                      <li key={index} className="text-muted-foreground">• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="compare" className="mt-6">
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold mb-4">Compare with Similar Vehicles</h3>
              <p className="text-muted-foreground mb-6">Select vehicles to compare specifications side by side</p>
              <Button>Add Vehicles to Compare</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;