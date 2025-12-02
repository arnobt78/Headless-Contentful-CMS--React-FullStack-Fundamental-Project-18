/**
 * Custom Hook: useFetchProjects
 * 
 * This is a custom React hook that handles fetching project data from Contentful CMS.
 * 
 * Key Concepts:
 * - Custom Hooks: Reusable logic that can be shared between components
 * - TanStack React Query: Provides caching, deduplication, and automatic refetching
 * - useQuery: React Query hook that manages async data fetching
 * - Query Keys: Unique identifiers for cached data
 * - Async/Await: Handles asynchronous operations (API requests)
 * - Error Handling: Built-in error handling from React Query
 * - TypeScript: Type safety for data structures and return values
 * 
 * React Query Benefits:
 * - Automatic caching: Prevents redundant API calls
 * - Request deduplication: Multiple components requesting same data = one API call
 * - Background refetching: Keeps data fresh automatically
 * - Loading and error states: Built-in state management
 * - Optimistic updates: Can update UI before server responds
 * 
 * Contentful Integration:
 * - Uses Contentful's JavaScript SDK (createClient)
 * - Fetches entries of type "cmsReactProject"
 * - Transforms Contentful's nested structure to our app's Project format
 */

import { useQuery } from "@tanstack/react-query";
import { createClient } from "contentful";
import type { Project, UseFetchProjectsReturn } from "./types";

/**
 * Contentful Project Fields Interface
 * 
 * Defines the structure of data returned from Contentful CMS.
 * This matches the content model defined in Contentful.
 */
interface ContentfulProjectFields {
  title: string;
  url: string;
  image?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
}

/**
 * Contentful Client Configuration
 * 
 * Creates a client instance to interact with Contentful API.
 * - space: Your Contentful space ID
 * - environment: Contentful environment (usually "master")
 * - accessToken: API key from environment variables (VITE_API_KEY)
 * 
 * Note: Environment variables in Vite must be prefixed with VITE_
 */
const client = createClient({
  space: "n73jtsou6snf",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY as string,
});

/**
 * Async Function: fetchProjects
 * 
 * Fetches projects from Contentful and transforms the data structure.
 * This function is used by React Query's useQuery hook.
 * 
 * Process:
 * 1. Calls Contentful API to get entries
 * 2. Maps/transforms the response to match our Project interface
 * 3. Extracts image URL from nested Contentful structure
 * 4. Returns transformed data
 * 5. React Query handles errors automatically
 * 
 * @returns {Promise<Project[]>} Promise that resolves to array of Project objects
 */
const fetchProjects = async (): Promise<Project[]> => {
  // Fetch entries from Contentful
  // content_type filters to only get "cmsReactProject" entries
  const response = await client.getEntries({
    content_type: "cmsReactProject",
  });
  
  // Transform Contentful's nested structure to our simpler Project format
  // Contentful returns: item.fields.title, item.fields.image.fields.file.url
  // We transform to: { title, url, id, img }
  const mappedProjects: Project[] = response.items.map((item) => {
    // Type assertion: Contentful's type system is complex, so we cast to our interface
    const fields = item.fields as unknown as ContentfulProjectFields;
    const { title, url, image } = fields;
    const id = item.sys.id; // Unique identifier from Contentful
    
    // Optional chaining (?.) safely accesses nested image URL
    // If image doesn't exist, img will be undefined
    const img = image?.fields?.file?.url;
    
    return { title, url, id, img };
  });
  
  return mappedProjects;
};

/**
 * Custom Hook: useFetchProjects
 * 
 * Fetches project data from Contentful CMS using React Query.
 * React Query provides automatic caching, deduplication, and state management.
 * 
 * @returns {UseFetchProjectsReturn} Object containing:
 *   - loading: boolean indicating if data is being fetched (isLoading from React Query)
 *   - projects: Array of Project objects (data from React Query)
 * 
 * Usage Example:
 *   const { loading, projects } = useFetchProjects();
 * 
 * React Query Features Used:
 * - Query Key: ['projects'] - Unique identifier for this query's cache
 * - Query Function: fetchProjects - Async function that fetches the data
 * - Automatic Caching: Data is cached and reused across components
 * - Request Deduplication: Multiple components = one API call
 * - Background Refetching: Data refreshes automatically based on staleTime
 */
export const useFetchProjects = (): UseFetchProjectsReturn => {
  /**
   * useQuery Hook from React Query
   * 
   * Manages the entire data fetching lifecycle:
   * - Fetches data on mount (only if no cached data exists)
   * - Caches the result (persisted to localStorage)
   * - Deduplicates simultaneous requests
   * - Provides loading, error, and data states
   * - Automatically refetches when data becomes stale
   * 
   * Query Key: ['projects']
   * - Unique identifier for this query
   * - Used for caching and invalidation
   * - Can be invalidated to trigger refetch: queryClient.invalidateQueries(['projects'])
   * 
   * Query Function: fetchProjects
   * - Async function that returns the data
   * - React Query handles errors automatically
   * - Errors are available via error property (not used here, but available)
   * 
   * Loading State Logic:
   * - isPending: true when query has no data (not even cached)
   * - If cached data exists, isPending is false, so no skeleton shows
   * - This prevents skeleton flash on page refresh when cache exists
   */
  const { data: projects = [], isPending: loading } = useQuery({
    queryKey: ['projects'], // Unique cache key for this query
    queryFn: fetchProjects, // Function that fetches the data
    // Additional options can be added here, but defaults from QueryClient are used
  });
  
  // Return in the same format as before for backward compatibility
  // This ensures existing components don't need to change
  // isPending is used instead of isLoading to prevent skeleton flash when cached data exists
  return { loading, projects };
};
