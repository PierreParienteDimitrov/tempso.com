/**
 * Mock data for homepage preview
 * Static data matching mobile app structure
 */

import { ForYouItem, AlbumData, RadioData } from '@/types/home';

/**
 * Static ForYou items
 */
export const FOR_YOU_ITEMS: ForYouItem[] = [
  {
    id: 'weekly-discovery',
    title: 'Weekly Discovery',
    description: 'Your personalized weekly playlist',
    href: '/weekly-discovery',
    icon: 'weekly-discovery',
  },
  {
    id: 'likes',
    title: 'Your Likes',
    description: 'All your favorite recordings',
    href: '/likes',
    icon: 'likes',
  },
  {
    id: 'recent',
    title: 'Recently Played',
    description: 'Your listening history',
    href: '/recent',
    icon: 'recent',
  },
];

/**
 * Mock albums data
 */
export const MOCK_ALBUMS: AlbumData[] = [
  {
    id: 1,
    name: 'Beethoven: Complete Symphonies',
    picture_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    release_date: null,
    label_name: 'Deutsche Grammophon',
    recordings_count: 9,
  },
  {
    id: 2,
    name: 'Mozart: Piano Concertos',
    picture_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
    release_date: null,
    label_name: 'Philips',
    recordings_count: 27,
  },
  {
    id: 3,
    name: 'Bach: Goldberg Variations',
    picture_url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400',
    release_date: null,
    label_name: 'Sony Classical',
    recordings_count: 1,
  },
  {
    id: 4,
    name: 'Chopin: Nocturnes',
    picture_url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf29a9e?w=400',
    release_date: null,
    label_name: 'EMI Classics',
    recordings_count: 21,
  },
  {
    id: 5,
    name: 'Tchaikovsky: Swan Lake',
    picture_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400',
    release_date: null,
    label_name: 'Naxos',
    recordings_count: 1,
  },
  {
    id: 6,
    name: 'Vivaldi: The Four Seasons',
    picture_url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400',
    release_date: null,
    label_name: 'Decca',
    recordings_count: 1,
  },
  {
    id: 7,
    name: 'Debussy: Clair de Lune',
    picture_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    release_date: null,
    label_name: 'Warner Classics',
    recordings_count: 1,
  },
  {
    id: 8,
    name: 'Schubert: Winterreise',
    picture_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
    release_date: null,
    label_name: 'Hyperion',
    recordings_count: 1,
  },
];

/**
 * Mock era radios
 */
export const MOCK_ERA_RADIOS: RadioData[] = [
  {
    id: 1,
    name: 'Baroque Radio',
    picture_url: null,
    radio_type: 'era',
    era: 'baroque',
    eraCoverUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400',
    recordings_count: 1250,
    albumImages: [
      { picture_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200' },
    ],
  },
  {
    id: 2,
    name: 'Classical Radio',
    picture_url: null,
    radio_type: 'era',
    era: 'classical',
    eraCoverUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400',
    recordings_count: 980,
    albumImages: [
      { picture_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf29a9e?w=200' },
    ],
  },
  {
    id: 3,
    name: 'Romantic Radio',
    picture_url: null,
    radio_type: 'era',
    era: 'romantic',
    eraCoverUrl: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=400',
    recordings_count: 2100,
    albumImages: [
      { picture_url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf29a9e?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200' },
    ],
  },
];

/**
 * Mock instrument radios
 */
export const MOCK_INSTRUMENT_RADIOS: RadioData[] = [
  {
    id: 10,
    name: 'Piano Radio',
    picture_url: null,
    radio_type: 'instrument',
    recordings_count: 3200,
    instrument: {
      id: 1,
      name: 'Piano',
      category: { id: 1, name: 'Keyboard' },
    },
    albumImages: [
      { picture_url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf29a9e?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200' },
    ],
  },
  {
    id: 11,
    name: 'Violin Radio',
    picture_url: null,
    radio_type: 'instrument',
    recordings_count: 1850,
    instrument: {
      id: 2,
      name: 'Violin',
      category: { id: 2, name: 'Strings' },
    },
    albumImages: [
      { picture_url: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200' },
    ],
  },
  {
    id: 12,
    name: 'Cello Radio',
    picture_url: null,
    radio_type: 'instrument',
    recordings_count: 920,
    instrument: {
      id: 3,
      name: 'Cello',
      category: { id: 2, name: 'Strings' },
    },
    albumImages: [
      { picture_url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=200' },
      { picture_url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf29a9e?w=200' },
    ],
  },
];

