import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";

interface HeaderProps {
  className?: string;
  isLoggedIn?: boolean;
  userName?: string;
  userAvatar?: string;
}

const Header = ({
  className,
  isLoggedIn = false,
  userName = "Guest",
  userAvatar = "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
}: HeaderProps = {}) => {
  return (
    <header
      className={cn(
        "w-full bg-white border-b border-gray-200 py-4 px-4 md:px-6 lg:px-8",
        className,
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/serko-logo.png"
            alt="Serko Travel"
            className="h-8 md:h-10"
          />
        </Link>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-primary font-medium hover:text-primary-dark transition-colors"
          >
            Home
          </Link>
          <Link
            to="/hotels"
            className="text-gray-600 font-medium hover:text-primary transition-colors"
          >
            Hotels
          </Link>
          <Link
            to="/flights"
            className="text-gray-600 font-medium hover:text-primary transition-colors"
          >
            Flights
          </Link>
          <Link
            to="/packages"
            className="text-gray-600 font-medium hover:text-primary transition-colors"
          >
            Packages
          </Link>
          <Link
            to="/deals"
            className="text-gray-600 font-medium hover:text-primary transition-colors"
          >
            Deals
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-600">
            <Search className="h-5 w-5" />
          </Button>

          {isLoggedIn ? (
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium hidden md:inline">
                {userName}
              </span>
              <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200">
                <img
                  src={userAvatar}
                  alt={userName}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 md:hidden"
            >
              <User className="h-5 w-5" />
            </Button>
          )}

          {!isLoggedIn && (
            <Button
              variant="outline"
              className="hidden md:inline-flex border-primary text-primary hover:bg-primary hover:text-white"
            >
              Sign In
            </Button>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
