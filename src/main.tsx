/**
 * Main Entry Point - Application Bootstrap
 *
 * This file is the entry point of the React application. It:
 * 1. Imports React and ReactDOM for rendering
 * 2. Imports the root App component
 * 3. Imports global CSS styles (Tailwind + custom styles)
 * 4. Sets up TanStack React Query for data fetching and caching
 * 5. Mounts the React app to the DOM
 */

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./global.css";

// Get the root DOM element where React will mount the application
// This element is defined in index.html
const rootElement = document.getElementById("root");

// Error handling: Ensure the root element exists before rendering
// This prevents runtime errors if the HTML structure is incorrect
if (!rootElement) {
  throw new Error("Failed to find the root element");
}

/**
 * QueryClient Configuration
 *
 * TanStack React Query client that manages:
 * - Data caching (prevents redundant API calls)
 * - Background refetching
 * - Request deduplication
 * - Error and loading states
 * - Persistent caching across page refreshes
 *
 * Default Options:
 * - staleTime: 5 minutes - Data is considered fresh for 5 minutes
 * - gcTime: 10 minutes - Cached data is kept for 10 minutes after last use
 * - refetchOnWindowFocus: false - Prevents refetch on window focus (reduces API calls)
 * - refetchOnMount: false - Don't refetch on mount if we have cached data (prevents API call on refresh)
 * - retry: 1 - Retry failed requests once
 *
 * Persistence:
 * - Cache is persisted to localStorage
 * - Survives page refreshes
 * - Data loads instantly from cache on refresh (no skeleton, no API call if fresh)
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes - data is fresh for 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes - cache garbage collection time
      refetchOnWindowFocus: false, // Prevents refetch when user switches tabs/windows
      refetchOnMount: false, // Don't refetch on mount if cached data exists (prevents API call on refresh)
      refetchOnReconnect: true, // Refetch when network reconnects
      retry: 1, // Retry failed requests once
    },
  },
});

/**
 * Persist Query Cache to localStorage
 *
 * This ensures the cache survives page refreshes.
 * When the page loads, cached data is restored from localStorage,
 * so users see content immediately without API calls or skeleton loaders.
 *
 * How it works:
 * 1. On app load: Restore cached data from localStorage
 * 2. On data fetch: Save new data to localStorage
 * 3. On refresh: Load cached data instantly (no API call if data is fresh)
 *
 * Cache Key: 'REACT_QUERY_CACHE' - Storage key in localStorage
 */
const CACHE_KEY = "REACT_QUERY_CACHE";
const CACHE_TIMESTAMP_KEY = "REACT_QUERY_CACHE_TIMESTAMP";
const CACHE_DURATION = 1000 * 60 * 5; // 5 minutes - matches staleTime

// Restore cache from localStorage on app initialization
// This happens before React renders, so cached data is available immediately
try {
  const cachedData = localStorage.getItem(CACHE_KEY);
  const cacheTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);

  if (cachedData && cacheTimestamp) {
    const timestamp = parseInt(cacheTimestamp, 10);
    const now = Date.now();

    // Only restore cache if it's still fresh (within staleTime)
    if (now - timestamp < CACHE_DURATION) {
      const parsedCache = JSON.parse(cachedData);
      // Set the cached data in React Query's cache
      // This makes it available immediately, preventing API calls and skeleton loaders
      queryClient.setQueryData(["projects"], parsedCache);
    } else {
      // Cache is stale, remove it
      localStorage.removeItem(CACHE_KEY);
      localStorage.removeItem(CACHE_TIMESTAMP_KEY);
    }
  }
} catch (error) {
  console.warn("Failed to restore cache from localStorage:", error);
  // Clear potentially corrupted cache
  localStorage.removeItem(CACHE_KEY);
  localStorage.removeItem(CACHE_TIMESTAMP_KEY);
}

// Save cache to localStorage whenever projects data is fetched or updated
// This subscription listens to all cache events
queryClient.getQueryCache().subscribe((event) => {
  // Only persist the 'projects' query data
  if (event?.query?.queryKey?.[0] === "projects" && event.query.state.data) {
    try {
      // Save both the data and timestamp
      localStorage.setItem(CACHE_KEY, JSON.stringify(event.query.state.data));
      localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());
    } catch (error) {
      console.warn("Failed to persist cache to localStorage:", error);
      // Handle localStorage quota exceeded or other errors
    }
  }
});

// Create a React root and render the App component
// ReactDOM.createRoot() is the modern way to render React 18+ applications
// React.StrictMode enables additional checks and warnings during development
// QueryClientProvider wraps the app to provide React Query functionality to all components
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
