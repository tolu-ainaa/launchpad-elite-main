import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { ChevronRight } from "lucide-react";
import phoneHero from "@/assets/phone-hero.jpg";
import phoneCamera from "@/assets/phone-camera.jpg";
import phoneChip from "@/assets/phone-chip.jpg";

function CTA() {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-base">
      <a href="#buy" className="rounded-full bg-[oklch(0.55_0.2_260)] px-6 py-2.5 font-medium text-white transition-colors hover:bg-[oklch(0.5_0.2_260)]">
        Buy
      </a>
      <a href="#learn" className="flex items-center gap-1 font-medium text-[oklch(0.55_0.2_260)] hover:underline">
        Learn more <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  );
}

export function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <SiteNav />

      {/* Promo banner */}
      <div className="bg-secondary/60 py-3 text-center text-xs text-muted-foreground">
        Get a free engraving and complimentary 2-day shipping. <a href="#" className="text-[oklch(0.55_0.2_260)] hover:underline">Shop →</a>
      </div>

      {/* Hero */}
      <section className="bg-background pt-12 pb-6 text-center">
        <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">Omen Phone</h1>
        <p className="mt-3 text-xl font-medium tracking-tight text-foreground md:text-2xl">Light, redefined.</p>
        <p className="mt-3 text-base text-muted-foreground">From $999 or $41.62/mo. for 24 mo.*</p>
        <CTA />
        <img
          src={phoneHero}
          alt="Omen Phone floating against a white background"
          width={1600}
          height={900}
          className="mx-auto mt-10 w-full max-w-4xl"
        />
      </section>

      {/* Dark feature: camera */}
      <section className="mt-2 bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-white/60">Pro Camera System</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Three lenses.<br />Infinite stories.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
            A 48MP main, 5x telephoto, and ultra-wide that captures the smallest details and the widest scenes — in any light.
          </p>
          <img
            src={phoneCamera}
            alt="Close-up of the Omen Phone triple camera system"
            width={1600}
            height={1200}
            loading="lazy"
            className="mx-auto mt-12 w-full max-w-3xl rounded-2xl"
          />
        </div>
      </section>

      {/* Chip section */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 py-24 md:grid-cols-2 md:items-center">
          <img
            src={phoneChip}
            alt="The L3 chip on a glowing circuit board"
            width={1600}
            height={1200}
            loading="lazy"
            className="w-full rounded-2xl"
          />
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground">L3 Chip</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              The fastest chip<br />in a phone. Period.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              A 3-nanometer architecture delivers desktop-class performance with all-day battery life. Console-grade graphics, on-device AI, and silent thermals.
            </p>
            <a href="#" className="mt-6 inline-flex items-center gap-1 font-medium text-[oklch(0.55_0.2_260)] hover:underline">
              See the benchmarks <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Specs grid */}
      <section className="bg-secondary/60">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="mb-12 text-center text-3xl font-semibold tracking-tight md:text-4xl">
            Engineered to the last micron.
          </h2>
          <div className="grid gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-3">
            {[
              { k: "6.7\"", v: "Super Retina XDR display with ProMotion" },
              { k: "Titanium", v: "Aerospace-grade frame, lightest ever" },
              { k: "29 hrs", v: "Video playback on a single charge" },
              { k: "IP68", v: "Water resistant to 6 meters for 30 min" },
              { k: "USB-C", v: "Pro speeds up to 10Gb/s" },
              { k: "5G", v: "Worldwide bands, satellite messaging" },
            ].map((s) => (
              <div key={s.k} className="bg-background p-8">
                <div className="text-4xl font-semibold tracking-tight">{s.k}</div>
                <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Buy section */}
      <section id="buy" className="bg-background py-24 text-center">
        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Ready when you are.</h2>
        <p className="mt-4 text-lg text-muted-foreground">Build yours in under a minute. Free delivery.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="#" className="rounded-full bg-foreground px-7 py-3 font-medium text-background transition-opacity hover:opacity-90">
            Buy Omen Phone
          </a>
          <a href="#" className="rounded-full border border-border bg-background px-7 py-3 font-medium text-foreground hover:bg-secondary">
            Compare models
          </a>
        </div>
        <p className="mx-auto mt-6 max-w-md text-xs text-muted-foreground">
          *Monthly pricing is an example. Subject to credit approval and a 24-month installment loan.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
