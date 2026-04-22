export default function Home() {
  return (
    <div className="min-h-screen bg-grid relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-dark-900/50 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            ST<span className="text-accent">.</span>
          </div>
          <div className="flex gap-6 text-sm font-medium text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">

        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium w-fit mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-400 to-blue-500 animate-float inline-block">
              Sanyog Tripathi
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10">
            A passionate developer and student at <span className="text-white font-medium">VIT-AP University</span>.
            I build elegant solutions and turn complex problems into beautiful interfaces.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Contact Me</a>
          </div>
        </section>

        {/* About & Hobbies */}
        <section id="about" className="py-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">More About Me</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                I'm currently pursuing my education at VIT-AP University, where I'm honing my skills in software engineering and web development. I love building tools that make an impact.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="text-accent">✨</span> My Hobbies
              </h3>
              <div className="grid gap-4">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-2xl">📚</div>
                  <div>
                    <h4 className="font-medium text-white">Book Reading</h4>
                    <p className="text-sm text-gray-400">Exploring new worlds and perspectives</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-2xl">✈️</div>
                  <div>
                    <h4 className="font-medium text-white">Travel</h4>
                    <p className="text-sm text-gray-400">Discovering diverse cultures and places</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                  <div className="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center text-2xl">🏏</div>
                  <div>
                    <h4 className="font-medium text-white">Cricket</h4>
                    <p className="text-sm text-gray-400">Playing and enjoying the sport</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-400">Some of the recent tools and applications I've built.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="glass-card glass-card-hover overflow-hidden group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-gray-800 to-dark-900 border-b border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.2),transparent_50%)]" />
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-2xl border border-accent/20 z-10">
                  📧
                </div>
                <div className="z-10">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">Python / Next.js</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">EmailHunter Scraper</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  A professional email finding platform integrating Google Custom Search and Tomba API to discover and verify B2B email addresses with high confidence.
                </p>
                {/* <div className="flex items-center text-sm font-medium text-white gap-2">
                  View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div> */}
              </div>
            </div>

            {/* Project 2 */}
            <div className="glass-card glass-card-hover overflow-hidden group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-gray-800 to-dark-900 border-b border-white/5 p-6 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.2),transparent_50%)]" />
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center text-2xl border border-purple-500/20 z-10">
                  ✅
                </div>
                <div className="z-10">
                  <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider">Fullstack</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">To-do List App</h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  A robust task management application designed for productivity. Features task tracking, categorization, and seamless user experience.
                </p>
                {/* <div className="flex items-center text-sm font-medium text-white gap-2">
                  View Project <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 animate-slide-up" style={{ animationDelay: '0.7s' }}>
          <div className="glass-card p-12 text-center max-w-3xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">Let's work together</h2>
            <p className="text-gray-400 text-lg mb-8 relative z-10">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <a
              href="mailto:sanyogtripathi29@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-dark-900 font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] relative z-10"
            >
              ✉️ sanyogtripathi29@gmail.com
            </a>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-sm text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} Sanyog Tripathi. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
