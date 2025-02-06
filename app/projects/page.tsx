import { projectsData } from "@/data/projectData";
import Card from "@/components/Card";

export default function ProjectsPage() {
  return (
    <main>
      <h1 className="text-2xl md:text-5xl font-bold text-center my-20">My Projects</h1>
      <div className="flex flex-wrap justify-center">
        {projectsData.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            content={project.content}
            href={project.href}
            alt={project.alt}
          />
        ))}
      </div>
    </main>
  );
}