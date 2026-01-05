"use client";

import { AppColors } from "@/lib/theme";

interface Artist {
  id: number;
  full_name: string;
  picture_url?: string | null;
  instrument?: { name: string } | null;
}

interface Track {
  track_number: number;
  spotify_name: string | null;
  duration_ms: number | null;
}

interface CompareScreenRecordingItemProps {
  recording: {
    id: number;
    title: string | null;
    artists: Artist[];
    tracks: Track[];
    duration_ms?: number | null;
    composer?: { full_name: string } | null;
  };
}

function formatDuration(ms: number | null): string {
  if (!ms) return "";
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export default function CompareScreenRecordingItem({
  recording,
}: CompareScreenRecordingItemProps) {
  const title = recording.title || "Untitled";
  const artists = recording.artists || [];
  const trackCount = recording.tracks?.length || 0;

  // Calculate duration from tracks if duration_ms is not available
  const calculatedDuration =
    recording.tracks?.reduce(
      (sum, track) => sum + (track.duration_ms || 0),
      0
    ) || null;
  const durationMs = recording.duration_ms || calculatedDuration;
  const duration = durationMs ? formatDuration(durationMs) : null;

  // Get primary artist name
  const primaryArtist = artists.find((a) => a.instrument?.name) || artists[0];
  const artistName = primaryArtist?.full_name || "Unknown Artist";

  // Get instrument if available
  const instrument = primaryArtist?.instrument?.name;

  return (
    <div
      className="px-4 py-3 border-b"
      style={{ borderColor: AppColors.borderPrimary }}
    >
      {/* Title */}
      <h3
        className="text-sm font-semibold mb-1 line-clamp-1"
        style={{ color: AppColors.textPrimary }}
      >
        {title}
      </h3>

      {/* Artist and Instrument */}
      <div className="flex items-center gap-2 mb-2">
        <p
          className="text-xs line-clamp-1"
          style={{ color: AppColors.textSecondary }}
        >
          {artistName}
        </p>
        {instrument && (
          <>
            <span style={{ color: AppColors.textTertiary }}>•</span>
            <p className="text-xs" style={{ color: AppColors.textTertiary }}>
              {instrument}
            </p>
          </>
        )}
      </div>

      {/* Track Count and Duration */}
      <div
        className="flex items-center gap-2 text-xs"
        style={{ color: AppColors.textTertiary }}
      >
        {trackCount > 0 && (
          <span>
            {trackCount} track{trackCount !== 1 ? "s" : ""}
          </span>
        )}
        {trackCount > 0 && duration && <span>•</span>}
        {duration && <span>{duration}</span>}
      </div>
    </div>
  );
}
