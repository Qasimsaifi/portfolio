import { useState, useEffect } from "react";
import { Play, Pause } from "lucide-react";

// Single song data
const song = {
  src: "/music/music.mp3",
};

export default function FloatingMusicButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio] = useState(
    typeof Audio !== "undefined" ? new Audio(song.src) : null
  );
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play().catch((e) => console.error("Audio playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, [audio]);

  return (
    <div
      className={`fixed right-6 z-50 ${isMobile ? "bottom-32" : "bottom-6"}`}
    >
      <div className="flex flex-col items-end">
        <button
          onClick={togglePlay}
          className="bg-gray-400/20 border border-gray-600 rounded-full p-4 shadow-lg flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-105 text-white outline-none"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
      </div>
    </div>
  );
}
