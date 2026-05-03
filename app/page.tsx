export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="text-sm font-bold tracking-wide text-slate-900">
            Issei Hasegawa
          </a>

          <div className="flex gap-6 text-sm text-slate-600">
            <a href="#about" className="transition hover:text-slate-900">
              About
            </a>
            <a href="#research" className="transition hover:text-slate-900">
              Research
            </a>
            <a href="#projects" className="transition hover:text-slate-900">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-slate-900">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-16">
        <div className="mb-8">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
            Portfolio
          </p>

          <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl">
            Issei Hasegawa
          </h1>

          <p className="mb-8 max-w-2xl text-xl leading-relaxed text-slate-600">
            Computer Science student interested in distributed systems,
            operating systems, and reliable backend infrastructure.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">About</h2>

          <p className="max-w-3xl text-lg leading-relaxed text-slate-600">
            I am an undergraduate student majoring in Computer Science at
            Allegheny College. My academic interests include distributed
            systems, operating systems, networking systems, and software
            reliability. I enjoy building systems and studying how real-world
            infrastructure remains dependable under failures.
          </p>
        </div>
      </section>

      <section id="research" className="border-t border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Research</h2>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-3 text-2xl font-semibold text-slate-900">
              Distributed Key-Value Store Research
            </h3>

            <p className="mb-4 text-slate-500">
              Undergraduate Researcher · Allegheny College
            </p>

            <p className="leading-relaxed text-slate-600">
              I am designing and implementing a distributed key-value store in
              C++ to study the trade-offs between failure detection and
              replication strategies. The system uses heartbeat-based failure
              detection with configurable intervals and timeouts, as well as
              synchronous and asynchronous replication modes.
            </p>
          </div>
        </div>
      </section>

      <section id="projects" className="border-t border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-bold text-slate-900">Projects</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Distributed Key-Value Store
              </h3>

              <p className="text-slate-600">
                A C++ research prototype for studying failure detection,
                replication, and system availability.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Patrol Robot
              </h3>

              <p className="text-slate-600">
                An Arduino-based robot that uses ultrasonic and PIR sensors for
                obstacle avoidance and motion detection.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="mb-3 text-xl font-semibold text-slate-900">
                Open Source Contributions
              </h3>

              <p className="text-slate-600">
                Documentation and contribution work across open-source projects
                using Git, GitHub, and pull request workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-slate-200 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Contact</h2>

          <p className="mb-6 max-w-2xl text-lg text-slate-600">
            I am interested in software engineering, backend systems,
            distributed systems, and research opportunities.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hasegawa01@allegheny.edu"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Email
            </a>

            <a
              href="https://github.com/IsseiHasegawa"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              LinkedIn
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-900 hover:text-slate-900"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
