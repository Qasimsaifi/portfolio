import React from "react";

const LoadingScreen = () => {
  return (
    <main className="h-screen bg-gray-800">
      <div className="min-w-screen min-h-screen font-mono bg-gray-800  flex items-center justify-center px-5 py-5">
      <div className="dot-wave ">
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
        <div className="dot-wave__dot"></div>
      </div>
      </div>
    </main>
  );
};

export default LoadingScreen;
