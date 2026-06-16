// Services.jsx - Blue hover effects
function Services() {
  const services = [
    {
      t: "Screen Replacement",
      d: "Fix cracked, broken, or unresponsive screens for all major phone brands including OLED and LCD panels.",
    },
    {
      t: "Battery Replacement",
      d: "Replace weak or fast-draining batteries to restore full day usage and improve performance.",
    },
    {
      t: "Water Damage Repair",
      d: "Cleaning and restoring phones affected by water, liquid spills, or moisture exposure.",
    },
    {
      t: "Charging Port Repair",
      d: "Fix loose, damaged, or non-working charging ports causing slow or no charging.",
    },
    {
      t: "Camera Repair",
      d: "Fix blurry, cracked, or non-working front and rear cameras for clear photos and videos.",
    },
    {
      t: "Software Fix & Reset",
      d: "Fix frozen phones, boot loops, crashes, and system errors without data loss where possible.",
    },
    {
      t: "Speaker & Sound Repair",
      d: "Fix low volume, no sound, or distorted audio from speakers or ear speakers.",
    },
    {
      t: "Microphone Repair",
      d: "Fix issues where people can’t hear you during calls or recordings.",
    },
    {
      t: "Back Glass Replacement",
      d: "Replace cracked or shattered back glass panels for a clean restored finish.",
    },
    {
      t: "Network & SIM Issues",
      d: "Fix no signal, SIM not detected, or weak network connection problems.",
    },
    {
      t: "Face ID / Fingerprint Repair",
      d: "Restore biometric unlocking systems that are not working or unresponsive.",
    },
    {
      t: "Overheating Fix",
      d: "Diagnose and fix phones that heat up quickly or shut down unexpectedly.",
    },
    {
      t: "Phone Won’t Turn On",
      d: "Diagnose dead phones caused by battery failure, motherboard faults, or power IC issues.",
    },
    {
      t: "Fast Battery Drain",
      d: "Fix abnormal battery consumption caused by background apps or hardware issues.",
    },
    {
      t: "Touch Screen Issues",
      d: "Repair unresponsive or ghost-touch screens affecting normal phone usage.",
    },
    {
      t: "Water Speaker Sound Distortion",
      d: "Fix muffled or crackling sound caused by moisture or dust in speaker grills.",
    },
    {
      t: "Storage Full / Slow Phone Fix",
      d: "Optimize storage and performance for lagging or slow devices without data loss where possible.",
    },
    {
      t: "Software Update Failure",
      d: "Fix phones stuck during updates or failing to install new system versions.",
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-end mb-20">
          <div className="max-w-xl">
            <span className="text-primary font-mono text-xs tracking-[0.3em] uppercase mb-4 block">
              
            </span>

            <h2
              className="text-4xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Advanced Phone Repair Services
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-[1px] bg-border border border-border">
          {services.map((s) => (
            <div
              key={s.t}
              className="bg-background p-10 hover:bg-card transition-colors group"
            >
              <h3
                className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {s.t}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.d}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;