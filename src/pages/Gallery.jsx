import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, ArrowRight, Image as ImageIcon, ImageOff } from "lucide-react";


const PHOTO_COUNT = 71;
const EXT = "jpeg";

const GALLERY_PHOTOS = Array.from({ length: PHOTO_COUNT }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    id: num,
    src: `/gallery/photo-${num}.${EXT}`,
    alt: `Medlish Communications — gallery photo ${i + 1}`,
  };
});

// Plays like a GIF (autoplay, muted, loop, no controls) but is a real
// video file — smaller and higher quality than an actual animated GIF.
const GALLERY_VIDEO = {
  src: "/gallery/highlight-video.mp4",
  title: "Medlish Highlights",
};

function GalleryThumb({ photo, onClick }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="mb-4 flex aspect-[3/4] w-full flex-col items-center justify-center gap-2 break-inside-avoid rounded-xl border border-dashed border-[#110069]/20 bg-white text-[#181430]/35">
        <ImageOff size={22} />
        <span className="text-xs font-medium">Photo unavailable</span>
        <span className="text-[10px] text-[#181430]/25">{photo.src}</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl border border-[#110069]/10 bg-white"
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </button>
  );
}

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length),
    []
  );
  const showNext = useCallback(
    () => setLightboxIndex((i) => (i + 1) % GALLERY_PHOTOS.length),
    []
  );

  // Keyboard navigation + body scroll lock while lightbox is open
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 px-4 py-1.5 text-[16px] font-extrabold uppercase tracking-[0.18em] text-[#110069]">
              Gallery
            </p>
            <h1 className="font-display text-4xl leading-[1.1] text-[#110069] sm:text-5xl lg:text-6xl">
              Moments, captured.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#181430]/65 sm:text-lg">
              A visual look at the people, partnerships, and programs behind
              Medlish's work.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#181430]/40">
              <ImageIcon size={14} />
              {PHOTO_COUNT} Photos · 1 Video
            </p>
          </div>
        </div>
        <div className="pointer-events-none absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#C9A227] to-transparent sm:block lg:left-10" />
      </section>

      {/* ================= FEATURED GIF ================= */}
      <section className="border-y border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <span className="text-base font-extrabold uppercase tracking-[0.2em] text-[#C9A227]">
            Watch
          </span>
          <h2 className="mt-3 font-display text-3xl text-[#110069] sm:text-3xl">
            {GALLERY_VIDEO.title}
          </h2>

          <div className="relative mt-8 overflow-hidden rounded-2xl bg-[#0a0140] shadow-xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="aspect-video w-full object-full"
            >
              <source src={GALLERY_VIDEO.src} type="video/mp4" />
              Your browser doesn't support embedded video. You can{" "}
              <a href={GALLERY_VIDEO.src} className="underline">
                download the video
              </a>{" "}
              instead.
            </video>
          </div>
        </div>
      </section>

      {/* ================= PHOTO GRID ================= */}
      <section className="bg-[#FAF9F6]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <span className="text-base font-extrabold uppercase tracking-[0.2em] text-[#C9A227]">
            Photos
          </span>
          <h2 className="mt-3 font-display text-3xl text-[#110069] sm:text-3xl">
            Browse the full collection.
          </h2>

          <div className="mt-8 columns-2 gap-4 sm:columns-3 lg:columns-4">
            {GALLERY_PHOTOS.map((photo, index) => (
              <GalleryThumb
                key={photo.id}
                photo={photo}
                onClick={() => setLightboxIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= LIGHTBOX ================= */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0a0140]/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-8 sm:top-8"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            type="button"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-8"
          >
            <ChevronRight size={24} />
          </button>

          <img
            src={GALLERY_PHOTOS[lightboxIndex].src}
            alt={GALLERY_PHOTOS[lightboxIndex].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
          />

          <span className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
            {lightboxIndex + 1} / {GALLERY_PHOTOS.length}
          </span>
        </div>
      )}

      {/* ================= CLOSING CTA ================= */}
      <section className="border-t border-[#110069]/10 bg-white">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:px-10">
          <h2 className="font-display text-3xl text-[#110069] sm:text-4xl">
            Want to see this work in more depth?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#181430]/65">
            Explore the programs, partnerships, and guidelines behind these
            moments.
          </p>
          <Link
            to="/ourwork"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#110069] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_-8px_rgba(17,0,105,0.5)] transition-transform hover:-translate-y-0.5"
          >
            See Our Work
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}