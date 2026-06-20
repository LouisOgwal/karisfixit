// Hero.jsx - SEO Friendly with larger logo
import heroCircuit from "../assets/hero-circuit.jpg";
import logo from "../assets/hero-logo.jpg";

function Hero() {
  return (
    <section className="relative pt-20 pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">

          {/* Logo above the heading */}
          <img 
            src={logo} 
            alt="KarisFixit Logo - Expert Phone Repair in Nairobi" 
            className="h-20 w-auto mb-6" 
          />

          <h1
            className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Expert Phone
            <br />
            <span className="text-primary font-light">
              Repair & Care
            </span>
          </h1>

          <p className="max-w-md text-muted-foreground text-lg mb-10 leading-relaxed">
            Precision diagnostic and component-level repair for
            high-performance mobile devices.
          </p>

          <div className="bg-muted/40 p-6 border border-border flex-1 min-w-[280px]">
            <span className="block text-[10px] font-mono text-primary mb-4 uppercase tracking-widest">
              Instant Quote
            </span>

            <div className="flex gap-2">
              <select 
                className="flex-1 bg-background border border-border px-3 py-2 text-sm focus:border-primary outline-none"
                aria-label="Select Device Brand"
              >
                <option>Select Device Brand</option>
                <option>Apple iPhone</option>
                <option>Samsung Galaxy</option>
                <option>Google Pixel</option>
                <option>OnePlus</option>
              </select>

              <a
                href="#contact"
                className="px-6 py-2 bg-foreground text-background font-bold uppercase text-xs flex items-center"
                aria-label="Get a quote"
              >
                Next
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <img
            src={heroCircuit}
            alt="Professional phone repair technician working on a smartphone"
            className="w-full aspect-[4/5] object-cover bg-card border border-border transition-all duration-700"
            style={{ objectPosition: "center 30%" }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;