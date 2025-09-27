import { Bike, Car, Zap, Fuel, TrendingUp, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    icon: <Bike className="w-8 h-8" />,
    title: "Sports Bikes",
    description: "High-performance motorcycles for thrill seekers",
    count: "2,450+ models",
    color: "text-blue-500"
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Scooters",
    description: "Convenient and fuel-efficient city rides",
    count: "1,890+ models",
    color: "text-green-500"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Electric Vehicles",
    description: "Eco-friendly electric bikes and scooters",
    count: "680+ models",
    color: "text-purple-500"
  },
  {
    icon: <Fuel className="w-8 h-8" />,
    title: "Cruiser Bikes",
    description: "Comfortable long-distance touring bikes",
    count: "1,200+ models",
    color: "text-orange-500"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Used Vehicles",
    description: "Quality pre-owned bikes at great prices",
    count: "5,600+ models",
    color: "text-red-500"
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Premium Bikes",
    description: "Luxury motorcycles and premium models",
    count: "890+ models",
    color: "text-yellow-500"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-automotive-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-automotive-dark mb-4">
            Explore by Category
          </h2>
          <p className="text-automotive-gray text-lg max-w-2xl mx-auto">
            Find the perfect vehicle for your needs. From sports bikes to eco-friendly 
            electric vehicles, we have something for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 shadow-sm hover:shadow-xl"
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-md mb-4 group-hover:scale-110 transition-transform duration-300 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-automotive-dark mb-2 group-hover:text-automotive-blue transition-colors">
                  {category.title}
                </h3>
                <p className="text-automotive-gray mb-3">
                  {category.description}
                </p>
                <div className="text-sm font-medium text-automotive-blue">
                  {category.count}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;