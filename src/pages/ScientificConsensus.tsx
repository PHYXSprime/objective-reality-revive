import { useLanguage } from '@/hooks/useLanguage';

export default function ScientificConsensus() {
  const { t, isLoading, error } = useLanguage();

  if (isLoading) {
    return (
      <div className="min-h-screen py-8 pr-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Loading...</h1>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-8 pr-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Error</h1>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 pr-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-6">{t('scientificConsensus.title')}</h1>
        <p className="text-lg mb-8">{t('consensus.description')}</p>
        
        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">{t('scientificConsensus.criticalObservation')}</h2>
          <p className="text-muted-foreground">{t('scientificConsensus.criticalText')}</p>
        </div>
      </div>
    </div>
  );
}