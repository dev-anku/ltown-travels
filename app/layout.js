import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

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
      <head>
        {/* <!-- Google Tag Manager --> */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P6MBZ9PF');`}
        </Script>
        {/* <!-- End Google Tag Manager --> */}
      </head>
      <body className="min-h-screen bg-background">
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P6MBZ9PF"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
