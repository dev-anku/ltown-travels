import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+91 7073304076", "24/7 Support Available"],
      action: "tel:+917073304076",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info@jaipurtravels.co.in", "Quick Response Guaranteed"],
      action: "mailto:info@jaipurtravels.co.in",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: ["Pink City, Jaipur", "Rajasthan, India"],
      action: "#",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: ["Mon - Sat: 9:00 AM - 8:00 PM", "Sun: 10:00 AM - 6:00 PM"],
      action: "#",
    },
  ];

  const quickLinks = [
    {
      name: "WhatsApp",
      href: "https://api.whatsapp.com/send?phone=917073304076",
      icon: <MessageCircle className="h-5 w-5" />,
    },
    {
      name: "Call Now",
      href: "tel:+917073304076",
      icon: <Phone className="h-5 w-5" />,
    },
    {
      name: "Email",
      href: "mailto:info@jaipurtravels.co.in",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 royal-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Plan Your <span className="text-primary">Royal Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to explore the royal heritage of Rajasthan? Get in touch with
            our travel experts for personalized itineraries and exclusive deals.
          </p>
        </div>

        {/* Contact Information */}
        <div className="heritage-slide-up">
          <div className="grid gap-6 mb-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="card-royal golden-glow">
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-primary to-secondary p-3 rounded-full text-white flex-shrink-0">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className={`text-muted-foreground ${idx === 0 ? "font-medium text-foreground" : "text-sm"}`}
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Buttons */}
          <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 text-white">
            <h3 className="text-xl font-heading font-semibold mb-4 text-center">
              Need Immediate Assistance?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg py-3 px-4 hover:bg-white/30 transition-all duration-200 text-sm font-medium"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20">
              <h4 className="font-semibold text-foreground mb-3">
                Why Choose Us?
              </h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-muted-foreground">Trusted</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">14+</div>
                  <div className="text-muted-foreground">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
