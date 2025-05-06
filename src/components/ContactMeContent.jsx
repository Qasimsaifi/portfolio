const { Layout, Github, Twitter, Mail } = require("lucide-react");
const { Button } = require("./ui/button");

const ContactMeContent = () => (
  <div className="p-6  rounded-lg">
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h3 className="text-xl font-bold mb-4">Contact Information</h3>

          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-700/30 rounded-lg">
              <div className="bg-green-500/20 p-3 rounded-full mr-4">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-medium">kasimthecoder@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-700/30 rounded-lg">
              <div className="bg-blue-500/20 p-3 rounded-full mr-4">
                <Twitter size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Twitter</p>
                <p className="font-medium">@qasim_wedev</p>
              </div>
            </div>

            <div className="flex items-center p-4 bg-gray-700/30 rounded-lg">
              <div className="bg-gray-700 p-3 rounded-full mr-4">
                <Github size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-400">GitHub</p>
                <p className="font-medium">github.com/qasimsaifi</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <div className="bg-gray-700/30 p-4 rounded-lg">
              <p>Gawan ( Sambhal ) UP 243737</p>
              <p className="text-gray-400 mt-2">
                Available for remote work worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-700/30 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Subject
              </label>
              <input
                type="text"
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                className="w-full p-3 bg-gray-800 rounded-lg border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32"
                placeholder="Your message"
              ></textarea>
            </div>

            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
);

export default ContactMeContent;
