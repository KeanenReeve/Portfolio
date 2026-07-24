function Projects() {
  return (
    <section id="projects" className="bg-slate-800 text-white py-24 px-8">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-slate-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              Prison Management System
            </h3>

            <p className="mt-4 text-gray-300">
              Desktop application developed using
              C#, Windows Forms and SQL Server.
            </p>

            <p className="mt-4 text-cyan-400">
              C# • SQL • Windows Forms
            </p>

            <a
              href="https://github.com/KeanenReeve"
              target="_blank"
              className="inline-block mt-6 text-cyan-400"
            >
              View on GitHub →
            </a>
          </div>

          <div className="bg-slate-900 rounded-xl p-8">
            <h3 className="text-2xl font-semibold">
              Cisco Enterprise Network
            </h3>

            <p className="mt-4 text-gray-300">
              Designed and implemented a business
              network using Cisco Packet Tracer.
            </p>

            <p className="mt-4 text-cyan-400">
              Cisco • Networking • VLANs
            </p>

            <a
              href="https://github.com/KeanenReeve"
              target="_blank"
              className="inline-block mt-6 text-cyan-400"
            >
              View on GitHub →
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;