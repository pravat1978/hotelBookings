import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  MapPin,
  Wifi,
  Coffee,
  Utensils,
  Dumbbell,
  Car,
  PawPrint,
  Snowflake,
  CalendarRange,
  Users,
  ChevronLeft,
  Waves,
} from "lucide-react";
import DateRangePicker from "../search/DateRangePicker";
import { DateRange } from "react-day-picker";

// Mock data for a single hotel
const hotelData = {
  id: "1",
  name: "Luxury Ocean Resort",
  location: "Miami, Florida",
  rating: 4.8,
  reviews: 246,
  price: 299,
  discount: 15,
  description:
    "Experience luxury living at its finest with our oceanfront resort. Featuring stunning views, world-class amenities, and exceptional service, our resort offers the perfect getaway for those seeking relaxation and indulgence.",
  images: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    "https://images.unsplash.com/photo-1560200353-ce0a76b1d438?w=800&q=80",
    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80",
    "https://images.unsplash.com/photo-1519449556851-5720b33024e7?w=800&q=80",
  ],
  amenities: [
    { icon: <Wifi className="h-4 w-4" />, label: "Free WiFi" },
    { icon: <Coffee className="h-4 w-4" />, label: "Breakfast Included" },
    { icon: <Utensils className="h-4 w-4" />, label: "Restaurant" },
    { icon: <Waves className="h-4 w-4" />, label: "Swimming Pool" },
    { icon: <Dumbbell className="h-4 w-4" />, label: "Fitness Center" },
    { icon: <Car className="h-4 w-4" />, label: "Free Parking" },
    { icon: <PawPrint className="h-4 w-4" />, label: "Pet Friendly" },
    { icon: <Snowflake className="h-4 w-4" />, label: "Air Conditioning" },
  ],
  rooms: [
    {
      id: "room1",
      name: "Deluxe Ocean View",
      price: 299,
      discount: 15,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
      capacity: 2,
      beds: "1 King Bed",
      size: "45 m²",
      features: [
        "Ocean View",
        "Balcony",
        "Mini Bar",
        "Free WiFi",
        "Room Service",
      ],
    },
    {
      id: "room2",
      name: "Premium Suite",
      price: 499,
      discount: 0,
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800&q=80",
      capacity: 4,
      beds: "1 King Bed + 1 Sofa Bed",
      size: "75 m²",
      features: [
        "Ocean View",
        "Private Terrace",
        "Living Room",
        "Jacuzzi",
        "Free WiFi",
        "Room Service",
      ],
    },
    {
      id: "room3",
      name: "Standard Room",
      price: 199,
      discount: 10,
      image:
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&q=80",
      capacity: 2,
      beds: "2 Queen Beds",
      size: "35 m²",
      features: ["City View", "Free WiFi", "Room Service"],
    },
  ],
};

const ViewDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 5)),
  });
  const [guests, setGuests] = React.useState(2);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  // In a real app, you would fetch the hotel data based on the ID
  // For this example, we'll use the mock data
  const hotel = hotelData;

  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range);
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGuests(parseInt(e.target.value));
  };

  const nextPhoto = () => {
    setActivePhotoIndex((prev) =>
      prev === hotel.images.length - 1 ? 0 : prev + 1,
    );
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) =>
      prev === 0 ? hotel.images.length - 1 : prev - 1,
    );
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary-dark mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to search results
        </Link>

        {/* Hotel name and rating */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl font-bold">{hotel.name}</h1>
              <div className="bg-blue-100 text-blue-700 px-3 py-0.5 rounded-full text-sm font-medium">
                Hotel
              </div>
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center mt-2">
              <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-muted-foreground">{hotel.location}</span>
            </div>
          </div>
          <div className="flex flex-col items-end mt-4 md:mt-0">
            <div className="flex items-center gap-2">
              <div className="text-lg font-bold text-green-700">Very Good</div>
              <div className="bg-green-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                3.5
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              {hotel.reviews} reviews
            </div>
          </div>
        </div>

        {/* Image gallery */}
        <div className="mb-8">
          {/* Main gallery container */}
          <div className="relative overflow-hidden rounded-lg">
            {/* Main large image */}
            <div className="relative h-[400px] md:h-[500px] w-full">
              <img
                src={hotel.images[activePhotoIndex]}
                alt={hotel.name}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm font-medium">
                {activePhotoIndex + 1} / {hotel.images.length} Photos
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-2 rounded-lg transform rotate-6 shadow-lg">
                <div className="text-center font-bold">
                  <div className="text-xs uppercase tracking-wider">
                    Limited
                  </div>
                  <div className="text-lg">Travel</div>
                  <div className="text-xl">Sale</div>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
              {hotel.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative flex-shrink-0 w-24 h-24 rounded-md overflow-hidden cursor-pointer ${index === activePhotoIndex ? "ring-2 ring-primary" : ""}`}
                  onClick={() => setActivePhotoIndex(index)}
                >
                  <img
                    src={image}
                    alt={`${hotel.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Photo categories */}
          <div className="mt-4 flex flex-wrap gap-3">
            <button className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors">
              All Photos ({hotel.images.length})
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Rooms (12)
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Exterior (8)
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Dining (6)
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Pool & Beach (5)
            </button>
            <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">
              Amenities (9)
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Hotel details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="rooms">
              <TabsList className="mb-6 w-full justify-start overflow-x-auto">
                <TabsTrigger value="rooms">Rooms</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="policy">Booking Policy</TabsTrigger>
                <TabsTrigger value="reviews">Guest Rating</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">
                    About this hotel
                  </h2>
                  <p className="text-muted-foreground">{hotel.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Popular amenities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {hotel.amenities.map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 p-3 bg-secondary/10 rounded-md"
                      >
                        {amenity.icon}
                        <span className="text-sm">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="rooms" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Available Rooms</h2>
                <div className="space-y-6">
                  {hotel.rooms.map((room) => (
                    <div
                      key={room.id}
                      className="border rounded-lg overflow-hidden bg-white shadow-sm"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="h-64 md:h-auto">
                          <img
                            src={room.image}
                            alt={room.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 md:col-span-2">
                          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                            <h3 className="text-xl font-semibold">
                              {room.name}
                            </h3>
                            <div className="mt-2 md:mt-0">
                              <div className="text-2xl font-bold text-primary">
                                $
                                {room.discount > 0
                                  ? Math.round(
                                      room.price * (1 - room.discount / 100),
                                    )
                                  : room.price}
                                <span className="text-sm font-normal text-muted-foreground">
                                  /night
                                </span>
                              </div>
                              {room.discount > 0 && (
                                <div className="text-sm text-muted-foreground line-through">
                                  ${room.price}/night
                                </div>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            <div className="flex items-center text-sm bg-secondary/10 px-2 py-1 rounded-md">
                              <Users className="h-3.5 w-3.5 mr-1" />
                              {room.capacity} guests
                            </div>
                            <div className="flex items-center text-sm bg-secondary/10 px-2 py-1 rounded-md">
                              {room.beds}
                            </div>
                            <div className="flex items-center text-sm bg-secondary/10 px-2 py-1 rounded-md">
                              {room.size}
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-medium mb-2">
                              Room features
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {room.features.map((feature, index) => (
                                <Badge key={index} variant="outline">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button className="w-full md:w-auto bg-primary hover:bg-primary-dark">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="amenities" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Hotel Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-3">General</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Wifi className="h-4 w-4 text-primary" />
                        Free WiFi
                      </li>
                      <li className="flex items-center gap-2">
                        <Car className="h-4 w-4 text-primary" />
                        Free Parking
                      </li>
                      <li className="flex items-center gap-2">
                        <Coffee className="h-4 w-4 text-primary" />
                        Breakfast Included
                      </li>
                      <li className="flex items-center gap-2">
                        <PawPrint className="h-4 w-4 text-primary" />
                        Pet Friendly
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-3">
                      Activities & Wellness
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Waves className="h-4 w-4 text-primary" />
                        Swimming Pool
                      </li>
                      <li className="flex items-center gap-2">
                        <Dumbbell className="h-4 w-4 text-primary" />
                        Fitness Center
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="location" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Location</h2>
                <div className="aspect-video rounded-lg overflow-hidden mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=1200&q=80"
                    alt="Hotel location map"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Address</h3>
                    <p className="text-muted-foreground">
                      123 Ocean Drive, Miami Beach, FL 33139, United States
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Nearby Attractions
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <span className="font-medium text-foreground">
                            South Beach
                          </span>{" "}
                          - 0.5 miles
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <span className="font-medium text-foreground">
                            Art Deco Historic District
                          </span>{" "}
                          - 0.8 miles
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <span className="font-medium text-foreground">
                            Miami Beach Convention Center
                          </span>{" "}
                          - 1.2 miles
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="policy" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Booking Policy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Check-in & Check-out
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-24 font-medium text-foreground">
                          Check-in:
                        </div>
                        <div>From 3:00 PM (ID required)</div>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-24 font-medium text-foreground">
                          Check-out:
                        </div>
                        <div>Until 11:00 AM</div>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-24 font-medium text-foreground">
                          Reception:
                        </div>
                        <div>24/7</div>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Cancellation Policy
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Free cancellation up to 24 hours before check-in.
                      Cancellations made less than 24 hours before check-in are
                      subject to a one-night charge.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Children & Extra Beds
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>Children of all ages are welcome</li>
                      <li>
                        Children under 12 stay free when using existing bedding
                      </li>
                      <li>Extra beds available for $50 per night</li>
                      <li>Cribs available upon request (free of charge)</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Guest Reviews</h2>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center bg-accent/10 px-3 py-1.5 rounded-md">
                    <Star className="h-5 w-5 fill-accent text-accent mr-1" />
                    <span className="font-semibold">{hotel.rating}</span>
                  </div>
                  <span className="text-muted-foreground">
                    Based on {hotel.reviews} reviews
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Sample reviews */}
                  <div className="border-b pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-semibold text-primary">JD</span>
                        </div>
                        <div>
                          <h4 className="font-medium">John Doe</h4>
                          <p className="text-xs text-muted-foreground">
                            May 15, 2023
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <Star className="h-4 w-4 fill-accent text-accent" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Amazing hotel with stunning ocean views. The staff was
                      incredibly helpful and the amenities were top-notch. Would
                      definitely stay here again!
                    </p>
                  </div>

                  <div className="border-b pb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="font-semibold text-primary">JS</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Jane Smith</h4>
                          <p className="text-xs text-muted-foreground">
                            April 28, 2023
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <Star className="h-4 w-4 fill-accent text-accent" />
                        <Star className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      Great location and beautiful property. The room was clean
                      and comfortable. The only downside was that the restaurant
                      was a bit pricey, but there are plenty of options nearby.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right column - Booking widget */}
          <div className="lg:col-span-1">
            <div className="bg-white border rounded-lg shadow-sm p-6 sticky top-24">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="text-blue-600 font-semibold text-lg">
                      Standard Room - Non Sea View
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <span>1 x Guest</span>
                    <span>|</span>
                    <span>1 x Room</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <span className="text-red-500 line-through text-sm">
                        ₹ 5850
                      </span>
                      <span className="text-3xl font-bold ml-2">₹ 3928</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      + ₹ 486 Taxes & fees
                    </div>
                    <div className="text-xs text-gray-500">
                      base price(Per Night)
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium flex items-center gap-2 mb-2">
                    <CalendarRange className="h-4 w-4 text-primary" />
                    Check-in / Check-out
                  </label>
                  <DateRangePicker
                    onChange={handleDateRangeChange}
                    initialDateRange={dateRange}
                    className="w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guests"
                    className="text-sm font-medium flex items-center gap-2 mb-2"
                  >
                    <Users className="h-4 w-4 text-primary" />
                    Guests
                  </label>
                  <select
                    id="guests"
                    value={guests}
                    onChange={handleGuestsChange}
                    className="w-full h-12 px-3 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <div className="text-green-500 rounded-full bg-green-100 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">Sewing Kit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-green-500 rounded-full bg-green-100 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">Parking facility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-green-500 rounded-full bg-green-100 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">Public Restroom</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-green-500 rounded-full bg-green-100 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-sm">Luggage Storage</span>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="text-blue-600 text-sm flex items-center">
                    <span className="mr-1">+</span> More Amenities
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Base rate</span>
                      <span>${hotel.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount</span>
                      <span className="text-green-600">
                        -${Math.round((hotel.price * hotel.discount) / 100)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taxes & fees</span>
                      <span>${Math.round(hotel.price * 0.12)}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Nights</span>
                      <span>5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rooms</span>
                      <span>1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guests</span>
                      <span>{guests}</span>
                    </div>
                  </div>

                  <Separator className="col-span-2 my-2" />
                  <div className="col-span-2 flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>
                      $
                      {Math.round(
                        hotel.price * (1 - hotel.discount / 100) * 5 +
                          hotel.price * 0.12 * 5,
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="w-1/2 border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    SELECT ROOMS
                  </Button>
                  <Button className="w-1/2 bg-orange-500 hover:bg-orange-600 text-white">
                    BOOK NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ViewDetails;
