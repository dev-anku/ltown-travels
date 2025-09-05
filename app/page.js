"use client";

import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import { MapPin, Calendar, Hotel, Utensils, Camera, Car } from "lucide-react";
import Link from "next/link";

import packages from "@/app/packages/packages";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: `url(/hawa-mahal.jpeg)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute inset-0 royal-pattern opacity-20" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto royal-fade-in">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Discover
            <span className="block bg-gradient-to-r from-secondary to-secondary-light bg-clip-text text-transparent">
              Royal Rajasthan
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-normal">
            Experience the majestic heritage, vibrant culture, and royal
            splendor of Rajasthan with our carefully crafted tour packages and
            authentic cultural experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="#packages">
              <button className="btn-golden">Explore Packages</button>
            </Link>
            <Link href="/contact">
              <button className="px-6 py-2 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20">
                Plan My Trip
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 royal-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Our Best{" "}
            <span className="text-primary">Rajasthan Tour Packages</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We provide the best tour packages at an affordable price. Book your
            perfect tour itinerary and explore all the exciting tourist cities
            in Rajasthan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={pkg.title}
              className={`card-royal golden-glow heritage-slide-up relative overflow-hidden group`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{pkg.destinations}</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-heading font-semibold text-foreground line-clamp-2">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                <div className="pt-0">
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Hotel className="h-4 w-4" />
                      <span>Luxury Hotels</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Utensils className="h-4 w-4" />
                      <span>All Meals</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Camera className="h-4 w-4" />
                      <span>Sightseeing</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Car className="h-4 w-4" />
                      <span>Private Transfer</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link
                      className="block"
                      href="https://api.whatsapp.com/send?phone=917073304076"
                    >
                      <button className="btn-royal w-full">Book Now</button>
                    </Link>
                    <Link className="block" href={pkg.link}>
                      <button className="w-full px-6 font-medium py-2 border border-border bg-gray-200/30 rounded-lg hover:bg-gray-200/80 transition-all duration-300">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 heritage-slide-up">
          <p className="text-lg text-muted-foreground mb-6">
            Can&apos;t find the perfect package? Let us create a custom
            itinerary just for you!
          </p>
          <Link href="/contact">
            <button className="btn-golden text-lg px-8 py-3">
              Customize Your Tour
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <ContactSection />
    </>
  );
}
