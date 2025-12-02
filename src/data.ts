/**
 * Static Project Data - Fallback/Demo Data
 * 
 * This file contains static project data that can be used as:
 * - Fallback data if Contentful API fails
 * - Demo data for development/testing
 * - Reference for the expected data structure
 * 
 * Note: In production, this data is typically replaced by Contentful CMS data.
 * The useFetchProjects hook fetches dynamic data from Contentful.
 * 
 * TypeScript: Uses Omit<Project, "id"> because static data doesn't have Contentful IDs
 */

import type { Project } from "./types";

/**
 * Static Projects Array
 * 
 * Array of project objects matching the Project interface structure.
 * Each project contains:
 * - title: Project name
 * - url: Live demo URL
 * - img: Local image path
 * 
 * Note: 'id' is omitted because these are static entries without Contentful IDs
 */
const projects: Omit<Project, "id">[] = [
  {
    title: "birthday buddy",
    url: "https://birthday-buddy-arnob.netlify.app/",
    img: "./assets/birthday.png",
  },
  {
    title: "tours",
    url: "https://tour-arnob.netlify.app/",
    img: "./assets/tours.png",
  },
  {
    title: "reviews",
    url: "https://reviews-arnob.netlify.app/",
    img: "./assets/reviews.png",
  },
  {
    title: "accordion",
    url: "https://accordion-arnob.netlify.app/",
    img: "./assets/questions.png",
  },
];

export default projects;
