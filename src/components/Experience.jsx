function Experience() {
  return (
    <section id="experience" className="bg-slate-900 text-white py-24 px-8">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 mb-10">
          Experience
        </h2>

        <div className="space-y-8">

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">
              Networking Intern
            </h3>

            <p className="text-cyan-400">
              TT Connect ISP
            </p>

            <p className="mt-4 text-gray-300">
              Assisted with networking infrastructure,
              troubleshooting connectivity issues,
              customer technical support and general ISP operations.
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h3 className="text-2xl font-semibold">
              Project Coordinator
            </h3>

            <p className="text-cyan-400">
              Masinya Building Works
            </p>

            <p className="mt-4 text-gray-300">
              Coordinated construction projects,
              managed teams,
              assisted with administration and insurance documentation,
              and ensured projects remained on schedule.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;