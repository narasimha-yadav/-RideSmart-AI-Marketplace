import { Search, User, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-automotive-dark">
              RideSmart<span className="text-automotive-blue">-AI-Marketplace</span>
            </h1>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-automotive-gray hover:text-automotive-blue transition-colors">
              Buy
            </a>
            <a href="#" className="text-automotive-gray hover:text-automotive-blue transition-colors">
              Sell
            </a>
            <a href="#" className="text-automotive-gray hover:text-automotive-blue transition-colors">
              New Bikes
            </a>
            <a href="#" className="text-automotive-gray hover:text-automotive-blue transition-colors">
              Used Bikes
            </a>
            <a href="#" className="text-automotive-gray hover:text-automotive-blue transition-colors">
              Compare
            </a>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-automotive-gray w-4 h-4" />
              <Input
                placeholder="Search bikes, scooters..."
                className="pl-10 bg-automotive-light border-none"
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="automotive" className="hidden md:flex">
              Sell Your Bike
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;