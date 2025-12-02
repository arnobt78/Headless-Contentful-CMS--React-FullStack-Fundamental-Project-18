/**
 * Projects Component - Dynamic Project Display
 *
 * This component displays a grid of project cards fetched from Contentful CMS.
 * Features:
 * - Loading state with skeleton UI
 * - Responsive grid layout (1 col mobile, 2 cols tablet, 3 cols desktop)
 * - Modern card design with hover effects and animations
 * - Staggered fade-in animations for visual appeal
 * - Interactive hover states with image zoom and overlay effects
 *
 * Key Concepts:
 * - Custom hook (useFetchProjects) for data fetching
 * - Conditional rendering based on loading state
 * - Array mapping to render dynamic content
 * - Tailwind CSS for styling and animations
 */

import { useFetchProjects } from "./fetchProjects";
import ProjectSkeleton from "./ProjectSkeleton";

/**
 * Projects Component
 * @returns {React.ReactElement} The projects section with dynamic project cards
 */
const Projects = (): React.ReactElement => {
  // Custom hook that handles data fetching from Contentful CMS
  // Returns: { loading: boolean, projects: Project[] }
  const { loading, projects } = useFetchProjects();

  // Show skeleton loader while data is being fetched
  // This provides better UX than showing a blank screen
  if (loading) {
    return (
      <section className="py-20 px-4">
        <ProjectSkeleton />
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-slate-400">
      {/* Section Header */}
      <div className="text-center mb-16">
        {/* Gradient text effect using bg-clip-text */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#645cff] to-[#837dff] bg-clip-text text-transparent mb-2">
          projects
        </h2>
        {/* Decorative underline with gradient */}
        <div className="bg-gradient-to-r from-[#645cff] to-[#837dff] w-20 h-1.5 mx-auto pt-2 rounded-full"></div>
        {/* Section description */}
        <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
          Explore our collection of innovative projects built with modern
          technologies
        </p>
      </div>

      {/* Responsive Grid: 1 col (mobile) → 2 cols (tablet) → 3 cols (desktop) */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Map through projects array to render each project card */}
        {projects.map((project, index) => {
          const { id, img, url, title } = project;
          return (
            <a
              key={id} // React key for efficient list rendering
              href={url}
              target="_blank" // Open link in new tab
              rel="noreferrer" // Security: prevents referrer information from being passed
              // Group class enables child elements to respond to parent hover
              className="group bg-white block rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 animate-fade-in"
              // Staggered animation: each card animates with increasing delay
              // Creates a cascading effect for visual appeal
              style={{
                animationDelay: `${index * 100}ms`, // 0ms, 100ms, 200ms, etc.
                animationFillMode: "both", // Maintains both start and end states
              }}
            >
              {/* Image Container with Overlay Effects */}
              <div className="relative overflow-hidden">
                {img && (
                  <>
                    {/* Project Image */}
                    {/* group-hover:scale-110 creates zoom effect on card hover */}
                    <img
                      src={img}
                      alt={title}
                      className="w-full block object-cover h-64 transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Gradient Overlay - appears on hover */}
                    {/* Creates depth and improves text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* External Link Icon - slides in from top on hover */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                        <svg
                          className="w-6 h-6 text-[#645cff]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6">
                {/* Project Title - changes color on hover */}
                <h5 className="text-xl font-semibold text-slate-800 group-hover:text-[#645cff] transition-colors duration-300 text-center">
                  {title}
                </h5>
                {/* Call-to-Action with Animated Arrow */}
                <div className="mt-2 flex items-center justify-center">
                  <span className="text-sm text-slate-500 group-hover:text-[#645cff] transition-colors duration-300 font-medium">
                    View Project
                  </span>
                  {/* Arrow icon that slides right on hover */}
                  <svg
                    className="w-5 h-5 ml-2 text-slate-400 group-hover:text-[#645cff] group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
