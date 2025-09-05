import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Jaipur Travels - Discover Royal Rajasthan | Heritage Tours & Packages",
  description:
    "Explore Royal Rajasthan with Jaipur Travels. Premium tour packages, heritage hotels, and authentic cultural experiences. Book your royal journey today!",
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
