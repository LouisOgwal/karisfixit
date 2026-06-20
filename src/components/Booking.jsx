// Booking.jsx - Updated phone number
function Booking() {
  return (
    <section
      id="contact"
      className="py-32 px-6 bg-card/30 border-t border-border"
    >
      <div className="max-w-3xl mx-auto text-center">

        <h2
          className="text-5xl font-bold mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Book Your Repair
        </h2>

        <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest mb-12">
          Estimated wait time:
          <span className="text-primary underline decoration-2 underline-offset-4">
            {" "}14 Minutes
          </span>
        </p>

        <form
          className="grid md:grid-cols-2 gap-6 text-left"
          onSubmit={(e) => {
            e.preventDefault();

            const name = e.target[0].value;
            const email = e.target[1].value;
            const issue = e.target[2].value;

            const technicianNumber = "254716084812"; // Updated phone number

            const message = `
📱 NEW REPAIR REQUEST

👤 Client: ${name}
📧 Contact: ${email}
🛠 Issue: ${issue}

📍 Shop: Kamae Lane, Sidian Bank Building, Shop A6, Nairobi
🧑‍🔧 Status: Pending Technician Review
            `;

            const whatsappURL = `https://wa.me/${technicianNumber}?text=${encodeURIComponent(
              message
            )}`;

            window.open(whatsappURL, "_blank");
          }}
        >
          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Client Name
            </label>

            <input
              required
              type="text"
              placeholder="John Doe"
              className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Contact Signal
            </label>

            <input
              required
              type="email"
              placeholder="john@signal.com"
              className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
            />
          </div>

          <div className="md:col-span-2 space-y-2">
            <label className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
              Device Signature & Issue
            </label>

            <textarea
              required
              rows={4}
              placeholder="Describe your phone issue..."
              className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-primary outline-none transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="md:col-span-2 py-4 bg-primary text-primary-foreground font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
          >
            Submit Service Request
          </button>
        </form>
      </div>
    </section>
  );
}

export default Booking;