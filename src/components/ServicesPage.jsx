import React from 'react';

const ServicesPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="container mx-auto py-10 px-4 sm:px-6 lg:max-w-4xl xl:max-w-5xl">
        <h1 className="text-4xl font-semibold text-center mb-10">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Web Design</h4>
            <ul className="list-disc pl-6 text-gray-800 dark:text-white">
              <li>Responsive Web Design</li>
              <li>Custom UI/UX Design</li>
              <li>Wireframing and Prototyping</li>
              <li>Mobile-Friendly Development</li>
              <li>Cross-Browser Compatibility</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Web Development</h4>
            <ul className="list-disc pl-6 text-gray-800 dark:text-white">
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>Database Design</li>
              <li>API Integration</li>
              <li>E-commerce Solutions</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-2">Mobile App Development</h4>
            <ul className="list-disc pl-6 text-gray-800 dark:text-white">
              <li>iOS Development</li>
              <li>Android Development</li>
              <li>Cross-Platform Development</li>
              <li>UI/UX Design for Mobile Apps</li>
              <li>App Testing and Quality Assurance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
