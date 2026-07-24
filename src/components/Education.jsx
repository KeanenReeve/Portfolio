function Education() {
  return (
    <section id="education" className="bg-slate-800 text-white py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-cyan-400 mb-10">Education</h2>

        <div className="bg-slate-900 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold">
            Bachelor of Science in Information Technology
          </h3>

          <p className="text-cyan-400 mt-2">
            North-West University
          </p>

          <p className="text-gray-400 mt-2">
            Expected Graduation: 2026
          </p>

          <p className="mt-6 text-gray-300 leading-8">
            Throughout my degree I have gained knowledge in software
            development, networking, cybersecurity, databases,
            systems analysis and project management.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;