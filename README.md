# Headless Contentful CMS - React Query, TypeScript, Vite (React Fundamental Project 18)

A modern, production-ready React application demonstrating seamless integration with Contentful headless CMS. This project showcases best practices in TypeScript, React Query for data fetching and caching, Tailwind CSS for styling, and modern React patterns.

**Live Demo:** [https://contentful-cms-demo.netlify.app/](https://contentful-cms-demo.netlify.app/)

![Screenshot 2025-12-02 at 13 32 49](https://github.com/user-attachments/assets/e46211ae-5a78-4c8a-9a3b-86efc766405a)
![Screenshot 2025-12-02 at 13 33 21](https://github.com/user-attachments/assets/b043b3ff-5258-43d7-a0d2-eed3414f578e)

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Contentful CMS Setup](#-contentful-cms-setup)
- [Running the Project](#️-running-the-project)
- [Project Components](#-project-components)
- [API Integration](#-api-integration)
- [Code Examples](#-code-examples)
- [Key Concepts & Learning Points](#-key-concepts--learning-points)
- [Reusing Components](#-reusing-components)
- [Keywords](#-keywords)
- [Conclusion](#-conclusion)

---

## 🎯 Project Overview

This project is a comprehensive learning resource that demonstrates how to build a modern React application with Contentful CMS integration. It features:

- **Headless CMS Integration**: Dynamic content management using Contentful
- **TypeScript**: Full type safety throughout the application
- **React Query**: Advanced data fetching with caching and persistence
- **Modern UI**: Beautiful, responsive design with Tailwind CSS
- **Performance Optimized**: Caching, request deduplication, and skeleton loaders
- **Educational**: Well-commented code for learning purposes

The application fetches project data from Contentful CMS and displays it in an elegant, interactive card layout with smooth animations and hover effects.

---

## ✨ Features

### Core Features

- **Dynamic Content Fetching**: Projects are fetched from Contentful CMS in real-time
- **Intelligent Caching**: React Query caches data with localStorage persistence
- **Skeleton Loading**: Beautiful loading states while data is being fetched
- **Responsive Design**: Fully responsive layout (mobile, tablet, desktop)
- **Modern Animations**: Staggered fade-in animations and smooth hover effects
- **Type Safety**: Complete TypeScript implementation with proper type definitions
- **Performance Optimized**:
  - Request deduplication (multiple components = one API call)
  - Cache persistence across page refreshes
  - No redundant API calls
  - Instant content display from cache

### UI/UX Features

- **Gradient Effects**: Modern gradient text and backgrounds
- **Interactive Cards**: Hover effects with image zoom and overlay
- **External Link Indicators**: Visual feedback for external links
- **Smooth Transitions**: 500ms transitions for all interactive elements
- **Accessibility**: Proper alt texts, semantic HTML, and keyboard navigation

---

## 🛠 Technology Stack

### Core Technologies

- **React 19.0.0**: Latest stable version of React
- **TypeScript 5.6.3**: Type-safe JavaScript
- **Vite 6.0.0**: Next-generation frontend build tool
- **Tailwind CSS 3.4.14**: Utility-first CSS framework

### Key Libraries

- **@tanstack/react-query 5.90.11**: Data fetching, caching, and synchronization
- **contentful 10.12.0**: Contentful JavaScript SDK for API integration

### Development Tools

- **ESLint 9.15.0**: Code linting and quality
- **TypeScript ESLint**: TypeScript-specific linting rules
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

---

## 📁 Project Structure

```bash
contentful-cms/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── assets/            # Image assets
│   │   ├── birthday.png
│   │   ├── hero.svg
│   │   ├── questions.png
│   │   ├── reviews.png
│   │   └── tours.png
│   ├── App.tsx            # Root component
│   ├── Hero.tsx           # Hero section component
│   ├── Projects.tsx       # Projects display component
│   ├── ProjectSkeleton.tsx # Loading skeleton component
│   ├── fetchProjects.tsx  # Custom hook for data fetching
│   ├── types.ts           # TypeScript type definitions
│   ├── data.ts            # Static fallback data
│   ├── main.tsx           # Application entry point
│   ├── global.css         # Global styles and Tailwind directives
│   └── vite-env.d.ts      # Vite type declarations
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

### File Descriptions

- **`main.tsx`**: Application bootstrap, React Query setup, cache persistence
- **`App.tsx`**: Root component that composes Hero and Projects
- **`Hero.tsx`**: Landing section with project introduction
- **`Projects.tsx`**: Main component displaying project cards
- **`fetchProjects.tsx`**: Custom hook using React Query for data fetching
- **`ProjectSkeleton.tsx`**: Loading state UI component
- **`types.ts`**: All TypeScript interfaces and type definitions
- **`data.ts`**: Static fallback data (for development/testing)
- **`global.css`**: Tailwind directives and global styles

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js**: Version 18.x or higher
- **npm**: Version 9.x or higher (comes with Node.js)
- **Contentful Account**: Free account at [contentful.com](https://www.contentful.com)

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/contentful-cms-react-project.git
cd contentful-cms-react-project
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all required dependencies including:

- React and React DOM
- TypeScript and type definitions
- TanStack React Query
- Contentful SDK
- Tailwind CSS and related tools
- Vite and build tools

### Step 3: Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
touch .env
```

Add your Contentful API credentials:

```env
VITE_API_KEY=your_contentful_access_token_here
```

**Important**:

- Never commit your `.env` file to version control
- The `.env` file is already in `.gitignore`
- Replace `your_contentful_access_token_here` with your actual Contentful access token

### Step 4: Configure Contentful

See the [Contentful CMS Setup](#-contentful-cms-setup) section for detailed instructions.

---

## 🔐 Environment Variables

### Required Variables

#### `VITE_API_KEY`

**Description**: Contentful Content Delivery API access token

**How to Get It**:

1. Log in to your Contentful account
2. Navigate to **Settings** → **API keys**
3. Click **Add API key** or use an existing one
4. Copy the **Content Delivery API - access token**
5. Paste it in your `.env` file

**Example**:

```env
VITE_API_KEY=abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

**Security Notes**:

- This is a **read-only** token (Content Delivery API)
- Safe to use in client-side applications
- Never share your token publicly
- Regenerate if accidentally exposed

### Vite Environment Variable Rules

- **Prefix Required**: All environment variables must be prefixed with `VITE_`
- **Access in Code**: Use `import.meta.env.VITE_API_KEY`
- **Type Safety**: Defined in `src/vite-env.d.ts`

### Example Usage in Code

```typescript
// In fetchProjects.tsx
const client = createClient({
  space: "your_space_id",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY as string,
});
```

---

## 📝 Contentful CMS Setup

### Step 1: Create a Contentful Account

1. Visit [contentful.com](https://www.contentful.com)
2. Sign up for a free account
3. Create a new space (or use an existing one)

### Step 2: Create Content Type

1. Navigate to **Content model** in the sidebar
2. Click **Add content type**
3. Name it: `cmsReactProject`
4. Add the following fields:

   **Field 1: Title**

   - Field ID: `title`
   - Type: **Short text**
   - Required: Yes

   **Field 2: URL**

   - Field ID: `url`
   - Type: **Short text**
   - Required: Yes
   - Validation: URL format

   **Field 3: Image**

   - Field ID: `image`
   - Type: **Media**
   - Required: No
   - Allowed media types: Images only

5. Click **Save** to create the content type

### Step 3: Add Content Entries

1. Navigate to **Content** in the sidebar
2. Click **Add entry**
3. Select `cmsReactProject` content type
4. Fill in the fields:
   - **Title**: Your project name
   - **URL**: Project demo URL
   - **Image**: Upload or select an image
5. Click **Publish**

Repeat for each project you want to display.

### Step 4: Get API Credentials

1. Navigate to **Settings** → **API keys**
2. Find your **Space ID** (you'll need this for the code)
3. Find or create a **Content Delivery API** key
4. Copy the **Access token**

### Step 5: Update Code with Space ID

In `src/fetchProjects.tsx`, update the space ID:

```typescript
const client = createClient({
  space: "your_space_id_here", // Replace with your Space ID
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY as string,
});
```

---

## ▶️ Running the Project

### Development Mode

Start the development server:

```bash
npm run dev
```

The application will be available at:

- **Local**: `http://localhost:5173`
- **Network**: Check terminal for network URL

**Features in Development**:

- Hot Module Replacement (HMR) - instant updates
- Fast refresh - preserves component state
- Source maps for debugging
- Detailed error messages

### Production Build

Build for production:

```bash
npm run build
```

This will:

- Type-check the code with TypeScript
- Optimize and bundle assets
- Generate production-ready files in `dist/` folder

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Check code quality:

```bash
npm run lint
```

---

## 🧩 Project Components

### App Component (`src/App.tsx`)

**Purpose**: Root component that composes the entire application

**Structure**:

```tsx
<main>
  <Hero /> {/* Landing section */}
  <Projects /> {/* Dynamic projects section */}
</main>
```

**Usage**: Imported in `main.tsx` and rendered as the root component.

**Reusability**: Can be extended to include navigation, footer, or additional sections.

---

### Hero Component (`src/Hero.tsx`)

**Purpose**: Displays the hero/banner section with project introduction

**Features**:

- Responsive layout (single column mobile, two columns desktop)
- Hero image (hidden on mobile for performance)
- Project description text

**Props**: None (static content)

**Responsive Breakpoints**:

- Mobile: Single column, text only
- Desktop (lg+): Two-column grid with image

**Code Example**:

```tsx
import Hero from "./Hero";

// Usage
<Hero />;
```

**Reusability**:

- Can be modified to accept props for dynamic content
- Image can be made configurable
- Text content can be passed as props

---

### Projects Component (`src/Projects.tsx`)

**Purpose**: Displays dynamic project cards fetched from Contentful

**Features**:

- Uses `useFetchProjects` custom hook
- Conditional rendering (skeleton vs. content)
- Responsive grid layout
- Interactive card animations
- Hover effects with image zoom

**State Management**:

```tsx
const { loading, projects } = useFetchProjects();
```

**Responsive Grid**:

- Mobile: 1 column
- Tablet (md): 2 columns
- Desktop (lg): 3 columns

**Code Example**:

```tsx
import Projects from "./Projects";

// Usage
<Projects />;
```

**Reusability**:

- Can accept custom query key for different content types
- Grid columns can be made configurable via props
- Card design can be customized

---

### ProjectSkeleton Component (`src/ProjectSkeleton.tsx`)

**Purpose**: Loading state UI that matches the project card layout

**Features**:

- Pulse animation for visual feedback
- Matches exact layout of project cards
- Responsive grid (same as Projects component)

**Usage**: Automatically displayed by Projects component when `loading === true`

**Code Example**:

```tsx
import ProjectSkeleton from "./ProjectSkeleton";

// Usage
{
  loading && <ProjectSkeleton />;
}
```

**Reusability**:

- Can be adapted for any card-based loading state
- Animation speed and colors can be customized
- Number of skeleton items can be made configurable

---

### useFetchProjects Hook (`src/fetchProjects.tsx`)

**Purpose**: Custom React hook for fetching projects from Contentful

**Returns**:

```typescript
{
  loading: boolean;    // True while fetching, false when complete
  projects: Project[];  // Array of project objects
}
```

**Features**:

- React Query integration for caching
- Automatic error handling
- Request deduplication
- Cache persistence

**Usage Example**:

```tsx
import { useFetchProjects } from "./fetchProjects";

const MyComponent = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>{project.title}</div>
      ))}
    </div>
  );
};
```

**Reusability**:

- Can be modified to fetch different content types
- Query key can be made dynamic
- Can accept additional query parameters

---

## 🔌 API Integration

### Contentful API Overview

This project uses Contentful's **Content Delivery API (CDA)**, which is:

- **Read-only**: Safe for client-side use
- **Public**: No authentication required (uses access token)
- **Fast**: CDN-backed for global performance
- **RESTful**: Standard HTTP requests

### API Endpoint

**Base URL**: `https://cdn.contentful.com`

**Endpoint Used**:

```bash
GET /spaces/{space_id}/environments/{environment}/entries?content_type={content_type}
```

**In Code**:

```typescript
const response = await client.getEntries({
  content_type: "cmsReactProject",
});
```

### Data Flow

1. **Request**: `useFetchProjects` hook calls `fetchProjects()`
2. **API Call**: Contentful SDK makes HTTP request to Contentful API
3. **Response**: Contentful returns entries in nested structure
4. **Transformation**: Data is mapped to simplified `Project[]` format
5. **Caching**: React Query caches the result
6. **Persistence**: Cache is saved to localStorage
7. **Display**: Projects component renders the data

### Response Structure

**Contentful Response**:

```json
{
  "items": [
    {
      "sys": {
        "id": "entry_id",
        "type": "Entry"
      },
      "fields": {
        "title": "Project Name",
        "url": "https://example.com",
        "image": {
          "fields": {
            "file": {
              "url": "https://images.ctfassets.net/..."
            }
          }
        }
      }
    }
  ]
}
```

**Transformed to**:

```typescript
[
  {
    id: "entry_id",
    title: "Project Name",
    url: "https://example.com",
    img: "https://images.ctfassets.net/...",
  },
];
```

### Error Handling

React Query automatically handles:

- Network errors
- API errors
- Timeout errors
- Retry logic (configured to retry once)

Errors are logged to console and loading state is set to false.

---

## 💻 Code Examples

### Basic Component Structure

```tsx
import React from "react";

interface ComponentProps {
  // Define props here
}

const Component: React.FC<ComponentProps> = () => {
  return <div>{/* Component JSX */}</div>;
};

export default Component;
```

### Using the Custom Hook

```tsx
import { useFetchProjects } from "./fetchProjects";

const MyProjects = () => {
  const { loading, projects } = useFetchProjects();

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          <a href={project.url}>Visit Project</a>
        </div>
      ))}
    </div>
  );
};
```

### React Query Setup

```tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Your app components */}
    </QueryClientProvider>
  );
}
```

### TypeScript Type Definitions

```typescript
// Define Contentful structure
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

// Define application structure
interface Project {
  id: string;
  title: string;
  url: string;
  img?: string;
}
```

### Tailwind CSS Styling

```tsx
// Responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Content */}
</div>

// Hover effects
<div className="hover:scale-105 transition-transform duration-300">
  {/* Content */}
</div>

// Gradient text
<h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
  Gradient Text
</h1>
```

---

## 📚 Key Concepts & Learning Points

### 1. Headless CMS Architecture

**What is a Headless CMS?**

- Content is stored separately from presentation
- API-first approach for content delivery
- Frontend and backend are decoupled
- Multiple frontends can use the same content

**Benefits**:

- Flexibility: Use any frontend framework
- Scalability: Content and presentation scale independently
- Reusability: Same content for web, mobile, IoT
- Performance: CDN-backed delivery

### 2. React Query (TanStack Query)

**What is React Query?**

- Powerful data synchronization library for React
- Handles server state management
- Provides caching, background updates, and more

**Key Features Used**:

- **Caching**: Stores fetched data in memory
- **Deduplication**: Multiple requests = one API call
- **Background Refetching**: Keeps data fresh automatically
- **Persistence**: localStorage integration for cache survival

**Why Use React Query?**

- Reduces API calls significantly
- Better user experience (instant loading from cache)
- Automatic error handling and retries
- Built-in loading states

### 3. TypeScript in React

**Benefits**:

- **Type Safety**: Catch errors at compile time
- **IntelliSense**: Better IDE autocomplete
- **Documentation**: Types serve as inline documentation
- **Refactoring**: Safer code changes

**Key Patterns**:

- Interface definitions for props and data
- Type assertions for external APIs
- Generic types for reusable components
- Strict mode for maximum safety

### 4. Custom Hooks

**What are Custom Hooks?**

- Reusable functions that use React hooks
- Encapsulate component logic
- Can be shared across components

**Benefits**:

- **Reusability**: Use same logic in multiple components
- **Separation of Concerns**: Logic separate from UI
- **Testability**: Easier to test in isolation
- **Readability**: Cleaner component code

### 5. Responsive Design with Tailwind

**Mobile-First Approach**:

- Design for mobile first, enhance for larger screens
- Use breakpoint prefixes: `md:`, `lg:`, `xl:`
- Responsive utilities: `grid-cols-1 md:grid-cols-2`

**Tailwind Benefits**:

- Utility-first: Compose styles from utilities
- No CSS file switching: Styles in JSX
- PurgeCSS: Removes unused styles in production
- Consistent design system

### 6. Performance Optimization

**Techniques Used**:

- **Code Splitting**: Vite automatically splits code
- **Image Optimization**: Lazy loading and responsive images
- **Caching**: React Query + localStorage
- **Skeleton Loading**: Better perceived performance
- **Request Deduplication**: One API call for multiple components

---

## 🔄 Reusing Components

### Using Hero Component in Other Projects

```tsx
// Basic usage
import Hero from "./components/Hero";

function App() {
  return <Hero />;
}

// With custom props (modify Hero.tsx to accept props)
interface HeroProps {
  title: string;
  description: string;
  image?: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, image }) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
      {image && <img src={image} alt={title} />}
    </section>
  );
};
```

### Using Projects Component

```tsx
// Reuse with different content type
// Modify useFetchProjects to accept content type parameter

export const useFetchProjects = (contentType: string = "cmsReactProject") => {
  return useQuery({
    queryKey: [contentType],
    queryFn: () => fetchProjects(contentType),
  });
};

// Usage
const { loading, projects } = useFetchProjects("blogPosts");
```

### Using ProjectSkeleton

```tsx
// Adapt for any card-based loading state
const CardSkeleton = ({ count = 3 }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="animate-pulse bg-gray-200 h-64 rounded" />
      ))}
    </div>
  );
};
```

### Using useFetchProjects Hook

```tsx
// Create a generic fetch hook
const useFetchContent = <T,>(queryKey: string[], fetchFn: () => Promise<T>) => {
  return useQuery({
    queryKey,
    queryFn: fetchFn,
  });
};

// Usage
const { data, isLoading } = useFetchContent(["blogPosts"], () =>
  fetchBlogPosts()
);
```

---

## 🏷 Keywords

`react` `typescript` `contentful` `headless cms` `react query` `tanstack query` `vite` `tailwind css` `custom hooks` `api integration` `environment variables` `caching` `localStorage` `skeleton loading` `responsive design` `modern ui` `frontend development` `web development` `javascript` `jsx` `tsx` `component architecture` `data fetching` `state management` `performance optimization` `code splitting` `type safety` `educational project` `learning resource` `portfolio project`

---

## 🎓 Conclusion

This project demonstrates modern React development practices with a focus on:

1. **Type Safety**: Complete TypeScript implementation
2. **Performance**: React Query caching and optimization
3. **User Experience**: Skeleton loaders and smooth animations
4. **Code Quality**: Well-structured, commented, and maintainable
5. **Best Practices**: Industry-standard patterns and conventions

### What You've Learned

- How to integrate Contentful CMS with React
- React Query for efficient data fetching
- TypeScript for type-safe React applications
- Tailwind CSS for modern, responsive styling
- Custom hooks for reusable logic
- Environment variable management
- Performance optimization techniques

### Next Steps

- Extend the project with additional content types
- Add filtering and search functionality
- Implement pagination for large datasets
- Add error boundaries for better error handling
- Create a blog or portfolio using the same patterns
- Deploy to production (Vercel, Netlify, etc.)

### Project Highlights

✅ **Production Ready**: Type-safe, optimized, and well-structured  
✅ **Educational**: Comprehensive comments and documentation  
✅ **Modern Stack**: Latest versions of React, TypeScript, and tools  
✅ **Performance**: Caching, deduplication, and optimization  
✅ **Responsive**: Works perfectly on all device sizes  
✅ **Maintainable**: Clean code with clear separation of concerns

---

## Happy Coding! 🎉

Feel free to use this project repository and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://arnob-mahmud.vercel.app/](https://arnob-mahmud.vercel.app/).

**Enjoy building and learning!** 🚀

Thank you! 😊

---
