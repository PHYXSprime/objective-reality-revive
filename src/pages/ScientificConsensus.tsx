import { useLanguage } from '@/hooks/useLanguage';

export default function ScientificConsensus() {
  console.log('ScientificConsensus: Component loading...');
  
  let t;
  try {
    console.log('ScientificConsensus: Attempting to get language context...');
    const { t: translationFn } = useLanguage();
    t = translationFn;
    console.log('ScientificConsensus: Language context loaded successfully');
  } catch (error) {
    console.error('ScientificConsensus: Error with useLanguage:', error);
    return (
      <div className="min-h-screen py-8 pr-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Language Error</h1>
          <p>Error: {String(error)}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen py-8 pr-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">{t('scientificConsensus.title')}</h1>
        <p>Testing translation: {t('scientificConsensus.confidenceLevels')}</p>
      </div>
    </div>
  );
}