'use client';

import Image from 'next/image';
import { AppColors } from '@/lib/theme';

interface AlbumCardProps {
  id?: number;
  title: string;
  artist: string;
  coverUrl?: string | null;
  imageUrl?: string;
  picture_url?: string | null;
  onPress?: () => void;
  size?: number;
}

export default function AlbumCard({
  title,
  artist,
  coverUrl,
  imageUrl,
  picture_url,
  onPress,
  size = 144,
}: AlbumCardProps) {
  const imageSrc = coverUrl || imageUrl || picture_url;

  return (
    <button
      onClick={onPress}
      className="text-left transition-opacity hover:opacity-70 active:opacity-70"
      style={{ width: size }}
    >
      <div
        className="mb-2 rounded-lg overflow-hidden"
        style={{ width: size, height: size }}
      >
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={size}
            height={size}
            className="w-full h-full object-cover"
            unoptimized
          />
        ) : (
          <div
            className="flex items-center justify-center"
            style={{
              width: size,
              height: size,
              backgroundColor: AppColors.bgCard,
            }}
          >
            <span
              className="text-[#666666]"
              style={{ fontSize: size / 3 }}
            >
              ♪
            </span>
          </div>
        )}
      </div>
      <p
        className="text-sm font-medium leading-[18px] text-white mb-1 line-clamp-2"
        style={{ color: AppColors.textPrimary }}
      >
        {title}
      </p>
      <p
        className="text-xs leading-[14px] line-clamp-1"
        style={{ color: AppColors.textTertiary }}
      >
        {artist}
      </p>
    </button>
  );
}

