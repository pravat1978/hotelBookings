import React, { useState, useEffect } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import HotelCard from "./HotelCard";
import FilterBar from "../filters/FilterBar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";

interface Hotel {
  id: string;
  name: string;
  image: string;
  location: string;
  price: number;
  rating: number;
  amenities: { icon: React.ReactNode; label: string }[];
  discount?: number;
}

interface HotelGridProps {
  initialHotels?: Hotel[];
  isLoading?: boolean;
  onSearch?: (query: string) => void;
  onFilterChange?: (filters: any) => void;
}

const HotelGrid = ({
  initialHotels,
  isLoading = false,
  onSearch,
  onFilterChange,
}: HotelGridProps = {}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [hotels, setHotels] = useState<Hotel[]>([]);

  // Default hotels if none provided
  const defaultHotels: Hotel[] = [
    {
      id: "1",
      name: "Luxury Ocean Resort",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
      location: "Miami, Florida",
      price: 299,
      rating: 4.8,
      amenities: [
        { icon: <span>🔵</span>, label: "Free WiFi" },
        { icon: <span>🔵</span>, label: "Breakfast" },
        { icon: <span>🔵</span>, label: "Restaurant" },
      ],
      discount: 15,
    },
    {
      id: "2",
      name: "Mountain View Lodge",
      image:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
      location: "Aspen, Colorado",
      price: 349,
      rating: 4.9,
      amenities: [
        { icon: <span>🔵</span>, label: "Free WiFi" },
        { icon: <span>🔵</span>, label: "Spa" },
        { icon: <span>🔵</span>, label: "Fireplace" },
      ],
    },
    {
      id: "3",
      name: "Urban Boutique Hotel",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
      location: "New York, New York",
      price: 279,
      rating: 4.6,
      amenities: [
        { icon: <span>🔵</span>, label: "Free WiFi" },
        { icon: <span>🔵</span>, label: "Gym" },
        { icon: <span>🔵</span>, label: "Bar" },
      ],
      discount: 10,
    },
    {
      id: "4",
      name: "Desert Oasis Resort",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
      location: "Phoenix, Arizona",
      price: 199,
      rating: 4.5,
      amenities: [
        { icon: <span>🔵</span>, label: "Pool" },
        { icon: <span>🔵</span>, label: "Free WiFi" },
        { icon: <span>🔵</span>, label: "Spa" },
      ],
    },
    {
      id: "5",
      name: "Lakeside Retreat",
      image:
        "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
      location: "Lake Tahoe, Nevada",
      price: 329,
      rating: 4.7,
      amenities: [
        { icon: <span>🔵</span>, label: "Waterfront" },
        { icon: <span>🔵</span>, label: "Free WiFi" },
        { icon: <span>🔵</span>, label: "Breakfast" },
      ],
      discount: 5,
    },
    {
      id: "6",
      name: "Historic Downtown Inn",
      image:
        "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=800&q=80",
      location: "Charleston, South Carolina",
      price: 249,
      rating: 4.6,
      amenities: [
        { icon: <span>🔵</span>, label: "Free WiFi" },
        { icon: <span>🔵</span>, label: "Breakfast" },
        { icon: <span>🔵</span>, label: "Historic Tours" },
      ],
    },
  ];

  useEffect(() => {
    // Use provided hotels or default ones
    setHotels(initialHotels || defaultHotels);
  }, [initialHotels]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const handleFilterChange = (filters: any) => {
    if (onFilterChange) {
      onFilterChange(filters);
    }
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 bg-white">
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Find Your Perfect Stay</h2>

          <div className="flex w-full md:w-auto gap-2">
            <form onSubmit={handleSearchSubmit} className="flex-1 md:w-80">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search hotels, locations..."
                  className="pl-10 pr-4 py-2 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </form>

            <Button
              variant="outline"
              size="icon"
              onClick={toggleFilters}
              className={showFilters ? "bg-primary/10" : ""}
              aria-label="Toggle filters"
            >
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {showFilters && <FilterBar onFilterChange={handleFilterChange} />}
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array(6)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="w-full">
                <Skeleton className="h-[220px] w-full rounded-t-md" />
                <div className="space-y-2 pt-4">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <div className="flex gap-2 pt-2">
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-20" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <div className="flex justify-between pt-4">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-28" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : hotels.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              image={hotel.image}
              location={hotel.location}
              price={hotel.price}
              rating={hotel.rating}
              amenities={hotel.amenities}
              discount={hotel.discount}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-xl font-medium mb-2">No hotels found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default HotelGrid;
