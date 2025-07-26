import { useLanguage } from './useLanguage';
import { phyxsMapData } from '@/data/phyxsMapData';
import { phyxsMapDataDE } from '@/data/phyxsMapData.de';
import { phyxsMapDataES } from '@/data/phyxsMapData.es';
import { phyxsMapDataFR } from '@/data/phyxsMapData.fr';

export function usePHYXSMapData() {
  const { language } = useLanguage();
  
  switch (language) {
    case 'de':
      return phyxsMapDataDE;
    case 'es':
      return phyxsMapDataES;
    case 'fr':
      return phyxsMapDataFR;
    default:
      return phyxsMapData;
  }
}