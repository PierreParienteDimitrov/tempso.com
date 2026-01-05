'use client';

import Image from 'next/image';
import { AppColors } from '@/lib/theme';
import InstrumentIcon from '@/components/icons/InstrumentIcon';
import { RadioAlbumImage, InstrumentInfo } from '@/types/home';

interface RadioCoverDisplayProps {
  picture_url?: string | null;
  albumImages?: RadioAlbumImage[];
  backgroundColor?: string;
  size?: number;
  showCircles?: boolean;
  instrument?: InstrumentInfo | null;
}

/**
 * RadioCoverDisplay
 *
 * Priority order:
 * 1. If picture_url exists, use it (Cloudinary cover for eras)
 * 2. If instrument exists, show instrument icon
 * 3. If albumImages exist, show 3 circular images (Spotify-style)
 * 4. Fallback to solid background color with generic icon
 */
export default function RadioCoverDisplay({
  picture_url,
  albumImages = [],
  backgroundColor = AppColors.bgCard,
  size = 144,
  showCircles = true,
  instrument,
}: RadioCoverDisplayProps) {
  // Priority 1: Use picture_url if available (Cloudinary era covers)
  if (picture_url) {
    return (
      <div
        className="rounded-lg overflow-hidden"
        style={{ width: size, height: size }}
      >
        <Image
          src={picture_url}
          alt="Radio cover"
          width={size}
          height={size}
          className="w-full h-full object-cover"
          unoptimized
        />
      </div>
    );
  }

  // Priority 2: Show custom instrument SVG icon if available
  if (instrument) {
    const iconSize = size * 0.6; // 60% of container size

    return (
      <div
        className="rounded-lg overflow-hidden flex items-center justify-center"
        style={{ width: size, height: size, backgroundColor }}
      >
        <InstrumentIcon
          instrumentName={instrument.name}
          size={iconSize}
          color="rgba(255, 255, 255, 0.8)"
        />
      </div>
    );
  }

  // Priority 3: Filter valid album images and take first 3
  const validImages = albumImages
    .filter((img) => img.picture_url)
    .slice(0, 3);

  // If we have images and should show circles, render circular layout
  if (validImages.length > 0 && showCircles) {
    // Calculate circle sizes (smaller and center)
    const sideCircleSize = size * 0.35; // 35% of container
    const centerCircleSize = size * 0.45; // 45% of container

    return (
      <div
        className="rounded-lg overflow-hidden flex items-center justify-center"
        style={{ width: size, height: size, backgroundColor }}
      >
        <div className="flex items-center justify-center gap-1 px-2">
          {/* Left circle */}
          {validImages[0] && (
            <div
              className="rounded-full overflow-hidden"
              style={{ width: sideCircleSize, height: sideCircleSize }}
            >
              <Image
                src={validImages[0].picture_url!}
                alt=""
                width={sideCircleSize}
                height={sideCircleSize}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          )}

          {/* Center circle (larger) */}
          {validImages[1] && (
            <div
              className="rounded-full overflow-hidden"
              style={{ width: centerCircleSize, height: centerCircleSize }}
            >
              <Image
                src={validImages[1].picture_url!}
                alt=""
                width={centerCircleSize}
                height={centerCircleSize}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          )}

          {/* Right circle */}
          {validImages[2] && (
            <div
              className="rounded-full overflow-hidden"
              style={{ width: sideCircleSize, height: sideCircleSize }}
            >
              <Image
                src={validImages[2].picture_url!}
                alt=""
                width={sideCircleSize}
                height={sideCircleSize}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>
          )}
        </div>
      </div>
    );
  }

  // Priority 4: Fallback to solid background with generic icon
  return (
    <div
      className="rounded-lg overflow-hidden flex items-center justify-center"
      style={{ width: size, height: size, backgroundColor }}
    >
      <svg
        width={size * 0.4}
        height={size * 0.4}
        viewBox="0 0 24 24"
        fill="none"
        className="opacity-70"
      >
        <path
          d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
          fill="rgba(255, 255, 255, 0.7)"
        />
      </svg>
    </div>
  );
}

