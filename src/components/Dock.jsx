"use client";

import {
  Calendar,
  Home,
  Mail,
  Pencil,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  ProjectorIcon,
  Grip,
  User,
  Headphones,
  Headset,
} from "lucide-react";

import Link from "next/link";
import React, { useState, useEffect } from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import AboutMeContent from "@/components/AboutMeContent";
import ContactMeContent from "@/components/ContactMeContent";
import ProjectsContent from "@/components/ProjectsContent";
import { Dialog, DialogContent } from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";
import MenuDialog from "./MenuDialog";

const DATA = {
  navbar: [
    { href: "#", icon: ProjectorIcon, label: "Projects" },
    { href: "#", icon: User, label: "About Me" },
    { href: "#", icon: Headset, label: "Contact Me" },
  ],
  contact: {
    social: {
      // Blog: { url: "#", icon: Pencil, name: "Blog" },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/qasimsaifi",
        icon: Github,
      },
      Twitter: {
        name: "Twitter",
        url: "https://twitter.com/qasim_wedev",
        icon: Twitter,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=kasimthecoder@gmail.com",
        icon: Mail,
      },
    },
  },
};

export function DockBar() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showContactMe, setShowContactMe] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  return (
    <>
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

      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <TooltipProvider>
          <Dock
            className={`bg-gray-800/20 backdrop-blur-lg rounded-md ${
              isMobile ? "px-0" : "px-6"
            } py-3 border border-gray-700 shadow-lg`}
          >
            {DATA.navbar.map((item) => (
              <DockIcon key={item.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div onClick={() => handleItemClick(item.label)}>
                      <Button
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          `${
                            isMobile ? "size-12" : "size-14"
                          } rounded-md transition-all duration-300 ease-in-out hover:scale-160 bg-transparent text-white`
                        )}
                      >
                        <item.icon
                          className={`${isMobile ? "size-5" : "size-6"}`}
                        />
                      </Button>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}

            {!isMobile && (
              <>
                <Separator
                  orientation="vertical"
                  className="h-10 mx-2 bg-gray-600"
                />
                {Object.entries(DATA.contact.social).map(([name, social]) => (
                  <DockIcon key={name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Link
                          href={social.url}
                          aria-label={social.name}
                          className={cn(
                            buttonVariants({ variant: "ghost", size: "icon" }),
                            "size-14 rounded-md transition-all duration-300 ease-in-out hover:scale-160 text-white"
                          )}
                        >
                          <social.icon className="size-6" />
                        </Link>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </DockIcon>
                ))}
              </>
            )}

            <Separator
              orientation="vertical"
              className={`h-10 mx-2 bg-gray-600 ${isMobile ? "ml-1 mr-1" : ""}`}
            />

            <DockIcon>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    aria-label={"Menu"}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      `${
                        isMobile ? "size-12" : "size-14"
                      } rounded-md transition-all duration-300 ease-in-out bg-transparent text-white`
                    )}
                  >
                    <MenuDialog />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Menu</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          </Dock>
        </TooltipProvider>
      </div>
    </>
  );
}
