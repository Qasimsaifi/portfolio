import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Grip, ShoppingCart } from "lucide-react";
import { VscVscode } from "react-icons/vsc";
import {
  Github,
  Twitter,
  Instagram,
  Mail,
  Folder,
  User,
  FileText,
  Code,
  Layout,
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import ProjectsContent from "./ProjectsContent";
import ContactMeContent from "./ContactMeContent";
import AboutMeContent from "./AboutMeContent";

export default function MenuDialog() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // External link handlers
  const externalLinks = {
    "VS Code": "https://editor-by-kasim.vercel.app/",
    EzkitLabs: "https://ezkitlabs.vercel.app/",
    GitHub: "https://github.com/qasimsaifi",
    X: "https://twitter.com/qasim_wedev",
    Instagram: "https://instagram.com/qasimsaifibg",
    Gmail:
      "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kasimthecoder@gmail.com",
    Blog: "#",
  };

  const handleItemClick = (appName) => {
    const closeMainDialog = () => {
      const closeButton = document.querySelector('button[data-state="open"]');
      if (closeButton) {
        closeButton.click();
      }

      setTimeout(() => {
        if (appName === "About Me") {
          setShowAboutMe(true);
        } else if (appName === "Contact Me") {
          setShowContactMe(true);
        } else if (appName === "Projects") {
          setShowProjects(true);
        }
      }, 100);
    };

    if (
      appName === "About Me" ||
      appName === "Contact Me" ||
      appName === "Projects"
    ) {
      closeMainDialog();
    } else if (externalLinks[appName]) {
      window.open(externalLinks[appName], "_blank");
    }
  };

  const apps = [
    {
      name: "VS Code",
      icon: <VscVscode color="blue" size={40} />,
      color: "bg-gray-500/20",
    },
    {
      name: "EzkitLabs",
      icon: <ShoppingCart color="purple" size={40} />,
      color: "bg-purple-500/20",
    },
    {
      name: "GitHub",
      icon: <Github color="black" size={40} />,
      color: "bg-gray-700/20",
    },
    {
      name: "X",
      icon: <Twitter color="black" size={40} />,
      color: "bg-blue-400/20",
    },
    {
      name: "Instagram",
      icon: <Instagram color="pink" size={40} />,
      color: "bg-pink-500/20",
    },
    {
      name: "Gmail",
      icon: <Mail color="red" size={40} />,
      color: "bg-red-500/20",
    },
    {
      name: "Projects",
      icon: <Folder color="orange" size={40} />,
      color: "bg-orange-500/20",
    },
    {
      name: "Contact Me",
      icon: <Mail color="green" size={40} />,
      color: "bg-green-500/20",
    },
    {
      name: "About Me",
      icon: <User color="blue" size={40} />,
      color: "bg-blue-500/20",
    },
    // {
    //   name: "Blog",
    //   icon: <FileText color="teal" size={40} />,
    //   color: "bg-teal-500/20",
    // },
  ];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsSmallScreen(window.innerWidth < 1024);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      <Dialog className="dark text-white">
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="bg-none border-none hover:bg-transparent"
          >
            <Grip className={`${isMobile ? "size-5" : "size-6"}`} />
          </Button>
        </DialogTrigger>

        <DialogContent
          className={`
        sm:max-w-3xl 
        w-full 
        bg-gray-800/20 
        backdrop-blur-lg 
        ${isMobile ? "p-4" : "p-8"} 
        dark
      `}
        >
          <div
            className={`w-full ${
              isMobile ? "h-[400px]" : "h-[450px]"
            } overflow-y-auto`}
          >
            <div
              className={`grid 
            ${
              isMobile
                ? "grid-cols-2"
                : isSmallScreen
                ? "grid-cols-3"
                : "grid-cols-5"
            } 
            ${isMobile ? "gap-3" : "gap-6"}
          `}
            >
              {apps.map((app, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-3 rounded-md cursor-pointer text-white transition-colors hover:bg-gray-700/30"
                  onClick={() => handleItemClick(app.name)}
                >
                  <div
                    className={`
                    ${isMobile ? "w-12 h-12" : "w-16 h-16"} 
                    ${app.color} 
                    rounded-md 
                    flex 
                    items-center 
                    justify-center 
                    ${isMobile ? "text-xl" : "text-2xl"} 
                    font-bold 
                    mb-2
                  `}
                  >
                    {app.icon}
                  </div>
                  <span
                    className={`${
                      isMobile ? "text-xs" : "text-sm"
                    } text-center`}
                  >
                    {app.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* About Me Dialog */}
      <Dialog open={showAboutMe} onOpenChange={setShowAboutMe}>
        <DialogContent className="bg-gray-800/20 backdrop-blur-lg text-white w-[90vw] max-w-[90vw] min-w-[90vw] h-[90vh] max-h-[90vh] overflow-y-auto">
          <AboutMeContent />
        </DialogContent>
      </Dialog>

      {/* Contact Me Dialog */}
      <Dialog open={showContactMe} onOpenChange={setShowContactMe}>
        <DialogContent className="bg-gray-800/20 backdrop-blur-lg text-white w-[90vw] max-w-[90vw] min-w-[90vw] h-[90vh] max-h-[90vh] overflow-y-auto">
          <ContactMeContent />
        </DialogContent>
      </Dialog>

      {/* Projects Dialog */}
      <Dialog open={showProjects} onOpenChange={setShowProjects}>
        <DialogContent className="bg-gray-800/20 backdrop-blur-lg text-white w-[90vw] max-w-[90vw] min-w-[90vw] h-[90vh] max-h-[90vh] overflow-y-auto hide-scrollbar">
          <ProjectsContent />
        </DialogContent>
      </Dialog>
    </>
  );
}
