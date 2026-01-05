'use client';

import { AppColors } from '@/lib/theme';
import ExploreSection from './ExploreSection';
import ForYouSquareCards from './ForYouSquareCards';
import LatestAlbumsGrid from './LatestAlbumsGrid';
import EraRadiosCards from './EraRadiosCards';
import InstrumentRadiosCards from './InstrumentRadiosCards';
import { FOR_YOU_ITEMS, MOCK_ALBUMS, MOCK_ERA_RADIOS, MOCK_INSTRUMENT_RADIOS } from '@/data/mockHomepage';

export default function MobileHomepagePreview() {
  return (
    <div
      className="w-full h-full overflow-y-auto"
      style={{
        backgroundColor: AppColors.bgPage,
        paddingTop: 16,
        paddingBottom: 40,
      }}
    >
      {/* Explore Section */}
      <ExploreSection />

      {/* For You Section - Square gradient cards */}
      <ForYouSquareCards items={FOR_YOU_ITEMS} />

      {/* Latest Albums */}
      <LatestAlbumsGrid albums={MOCK_ALBUMS} />

      {/* Era Radios - First 3 with text below */}
      <EraRadiosCards radios={MOCK_ERA_RADIOS} />

      {/* Instrument Radios */}
      <InstrumentRadiosCards radios={MOCK_INSTRUMENT_RADIOS} />
    </div>
  );
}

