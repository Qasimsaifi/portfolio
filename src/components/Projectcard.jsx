import React, { useState, useEffect } from 'react';

const Projectcard = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          'https://devdox.up.railway.app/api/v1/portfolio/projects/?ordering=created_at'
        );
        const data = await response.json();
        setProjects(data || []);
        console.log(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching projects:', error);
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
      <div className="container mt-36 md:mx-auto px-4 flex h-screen ">
        <div className="grid rounded gap-1 sm:grid-cols-2 lg:grid-cols-3 dark:bg-black">
          {[...Array(6)].map((_, index) => (
            <span key={index} className="loader rounded text-4xl  font-bold text-blue-500 text-center mt-10 dark:bg-black"></span>
          ))}
        </div>
      </div>
    );
  }
  
  else {
    return (
      <div className="dark:bg-dark container md:mx-auto px-4 h-full">
        <h1 className="text-4xl font-bold text-blue-500 text-center mt-20 mb-8">Projects</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              className="relative rounded-lg shadow-lg overflow-hidden"
              key={project.id}
              onMouseEnter={() => handleCardHover(project.id)}
              onMouseLeave={handleCardLeave}
            >
              <img
                className="object-cover h-72 w-full rounded-t-lg"
                src={`https://res.cloudinary.com/dehpkgdw5/${project.image}`}
                alt={project.title}
              />
              <div
                className={`${
                  hoveredCard === project.id ? 'bottom-0' : '-bottom-full'
                } transition-all duration-300 ease-in-out absolute backdrop-blur bg-opacity-75 p-6 w-full`}
              >
                <h2 className="text-xl text-black font-semibold mb-4">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:text-blue-600">
                  Visit Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Projectcard;
