import React from 'react';

const ServicesPage = () => {
  return (
    <div className="flex items-center justify-center  min-h-screen">
      <div className="container mx-auto py-10 px-4 sm:px-6  lg:max-w-4xl xl:max-w-5xl">
        <h1 className="text-4xl font-semibold text-center mb-10">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="hover:bg-purple-400 transition-colors  hover:text-white dark:hover:bg-purple-400 dark:hover:text-black bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-semibold mb-2">Web Design</h1>
            <ul className="list-disc pl-6 ">
              <li><h1><h1>Responsive Web Design</h1></h1></li>
              <li><h1>Custom UI/UX Design</h1></li>
              <li><h1>Wireframing and Prototyping</h1></li>
              <li><h1>Mobile-Friendly Development</h1></li>
              <li><h1>Cross-Browser Compatibility</h1></li>
            </ul>
          </div>
          <div className="hover:bg-purple-400 transition-colors hover:text-white dark:hover:bg-purple-400 dark:hover:text-black bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-semibold mb-2">Web Development</h1>
            <ul className="list-disc pl-6 ">
              <li><h1>Frontend Development</h1></li>
              <li><h1>Backend Development</h1></li>
              <li><h1>Database Design</h1></li>
              <li><h1>API Integration</h1></li>
              <li><h1>E-commerce Solutions</h1></li>
            </ul>
          </div>
          <div className="hover:bg-purple-400 transition-colors hover:text-white dark:hover:bg-purple-400 dark:hover:text-black bg-gray-100  cursor-pointer dark:bg-gray-800 p-4 rounded-lg shadow-md">
            <h1 className="text-xl font-semibold mb-2">Mobile App Development</h1>
            <ul className="list-disc pl-6 ">
              <li><h1>iOS Development</h1></li>
              <li><h1>Android Development</h1></li>
              <li><h1>Cross-Platform Development</h1></li>
              <li><h1>UI/UX Design for Mobile Apps</h1></li>
              <li><h1>App Testing and Quality Assurance</h1></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
