/**
 * Vite Configuration File
 *
 * Vite is a modern build tool that provides:
 * - Fast Hot Module Replacement (HMR) for development
 * - Optimized production builds
 * - Native ES modules support
 *
 * This configuration file customizes Vite's behavior for this React project.
 *
 * Learn more: https://vitejs.dev/config/
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Vite Configuration
 *
 * @returns {UserConfig} Vite configuration object
 *
 * Plugins:
 * - @vitejs/plugin-react: Enables React Fast Refresh and JSX transformation
 */
export default defineConfig({
  plugins: [react()], // React plugin enables JSX and Fast Refresh
});
