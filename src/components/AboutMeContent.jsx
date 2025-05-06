const { Avatar, AvatarImage, AvatarFallback } = require("./ui/avatar");

const AboutMeContent = () => (
  <div className="p-6 rounded-lg">
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 bg-blue-500/20 rounded-full flex items-center justify-center">
          <Avatar className={"w-48 h-48"}>
            <AvatarImage src="/me.jpg" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-2">Kasim Saifi</h2>
          <p className="text-xl text-gray-300">
            Fullstack Developer, Founder & Tech Leader
          </p>
          <div className="flex gap-3 mt-4 flex-wrap">
            <div className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
              Next.js
            </div>
            <div className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
              React.js
            </div>
            <div className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
              Node.js
            </div>
            <div className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
              Svelte
            </div>
            <div className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
              Express
            </div>
            <div className="px-3 py-1 bg-blue-500/20 rounded-full text-sm">
              Django
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <section>
          <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
            About Me
          </h3>
          <p className="mb-4">
            I’m a fullstack developer. I specialize in building scalable
            applications with modern technologies across both frontend and
            backend.
          </p>
          <p className="mb-4">
            With hands-on experience in React, Next.js, Node, Svelte, Django,
            React Native, and Flutter, I’m passionate about building products
            that solve real-world problems and empower developers and creatives.
          </p>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
            Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h4 className="font-bold mb-2">Frontend</h4>
              <p>
                React.js, Next.js, Svelte, Tailwind CSS, Flutter, React Native
              </p>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h4 className="font-bold mb-2">Backend</h4>
              <p>Node.js, Express, Django, Firebase, MongoDB, SQL</p>
            </div>
            <div className="p-4 bg-gray-700/50 rounded-lg">
              <h4 className="font-bold mb-2">Tools & Workflow</h4>
              <p>Git, GitHub, Figma, Postman, VS Code, REST APIs, JWT</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-bold mb-4 border-b border-gray-700 pb-2">
            Experience
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-bold text-lg">Freelance Developer</h4>
                <span className="text-sm text-gray-400">2021 - Present</span>
              </div>
              <p>
                Delivered fullstack solutions for various clients including
                startups and agencies. Projects include ecommerce sites, admin
                dashboards, educational platforms, and IoT apps.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);
export default AboutMeContent;
