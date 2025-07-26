import { useLanguage } from './useLanguage';
import { aqalMapData } from '@/data/aqalMapData';
import { aqalMapDataDE } from '@/data/aqalMapData.de';
import { aqalMapDataES } from '@/data/aqalMapData.es';
import { aqalMapDataFR } from '@/data/aqalMapData.fr';

export function useAQALMapData() {
  const { language } = useLanguage();
  
  switch (language) {
    case 'de':
      return aqalMapDataDE;
    case 'es':
      return aqalMapDataES;
    case 'fr':
      return aqalMapDataFR;
    default:
      return aqalMapData;
  }
}