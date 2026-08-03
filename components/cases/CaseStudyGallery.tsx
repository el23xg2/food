"use client";

import Image from "next/image";
import { useState } from "react";
import type { CaseStudyImage } from "@/types/case-study";

interface CaseStudyGalleryProps {
  images: CaseStudyImage[];
}

function GalleryImage({ image }: { image: CaseStudyImage }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) return null;

  return (
    <figure className="overflow-hidden rounded-xl border border-border bg-surface">
      <div className="relative w-full bg-surface-elevated">
        <Image
          src={image.src}
          alt={image.alt}
          width={1225}
          height={3733}
          className="h-auto w-full"
          sizes="(max-width: 768px) 100vw, 720px"
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

export function CaseStudyGallery({ images }: CaseStudyGalleryProps) {
  if (!images.length) return null;

  return (
    <div className="mt-10 space-y-8">
      {images.map((image) => (
        <GalleryImage key={image.src} image={image} />
      ))}
    </div>
  );
}
