import React, { useState, useEffect, useRef } from 'react';
import weddingSong from '../assets/images/Mella-Sirithai.mp3';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeIntervalRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    if (!audio) return;

    audio.volume = 0;
    
    const attemptAutoPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        fadeIn(audio);
        console.log('✅ Music auto-playing successfully');
      } catch (error) {
        console.log('⚠️ Autoplay blocked by browser');
        
        const playOnInteraction = async () => {
          try {
            await audio.play();
            setIsPlaying(true);
            fadeIn(audio);
            console.log('✅ Music started');
          } catch (err) {
            console.error('❌ Play failed:', err);
          }
          
          cleanup();
        };
        
        const cleanup = () => {
          document.removeEventListener('click', playOnInteraction);
          document.removeEventListener('touchstart', playOnInteraction);
        };
        
        document.addEventListener('click', playOnInteraction, { once: true });
        document.addEventListener('touchstart', playOnInteraction, { once: true });
      }
    };

    const timer = setTimeout(attemptAutoPlay, 100);

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

  const handleClick = () => {
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
        playsInline
      >
        <source src={weddingSong} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div
        className={`music-control ${isPlaying ? 'playing' : 'paused'}`}
        onClick={handleClick}
        role="button"
        aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        tabIndex="0"
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
      </div>
    </>
  );
};

export default BackgroundMusic;