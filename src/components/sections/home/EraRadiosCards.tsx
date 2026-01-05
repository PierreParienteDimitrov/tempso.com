"use client";

import { RadioData } from "@/types/home";
import { AppColors, getEraBackgroundColor } from "@/lib/theme";
import RadioCoverDisplay from "@/components/cards/RadioCoverDisplay";

interface EraRadiosCardsProps {
  radios: RadioData[];
  onRadioPress?: (id: number) => void;
}

export default function EraRadiosCards({
  radios,
  onRadioPress,
}: EraRadiosCardsProps) {
  // Show only first 3 radios
  const displayRadios = radios.slice(0, 3);

  if (!displayRadios.length) {
    return null;
  }

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center px-4 mb-4">
        <h2
          className="text-xl font-bold leading-6"
          style={{ color: AppColors.textPrimary }}
        >
          Era Radio
        </h2>
        <span className="text-sm" style={{ color: AppColors.textSecondary }}>
          See all
        </span>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4">
          {displayRadios.map((radio) => (
            <div key={radio.id} className="w-36 flex-shrink-0">
              <button
                onClick={() => onRadioPress?.(radio.id)}
                className="w-36 h-36 transition-opacity hover:opacity-80 active:opacity-80"
              >
                <RadioCoverDisplay
                  picture_url={radio.eraCoverUrl || radio.picture_url}
                  albumImages={radio.albumImages}
                  backgroundColor={getEraBackgroundColor(radio.era)}
                  size={144}
                  showCircles={true}
                />
              </button>

              {/* Text below card */}
              <div className="mt-3 w-36">
                <p
                  className="text-sm font-medium leading-[18px] mb-1 line-clamp-2"
                  style={{ color: AppColors.textPrimary }}
                >
                  {radio.name}
                </p>
                {radio.recordings_count !== undefined && (
                  <p
                    className="text-xs leading-[14px]"
                    style={{ color: AppColors.textTertiary }}
                  >
                    {radio.recordings_count} track
                    {radio.recordings_count !== 1 ? "s" : ""}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
