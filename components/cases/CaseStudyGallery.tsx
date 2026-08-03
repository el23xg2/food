"use client";

import { useState } from "react";
import type { CaseStudyImage } from "@/types/case-study";

interface CaseStudyGalleryProps {
  images: CaseStudyImage[];
  title?: string;
}

function GalleryImage({ image }: { image: CaseStudyImage }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  // Use native img to avoid Next.js image optimizer cache serving stale assets
  const src = image.src.includes("?") ? image.src : `${image.src}?v=3`;

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative w-full bg-surface-elevated">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={image.alt}
          className="h-auto w-full"
          loading="lazy"
          onError={() => setHasError(true)}
        />
      </div>
      {image.caption && (
        <figcaption className="border-t border-border-subtle px-4 py-3 text-sm text-subtle">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function CaseStudyGallery({ images, title }: CaseStudyGalleryProps) {
  if (!images.length) return null;

  return (
    <div className="mt-10">
      {title && (
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-subtle">
          {title}
        </p>
      )}
      <div className="space-y-8">
        {images.map((image) => (
          <GalleryImage key={image.src} image={image} />
        ))}
      </div>
    </div>
  );
}
