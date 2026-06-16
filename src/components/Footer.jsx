// Footer.jsx - Removed "Repairs" from KarisFixit
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <span
            className="font-bold text-xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            KarisFixit
          </span>
          <p className="text-[10px] font-mono text-muted-foreground mt-2">
            © 2026 All Rights Reserved.
          </p>
        </div>

        <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            X.com
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            LinkedIn
          </a>
          <a 
            href="https://www.tiktok.com/@karisfixit?_r=1&_t=ZS-972qG1TWjuW" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-primary transition-colors flex items-center gap-1"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
            </svg>
            TikTok
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;