// Navbar.jsx - With larger logo
import logo from "../assets/hero-logo.jpg";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Larger logo */}
          <img 
            src={logo} 
            alt="KarisFixit Logo" 
            className="h-12 w-auto" 
          />

          <span
            className="font-bold tracking-tight text-xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            KarisFixit
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors">
            [ Services ]
          </a>

          <a href="#pipeline" className="hover:text-primary transition-colors">
            [ Process ]
          </a>

          <a href="#contact" className="hover:text-primary transition-colors">
            [ Contact ]
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://www.tiktok.com/@karisfixit?_r=1&_t=ZS-972qG1TWjuW"
            target="_blank"
            rel="noreferrer"
            className="p-2 hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors"
            aria-label="TikTok"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
          </a>

          <a
            href="#contact"
            className="px-4 py-2 bg-primary text-primary-foreground font-bold text-xs uppercase tracking-tighter hover:bg-foreground hover:text-background transition-colors"
          >
            Book Repair
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;