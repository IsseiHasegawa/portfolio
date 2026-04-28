export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-bold tracking-wide text-white">
            Issei Hasegawa
          </a>

          <div className="flex gap-6 text-sm text-slate-300">
            <a href="#about" className="transition hover:text-sky-400">
              About
            </a>
            <a href="#research" className="transition hover:text-sky-400">
              Research
            </a>
            <a href="#projects" className="transition hover:text-sky-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-sky-400">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <div className="mb-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-sky-400">
            Portfolio
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Issei Hasegawa
          </h1>

          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-300">
            Computer Science student interested in distributed systems,
            operating systems, and reliable backend infrastructure.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-white">About</h2>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            I am an undergraduate student majoring in Computer Science at
            Allegheny College. My academic interests include distributed
            systems, operating systems, networking systems, and software
            reliability. I enjoy building systems and studying how real-world
            infrastructure remains dependable under failures.
          </p>
        </div>
      </section>

      <section id="research" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-white">Research</h2>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="mb-3 text-2xl font-semibold text-white">
              Distributed Key-Value Store Research
            </h3>

            <p className="mb-4 text-slate-400">
              Undergraduate Researcher · Allegheny College
            </p>

            <p className="leading-relaxed text-slate-300">
              I am designing and implementing a distributed key-value store in
              C++ to study the trade-offs between failure detection and
              replication strategies. The system uses heartbeat-based failure
              detection with configurable intervals and timeouts, as well as
              synchronous and asynchronous replication modes.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold text-white">Projects</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">
                Distributed Key-Value Store
              </h3>

              <p className="text-slate-300">
                A C++ research prototype for studying failure detection,
                replication, and system availability.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">
                Patrol Robot
              </h3>

              <p className="text-slate-300">
                An Arduino-based robot that uses ultrasonic and PIR sensors for
                obstacle avoidance and motion detection.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
              <h3 className="mb-3 text-xl font-semibold text-white">
                Open Source Contributions
              </h3>

              <p className="text-slate-300">
                Documentation and contribution work across open-source projects
                using Git, GitHub, and pull request workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-800 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-white">Contact</h2>

          <p className="mb-6 max-w-2xl text-lg text-slate-300">
            I am interested in software engineering, backend systems,
            distributed systems, and research opportunities.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hasegawa01@allegheny.edu"
              className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Email
            </a>

            <a
              href="https://github.com/IsseiHasegawa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-sky-400 hover:text-sky-400"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}