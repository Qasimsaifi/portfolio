"use client";
import AboutMeContent from "@/components/AboutMeContent";
import ContactMeContent from "@/components/ContactMeContent";
import { DockBar } from "@/components/Dock";
import FloatingMusicButton from "@/components/FloatingMusicButton";
import ProjectsContent from "@/components/ProjectsContent";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import VideoBackground from "@/components/VideoBackground";
import React from "react";

export default function Home() {
  return (
    <VideoBackground videoSrc="/video/home-video.mp4">
      <div className="flex items-center justify-center h-screen">
        <div className="container mx-auto px-4 py-10 text-center">
          <h1 className="text-9xl font-bold text-black/50 uppercase">
            Kasim Saifi
          </h1>
          <h1 className="text-2xl font-bold text-gray-400/50 uppercase">
            Web & App Developer
          </h1>
        </div>
      </div>

      <FloatingMusicButton />

      <DockBar />
    </VideoBackground>
  );
}
