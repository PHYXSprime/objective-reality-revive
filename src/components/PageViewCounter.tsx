import { usePageViews } from '@/hooks/usePageViews';

export function PageViewCounter() {
  const { getCurrentPageViews } = usePageViews();
  const views = getCurrentPageViews();

  return (
    <div className="absolute top-4 right-4 z-10">
      <div className="text-indigo-300 dark:text-indigo-300 text-xs font-light text-center" style={{ textShadow: '0 0 8px rgba(147, 197, 253, 0.8), 0 0 16px rgba(147, 197, 253, 0.4)' }}>
        <div className="font-medium">{views.toLocaleString()}</div>
        <div>subjective views</div>
      </div>
    </div>
  );
}