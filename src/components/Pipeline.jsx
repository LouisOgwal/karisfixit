// Pipeline.jsx - Image expanded to match Hero.jsx size
import pipelinePhones from "../assets/pipeline-phones.jpg";

function Pipeline() {
  return (
    <section id="pipeline" className="py-32 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-2 gap-20 items-center">
          {/* Image now matches Hero.jsx dimensions - aspect-[4/5] */}
          <img
            src={pipelinePhones}
            alt="Smartphones lined up on a technical workspace"
            className="w-full aspect-[4/5] object-cover bg-card border border-border"
            style={{ objectPosition: "center center" }}
          />

          <div>
            <h2
              className="text-4xl font-bold mb-12"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Our Repair Process
            </h2>

            <div className="space-y-12">
              {[
                {
                  n: "01",
                  t: "Intake Diagnostic",
                  d: "Submit your model and symptoms. Our system generates a preliminary repair manifest.",
                },
                {
                  n: "02",
                  t: "Secure Extraction",
                  d: "Ship or drop-off. Devices are handled in ESD-safe environments by certified technicians.",
                },
                {
                  n: "03",
                  t: "Quality Verification",
                  d: "A 32-point hardware stress test ensures your device meets factory standards.",
                },
              ].map((s) => (
                <div key={s.n} className="flex gap-6">
                  <span className="text-4xl font-black text-border">
                    {s.n}
                  </span>

                  <div>
                    <h3
                      className="font-semibold mb-2 text-xl"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {s.t}
                    </h3>

                    <p className="text-muted-foreground text-sm">
                      {s.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pipeline;