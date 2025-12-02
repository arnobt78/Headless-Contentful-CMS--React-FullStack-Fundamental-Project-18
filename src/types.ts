/**
 * TypeScript Type Definitions
 * 
 * This file contains all TypeScript interfaces and types used throughout the application.
 * 
 * Why TypeScript?
 * - Type Safety: Catches errors at compile time
 * - Better IDE Support: Autocomplete and IntelliSense
 * - Self-Documenting: Types serve as documentation
 * - Refactoring: Safer code changes with type checking
 * 
 * Type Categories:
 * 1. Contentful API Types: Match Contentful's response structure
 * 2. Application Types: Simplified types for our app's use
 */

// ============================================================================
// CONTENTFUL API TYPES
// ============================================================================
// These types match the structure returned by Contentful CMS API

/**
 * ContentfulImageFields
 * 
 * Represents image file metadata from Contentful.
 * Contentful stores images with nested metadata structure.
 */
export interface ContentfulImageFields {
  file: {
    url: string; // CDN URL for the image
    details?: {
      size?: number; // File size in bytes
      image?: {
        width?: number; // Image width in pixels
        height?: number; // Image height in pixels
      };
    };
    fileName?: string; // Original filename
    contentType?: string; // MIME type (e.g., "image/png")
  };
}

/**
 * ContentfulImage
 * 
 * Complete image entry structure from Contentful.
 * Includes both fields (image data) and sys (system metadata).
 */
export interface ContentfulImage {
  fields: ContentfulImageFields;
  sys: {
    id: string; // Unique identifier
    type: string; // Entry type
  };
}

/**
 * ContentfulProjectFields
 * 
 * Fields structure for a project entry in Contentful.
 * This matches the content model defined in Contentful CMS.
 */
export interface ContentfulProjectFields {
  title: string; // Project title
  url: string; // Project URL
  image?: ContentfulImage; // Optional project image
}

/**
 * ContentfulProjectSys
 * 
 * System metadata for a Contentful entry.
 * Contains administrative information like creation date, ID, etc.
 */
export interface ContentfulProjectSys {
  id: string; // Unique entry ID
  type: string; // Entry type
  createdAt?: string; // ISO timestamp of creation
  updatedAt?: string; // ISO timestamp of last update
  revision?: number; // Entry revision number
  contentType?: {
    sys: {
      id: string; // Content type ID
      type: string; // Link type
      linkType: string; // "ContentType"
    };
  };
}

/**
 * ContentfulProject
 * 
 * Complete project entry structure from Contentful API.
 * This is the raw structure returned by Contentful before transformation.
 */
export interface ContentfulProject {
  fields: ContentfulProjectFields; // Project data
  sys: ContentfulProjectSys; // System metadata
  metadata?: {
    tags?: Array<{ sys: { id: string; type: string } }>; // Optional tags
  };
}

// ============================================================================
// APPLICATION TYPES
// ============================================================================
// These are simplified types used within our application

/**
 * Project
 * 
 * Simplified project structure used in our application.
 * This is the transformed version of ContentfulProject after data mapping.
 * 
 * Differences from ContentfulProject:
 * - Flattened structure (no nested fields/sys)
 * - Simplified image (just URL string instead of nested object)
 * - Added id field for React keys
 */
export interface Project {
  id: string; // Unique identifier (from Contentful sys.id)
  title: string; // Project title
  url: string; // Project URL
  img?: string; // Optional image URL (extracted from Contentful's nested structure)
}

/**
 * UseFetchProjectsReturn
 * 
 * Return type for the useFetchProjects custom hook.
 * 
 * This type ensures components using the hook know exactly what to expect:
 * - loading: boolean to show/hide loading state
 * - projects: array of Project objects
 */
export interface UseFetchProjectsReturn {
  loading: boolean; // True while fetching data, false when complete
  projects: Project[]; // Array of project objects
}
