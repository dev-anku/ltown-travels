import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default:
      "Jaipur Travels - Discover Royal Rajasthan | Heritage Tours & Packages",
    template: "%s | Jaipur Travels, Jaipur, Rajasthan",
  },
  alternates: {
    canonicals: "",
  },
  description:
    "Explore Royal Rajasthan with Jaipur Travels. Premium tour packages, heritage hotels, and authentic cultural experiences. Book your royal journey today!",
  keywords: [
    "l town travels",
    "tour in rajasthan",
    "tour in jaipur",
    "resort in jaipur",
    "holiday packages",
    "travel agency",
    "tours and travel",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
