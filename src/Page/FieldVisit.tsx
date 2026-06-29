import React, { useState } from "react";
import { X, Image as ImageIcon, Video as VideoIcon, MapPin } from "lucide-react";
import { SpectralBand } from "../Components/UI";
import IMAGE1 from "../assets/Proof of work/image1.jpg";
import IMAGE2 from "../assets/Proof of work/image2.jpg";
import IMAGE3 from "../assets/Proof of work/image3.jpg";
import IMAGE4 from "../assets/Proof of work/image4.jpg";
import IMAGE5 from "../assets/Proof of work/image5.jpg";
import IMAGE6 from "../assets/Proof of work/image6.jpg";
import IMAGE7 from "../assets/Proof of work/image7.jpg";
import IMAGE8 from "../assets/Proof of work/image8.jpg";
import IMAGE9 from "../assets/Proof of work/image9.jpg";
import IMAGE10 from "../assets/Proof of work/image10.jpg";
import IMAGE11 from "../assets/Proof of work/image11.jpg";
import IMAGE12 from "../assets/Proof of work/image12.jpg";
import IMAGE13 from "../assets/Proof of work/image13.jpg";
import IMAGE14 from "../assets/Proof of work/image14.jpg";
import IMAGE15 from "../assets/Proof of work/image15.jpg";
import IMAGE16 from "../assets/Proof of work/image16.jpg";
import VIDEO1 from "../assets/Proof of work/video1.mp4";
import VIDEO2 from "../assets/Proof of work/video2.mp4";
import VIDEO3 from "../assets/Proof of work/video3.mp4";
import VIDEO4 from "../assets/Proof of work/video4.mp4";
import VIDEO5 from "../assets/Proof of work/video5.mp4";
import VIDEO6 from "../assets/Proof of work/video6.mp4";
import VIDEO7 from "../assets/Proof of work/video7.mp4";
import VIDEO8 from "../assets/Proof of work/video8.mp4";
import VIDEO9 from "../assets/Proof of work/video9.mp4";
import VIDEO10 from "../assets/Proof of work/video10.mp4";

const photos = [
  IMAGE1, IMAGE2, IMAGE3, IMAGE4, IMAGE5, IMAGE6, IMAGE7, IMAGE8,
  IMAGE9, IMAGE10, IMAGE11, IMAGE12, IMAGE13, IMAGE14, IMAGE15, IMAGE16,
];
const videos = [
  VIDEO10, VIDEO1, VIDEO2, VIDEO3, VIDEO4, VIDEO5, VIDEO6, VIDEO7, VIDEO8, VIDEO9,
];

const FieldVisit: React.FC = () => {
  const [tab, setTab] = useState<"photos" | "videos">("photos");
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <div className="paper-grain min-h-screen bg-parchment-100">
      <section className="bg-pine-900">
        <div className="container-page py-14 sm:py-16">
          <span className="eyebrow text-harvest-300">Proof of Work</span>
          <h1 className="mt-4 font-display text-4xl font-semibold text-parchment-50 sm:text-5xl">
            Field visit
          </h1>
          <p className="mt-4 flex items-center gap-2 text-base text-parchment-200/80">
            <MapPin className="h-4 w-4 text-spectral-400" />
            Gosani &amp; Gumma blocks · Gajapati, Odisha
          </p>
        </div>
        <SpectralBand />
      </section>

      <section className="container-page py-12 sm:py-16">
        <div className="mb-8 flex gap-2">
          <button
            onClick={() => setTab("photos")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              tab === "photos"
                ? "bg-pine-800 text-parchment-50"
                : "bg-white text-pine-900/70 ring-1 ring-pine-900/10 hover:ring-pine-900/25"
            }`}
          >
            <ImageIcon size={16} /> Photos
            <span className="font-mono text-xs opacity-70">{photos.length}</span>
          </button>
          <button
            onClick={() => setTab("videos")}
            className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
              tab === "videos"
                ? "bg-pine-800 text-parchment-50"
                : "bg-white text-pine-900/70 ring-1 ring-pine-900/10 hover:ring-pine-900/25"
            }`}
          >
            <VideoIcon size={16} /> Videos
            <span className="font-mono text-xs opacity-70">{videos.length}</span>
          </button>
        </div>

        {tab === "photos" ? (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox(src)}
                className="group relative aspect-square overflow-hidden rounded-xl bg-pine-900/5 shadow-card focus-ring"
              >
                <img
                  src={src}
                  alt={`Field visit photograph ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-pine-950/0 transition-colors duration-300 group-hover:bg-pine-950/15" />
              </button>
            ))}
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-pine-900/[0.08] bg-black shadow-card"
              >
                <video controls preload="metadata" className="aspect-video w-full object-cover">
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        )}
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-pine-950/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-parchment-50/10 text-parchment-50 hover:bg-parchment-50/20"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <img
            src={lightbox}
            alt="Field visit"
            className="max-h-[88vh] max-w-full rounded-lg object-contain shadow-lift"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default FieldVisit;
