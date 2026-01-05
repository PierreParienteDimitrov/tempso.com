"use client";

import Image from "next/image";
import { AppColors } from "@/lib/theme";

interface CompareScreenHeaderProps {
  collection: {
    name: string;
    picture_url: string | null;
    label?: { name: string } | null;
    release_date?: string | null;
    recordings_count?: number;
    duration_ms?: number;
  };
}

function formatDuration(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  if (hours > 0) {
    return `${hours} hr ${minutes} min`;
  }
  return `${minutes} min`;
}

export default function CompareScreenHeader({
  collection,
}: CompareScreenHeaderProps) {
  const coverImage = collection.picture_url;
  const labelName = collection.label?.name;
  const releaseDate = collection.release_date
    ? new Date(collection.release_date).getFullYear()
    : null;
  const trackCount = collection.recordings_count || 0;
  const duration = collection.duration_ms
    ? formatDuration(collection.duration_ms)
    : null;

  // Generate initials for fallback
  const getInitials = (name: string): string => {
    const words = name
      .trim()
      .split(" ")
      .filter((word) => word.length > 0);
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    } else if (words.length >= 2) {
      return (
        words[0].charAt(0) + words[words.length - 1].charAt(0)
      ).toUpperCase();
    }
    return "";
  };

  const initials = getInitials(collection.name);

  return (
    <div className="px-4 pt-4 pb-3">
      {/* Cover Image and Title Section */}
      <div className="flex gap-3 mb-4">
        {/* Cover Image */}
        <div
          className="flex-shrink-0 rounded-lg overflow-hidden"
          style={{
            width: 80,
            height: 80,
            backgroundColor: AppColors.bgCard,
          }}
        >
          {coverImage ? (
            <Image
              src={coverImage}
              alt={collection.name}
              width={80}
              height={80}
              className="w-full h-full object-cover"
              unoptimized
            />
          ) : (
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: AppColors.bgCard }}
            >
              <span
                className="text-xl font-bold"
                style={{ color: AppColors.textPrimary }}
              >
                {initials}
              </span>
            </div>
          )}
        </div>

        {/* Title and Metadata */}
        <div className="flex-1 min-w-0">
          <h1
            className="text-lg font-bold leading-tight mb-1 line-clamp-2"
            style={{ color: AppColors.textPrimary }}
          >
            {collection.name}
          </h1>

          <div className="text-xs" style={{ color: AppColors.textTertiary }}>
            {labelName && <span>{labelName}</span>}
            {labelName && releaseDate && <span> • </span>}
            {releaseDate && <span>{releaseDate}</span>}
          </div>
        </div>
      </div>

      {/* Track Count and Duration */}
      <div className="text-xs" style={{ color: AppColors.textTertiary }}>
        {trackCount > 0 && (
          <span>
            {trackCount} recording{trackCount !== 1 ? "s" : ""}
          </span>
        )}
        {trackCount > 0 && duration && <span> • </span>}
        {duration && <span>{duration}</span>}
      </div>
    </div>
  );
}
