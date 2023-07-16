import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const LatestProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "api_not detected";
        const page = 1;
        const pageSize = 6; // Change this value to your desired page size (6 for six projects per page)
        const response = await fetch(
          `${API_URL}/portfolio/projects/?ordering=-created_at&page=${page}&page_size=${pageSize}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzNTg3Nzg4LCJpYXQiOjE2ODgyMzA5ODgsImp0aSI6IjI4N2QwNTNmYWIyYjQwOTQ4OGVkOTc5ZGU4OTJkOTE2IiwidXNlcl9pZCI6MX0.QtMmMX8pju2nulQkjlw4MoSWi0bTTZfxRqkVTqlCmrk",
            },
          }
        );
        const data = await response.json();
        setProjects(data.results || []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
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
      <div className="dark:bg-black bg-white h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-blue-500 pb-10">
          Latest Projects
        </h1>

        <div className="grid gap-6 container md:mx-auto sm:grid-cols-2 lg:grid-cols-3">
          {projects.length > 0 ? (
            projects.map((project) => (
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
                  {project.link && (
                    <Link href={project.link} passHref>
                      <p className="text-blue-500 hover:text-blue-600">
                        Visit Project
                      </p>
                    </Link>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p></p>
          )}
        </div>
      </div>
    );
  }
};

export default LatestProjects;
