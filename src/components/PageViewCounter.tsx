import { usePageViews } from '@/hooks/usePageViews';

export function PageViewCounter() {
  const { getCurrentPageViews } = usePageViews();
  const views = getCurrentPageViews();

  return (
    <div className="absolute top-4 right-4 z-10">
      <div className="text-indigo-600 dark:text-indigo-400 text-xs font-light opacity-70">
        {views.toLocaleString()} subjective views…
      </div>
    </div>
  );
}