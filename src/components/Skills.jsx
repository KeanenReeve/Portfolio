function Skills() {
  const skillCategories = [
    {
      title: "Programming",
      icon: "💻",
      skills: ["Java", "Python", "C#", "C++"],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["SQL", "Database Design"],
    },
    {
      title: "Networking",
      icon: "🌐",
      skills: ["Cisco Packet Tracer", "Network Design"],
    },
    {
      title: "Cybersecurity",
      icon: "🔐",
      skills: ["Security Fundamentals", "Cryptography"],
    },
    {
      title: "Tools",
      icon: "⚙️",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: ["Leadership", "Communication", "Problem Solving"],
    },
  ];

  return (
    <section id="skills" className="bg-slate-900 text-white py-24 px-8">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-800 rounded-xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl mb-4">
                {category.icon} {category.title}
              </h3>

              <ul className="space-y-2 text-gray-300">
                {category.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Skills;