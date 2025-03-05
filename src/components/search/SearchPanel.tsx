import React, { useState } from "react";
import { Search, MapPin, Calendar, DollarSign, Bed } from "lucide-react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import DateRangePicker from "./DateRangePicker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

interface SearchPanelProps {
  className?: string;
  onSearch?: (searchParams: SearchParams) => void;
}

interface SearchParams {
  location: string;
  dateRange: {
    from: Date | undefined;
    to: Date | undefined;
  };
  priceRange: [number, number];
  guests: number;
}

const SearchPanel = ({ className, onSearch }: SearchPanelProps = {}) => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    location: "",
    dateRange: {
      from: undefined,
      to: undefined,
    },
    priceRange: [50, 500],
    guests: 2,
  });

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({
      ...searchParams,
      location: e.target.value,
    });
  };

  const handleDateRangeChange = (dateRange: any) => {
    setSearchParams({
      ...searchParams,
      dateRange: {
        from: dateRange?.from,
        to: dateRange?.to,
      },
    });
  };

  const handlePriceRangeChange = (value: number[]) => {
    setSearchParams({
      ...searchParams,
      priceRange: [value[0], value[1]] as [number, number],
    });
  };

  const handleGuestsChange = (value: string) => {
    setSearchParams({
      ...searchParams,
      guests: parseInt(value),
    });
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchParams);
    }
  };

  return (
    <div
      className={cn(
        "w-full max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 border border-gray-100",
        className,
      )}
    >
      <div className="flex flex-col space-y-6">
        <h2 className="text-3xl font-bold text-center text-primary">
          Find your perfect stay
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Location Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              Where are you going?
            </label>
            <div className="relative">
              <Input
                placeholder="Enter destination"
                value={searchParams.location}
                onChange={handleLocationChange}
                className="pl-10 h-12"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Date Range Picker */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Calendar className="h-4 w-4 text-primary" />
              Check-in / Check-out
            </label>
            <DateRangePicker
              onChange={handleDateRangeChange}
              initialDateRange={searchParams.dateRange}
            />
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-primary" />
              Price Range
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-between h-12 border-2 hover:bg-background"
                >
                  <span>
                    ${searchParams.priceRange[0]} - $
                    {searchParams.priceRange[1]}
                  </span>
                  <DollarSign className="h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4 p-2">
                  <h4 className="font-medium">Select price range</h4>
                  <div className="pt-4">
                    <Slider
                      defaultValue={[50, 500]}
                      value={[
                        searchParams.priceRange[0],
                        searchParams.priceRange[1],
                      ]}
                      min={0}
                      max={1000}
                      step={10}
                      onValueChange={handlePriceRangeChange}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="border rounded-md px-2 py-1">
                      <span className="text-sm">
                        Min: ${searchParams.priceRange[0]}
                      </span>
                    </div>
                    <div className="border rounded-md px-2 py-1">
                      <span className="text-sm">
                        Max: ${searchParams.priceRange[1]}
                      </span>
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Guests */}
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Bed className="h-4 w-4 text-primary" />
              Guests
            </label>
            <Select
              value={searchParams.guests.toString()}
              onValueChange={handleGuestsChange}
            >
              <SelectTrigger className="h-12 border-2">
                <SelectValue placeholder="Number of guests" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} {num === 1 ? "Guest" : "Guests"}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search Button */}
        <Button
          onClick={handleSearch}
          className="w-full md:w-auto md:px-8 py-3 h-auto text-base font-semibold self-center mt-2 bg-primary hover:bg-primary-dark transition-colors shadow-md"
        >
          <Search className="mr-2 h-5 w-5" />
          Search Hotels
        </Button>
      </div>

      {/* Popular Filters Section */}
      <div className="mt-6 pt-4 border-t">
        <h3 className="text-sm font-medium mb-3">Popular Filters</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Free cancellation",
            "Breakfast included",
            "Pool",
            "Pet friendly",
            "Free WiFi",
            "Spa",
          ].map((filter, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
