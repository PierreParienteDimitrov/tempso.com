"use client";

import { AppColors } from "@/lib/theme";

export default function CompositionScreenFiltersButton() {
  return (
    <div className="lg:hidden mt-4 px-4">
      <button
        className="w-full flex items-center justify-center px-4 py-3 min-h-[44px] rounded-lg transition-all duration-200 ease-out"
        style={{
          border: `1px solid ${AppColors.borderPrimary}`,
          backgroundColor: "transparent",
          color: AppColors.textSecondary,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = AppColors.borderSecondary;
          e.currentTarget.style.color = AppColors.textPrimary;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = AppColors.borderPrimary;
          e.currentTarget.style.color = AppColors.textSecondary;
        }}
        aria-label="Open filters"
      >
        <span className="text-sm font-medium">Filters</span>
      </button>
    </div>
  );
}
