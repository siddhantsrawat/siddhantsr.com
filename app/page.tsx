import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="mx-auto max-w-xl px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="mb-4">
          <h1 className="text-xl font-semibold mb-1">Siddhant Rawat</h1>
        </header>

        {/* Social Links */}
        <nav className="mb-10 flex items-center gap-2 text-sm">
          <a
            href="https://instagram.com/siddhantsr"
            target="_blank"
            rel="noopener noreferrer"
          >
            instagram
          </a>
          <span className="opacity-50">/</span>
          <a
            href="https://x.com/siddhantsrx"
            target="_blank"
            rel="noopener noreferrer"
          >
            x
          </a>
          <span className="opacity-50">/</span>
          <a
            href="https://github.com/siddhantsrawat"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
        </nav>

        {/* About Section */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold mb-4 opacity-50">about</h2>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Hey! I&apos;m Siddhant, a developer passionate about building things
              that make a difference. I love working on projects that solve real
              problems and help people in their daily lives.
            </p>
            <p>
              Outside of work, I enjoy going to the gym, exploring new technologies
              and sharing what I learn with others.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold mb-4 opacity-50">projects</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Fetch</span>
                <span className="opacity-50">→</span>
                <a
                  href="https://fetchanymedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fetchanymedia.com
                </a>
              </div>
              <p className="text-sm mt-2 leading-relaxed">
                Fetch is a privacy-first native macOS app that helps you save media
                from the internet with ease.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-current/10 flex items-center justify-between text-sm">
          <span className="opacity-50">© {new Date().getFullYear()} Siddhant Rawat</span>
          <ThemeToggle />
        </footer>
      </main>
    </div>
  );
}
