import React from 'react';

const FeatureSkills = () => {
  return (
    <>
<div className="mt-8">
  <h3 className="text-3xl font-semibold text-purple-500 mb-6 mt-6">Featured Skills</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div className="hover:bg-purple-400 transition-colors hover:text-white dark:hover:bg-purple-400 dark:hover:text-black bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-2">Web Development</h4>
      <ul className="list-disc pl-6">
        <li>React</li>
        <li>NextJS</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Django</li>
        <li>Django REST Framework</li>
        <li>Python</li>
      </ul>
    </div>
    <div className="hover:bg-purple-400 transition-colors hover:text-white dark:hover:bg-purple-400 dark:hover:text-black bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-2">Frontend Development</h4>
      <ul className="list-disc pl-6 ">
        <li>React</li>
        <li>NextJS</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind CSS</li>
        <li>Responsive Design</li>

      </ul>
    </div>
    <div className="hover:bg-purple-400 transition-colors hover:text-white dark:hover:bg-purple-400 dark:hover:text-black bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
      <h4 className="text-xl font-semibold mb-2">Backend Development</h4>
      <ul className="list-disc pl-6">
        <li>NodeJS</li>
        <li>Django</li>
        <li>Django REST Framework</li>
        <li>Python</li>
      </ul>
    </div>
  </div>
</div>

    </>
  );
};

export default FeatureSkills;
