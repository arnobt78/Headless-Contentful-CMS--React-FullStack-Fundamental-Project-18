/**
 * App Component - Root Component
 * 
 * This is the main application component that serves as the root of the component tree.
 * It composes the Hero and Projects components to create the complete page layout.
 * 
 * Component Structure:
 * - Hero: Displays the main heading and description section
 * - Projects: Displays the dynamic project cards fetched from Contentful CMS
 */

import Hero from './Hero';
import Projects from './Projects';

/**
 * App Component
 * @returns {React.ReactElement} The main application layout
 */
const App = (): React.ReactElement => {
  return (
    <main>
      {/* Hero Section: Introduction and project overview */}
      <Hero />
      
      {/* Projects Section: Dynamic content from Contentful CMS */}
      <Projects />
    </main>
  );
};

export default App;
