import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * usePreviousPath hook
 * @returns {string} currentPath
 * @returns {string | null} previousPath
 */
export const usePreviousPath = () => {
  const location = useLocation();
  const prevPathRef = useRef<string | null>(null);

  useEffect(() => {
    prevPathRef.current = location.pathname;
  }, [location.pathname]);

  return {
    currentPath: location.pathname,
    previousPath: prevPathRef.current,
  };
};
