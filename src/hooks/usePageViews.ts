import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const API_BASE_URL = 'https://dev.objective-reality.info/api';

interface PageViews {
  [path: string]: number;
}

export function usePageViews() {
  const location = useLocation();
  const [views, setViews] = useState<PageViews>({});
  const [loading, setLoading] = useState(true);

  // Load all page views from API on mount
  useEffect(() => {
    const loadPageViews = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/page-views.php`);
        if (response.ok) {
          const data = await response.json();
          setViews(data);
        }
      } catch (error) {
        console.error('Failed to load page views:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPageViews();
  }, []);

  // Track page view when location changes
  useEffect(() => {
    if (loading) return; // Don't track while loading initial data

    const incrementPageView = async () => {
      const currentPath = location.pathname;
      
      try {
        const response = await fetch(`${API_BASE_URL}/page-views.php`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ path: currentPath }),
        });

        if (response.ok) {
          const data = await response.json();
          setViews(prevViews => ({
            ...prevViews,
            [currentPath]: data.views
          }));
        }
      } catch (error) {
        console.error('Failed to increment page view:', error);
        // Fallback to local increment if API fails
        setViews(prevViews => ({
          ...prevViews,
          [currentPath]: (prevViews[currentPath] || 0) + 1
        }));
      }
    };

    incrementPageView();
  }, [location.pathname, loading]);

  const getCurrentPageViews = () => {
    return views[location.pathname] || 0;
  };

  const getAllPageViews = () => {
    return views;
  };

  return {
    getCurrentPageViews,
    getAllPageViews,
    views,
    loading
  };
}