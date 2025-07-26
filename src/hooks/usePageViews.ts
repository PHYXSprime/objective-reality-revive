import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const STORAGE_KEY = 'page_views';

interface PageViews {
  [path: string]: number;
}

export function usePageViews() {
  const location = useLocation();
  const [views, setViews] = useState<PageViews>({});

  // Load views from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setViews(JSON.parse(stored));
      } catch (error) {
        console.error('Failed to parse page views from storage:', error);
      }
    }
  }, []);

  // Track page view when location changes
  useEffect(() => {
    const currentPath = location.pathname;
    
    setViews(prevViews => {
      const newViews = {
        ...prevViews,
        [currentPath]: (prevViews[currentPath] || 0) + 1
      };
      
      // Save to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newViews));
      
      return newViews;
    });
  }, [location.pathname]);

  const getCurrentPageViews = () => {
    return views[location.pathname] || 0;
  };

  const getAllPageViews = () => {
    return views;
  };

  return {
    getCurrentPageViews,
    getAllPageViews,
    views
  };
}