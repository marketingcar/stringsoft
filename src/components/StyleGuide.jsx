import React from "react";

/** ----- TOKENS (hard-coded; can swap to CSS vars via getComputedStyle) ----- */
const COLORS = [
  { name: "dark-purple", value: "#2E186A" },
  { name: "brand-teal", value: "#19A4AF" },
  { name: "light-purple", value: "#968BB4" },
  { name: "deep-purple", value: "#5D21D1" },
  { name: "light-orange", value: "#FEBA91" },
  { name: "charcoal-black", value: "#1A1A1A" },
  { name: "pure-white", value: "#FFFFFF" }
  // removed bright-lemon
];

// Explicit Tailwind classes (no dynamic templates)
const TYPE_SCALE = [
  { cls: "text-xs", label: "text-xs" },
  { cls: "text-sm", label: "text-sm" },
  { cls: "text-base", label: "text-base" },
  { cls: "text-lg", label: "text-lg" },
  { cls: "text-xl", label: "text-xl" },
  { cls: "text-2xl", label: "text-2xl" }
];

const RADII = [
  { cls: "rounded-none", label: "rounded-none" },
  { cls: "rounded-sm", label: "rounded-sm" },
  { cls: "rounded", label: "rounded" }, // default
  { cls: "rounded-md", label: "rounded-md" },
  { cls: "rounded-lg", label: "rounded-lg" },
  { cls: "rounded-xl", label: "rounded-xl" },
  { cls: "rounded-2xl", label: "rounded-2xl" },
  { cls: "rounded-3xl", label: "rounded-3xl" },
  { cls: "rounded-full", label: "rounded-full" }
];

const SHADOWS = [
  { cls: "shadow-none", label: "shadow-none" },
  { cls: "shadow-sm", label: "shadow-sm" },
  { cls: "shadow", label: "shadow" }, // default
  { cls: "shadow-md", label: "shadow-md" },
  { cls: "shadow-lg", label: "shadow-lg" },
  { cls: "shadow-xl", label: "shadow-xl" },
  { cls: "shadow-2xl", label: "shadow-2xl" }
];

const SPACING = [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24];

export default function StyleGuide() {
  return (
    <div className="styleguide min-h-screen text-white pt-32 pb-20">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12">
          <h1 className="gradient-text">StringSoft Design System</h1>
          <p className="text-lg text-white/70">
            Typography, colors, and components reference
          </p>
        </header>

        {/* Typography */}
        <section className="mb-16">
          <h2>Typography</h2>
          <div className="sg-grid-2">
            <div className="sg-card">
              <h3>Font families</h3>
              <div className="space-y-4">
                <div>
                  <p className="sg-token">font-sans (Signika)</p>
                  <p className="font-sans text-xl">
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
                <div>
                  <p className="sg-token">font-heading (Metrophobic)</p>
                  <p className="font-heading text-xl">
                    The quick brown fox jumps over the lazy dog
                  </p>
                </div>
              </div>
            </div>

            <div className="sg-card">
              <h3>Type scale</h3>
              <div className="space-y-3">
                {TYPE_SCALE.map((t) => (
                  <div key={t.cls}>
                    <span className="sg-token">{t.label}</span>
                    <p className={t.cls}>Sample for {t.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-16">
          <h2>Brand colors</h2>
          <div className="sg-grid-4">
            {COLORS.map((c) => {
              const isWhite = c.name === "pure-white";
              return (
                <div
                  key={c.name}
                  className="sg-swatch"
                  style={{ backgroundColor: c.value }}
                >
                  <div>
                    <div
                      className="sg-token"
                      style={{ color: isWhite ? "#000" : undefined }}
                    >
                      {c.name}
                    </div>
                    <div
                      className="sg-token"
                      style={{ color: isWhite ? "#000" : undefined }}
                    >
                      {c.value}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-4 text-sm text-white/70">
            Swatches come from the <code className="font-mono">COLORS</code>{" "}
            array. Swap to CSS vars for live binding to <code>:root</code>.
          </p>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2>Spacing scale</h2>
          <div className="sg-card">
            <div className="space-y-3">
              {SPACING.map((size) => (
                <div key={size} className="flex items-center gap-4">
                  <div className="sg-token w-12">{size}</div>
                  <div
                    className="h-4"
                    style={{
                      width: `${size * 4}px`,
                      backgroundColor: "var(--brand-teal)"
                    }}
                  />
                  <div className="sg-token">
                    {size * 4}px / {size * 0.25}rem
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Radius and shadows */}
        <section className="mb-16">
          <h2>Radii and shadows</h2>
          <div className="sg-grid-2">
            <div className="sg-card">
              <h3>Border radius</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 p-6 ring-1 ring-white/10 rounded-none">
                  <div className="sg-token">rounded-none</div>
                </div>
                <div className="bg-white/5 p-6 ring-1 ring-white/10 rounded-sm">
                  <div className="sg-token">rounded-sm</div>
                </div>
                <div className="bg-white/5 p-6 ring-1 ring-white/10 rounded">
                  <div className="sg-token">rounded</div>
                </div>
                <div className="bg-white/5 p-6 ring-1 ring-white/10 rounded-md">
                  <div className="sg-token">rounded-md</div>
                </div>
                <div className="bg-white/5 p-6 ring-1 ring-white/10 rounded-lg">
                  <div className="sg-token">rounded-lg</div>
                </div>
                <div className="bg-white/5 p-6 ring-1 ring-white/10 rounded-xl">
                  <div className="sg-token">rounded-xl</div>
                </div>
                <div className="bg-white/5 p-6 ring-1 ring-white/10 rounded-2xl">
                  <div className="sg-token">rounded-2xl</div>
                </div>
                <div className="bg-white/5 p-6 ring-1 ring-white/10 rounded-3xl">
                  <div className="sg-token">rounded-3xl</div>
                </div>
                <div className="bg-white/5 p-6 ring-1 ring-white/10 rounded-full">
                  <div className="sg-token">rounded-full</div>
                </div>
              </div>
            </div>

            <div className="sg-card">
              <h3>Shadows</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/5 p-6 rounded-xl shadow-none ring-1 ring-white/10">
                  <div className="sg-token">shadow-none</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl shadow-sm ring-1 ring-white/10">
                  <div className="sg-token">shadow-sm</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl shadow ring-1 ring-white/10">
                  <div className="sg-token">shadow</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl shadow-md ring-1 ring-white/10">
                  <div className="sg-token">shadow-md</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl shadow-lg ring-1 ring-white/10">
                  <div className="sg-token">shadow-lg</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl shadow-xl ring-1 ring-white/10">
                  <div className="sg-token">shadow-xl</div>
                </div>
                <div className="bg-white/5 p-6 rounded-xl shadow-2xl ring-1 ring-white/10">
                  <div className="sg-token">shadow-2xl</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* UI elements */}
        <section className="mb-16">
          <h2>UI components</h2>
          <div className="sg-grid-3">
            <div className="sg-card space-y-4">
              <h3>Buttons</h3>
              <div className="flex flex-wrap gap-3">
                <button className="sg-btn sg-btn-primary">Primary</button>
                <button className="sg-btn sg-btn-ghost">Ghost</button>
                <button className="sg-btn gradient-button">Gradient</button>
              </div>

              {/* Rollover previews (simulated hover) */}
              <div className="mt-4 space-y-2">
                <div className="sg-token">Hover previews</div>
                <div className="flex flex-wrap gap-3">
                  <button
                    className="sg-btn sg-btn-primary"
                    style={{ backgroundPosition: "right center" }}
                  >
                    Primary :hover
                  </button>
                  <button
                    className="sg-btn sg-btn-ghost"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    Ghost :hover
                  </button>
                  <button
                    className="sg-btn gradient-button"
                    style={{ backgroundPosition: "right center" }}
                  >
                    Gradient :hover
                  </button>
                </div>
              </div>
            </div>

            <div className="sg-card space-y-4">
              <h3>Inputs</h3>
              <input className="sg-input" placeholder="Input field" />
              <select className="sg-input">
                <option>Option A</option>
                <option>Option B</option>
              </select>
              <div className="flex items-center gap-2 text-sm">
                <input
                  id="cb1"
                  type="checkbox"
                  className="size-4 rounded border-white/20 text-[var(--brand-teal)] focus:ring-[var(--brand-teal)] bg-transparent"
                />
                <label htmlFor="cb1">Checkbox</label>
              </div>
            </div>

            <div className="sg-card space-y-4">
              <h3>Badges</h3>
              <div className="flex flex-wrap gap-2">
                <span className="sg-badge bg-white/5 text-white/80 ring-white/15">
                  Neutral
                </span>
                <span className="sg-badge bg-[var(--brand-teal)]/15 text-[var(--brand-teal)] ring-[var(--brand-teal)]/30">
                  Teal
                </span>
                <span className="sg-badge bg-[var(--deep-purple)]/15 text-[var(--deep-purple)] ring-[var(--deep-purple)]/30">
                  Purple
                </span>
                <span className="sg-badge bg-[var(--light-orange)]/15 text-[var(--light-orange)] ring-[var(--light-orange)]/30">
                  Orange
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content examples */}
        <section className="mb-16">
          <h2>Content examples</h2>
          <div className="sg-grid-2">
            <article className="sg-card">
              <h3>Prose sample</h3>
              <p className="text-white/85">
                Long-form copy on your dark canvas. Combine with{" "}
                <code className="font-mono">@tailwindcss/typography</code> for
                opinionated defaults.
              </p>
              <ul className="list-disc pl-5 text-white/85 mt-4">
                <li>Lists and bullets</li>
                <li>
                  <a
                    className="underline text-[var(--brand-teal)] hover:text-[color:rgba(25,164,175,.8)]"
                    href="#"
                  >
                    Links with hover states
                  </a>
                </li>
              </ul>
            </article>

            <div className="sg-card">
              <h3>Card example</h3>
              <p className="text-sm text-white/70">
                Starter pattern for your components. Duplicate and extend.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <button className="sg-btn sg-btn-primary">Call to action</button>
                <button className="sg-btn sg-btn-ghost">Secondary</button>
              </div>
            </div>
          </div>
        </section>

        {/* Under the hood / how values are computed */}
        <section className="mb-16">
          <h2>Under the hood (what computes these values)</h2>
          <div className="sg-card overflow-x-auto">
            <pre className="text-xs whitespace-pre-wrap">
{`// index.css tokens (you already have)
:root {
  --dark-purple: #2E186A;
  --brand-teal: #19A4AF;
  --light-purple: #968BB4;
  --deep-purple: #5D21D1;
  --light-orange: #FEBA91;
  --charcoal-black: #1A1A1A;
  --pure-white: #FFFFFF;
}
body { font-family: 'Signika', sans-serif; background: var(--charcoal-black); color: var(--pure-white); }

/* Effects used here */
.gradient-text { background: linear-gradient(135deg, var(--brand-teal), var(--deep-purple), var(--light-orange));
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.glass-effect { background: rgba(255,255,255,.05); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,.1); }
.neon-glow { box-shadow: 0 0 20px rgba(25,164,175,.3), 0 0 40px rgba(93,33,209,.2); }

/* Helper classes added in @layer components (see earlier snippet)
.sg-btn { ... } .sg-btn-primary { gradient bg; transition; color } .sg-btn-primary:hover { background-position:right center }
.sg-btn-ghost { transparent bg; 1px ring }
.sg-input { dark field; focus ring } */

/* Spacing math used on this page (Tailwind scale):
size -> px = size * 4;  rem = size * 0.25
e.g., 4 -> 16px -> 1rem`}
            </pre>
          </div>
        </section>

        <footer className="mt-12 text-sm text-white/60 text-center"></footer>
      </div>
    </div>
  );
}
