import { useState, useEffect, useRef } from "react";
import weddingSong from "../assets/images/AajSeTeri.mp3";

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const autoplayAttemptedRef = useRef(false); // Track if we've tried autoplay

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    // Try autoplay but do not preload the audio to avoid network cost.
    const tryAutoplay = () => {
      if (autoplayAttemptedRef.current) return;
      autoplayAttemptedRef.current = true;

      // Defer loading until play attempt
      if (!audio.src) audio.src = weddingSong;

      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          console.log("Playing");
        })
        .catch(() => {
          console.log("Autoplay blocked, waiting for user interaction");

          const playOnce = () => {
            if (!audio.src) audio.src = weddingSong;
            audio
              .play()
              .then(() => setIsPlaying(true))
              .catch((err) => console.log(err));

            document.removeEventListener("click", playOnce);
            document.removeEventListener("touchstart", playOnce);
            document.removeEventListener("scroll", playOnce);
          };

          document.addEventListener("click", playOnce, { once: true });
          document.addEventListener("touchstart", playOnce, { once: true });
          document.addEventListener("scroll", playOnce, { once: true });
        });
    };

    tryAutoplay();

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (!audio.src) audio.src = weddingSong;

    if (audio.paused) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Play error:", err));
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop playsInline preload="none" />

      <div
        className={`music-control ${isPlaying ? "playing" : "paused"}`}
        onClick={toggleMusic}
        role="button"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        <i className="fa fa-music" aria-hidden="true"></i>
        <i className="fa fa-play" aria-hidden="true"></i>

        <span className="music-waves" aria-hidden="true">
          <span className="wave wave-1"></span>
          <span className="wave wave-2"></span>
          <span className="wave wave-3"></span>
        </span>
      </div>
    </>
  );
};

export default BackgroundMusic;
