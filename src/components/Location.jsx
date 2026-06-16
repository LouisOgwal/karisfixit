// Location.jsx - Map updated to show Sidian Bank Building, name changed to KarisFixit (no Repairs)
function Location() {
  return (
    <>
      <section className="py-20 px-6 border-t border-border bg-background">
        <div className="max-w-7xl mx-auto text-center">

          <div className="flex justify-center mb-4">
            <svg 
              className="w-12 h-12 text-primary" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>

          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Visit Our Shop
          </h2>

          <p className="text-muted-foreground mb-6">
            📍 Kamae Lane, Sidian Bank Building, Shop A6, Nairobi, Kenya
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sidian+Bank+Building+Kamae+Lane+Nairobi+Kenya"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-primary text-primary-foreground font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition flex items-center gap-2 justify-center"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              Get Directions on Google Maps
            </a>

            <a
              href="https://wa.me/25416084812"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 border border-border text-foreground font-bold uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition flex items-center gap-2 justify-center"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.5 3.53 1.36 5L2.5 21.5l4.5-1.36C8.47 21.5 10.18 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.47 0-2.86-.4-4.06-1.09l-.29-.17-2.68.81.81-2.68-.17-.29C5.4 14.86 5 13.47 5 12c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7z"/>
                <path d="M16.5 13.5c-.45-.22-2.65-1.31-2.65-1.31-.28-.14-.55-.07-.75.14l-.68.68c-.17.17-.42.2-.62.09-.59-.28-2.13-1.06-2.82-1.75-.24-.24-.28-.61-.09-.85l.43-.43c.14-.14.23-.33.23-.54 0-.47-.3-1.52-.53-2.14-.08-.23-.28-.38-.53-.38h-.9c-.22 0-.42.09-.57.24-.33.33-.68.93-.68 1.51 0 .79.38 1.68.85 2.38 1.18 1.74 2.95 3.17 4.93 4.02.37.16.78.26 1.19.29.22.02.44-.02.64-.11l.51-.24c.25-.12.42-.36.42-.63 0-.2-.09-.39-.24-.52l-.75-.69z"/>
              </svg>
              📞 Call Technician
            </a>

          </div>

          {/* Address Details */}
          <div className="mt-8 p-6 bg-card/50 border border-border text-left max-w-md mx-auto rounded-lg">
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-primary mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <div>
                <h3 className="font-bold mb-2 text-primary">📍 Full Address:</h3>
                <p className="text-sm text-muted-foreground">
                  KarisFixit<br />
                  Kamae Lane<br />
                  Sidian Bank Building, Shop A6<br />
                  Nairobi, Kenya
                </p>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-border flex justify-between text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon-Sat: 8am - 6pm
              </span>
              <span>Sunday: Closed</span>
            </div>
          </div>

        </div>
      </section>

      {/* MAP - Updated to show Sidian Bank Building */}
      <div className="w-full h-[450px] border-t border-border">
        <iframe
          title="KarisFixit Location - Sidian Bank Building, Kamae Lane, Nairobi"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.097594500514!2d36.808822!3d-1.286389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f17287e6a8c5b%3A0x6b8f5c5e2f5e7d8c!2sSidian%20Bank%20Building%2C%20Kamae%20Lane%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske"
          className="w-full h-full"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
}

export default Location;