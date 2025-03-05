import React from "react";
import { Button } from "@/components/ui/button";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

const HeroBanner = ({
  title = "Discover Your Perfect Stay",
  subtitle = "Find and book accommodations worldwide with our easy-to-use platform",
  imageUrl = "/hero-serko.png?w=1920&q=80",
  ctaText = "Explore Now",
  onCtaClick,
}: HeroBannerProps) => {
  return (
    <div className="relative w-full h-[280px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={imageUrl}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4 md:px-6">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 leading-tight">
            {title}
          </h1>
          <p className="text-sm md:text-base text-white/90 mb-4 max-w-xl">
            {subtitle}
          </p>
          <Button
            onClick={onCtaClick}
            size="lg"
            className="bg-white text-blue-900 hover:bg-white/90 text-base px-6 py-2 h-auto font-semibold"
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
