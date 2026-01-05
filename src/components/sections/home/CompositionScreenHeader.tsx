"use client";

import { AppColors, EraColors } from "@/lib/theme";

interface CompositionScreenHeaderProps {
  composer: {
    full_name: string;
    picture_url: string | null;
    period?: string | null;
  };
  composition: {
    title: string;
  };
  showBackButton?: boolean;
}

// Helper to get era text color (similar to getEraColorValues in tempso-app)
function getEraTextColor(era: string | null | undefined): string {
  if (!era) {
    return AppColors.textPrimary;
  }
  const normalizedEra = era.toLowerCase().replace(/\s+/g, '-');
  // For Baroque, use yellow as shown in the image, otherwise use era text color
  if (normalizedEra === 'baroque') {
    return '#FFD700'; // Yellow for Baroque
  }
  return EraColors[normalizedEra]?.text || AppColors.textPrimary;
}

export default function CompositionScreenHeader({
  composer,
  composition,
  showBackButton = false,
}: CompositionScreenHeaderProps) {
  const composerName = composer.full_name.toUpperCase();
  const compositionTitle = composition.title;
  const eraTextColor = getEraTextColor(composer.period);

  return (
    <header
      className="relative border-b"
      style={{
        backgroundColor: AppColors.bgPage,
        borderColor: AppColors.borderPrimary,
        ...(composer.picture_url
          ? {
              backgroundImage: `url(${composer.picture_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}),
      }}
    >
      {/* Mobile overlay gradient - transparent at top, 100% opacity at bottom */}
      {composer.picture_url && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(to bottom, transparent 0%, ${AppColors.bgPage} 100%)`,
          }}
        />
      )}

      <div
        className={`px-4 md:px-6 pt-6 ${composer.picture_url ? "relative z-10" : ""}`}
      >
        {/* Back Navigation */}
        {showBackButton && (
          <div className="mb-4 text-white">
            <button className="text-sm">← Back to Artist</button>
          </div>
        )}

        {/* Title and Subtitle */}
        <div className="mb-6 mt-16">
          <h1
            className="font-bold mb-2 text-2xl md:text-3xl"
            style={{ color: AppColors.textPrimary }}
          >
            <b
              className="text-[14px] leading-[17px] uppercase block mb-4"
              style={{
                color: eraTextColor,
              }}
            >
              {composerName}
            </b>
            <span className="block">{compositionTitle}</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
