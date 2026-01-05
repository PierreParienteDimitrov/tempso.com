'use client';

import { AlbumData } from '@/types/home';
import { AppColors } from '@/lib/theme';
import AlbumCard from '@/components/cards/AlbumCard';

interface LatestAlbumsGridProps {
  albums: AlbumData[];
  onAlbumPress?: (albumId: number) => void;
}

export default function LatestAlbumsGrid({
  albums,
  onAlbumPress,
}: LatestAlbumsGridProps) {
  if (!albums?.length) {
    return null;
  }

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center px-4 mb-4">
        <h2
          className="text-xl font-bold leading-6"
          style={{ color: AppColors.textPrimary }}
        >
          Latest Albums
        </h2>
        <span
          className="text-sm"
          style={{ color: AppColors.textSecondary }}
        >
          See all
        </span>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 px-4">
          {albums.map((album) => (
            <div key={album.id} className="w-36 flex-shrink-0">
              <AlbumCard
                title={album.name || 'Unknown Album'}
                artist={album.label_name || 'Various Artists'}
                picture_url={album.picture_url}
                onPress={() => onAlbumPress?.(album.id)}
                size={144}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

