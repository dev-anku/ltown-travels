import { MapPin, Hotel, Utensils, Car, Clock } from "lucide-react";
import Link from "next/link";

import packages from "@/app/packages/packages";

export default function Page() {
  const currentPackage = packages[3];

  const highlights = [
    {
      icon: <Clock className="md:h-10 md:w-10" />,
      label: "Duration",
      value: currentPackage.duration,
    },
    {
      icon: <Hotel className="md:h-10 md:w-10" />,
      label: "Hotels",
      value: "3-4-5 Star",
    },
    {
      icon: <Utensils className="md:h-10 md:w-10" />,
      label: "Meals",
      value: "Dinner, Breakfast",
    },
    {
      icon: <Car className="md:h-10 md:w-10" />,
      label: "Transport",
      value: "Included",
    },
  ];

  const itinerary = currentPackage.days;
  return (
    <div className="min-h-screen bg-background">
      <section className="relative mt-4 h-96 bg-gradient-to-r from-primary/90 to-secondary/90 flex items-center justify-center">
        <div
          className={`absolute inset-0 bg-cover bg-center`}
          style={{ backgroundImage: `url(${currentPackage.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            {currentPackage.title}
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {/* Tour Description */}
          <div className="card-royal p-10 space-y-4">
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground">
                About This Tour
              </h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {currentPackage.about}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-heading font-bold text-foreground">
                Destinations Covered
              </h2>
            </div>
            <div>
              <div className="flex items-center space-x-2 text-lg">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-foreground font-medium">
                  {currentPackage.destinations}
                </span>
              </div>
            </div>
          </div>

          {/* Tour Highlights */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="card-royal text-center flex items-center justify-center"
              >
                <div className="p-6">
                  <div className="flex justify-center mb-4 text-primary">
                    {highlight.icon}
                  </div>
                  <h3 className="font-semibold md:text-lg text-foreground mb-2">
                    {highlight.label}
                  </h3>
                  <p className="text-muted-foreground">{highlight.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Itinerary */}
        <div className="card-royal mb-12 p-10 space-y-6">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Detailed Itinerary
            </h2>
          </div>
          <div>
            <div className="space-y-6">
              {itinerary.map((day, index) => (
                <div
                  key={index}
                  className="border-l-4 rounded-sm border-primary pl-6 pb-6"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="px-4 py-1 rounded-full bg-primary text-primary-foreground">
                      Day {day.day}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {day.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {day.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
            Ready to Experience Royal Rajasthan?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://api.whatsapp.com/send?phone=917073304076">
              <button className="btn-royal text-lg px-8 py-3">
                Book This Tour
              </button>
            </Link>
            <Link href="/#packages">
              <button className="text-lg px-8 py-3 font-medium border border-border bg-gray-200/30 rounded-lg hover:bg-gray-200/80 transition-all duration-300">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
