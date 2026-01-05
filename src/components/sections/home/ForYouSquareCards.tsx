'use client';

import { ForYouItem } from '@/types/home';
import { AppColors } from '@/lib/theme';

interface ForYouSquareCardsProps {
  items: ForYouItem[];
  onItemPress?: (id: string) => void;
}

/**
 * Get gradient colors based on icon type
 */
const getGradientColors = (icon: string): string[] => {
  switch (icon) {
    case 'weekly-discovery':
      return ['#10B981', '#3B82F6', '#8B5CF6'];
    case 'likes':
      return ['#8B5CF6', '#EC4899', '#EF4444'];
    case 'recent':
      return ['#3B82F6', '#8B5CF6', '#EC4899'];
    default:
      return ['#3B82F6', '#8B5CF6', '#EC4899'];
  };
};

/**
 * Get icon SVG based on icon type
 */
const getIconSvg = (icon: string) => {
  switch (icon) {
    case 'weekly-discovery':
      return (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
    case 'likes':
      return (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case 'recent':
      return (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    default:
      return (
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      );
  }
};

export default function ForYouSquareCards({
  items,
  onItemPress,
}: ForYouSquareCardsProps) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="mb-16">
      <h2
        className="text-xl font-bold leading-6 px-4 mb-4"
        style={{ color: AppColors.textPrimary }}
      >
        For you
      </h2>

      {/* Horizontal scroll for cards */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4" style={{ scrollbarWidth: 'none' }}>
          {items.map((item) => {
            const gradientColors = getGradientColors(item.icon);
            const gradientStyle = {
              background: `linear-gradient(to bottom right, ${gradientColors[0]}, ${gradientColors[1]}, ${gradientColors[2]})`,
            };

            return (
              <div key={item.id} className="w-36 flex-shrink-0">
                {/* Square gradient card */}
                <button
                  onClick={() => onItemPress?.(item.id)}
                  className="w-36 h-36 rounded-lg overflow-hidden transition-opacity hover:opacity-80 active:opacity-80 flex items-center justify-center"
                  style={gradientStyle}
                >
                  <div className="text-white">
                    {getIconSvg(item.icon)}
                  </div>
                </button>

                {/* Text below card */}
                <div className="mt-3 w-36">
                  <p
                    className="text-sm font-medium leading-[18px] line-clamp-2"
                    style={{ color: AppColors.textPrimary }}
                  >
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

