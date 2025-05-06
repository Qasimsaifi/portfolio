const { Button } = require("./ui/button");

const ProjectsContent = () => (
  <div className="p-6  rounded-lg">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-700/30 rounded-lg overflow-hidden">
          <div className="h-48 bg-blue-500/20 flex items-center justify-center">
            <img src="/images/portfolio.png" alt="Portfolio" className="h-48" />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-300 mb-4">
              A personal portfolio built with Next.js and Tailwind CSS
              showcasing my projects and skills.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-blue-500/20 rounded text-xs">
                Next.js
              </span>
              <span className="px-2 py-1 bg-blue-500/20 rounded text-xs">
                React
              </span>
              <span className="px-2 py-1 bg-blue-500/20 rounded text-xs">
                Tailwind
              </span>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="text-xs px-3 py-1 h-auto border-gray-600 text-black"
                asChild
              >
                <a href="https://kasimsaifi.me" target="_blank">
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/30 rounded-lg overflow-hidden">
          <div className="h-48 bg-purple-500/20 flex items-center justify-center">
            <img src="/images/ezkit.png" alt="E-commerce" className="h-48" />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">EzkitLabs E-commerce</h3>
            <p className="text-gray-300 mb-4">
              Online electronics kit store built with full responsive and modern
              stack.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">
                Next.js
              </span>
              <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">
                React
              </span>
              <span className="px-2 py-1 bg-purple-500/20 rounded text-xs">
                Tailwind
              </span>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="text-xs px-3 py-1 h-auto border-gray-600 text-black"
                asChild
              >
                <a href="https://ezkitlabs.vercel.app" target="_blank">
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/30 rounded-lg overflow-hidden">
          <div className="h-48 bg-teal-500/20 flex items-center justify-center">
            <img src="/images/editor.png" alt="Editor" className="48" />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-bold mb-2">Web Code Editor</h3>
            <p className="text-gray-300 mb-4">
              A web-based HTML, CSS, and JavaScript live editor similar to
              CodePen.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-2 py-1 bg-teal-500/20 rounded text-xs">
                HTML
              </span>
              <span className="px-2 py-1 bg-teal-500/20 rounded text-xs">
                CSS
              </span>
              <span className="px-2 py-1 bg-teal-500/20 rounded text-xs">
                JavaScript
              </span>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="text-xs px-3 py-1 h-auto border-gray-600 text-black"
                asChild
              >
                <a href="https://editor-by-kasim.vercel.app" target="_blank">
                  Live Demo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsContent;
