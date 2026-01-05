"use client";

import { AppColors } from "@/lib/theme";
import compositionData from "@/data/bachGoldbergAlbumData.json";
import CompositionScreenHeader from "./CompositionScreenHeader";
import CompositionScreenFiltersButton from "./CompositionScreenFiltersButton";
import CompositionScreenRecordingItem from "./CompositionScreenRecordingItem";

export default function CompositionScreenPreview() {
  const { composer, composition, recordings } = compositionData;

  // For preview, mark first recording as currently playing
  const currentlyPlayingRecordingId = recordings?.[0]?.id;
  const currentTrackIndex = 0;

  return (
    <div
      className="w-full h-full overflow-y-auto"
      style={{
        backgroundColor: AppColors.bgPage,
      }}
    >
      {/* Header Section - scrolls with content */}
      <CompositionScreenHeader
        composer={composer}
        composition={composition}
        showBackButton={true}
      />

      {/* PageListContainer equivalent - padding wrapper */}
      <div className="flex flex-col px-1 pb-4">
        {/* Filter Navigation Container */}
        <div className="px-4 md:px-6 mb-4">
          <CompositionScreenFiltersButton />
        </div>

        {/* Recordings List */}
        {recordings && recordings.length > 0 ? (
          recordings.map((recording, index) => (
            <CompositionScreenRecordingItem
              key={recording.id}
              recording={recording}
              isCurrentlyPlaying={
                recording.id === currentlyPlayingRecordingId && index === 0
              }
              currentTrackIndex={currentTrackIndex}
            />
          ))
        ) : (
          <div className="px-4 py-8 text-center">
            <p className="text-sm" style={{ color: AppColors.textTertiary }}>
              No recordings found
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
