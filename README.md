# Contentful CMS - React Fundamental Project

<img width="1050" alt="Screenshot 2025-02-11 at 23 33 55" src="https://github.com/user-attachments/assets/275091bb-aaf4-40e4-82a3-c16514273c54" /> <img width="1050" alt="Screenshot 2025-02-11 at 23 34 11" src="https://github.com/user-attachments/assets/5b54a0d5-1b21-4b52-9244-d6246e19bc74" />

---

## Project Summary

Contentful CMS - React Fundamental Project is a hands-on learning application integrating the Contentful headless CMS with a modern React frontend. This project demonstrates fetching and displaying dynamic content (such as projects) from Contentful using a custom React hook, and showcases best practices in component structure, API integration, and environment variable management.

- **Live-Demo:** https://contentful-cms-arnob.netlify.app/

---

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation and Setup](#installation-and-setup)
- [Contentful Setup](#contentful-setup)
- [Environment Variables](#environment-variables)
- [Fetching Data & Custom Hook](#fetching-data--custom-hook)
- [Components Overview](#components-overview)
- [API Example](#api-example)
- [Styling](#styling)
- [Learning Outcomes](#learning-outcomes)
- [Keywords](#keywords)
- [References & Resources](#references--resources)
- [Conclusion](#conclusion)

---

## Features

- **Hero Section:** Eye-catching introduction with project summary and visuals.
- **Projects Section:** Dynamic list of projects fetched from Contentful CMS.
- **Contentful Integration:** Real-world usage of a headless CMS for content management.
- **Custom Data Fetching Hook:** Clean separation of data logic using React hooks.
- **Modern UI:** Responsive and visually appealing interface using SVG/PNG assets.
- **Environment Variables:** Secure API key management using `.env` files.

---

## Technology Stack

- **React** (Vite + JSX)
- **Contentful** (Headless CMS)
- **JavaScript (ES6)**
- **CSS** (custom and/or frameworks)
- **Node.js/NPM**
- **Vite** (for fast development server)
- **[contentful](https://www.npmjs.com/package/contentful)** npm package

---

## Project Structure

```
├── .DS_Store
├── .gitignore
├── Contentful.fig
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── public/
├── src/
│   ├── App.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── data.js
│   ├── fetchProjects.jsx
│   ├── index.css
│   ├── main.jsx
│   └── assets/
```

**Key files:**
- `src/App.jsx`: Main app entry, renders Hero and Projects.
- `src/Hero.jsx`: Hero/banner component.
- `src/Projects.jsx`: Projects list, fetches from Contentful.
- `src/fetchProjects.jsx`: Custom React hook for API calls.
- `src/data.js`: Sample static data (for fallback/demo).
- `src/index.css`: Styles.
- `src/main.jsx`: React DOM entry point.

---

## Installation and Setup

1. **Clone the repository:**
    ```sh
    git clone https://github.com/arnobt78/Contentful-CMS--React-Fundamental-Project-18.git
    cd Contentful-CMS--React-Fundamental-Project-18
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables** (see [Environment Variables](#environment-variables))
   
4. **Run the development server:**
    ```sh
    npm run dev
    ```

5. Visit `http://localhost:5173` (or as indicated in terminal).

---

## Contentful Setup

1. **Sign up / log in to [Contentful](https://www.contentful.com/).**
2. **Create a new Space.**
3. **Add a Content Type** named `cmsReactProject` (or `projects`):
    - Fields: `title` (Text), `url` (Text), `image` (Media)
4. **Add entries** to the Content Type with your project data.
5. **API Access:**
    - Go to Settings > API keys.
    - Get your **Space ID** and **Content Delivery API - access token**.

---

## Environment Variables

1. **Create a `.env` file in the root:**
    ```
    VITE_API_KEY=your_contentful_access_token
    ```

*Do NOT commit your real API key to version control!*

---

## Fetching Data & Custom Hook

The data fetching logic is encapsulated in a custom React hook located at `src/fetchProjects.jsx`. It handles loading states, error handling, and parsing of Contentful API responses.

### Example: `fetchProjects.jsx`
```jsx
import { useEffect, useState } from "react";
import { createClient } from "contentful";

const client = createClient({
  space: "your_space_id",
  environment: "master",
  accessToken: import.meta.env.VITE_API_KEY,
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    client.getEntries({ content_type: "cmsReactProject" })
      .then((response) => {
        const items = response.items.map((item) => ({
          id: item.sys.id,
          title: item.fields.title,
          url: item.fields.url,
          image: item.fields.image?.fields?.file?.url,
        }));
        setProjects(items);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);
  
  return { loading, projects };
};

export default useFetchProjects;
```

---

## Components Overview

- **App.jsx:** Main component, imports Hero and Projects.
- **Hero.jsx:** Displays project title, description, and hero image.
- **Projects.jsx:** Uses `useFetchProjects` to fetch and render project cards.
- **data.js:** Contains example static data (useful for fallback/demo).
- **assets/:** Place for images and SVGs used in the UI.

---

## API Example

Example code to fetch entries directly from Contentful:

```js
import { createClient } from "contentful";

const client = createClient({
  space: "your_space_id",
  environment: "master", // defaults to 'master'
  accessToken: import.meta.env.VITE_API_KEY,
});

client
  .getEntries({ content_type: "cmsReactProject" })
  .then((response) => console.log(response.items))
  .catch(console.error);
```

---

## Styling

- Styling is managed in `src/index.css`.
- Modify or extend this file to change the UI.

---

## Learning Outcomes

- **Understand headless CMS concepts** and benefits (content separated from presentation).
- **Integrate Contentful with React** for dynamic, CMS-driven sites.
- **Use React hooks** for clean data fetching and state management.
- **Handle environment variables** securely in modern JS projects.
- **Structure React projects** for scalability and clarity.
- **Deploy React apps** (example: Netlify).

---

## Keywords

`react` `contentful` `headless cms` `vite` `custom hook` `api integration` `env variables` `frontend` `projects` `javascript` `learning` `cms integration` `dynamic content`

---

## References & Resources

- [Contentful](https://www.contentful.com/)
- [React Documentation](https://react.dev/)
- [Undraw](https://undraw.co/) (SVG/PNG images)
- [Vite](https://vitejs.dev/)

---

## Conclusion

This project provides a practical example of integrating a headless CMS with a React frontend, suitable for both learning and as a boilerplate for real-world applications. Use this template to quickly build portfolio/project sites powered by Contentful and React.

Feel free to explore, modify, and extend the code to suit your learning goals or project requirements!

---
