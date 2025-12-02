/**
 * Hero Component - Landing Section
 *
 * This component displays the hero/banner section at the top of the page.
 * It features:
 * - Main heading and descriptive text
 * - Responsive layout that adapts to different screen sizes
 * - Hero image that only shows on larger screens (lg breakpoint and above)
 *
 * Responsive Design:
 * - Mobile: Single column layout with text only
 * - Desktop (lg+): Two-column grid with text on left, image on right
 */

import heroImg from "./assets/hero.svg";

/**
 * Hero Component
 * @returns {React.ReactElement} The hero section with title, description, and image
 */
const Hero = (): React.ReactElement => {
  return (
    <section className="min-h-[40vh] bg-white flex items-center justify-center py-20 px-12">
      {/* Container with responsive grid layout */}
      {/* On large screens: 2-column grid (2fr text, 1fr image) */}
      <div className="max-w-7xl lg:grid lg:grid-cols-[2fr_1fr] lg:place-items-center lg:gap-16">
        {/* Text Content Section */}
        <div>
          <h1 className="mb-8 font-bold">Contentful CMS</h1>
          <p className="leading-8 max-w-3xl text-slate-600 text-justify">
            A modern React application showcasing seamless integration with
            Contentful headless CMS. Experience dynamic content management as we
            fetch and display projects in real-time using custom React hooks.
            This project demonstrates best practices in API integration,
            component architecture, and environment variable management for
            scalable web applications.
          </p>
        </div>

        {/* Hero Image Section - Hidden on mobile, visible on lg screens and above */}
        {/* This improves mobile performance by not loading the image on small screens */}
        <div className="hidden lg:block">
          <img
            src={heroImg}
            alt="woman and the browser"
            className="w-full block object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
