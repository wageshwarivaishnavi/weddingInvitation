import React, { useState, useEffect, useRef } from 'react';
import weddingSong from '../assets/images/Mella-Sirithai.mp3';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    if (!audio) return;

    audio.volume = 0; // Start at 0 for fade-in
    
    // Try immediate autoplay
    const attemptAutoPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        fadeIn(audio); // Fade in from 0 to 0.5
        console.log('✅ Music auto-playing successfully');
      } catch (error) {
        console.log('⚠️ Autoplay blocked by browser:', error.message);
        console.log('🎵 Music will start on first user interaction');
        
        // Fallback: Play on FIRST interaction anywhere on page
        const playOnInteraction = async (e) => {
          try {
            await audio.play();
            setIsPlaying(true);
            fadeIn(audio);
            console.log('✅ Music started after user interaction');
            
            // Remove all listeners after first play
            document.removeEventListener('click', playOnInteraction);
            document.removeEventListener('touchstart', playOnInteraction);
            document.removeEventListener('keydown', playOnInteraction);
            document.removeEventListener('scroll', playOnInteraction);
          } catch (err) {
            console.error('❌ Play failed:', err);
          }
        };
        
        // Listen for ANY user interaction
        document.addEventListener('click', playOnInteraction);
        document.addEventListener('touchstart', playOnInteraction);
        document.addEventListener('keydown', playOnInteraction);
        document.addEventListener('scroll', playOnInteraction);
      }
    };

    // Try autoplay after a tiny delay (helps with some browsers)
    const timer = setTimeout(attemptAutoPlay, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    
    if (!audio) return;

    if (isPlaying) {
      fadeOut(audio, () => {
        audio.pause();
        setIsPlaying(false);
      });
    } else {
      audio.volume = 0;
      audio.play()
        .then(() => {
          fadeIn(audio);
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error('Play failed:', error);
        });
    }
  };

  const fadeIn = (audio) => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }
    
    let volume = 0;
    const targetVolume = 0.5;
    
    fadeIntervalRef.current = setInterval(() => {
      if (volume < targetVolume) {
        volume += 0.05;
        audio.volume = Math.min(volume, targetVolume);
      } else {
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
      }
    }, 100);
  };

  const fadeOut = (audio, callback) => {
    if (fadeIntervalRef.current) {
      clearInterval(fadeIntervalRef.current);
    }
    
    fadeIntervalRef.current = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= 0.05;
      } else {
        audio.volume = 0;
        clearInterval(fadeIntervalRef.current);
        fadeIntervalRef.current = null;
        if (callback) callback();
      }
    }, 100);
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline // Helps with mobile devices
      >
        <source src={weddingSong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <button
        className={`music-control ${isPlaying ? 'playing' : 'paused'}`}
        onClick={toggleMusic}
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        {isPlaying ? (
          <>
            <i className="fa fa-music"></i>
            <span className="music-waves">
              <span className="wave wave-1"></span>
              <span className="wave wave-2"></span>
              <span className="wave wave-3"></span>
            </span>
          </>
        ) : (
          <i className="fa fa-play"></i>
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;