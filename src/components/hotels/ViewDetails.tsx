import React from "react";
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

  // In a real app, you would fetch the hotel data based on the ID
  // For this example, we'll use the mock data
  const hotel = hotelData;

  const handleDateRangeChange = (range: DateRange | undefined) => {
    setDateRange(range);
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGuests(parseInt(e.target.value));
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">{hotel.name}</h1>
            <div className="flex items-center mt-2">
              <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
              <span className="text-muted-foreground">{hotel.location}</span>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0 bg-accent/10 px-3 py-1.5 rounded-md">
            <Star className="h-5 w-5 fill-accent text-accent mr-1" />
            <span className="font-semibold">{hotel.rating}</span>
            <span className="text-muted-foreground ml-1">
              ({hotel.reviews} reviews)
            </span>
          </div>
        </div>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2 lg:col-span-2 row-span-2">
            <img
              src={hotel.images[0]}
              alt={hotel.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {hotel.images.slice(1, 4).map((image, index) => (
            <div key={index} className="">
              <img
                src={image}
                alt={`${hotel.name} ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Hotel details */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview">
              <TabsList className="mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="rooms">Rooms</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
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
              <h3 className="text-xl font-semibold mb-4">Book your stay</h3>

              <div className="space-y-4">
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

                <Separator className="my-4" />

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Base rate</span>
                    <span>${hotel.price} x 5 nights</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Discount</span>
                    <span className="text-green-600">
                      -${Math.round((hotel.price * hotel.discount) / 100) * 5}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & fees</span>
                    <span>${Math.round(hotel.price * 0.12) * 5}</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-semibold text-lg">
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

                <Button className="w-full bg-primary hover:bg-primary-dark text-lg py-6 h-auto">
                  Reserve Now
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  You won't be charged yet
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ViewDetails;
