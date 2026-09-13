"use client";

import React, { useRef, useState, useEffect } from "react";
import { Play, Pause, Film, Volume2, VolumeX, ExternalLink } from "lucide-react";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
  aspectRatio?: "16/9" | "9/16" | "4/3" | "1/1";
  controls?: boolean;
  isCardPreview?: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  title = "Video Content",
  autoplay = true,
  loop = true,
  className = "",
  aspectRatio = "16/9",
  controls = false,
  isCardPreview = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Helper to parse YouTube or Vimeo embed URLs
  const getEmbedInfo = (url?: string) => {
    if (!url) return null;

    // YouTube
    const ytMatch = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?|shorts)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/
    );
    if (ytMatch && ytMatch[1]) {
      const ytId = ytMatch[1];
      return {
        type: "youtube",
        id: ytId,
        embedUrl: `https://www.youtube-nocookie.com/embed/${ytId}?rel=0&modestbranding=1`,
        watchUrl: `https://www.youtube.com/watch?v=${ytId}`,
      };
    }

    // Vimeo
    const vimeoMatch = url.match(/(?:vimeo\.com\/)(\d+)/);
    if (vimeoMatch && vimeoMatch[1]) {
      const vimeoId = vimeoMatch[1];
      return {
        type: "vimeo",
        id: vimeoId,
        embedUrl: `https://player.vimeo.com/video/${vimeoId}`,
        watchUrl: `https://vimeo.com/${vimeoId}`,
      };
    }

    return null;
  };

  const embedInfo = getEmbedInfo(src);

  // Pause native video when out of viewport for performance optimization
  useEffect(() => {
    if (!containerRef.current || !autoplay || embedInfo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current && !hasError) {
            if (entry.isIntersecting) {
              videoRef.current
                .play()
                .then(() => setIsPlaying(true))
                .catch(() => setIsPlaying(false));
            } else {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [autoplay, hasError, embedInfo]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current || hasError) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true));
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const aspectClass =
    aspectRatio === "9/16"
      ? "aspect-[9/16]"
      : aspectRatio === "4/3"
      ? "aspect-[4/3]"
      : aspectRatio === "1/1"
      ? "aspect-square"
      : "aspect-video";

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-2xl bg-surface border border-surface-border group shadow-2xl ${aspectClass} ${className}`}
    >
      {/* 1. YouTube or Vimeo Embed */}
      {embedInfo ? (
        <div className="relative w-full h-full">
          <iframe
            src={embedInfo.embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className={`w-full h-full border-0 ${isCardPreview ? "pointer-events-none" : ""}`}
          />

          {/* External Watch Link */}
          {!isCardPreview && (
            <a
              href={embedInfo.watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 z-10 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-semibold backdrop-blur-md border border-white/20 flex items-center gap-1.5 shadow-lg transition-transform hover:scale-105"
            >
              <span>Watch on YouTube</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      ) : !hasError && src ? (
        /* 2. Direct MP4 Video Tag */
        <>
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            muted={isMuted}
            loop={loop}
            playsInline
            preload="metadata"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Overlay controls */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 pointer-events-auto">
            <div className="flex justify-between items-center text-xs font-semibold text-white/90">
              <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
                HD Preview
              </span>
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/60 backdrop-blur-md hover:bg-white/20 transition-colors text-white"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-white line-clamp-1">{title}</p>
              <button
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-primary-600/90 text-white flex items-center justify-center shadow-lg hover:bg-primary-500 transition-transform active:scale-95"
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
              </button>
            </div>
          </div>
        </>
      ) : (
        /* 3. Fallback Placeholder */
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-surface via-[#172033] to-surface border border-surface-border">
          <div className="w-16 h-16 rounded-full bg-primary-500/10 border border-primary-500/30 flex items-center justify-center text-primary-400 mb-4 group-hover:scale-110 transition-transform">
            <Film size={28} />
          </div>
          <h4 className="text-base font-semibold text-white mb-1">{title}</h4>
          <p className="text-xs text-gray-400 max-w-xs mb-3">
            Video Preview Placeholder
          </p>
          <span className="text-[11px] font-mono text-primary-400/80 bg-primary-500/10 px-2.5 py-1 rounded-md border border-primary-500/20">
            {src || "Add MP4 or YouTube link in portfolioData.ts"}
          </span>
        </div>
      )}
    </div>
  );
};
