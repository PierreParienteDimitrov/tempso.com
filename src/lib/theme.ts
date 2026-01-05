/**
 * Theme System - Mobile App Colors and Typography
 * Ported from tempso-app/mobile-app/src/theme
 */

/**
 * App-wide color palette matching mobile app
 */
export const AppColors = {
  // Backgrounds
  bgPage: '#000000',
  bgPrimary: '#000000',
  bgCard: '#111111',
  bgInput: '#1A1A1A',

  // Text
  textPrimary: '#FFFFFF',
  textSecondary: '#CCCCCC',
  textTertiary: '#999999',
  textQuaternary: '#666666',

  // Borders
  borderPrimary: '#333333',
  borderSecondary: '#222222',

  // Actions
  actionPrimary: '#FFFFFF',

  // Status
  success: '#4CAF50',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',
} as const;

/**
 * Era Colors - Classical Music Period Theming
 */
export interface EraColorScheme {
  background: string;
  backgroundHover: string;
  text: string;
  border: string;
}

export const EraColors: Record<string, EraColorScheme> = {
  medieval: {
    background: '#8B4513',
    backgroundHover: '#A0522D',
    text: '#D2691E',
    border: '#8B4513',
  },
  renaissance: {
    background: '#DAA520',
    backgroundHover: '#F0C040',
    text: '#FFD700',
    border: '#DAA520',
  },
  baroque: {
    background: '#4169E1',
    backgroundHover: '#5B7FE5',
    text: '#6495ED',
    border: '#4169E1',
  },
  classical: {
    background: '#2E8B57',
    backgroundHover: '#3CB371',
    text: '#3CB371',
    border: '#2E8B57',
  },
  'early-romantic': {
    background: '#9370DB',
    backgroundHover: '#A88FE0',
    text: '#BA55D3',
    border: '#9370DB',
  },
  romantic: {
    background: '#DC143C',
    backgroundHover: '#E53850',
    text: '#FF6B7A',
    border: '#DC143C',
  },
  'late-romantic': {
    background: '#8B008B',
    backgroundHover: '#9B109B',
    text: '#BA55D3',
    border: '#8B008B',
  },
  modern: {
    background: '#FF8C00',
    backgroundHover: '#FFA040',
    text: '#FFA500',
    border: '#FF8C00',
  },
  contemporary: {
    background: '#00CED1',
    backgroundHover: '#20E0E3',
    text: '#40E0D0',
    border: '#00CED1',
  },
};

/**
 * Get era background color
 */
export function getEraBackgroundColor(era: string | null | undefined): string {
  if (!era) {
    return AppColors.bgCard;
  }

  const normalizedEra = era.toLowerCase().replace(/\s+/g, '-');
  return EraColors[normalizedEra]?.background || AppColors.bgCard;
}

