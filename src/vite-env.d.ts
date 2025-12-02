/**
 * Vite Environment Type Declarations
 * 
 * This file provides TypeScript type definitions for:
 * 1. Vite-specific features (import.meta.env)
 * 2. Asset imports (images, SVGs, etc.)
 * 
 * Why This File Exists:
 * - TypeScript doesn't know about Vite's special features by default
 * - Asset imports need type definitions to work with TypeScript
 * - Environment variables need typing for autocomplete and type safety
 * 
 * File Extension: .d.ts = Declaration file (type definitions only, no runtime code)
 */

/// <reference types="vite/client" />

/* ============================================================================
   ASSET MODULE DECLARATIONS
   ============================================================================ */
/**
 * These declarations tell TypeScript how to handle imported assets.
 * Without these, TypeScript would throw errors when importing images/SVGs.
 */

/**
 * SVG Module Declaration
 * 
 * Allows importing SVG files in two ways:
 * 1. Default import: import svg from './image.svg' → returns URL string
 * 2. Named import: import { ReactComponent } from './image.svg' → React component
 */
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

/**
 * PNG Image Module Declaration
 * Importing a PNG file returns its URL as a string
 * Example: import img from './image.png' → "http://localhost:5173/image.png"
 */
declare module "*.png" {
  const src: string;
  export default src;
}

/**
 * JPG Image Module Declaration
 */
declare module "*.jpg" {
  const src: string;
  export default src;
}

/**
 * JPEG Image Module Declaration
 */
declare module "*.jpeg" {
  const src: string;
  export default src;
}

/**
 * GIF Image Module Declaration
 */
declare module "*.gif" {
  const src: string;
  export default src;
}

/**
 * WebP Image Module Declaration
 */
declare module "*.webp" {
  const src: string;
  export default src;
}

/* ============================================================================
   ENVIRONMENT VARIABLE TYPE DECLARATIONS
   ============================================================================ */
/**
 * These declarations provide type safety for environment variables.
 * 
 * Vite Environment Variables:
 * - Must be prefixed with VITE_ to be exposed to client code
 * - Accessible via import.meta.env.VITE_*
 * - readonly prevents accidental modification
 */

/**
 * ImportMetaEnv Interface
 * 
 * Defines the structure of import.meta.env object.
 * Add new environment variables here as you add them to .env file.
 */
interface ImportMetaEnv {
  readonly VITE_API_KEY: string; // Contentful API access token
}

/**
 * ImportMeta Interface
 * 
 * Extends Vite's ImportMeta type to include our custom environment variables.
 * This enables type checking and autocomplete for import.meta.env.VITE_API_KEY
 */
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
