import React from "react";
import { Star, MapPin, Wifi, Coffee, Utensils } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Amenity {
  icon: React.ReactNode;
  label: string;
}

interface HotelCardProps {
  id?: string;
  name?: string;
  image?: string;
  location?: string;
  price?: number;
  rating?: number;
  amenities?: Amenity[];
  discount?: number;
}

const HotelCard = ({
  id = "1",
  name = "Luxury Ocean Resort",
  image = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
  location = "Miami, Florida",
  price = 299,
  rating = 4.8,
  amenities = [
    { icon: <Wifi className="h-4 w-4" />, label: "Free WiFi" },
    { icon: <Coffee className="h-4 w-4" />, label: "Breakfast" },
    { icon: <Utensils className="h-4 w-4" />, label: "Restaurant" },
  ],
  discount = 0,
}: HotelCardProps) => {
  return (
    <Card className="w-full max-w-[380px] overflow-hidden transition-all hover:shadow-lg bg-white border border-gray-100">
      <div className="relative h-[220px] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {discount > 0 && (
          <Badge
            variant="destructive"
            className="absolute top-3 right-3 bg-primary text-white border-primary"
          >
            {discount}% OFF
          </Badge>
        )}
      </div>

      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold">{name}</h3>
          <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded-md">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium text-sm">{rating}</span>
          </div>
        </div>
        <div className="flex items-center text-muted-foreground mt-1">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-secondary/20 px-2 py-1 rounded-md text-xs"
            >
              {amenity.icon}
              <span>{amenity.label}</span>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center border-t pt-4">
        <div>
          <p className="text-2xl font-bold">
            ${price}
            <span className="text-sm font-normal">/night</span>
          </p>
          {discount > 0 && (
            <p className="text-sm text-muted-foreground line-through">
              ${Math.round(price / (1 - discount / 100))}/night
            </p>
          )}
        </div>
        <a
          href={`/view-details/${id}`}
          className={cn(
            "px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary-dark transition-colors",
            "font-medium text-sm inline-block text-center",
          )}
        >
          View Details
        </a>
      </CardFooter>
    </Card>
  );
};

export default HotelCard;
