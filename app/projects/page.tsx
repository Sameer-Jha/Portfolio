import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";

const projects = [
  {
    name: "Project One",
    description: "Description for project one.",
    githubLink: "https://github.com/username/project-one",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Project Two",
    description: "Description for project two.",
    githubLink: "https://github.com/username/project-two",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Project Three",
    description: "Description for project three.",
    githubLink: "https://github.com/username/project-three",
    tags: ["Gatsby", "TypeScript", "Tailwind CSS"],
  },
];

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background grid-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-3xl text-center pb-5 text-2xl font-bold hero-gradient shadow-lg p-4">
              My Projects
            </h1>
            <ul>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-3">
                {projects.map((project, index) => (
                  <li key={index}>
                    <Card
                      key={index}
                      className="p-6 border-primary/20 bg-card/50 backdrop-blur-sm"
                    >
                      <h3 className="text-xl font-semibold mb-3">
                        {project.name}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-foreground hover:underline pb-4 block"
                      >
                        <Button size="sm" className="text-sm">
                          View on GitHub
                        </Button>
                      </a>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-secondary/20 text-secondary-foreground"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
