'use client';

import { AppColors } from '@/lib/theme';

export default function ExploreSection() {
  return (
    <div className="px-4 mb-16">
      <h2
        className="text-xl font-bold leading-6 mb-4"
        style={{ color: AppColors.textPrimary }}
      >
        Explore
      </h2>
      <div className="flex flex-col gap-3">
        <button
          className="w-full bg-[#111111] p-5 rounded-lg border transition-opacity hover:opacity-70 active:opacity-70 text-left"
          style={{
            borderColor: AppColors.borderPrimary,
          }}
        >
          <p
            className="text-base font-semibold leading-[19px]"
            style={{ color: AppColors.textPrimary }}
          >
            Composers
          </p>
        </button>

        <button
          className="w-full bg-[#111111] p-5 rounded-lg border transition-opacity hover:opacity-70 active:opacity-70 text-left"
          style={{
            borderColor: AppColors.borderPrimary,
          }}
        >
          <p
            className="text-base font-semibold leading-[19px]"
            style={{ color: AppColors.textPrimary }}
          >
            Performers
          </p>
        </button>
      </div>
    </div>
  );
}

