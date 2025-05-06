export default function VideoBackground({ children }) {
  return (
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
        <video
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={"/placeholder-image.jpg"}
        >
          <source src={"/video/video.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="relative z-10 min-h-screen">{children}</div>
    </div>
  );
}
