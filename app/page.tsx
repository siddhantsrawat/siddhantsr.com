import ThemeToggle from "./components/ThemeToggle";
import LiveClock from "./components/LiveClock";
import CursorTrail from "./components/CursorTrail";

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
          <div className="text-sm leading-relaxed">
            <p className="mb-5">
              building{" "}
              <a
                href="https://spectar.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                spectar.ai
              </a>
            </p>
            <div className="space-y-2">
              {/*<p>learning agent & cloud infrastructure</p>*/}
              <p>software i like → codex, claude, chrome</p>
              <p>things i like → gym, music, tech, stocks</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-7">
          <h2 className="text-md font-semibold mb-4 text-foreground/50">projects</h2>
          <div className="space-y-2 text-sm leading-relaxed">
            <p>
              <a
                className="font-medium"
                href="https://phasor.so"
                target="_blank"
                rel="noopener noreferrer"
              >
                Phasor
              </a>
              <span className="text-foreground/50"> → </span>
              speech to text
            </p>
            <p>
              <a
                className="font-medium"
                href="https://fetchanymedia.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fetch
              </a>
              <span className="text-foreground/50"> → </span>
              media downloader
            </p>
          </div>
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
