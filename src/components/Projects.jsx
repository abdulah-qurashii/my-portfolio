import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-400">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-green-500/50 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="text-green-400 hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
