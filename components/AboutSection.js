import { Shield, Heart, Users, Crown } from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trusted & Reliable",
      description:
        "Family owned and operated tour company since 2010, based in the Heritage Pink City of Jaipur.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Authentic Experiences",
      description:
        "Tours focused on historical and cultural treasures to give visitors an authentic Rajasthani experience.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description:
        "Well-experienced and qualified travel professionals delivering tailor-made tours and holidays.",
    },
    {
      icon: <Crown className="h-8 w-8" />,
      title: "Royal Heritage",
      description:
        "Explore the royal palaces, majestic forts, and vibrant culture of Royal Rajasthan.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 royal-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            About <span className="text-primary">Jaipur Travels</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rajasthan&apos;s trusted tour and travels operator. Book your travel
            packages to Rajasthan with us and enjoy your holidays with beautiful
            memories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="heritage-slide-up">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground mb-6">
              Your Gateway to Royal Rajasthan
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Jaipur Travels is a company full of trusted, well-experienced and
              qualified travel professionals that delivers tailor-made tours,
              holiday packages, and journeys among various superb destinations
              within Rajasthan.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We aim to offer the best valued services to our guests with tours
              focused on historical and cultural treasures to give visitors an
              authentic experience of the royal heritage that defines Rajasthan.
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">
                Our Mission
              </h4>
              <p className="text-muted-foreground">
                To showcase the magnificent heritage, vibrant culture, and royal
                splendor of Rajasthan through carefully curated experiences that
                create lasting memories for travelers from around the world.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 heritage-slide-up">
            {features.map((feature, index) => (
              <div key={index} className="card-heritage golden-glow">
                <div className="p-6 text-center">
                  <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-full w-fit mx-auto mb-4 text-white">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white heritage-slide-up">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Why Choose Jaipur Travels?
            </h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Experience the difference with our commitment to excellence and
              authentic Rajasthani hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-white/90">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-white/90">Travel Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">Best</div>
              <div className="text-white/90">Price Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
