import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8 text-green-400">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-gray-700 rounded-lg shadow-md hover:bg-green-500 hover:text-black transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
