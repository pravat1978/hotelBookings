import React, { useState } from "react";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Star, DollarSign, MapPin, Filter } from "lucide-react";

interface FilterBarProps {
  onFilterChange?: (filters: FilterState) => void;
}

interface FilterState {
  priceRange: [number, number];
  rating: string;
  amenities: string[];
  location: string;
}

const FilterBar = ({ onFilterChange }: FilterBarProps = {}) => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [50, 500],
    rating: "any",
    amenities: [],
    location: "any",
  });

  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handlePriceChange = (value: number[]) => {
    const newFilters = {
      ...filters,
      priceRange: [value[0], value[1]] as [number, number],
    };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
    updateActiveFilters("price");
  };

  const handleRatingChange = (value: string) => {
    const newFilters = { ...filters, rating: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
    if (value !== "any") {
      updateActiveFilters("rating");
    } else {
      removeActiveFilter("rating");
    }
  };

  const handleLocationChange = (value: string) => {
    const newFilters = { ...filters, location: value };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
    if (value !== "any") {
      updateActiveFilters("location");
    } else {
      removeActiveFilter("location");
    }
  };

  const updateActiveFilters = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeActiveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
  };

  const clearAllFilters = () => {
    setFilters({
      priceRange: [50, 500],
      rating: "any",
      amenities: [],
      location: "any",
    });
    setActiveFilters([]);
    onFilterChange?.({
      priceRange: [50, 500],
      rating: "any",
      amenities: [],
      location: "any",
    });
  };

  return (
    <div className="w-full bg-white shadow-sm rounded-md p-4 mb-6 border border-gray-100">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-gray-500" />
          <h3 className="text-lg font-medium">Filters</h3>
          {activeFilters.length > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFilters.length} active
            </Badge>
          )}
        </div>

        <div className="flex flex-wrap gap-2 w-full md:w-auto">
          <div className="flex items-center gap-2 min-w-[200px]">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <div className="w-full">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-500">Price Range</span>
                <span className="text-xs font-medium">
                  ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </span>
              </div>
              <Slider
                defaultValue={[50, 500]}
                value={[filters.priceRange[0], filters.priceRange[1]]}
                min={0}
                max={1000}
                step={10}
                onValueChange={handlePriceChange}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 min-w-[150px]">
            <Star className="h-4 w-4 text-gray-500" />
            <Select value={filters.rating} onValueChange={handleRatingChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Rating" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Rating</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4+ Stars</SelectItem>
                <SelectItem value="3">3+ Stars</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2 min-w-[150px]">
            <MapPin className="h-4 w-4 text-gray-500" />
            <Select
              value={filters.location}
              onValueChange={handleLocationChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Location</SelectItem>
                <SelectItem value="downtown">Downtown</SelectItem>
                <SelectItem value="beachfront">Beachfront</SelectItem>
                <SelectItem value="suburban">Suburban</SelectItem>
                <SelectItem value="mountain">Mountain</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {activeFilters.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearAllFilters}
              className="whitespace-nowrap"
            >
              Clear All
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
