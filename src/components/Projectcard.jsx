import Link from "next/link";
import React, { useState, useEffect } from "react";

const Projectcard = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        let API_URL = process.env.NEXT_PUBLIC_API_URL || "api_not detected ";
        setIsLoading(true);
        const response = await fetch(
          `${API_URL}/portfolio/projects/?ordering=-created_at/`
        );
        const data = await response.json();
        setProjects(data.results || []);
        setIsLoading(false);
      } catch (error) {}
    };
    fetchProjects();
  }, []);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loader"></span>
      </div>
    );
  } else {
    return (
      <div className="dark:bg-dark container md:mx-auto px-4 h-screen">
        <h1 className="text-4xl font-bold text-blue-500 text-center mt-20 mb-8">
          Projects
        </h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              className="relative rounded-lg shadow-lg overflow-hidden"
              key={project.id}
              onMouseEnter={() => handleCardHover(project.id)}
              onMouseLeave={handleCardLeave}
            >
              <img
                className={`object-cover h-72 w-full rounded-t-lg ${
                  hoveredCard === project.id ? "opacity-50" : "opacity-100"
                } transition-opacity duration-300 ease-in-out`}
                src={`https://res.cloudinary.com/dehpkgdw5/${project.image}`}
                alt={project.title}
              />
              <div
                className={`${
                  hoveredCard === project.id ? "bottom-0" : "-bottom-full"
                } transition-all duration-300 ease-in-out absolute backdrop-blur bg-opacity-75 p-6 w-full`}
              >
                <h2 className="text-xl dark:text-white font-semibold mb-4">
                  {project.title}
                </h2>
                <p className="dark:text-white">{project.description}</p>
                <Link
                  target="_blank"
                  href={project.link}
                  className="text-blue-500 hover:text-blue-600"
                >
                  Visit Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Projectcard;
