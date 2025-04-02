'use client'

import { useTranslation } from 'react-i18next';
import { RoadmapData } from '@/types/roadmap';

export const useRoadmapData = (): RoadmapData => {
  const { t } = useTranslation();
  try {
    const data = t('roadmap.roadmap', { returnObjects: true });
    if (typeof data === 'object' && data !== null && 'phases' in data && Array.isArray(data.phases)) {
      const phases = data.phases as RoadmapData
      return phases;
    }
    console.error('Invalid roadmap data structure:', data);
    return [];
  } catch (error) {
    console.error('Error loading roadmap data:', error);
    return [];
  }
};