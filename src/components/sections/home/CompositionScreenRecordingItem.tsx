"use client";

import { useState } from "react";
import Image from "next/image";
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

interface CompositionScreenRecordingItemProps {
  recording: {
    id: number;
    title: string | null;
    artists: Artist[];
    album: {
      label: { name: string } | null;
      release_date?: string | null;
    };
    year_of_recording?: number | null;
    tracks: Track[];
  };
  isCurrentlyPlaying?: boolean;
  currentTrackIndex?: number;
}

export default function CompositionScreenRecordingItem({
  recording,
  isCurrentlyPlaying = false,
  currentTrackIndex = 0,
}: CompositionScreenRecordingItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const artists = recording.artists || [];
  const firstPerformer = artists.find((a) => a.instrument?.name) || artists[0];
  const performerName = firstPerformer?.full_name || "Unknown Artist";
  const instrument = firstPerformer?.instrument?.name;

  // Format performer string: "Name (instrument)"
  const performersString = instrument
    ? `${performerName} (${instrument})`
    : performerName;

  // Get label and year
  const labelName = recording.album?.label?.name;
  const releaseDate = recording.album?.release_date
    ? new Date(recording.album.release_date).getFullYear()
    : recording.year_of_recording;
  const labelYearString =
    labelName && releaseDate ? `${labelName}, ${releaseDate}` : null;

  // Avatar image URL - use performer picture_url
  const imageUrl = firstPerformer?.picture_url;
  const altText = performerName;

  return (
    <div
      className="group border-b mx-4"
      style={{
        borderColor: AppColors.borderPrimary,
      }}
    >
      <div
        className="grid items-center gap-2 py-4 cursor-pointer transition-all duration-200"
        style={{
          gridTemplateColumns: "64px 1fr", // Mobile composition view: picture, content
        }}
        onClick={() => {
          if (recording.tracks && recording.tracks.length > 0) {
            setIsExpanded(!isExpanded);
          }
        }}
      >
        {/* Column 1: Circular Avatar (64px) */}
        <div className="flex items-center justify-center">
          <div className="relative flex-shrink-0">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={altText || ""}
                width={64}
                height={64}
                className="w-12 h-12 rounded-full object-cover"
                unoptimized
              />
            ) : (
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: AppColors.bgCard,
                }}
              >
                <span
                  className="text-sm font-medium"
                  style={{ color: AppColors.textTertiary }}
                >
                  {altText?.charAt(0).toUpperCase() || "?"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Column 2: Content */}
        <div className="min-w-0">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              {/* Performer name */}
              <div
                className="text-base line-clamp-2"
                style={{ color: AppColors.textPrimary }}
              >
                {performersString}
              </div>
              {/* Label and year */}
              {labelYearString && (
                <div
                  className="text-base line-clamp-2"
                  style={{ color: AppColors.textTertiary }}
                >
                  {labelYearString}
                </div>
              )}
            </div>

            {/* Expandable tracks - show when expanded */}
            {isExpanded && recording.tracks && recording.tracks.length > 0 && (
              <div className="flex flex-col gap-1 mt-2">
                {recording.tracks.map((track, index) => (
                  <div
                    key={index}
                    className="text-sm"
                    style={{
                      color:
                        index === currentTrackIndex && isCurrentlyPlaying
                          ? "#FFD700"
                          : AppColors.textSecondary,
                    }}
                  >
                    {track.spotify_name || `Track ${track.track_number}`}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
