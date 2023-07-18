import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

const ProjectCard = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_API_URL || "api_not detected";
        const page = router.query.page || 1;
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
        setCurrentPage(parseInt(page));
        setTotalPages(Math.ceil(data.count / pageSize));
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [router.query.page]);

  const handleCardHover = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  const handlePageChange = (page) => {
    router.push({
      pathname: router.pathname,
      query: { page, pageSize: 6 }, // Change the pageSize value here as well
    });
  };

  const renderPagination = () => {
    if (totalPages > 1) {
      const pages = [];
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={`px-2 py-1 rounded-md mx-1 focus:outline-none ${
              currentPage === i ? "bg-purple-600 " : "bg-purple-400 "
            } transition-colors duration-300 hover:bg-blue-500 hover:text-black`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (isLoading) {
        return (
          <div className="flex items-center justify-center h-screen">
            <span className="loader"></span>
          </div>
        );
      } else {
      return (
        <div className="flex justify-center mt-4 text-black dark:text-white">
          <button
            className={`px-2 py-1 rounded-md mx-1 focus:outline-none ${
              currentPage === 1
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-400"
            } transition-colors duration-300 hover:bg-gray-300 ${
              currentPage === 1 ? "" : "hover:text-gray-900"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {pages}
          <button
            className={`px-2 py-1 rounded-md mx-1 focus:outline-none ${
              currentPage === totalPages
                ? "bg-purple-400 cursor-not-allowed"
                : "bg-purple-400"
            } transition-colors duration-300 hover:bg-gray-300 ${
              currentPage === totalPages ? "" : "hover:text-gray-900"
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      );}
    }
    return null;
  };

  if (isLoading) {
   return(
    <div className="flex items-center justify-center h-screen">
    <span className="loader"></span>
  </div>
   )
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
              <Image
                className={`object-cover h-72 w-full rounded-t-lg ${
                  hoveredCard === project.id ? "opacity-50" : "opacity-100"
                } transition-opacity duration-300 ease-in-out`}
                src={`https://res.cloudinary.com/dehpkgdw5/${project.image}`}
                alt={project.title}
                height={1000}
                width={1000}
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
          ))}
        </div>

        {renderPagination()}
      </div>
    );
  }
};

export default ProjectCard;
