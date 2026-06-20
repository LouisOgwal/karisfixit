// App.jsx - Enhanced SEO with Helmet
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BrandTicker from "./components/BrandTicker";
import Services from "./components/Services";
import Pipeline from "./components/Pipeline";
import Booking from "./components/Booking";
import Location from "./components/Location";
import Footer from "./components/Footer";

import { Helmet } from "react-helmet-async";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.setProperty("--background", "hsl(240 10% 3.9%)");
      root.style.setProperty("--foreground", "hsl(0 0% 98%)");
      root.style.setProperty("--card", "hsl(240 8% 6%)");
      root.style.setProperty("--card-foreground", "hsl(0 0% 98%)");
      root.style.setProperty("--muted", "hsl(240 5% 15%)");
      root.style.setProperty("--muted-foreground", "hsl(240 5% 64.9%)");
      root.style.setProperty("--border", "hsl(240 5% 15%)");
    } else {
      root.classList.remove("dark");
      root.style.setProperty("--background", "hsl(0 0% 100%)");
      root.style.setProperty("--foreground", "hsl(240 10% 3.9%)");
      root.style.setProperty("--card", "hsl(0 0% 98%)");
      root.style.setProperty("--card-foreground", "hsl(240 10% 3.9%)");
      root.style.setProperty("--muted", "hsl(240 4.8% 95.9%)");
      root.style.setProperty("--muted-foreground", "hsl(240 3.8% 46.1%)");
      root.style.setProperty("--border", "hsl(240 5.9% 90%)");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>KarisFixit — Expert Phone Repair & Restoration in Nairobi</title>
        <meta name="description" content="Professional phone repair for iPhone, Samsung, Pixel and more. Fast, reliable repairs at Kamae Lane, Sidian Bank Building, Nairobi. Book your repair today!" />
        <meta name="keywords" content="phone repair, iPhone repair, Samsung repair, screen replacement, battery replacement, water damage repair, Nairobi phone repair, KarisFixit" />
        <link rel="canonical" href="https://karisfixit.com/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://karisfixit.com/" />
        <meta property="og:title" content="KarisFixit — Expert Phone Repair & Restoration in Nairobi" />
        <meta property="og:description" content="Professional phone repair for iPhone, Samsung, Pixel and more. Fast, reliable repairs in Nairobi." />
        <meta property="og:image" content="https://karisfixit.com/og-image.jpg" />
        <meta property="og:site_name" content="KarisFixit" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KarisFixit — Expert Phone Repair & Restoration in Nairobi" />
        <meta name="twitter:description" content="Professional phone repair for iPhone, Samsung, Pixel and more in Nairobi." />
        <meta name="twitter:image" content="https://karisfixit.com/og-image.jpg" />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="KarisFixit" />
        <meta name="revisit-after" content="7 days" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground font-display selection:bg-primary selection:text-primary-foreground">
        <Navbar />
        
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 hover:bg-primary/30 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        <Hero />
        <BrandTicker />
        <Services />
        <Pipeline />
        <Booking />
        <Location />
        <Footer />
      </div>
    </>
  );
}

export default App;