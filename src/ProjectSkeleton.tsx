/**
 * ProjectSkeleton Component - Loading State UI
 * 
 * This component displays a skeleton/placeholder UI while project data is loading.
 * 
 * Benefits of Skeleton Loading:
 * - Better UX: Users see content structure immediately
 * - Perceived Performance: Feels faster than blank screen or spinner
 * - Reduces Layout Shift: Maintains page structure during loading
 * 
 * Design:
 * - Matches the actual project card layout
 * - Uses pulse animation for visual feedback
 * - Responsive grid matches Projects component
 * 
 * Key Concepts:
 * - Conditional Rendering: Shown while data loads
 * - Placeholder UI: Mimics final content structure
 * - CSS Animations: Pulse effect indicates loading state
 */

/**
 * ProjectSkeleton Component
 * @returns {React.ReactElement} Skeleton loading UI matching project card layout
 */
const ProjectSkeleton = (): React.ReactElement => {
  return (
    <>
      {/* Title Skeleton - Matches Projects component header */}
      <div className="text-center mb-16">
        {/* Title placeholder with gradient and pulse animation */}
        <div className="h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg animate-pulse w-48 mx-auto mb-4"></div>
        {/* Underline placeholder */}
        <div className="bg-gradient-to-r from-gray-200 to-gray-300 w-20 h-1.5 mx-auto mt-4 rounded-full animate-pulse"></div>
        {/* Description text placeholder */}
        <div className="h-6 bg-gray-200 rounded animate-pulse w-96 mx-auto mt-6 max-w-2xl"></div>
      </div>
      
      {/* Projects Grid Skeleton - Matches responsive grid layout */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Render 3 skeleton cards to match typical loading state */}
        {[1, 2, 3].map((item: number) => (
          <div
            key={item}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Image Skeleton - Matches project image height (h-64) */}
            {/* Gradient creates subtle shimmer effect */}
            <div className="h-64 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse"></div>
            
            {/* Content Skeleton - Matches project card padding */}
            <div className="p-6">
              {/* Title placeholder */}
              <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4 mx-auto mb-4"></div>
              {/* CTA text placeholder */}
              <div className="h-4 bg-gray-200 rounded animate-pulse w-32 mx-auto"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectSkeleton;

