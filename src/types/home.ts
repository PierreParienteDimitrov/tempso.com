/**
 * Homepage type definitions
 * Ported from tempso-app/packages/shared-types
 */

/**
 * For You section item types
 */
export type ForYouItemIcon = 'weekly-discovery' | 'likes' | 'recent';

/**
 * For You item data structure
 */
export interface ForYouItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: ForYouItemIcon;
}

/**
 * Album data structure
 */
export interface AlbumData {
  id: number;
  name?: string;
  picture_url: string | null;
  release_date: string | null;
  total_tracks?: number | null;
  label_name?: string | null;
  recordings_count?: number;
  duration_ms?: number | null;
  is_published?: boolean;
  label_id?: number | null;
}

/**
 * Radio album image
 */
export interface RadioAlbumImage {
  picture_url: string | null;
  album_name?: string;
}

/**
 * Instrument info
 */
export interface InstrumentInfo {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
  };
}

/**
 * Radio data structure
 */
export interface RadioData {
  id: number;
  name?: string;
  picture_url: string | null;
  radio_type: string;
  tracks_per_week?: number;
  last_generated_at?: string | null;
  recordings_count?: number;
  albumImages?: RadioAlbumImage[];
  era?: string | null;
  eraCoverUrl?: string | null;
  instrument?: InstrumentInfo | null;
  duration_ms?: number | null;
  source_entity_type?: string | null;
  source_entity_id?: number | null;
  refresh_frequency?: string | null;
  current_week_id?: string | null;
  next_generation_at?: string | null;
  is_active?: boolean;
  created_at?: string | null;
  updated_at?: string | null;
  description?: string | null;
}

