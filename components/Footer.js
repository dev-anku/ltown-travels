import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Jaipur Travels
            </h3>
            <p className="text-background/80 leading-relaxed">
              Your trusted partner for exploring the royal heritage and vibrant
              culture of Rajasthan.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#packages"
                  className="hover:text-secondary transition-colors"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Popular Destinations</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Jaipur
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Udaipur
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Jaisalmer
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-secondary transition-colors">
                  Jodhpur
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-background/80">
              <p>Phone: +91 7073304076</p>
              <p>Email: info@jaipurtravels.co.in</p>
              <p>Location: Pink City, Jaipur, Rajasthan</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/80">
          <p>&copy; 2025 Jaipur Travels. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
