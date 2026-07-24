import keanenImage from "../assets/keanen.jpg";
function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-8">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <p className="text-cyan-400 text-lg font-semibold">
            Hello, I'm
          </p>

          <h1 className="text-6xl font-bold mt-2">
            Keanen Reeve
          </h1>

          <h2 className="text-3xl text-gray-300 mt-4">
            BSc Information Technology Student
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            I'm a final-year Information Technology student at North-West
            University with a passion for software development, networking,
            cybersecurity and building practical solutions to real-world
            problems.
          </p>

          <div className="flex gap-4 mt-10">

            <a
              href="/Keanen-Reeve-CV.pdf"
              target="_blank"
              className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
            >
              Download CV
            </a>

            <a
              href="https://github.com/KeanenReeve"
              target="_blank"
              className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/keanen-reeve-bb620922a/"
              target="_blank"
              className="border border-cyan-400 px-6 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition"
            >
              LinkedIn
            </a>

          </div>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <img
  src={keanenImage}
  alt="Keanen Reeve"
  className="w-96 rounded-3xl shadow-2xl"
/>

        </div>

      </div>

    </section>
  );
}

export default Hero;