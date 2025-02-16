import React, { useState, useRef, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const BackgroundMusic = () => {
  // Start with music on by default (isMuted false)
  const [isMuted, setIsMuted] = useState(() => {
    const stored = localStorage.getItem("isMuted");
    return stored ? JSON.parse(stored) : false;
  });
  const audioRef = useRef(null);

  // Persist mute state
  useEffect(() => {
    localStorage.setItem("isMuted", JSON.stringify(isMuted));
  }, [isMuted]);

  // Attempt to auto-play on mount if not muted
  useEffect(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.play().catch((error) => {
        console.log("Auto-play error:", error);
      });
    }
  }, [isMuted]);

  const toggleSound = () => {
    const newMute = !isMuted;
    setIsMuted(newMute);
    if (!newMute && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Playback prevented on toggle:", error);
      });
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/bgm_v1.mp3" // Your file in the public folder
        loop
        autoPlay
        muted={isMuted}
      />
      <button 
        onClick={toggleSound} 
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          fontSize: "1.5rem"
        }}
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
    </>
  );
};

export default BackgroundMusic;

