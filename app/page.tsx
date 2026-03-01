import ThemeToggle from "./components/ThemeToggle";
import LiveClock from "./components/LiveClock";
import CursorTrail from "./components/CursorTrail";
import Chart from "./components/Chart";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <CursorTrail />
      <main className="mx-auto max-w-xl px-6 py-12 sm:py-16">
        {/* Header */}
        <header className="mb-4">
          <h1 className="text-xl font-semibold mb-1">Siddhant Rawat</h1>
        </header>

        {/* Social Links */}
        <nav className="mb-7 flex items-center gap-2 text-sm">
          <a
            href="https://instagram.com/siddhantsr"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
          <span className="text-foreground/50">/</span>
          <a
            href="https://x.com/siddhantsrx"
            target="_blank"
            rel="noopener noreferrer"
          >
            x
          </a>
          <span className="text-foreground/50">/</span>
          <a
            href="https://github.com/siddhantsrawat"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </nav>

        {/* About Section */}
        <section className="mb-7">
          <h2 className="text-md font-semibold mb-4 text-foreground/50">about</h2>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>
              founder{" "}
              <a
                href="https://phasor.so"
                target="_blank"
                rel="noopener noreferrer"
              >
                phasor.so
              </a>
            </p>
            <p>software i like → codex, claude, chrome</p>
            <p>things i like → gym, music, tech, stocks</p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-7">
          <h2 className="text-md font-semibold mb-4 text-foreground/50">projects</h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <div className="flex items-center gap-2">
              <span className="font-medium">Fetch</span>
              <span className="text-foreground/50">→</span>
              <a
                href="https://fetchanymedia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                fetchanymedia.com
              </a>
            </div>
          </div>
        </section>

        {/* Chart Section */}
        <section className="mb-7">
          <h2 className="text-md font-semibold mb-4 text-foreground/50">portfolio</h2>
          <Chart />
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-current/10 flex items-center justify-between text-sm">
          <LiveClock />
          <ThemeToggle />
        </footer>
      </main>
    </div>
  );
}
