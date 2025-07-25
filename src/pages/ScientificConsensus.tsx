import { useSimple } from '@/test-simple-context';

export default function ScientificConsensus() {
  console.log('ScientificConsensus: Starting to load...');
  
  try {
    console.log('ScientificConsensus: About to call useSimple...');
    const { test } = useSimple();
    console.log('ScientificConsensus: useSimple worked, got:', test);
    
    return (
      <div className="min-h-screen py-8 pr-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Scientific Consensus Test</h1>
          <p>Simple context test: {test}</p>
          <p>If you see this, the basic context pattern works.</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ScientificConsensus: Error with useSimple:', error);
    return (
      <div className="min-h-screen py-8 pr-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1>Context Error</h1>
          <p>Error: {String(error)}</p>
        </div>
      </div>
    );
  }
}