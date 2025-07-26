import { usePageViews } from '@/hooks/usePageViews';

export function PageViewCounter() {
  const { getCurrentPageViews } = usePageViews();
  const views = getCurrentPageViews();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
        {views.toLocaleString()} subjective views…
      </div>
    </div>
  );
}