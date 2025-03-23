# **Lab 7 - Personal Portfolio Website**

A fully responsive **personal portfolio website** to showcase **projects, skills, and experiences**. Built using **React.js**, inspired by the **DeveloperFolio** template, but heavily modified to match **my personal branding, projects, and professional journey**.

- **Date Created**: 20 March 2025  
- **Last Modification Date**: 23 March 2025  
- **Live URL**: [Shafay's Portfolio](https://main.d3va7qg6o6ibvu.amplifyapp.com/)  
- **Original GitHub Repository**: [DeveloperFolio](https://github.com/saadpasta/developerFolio)  
- **Current GitHub Repository**: [Shafay's Portfolio](https://github.com/msz-coder/ShafayPortfolio)  
- **GitLab Repository**: [React Portfolio](https://git.cs.dal.ca/zulfiqar/react-portfolio)

---

## **Authors**

- [Muhammad Shafay Zulfiqar](m.shafay@dal.ca) - **Developer & Maintainer**  

---

## **Latest Developments**

### **1. Interactive Skill List**
- Implemented an **interactive skill list** using React state (`useState`).
- Visitors can **filter skills** by:
  - **Searching for keywords** (e.g., "Frontend").
  - **Clicking on categories** (e.g., checkboxes or buttons).
- **Bonus**: Search results are displayed **on the fly** as the user types or selects filters.
  - For example, typing "F" displays all skills starting with "F", and the list updates dynamically as the user continues typing.

### **2. Dynamic Project Fetching**
- Projects on the **Projects Page** are now **fetched dynamically** from the backend using `useEffect`.
- Each project includes the following properties:
  - **Project Name**
  - **Author**
  - **Languages**
  - **Description**
- The backend provides a route that returns all projects stored in a **JSON file**.

### **3. Weather Component**
- Added a **dynamic weather component** that fetches real-time weather data for Halifax using the **OpenWeatherMap API**.
- Displays:
  - **City**
  - **Temperature**
  - **Humidity**
- The weather component matches the website's **light and dark themes**.

---

## **Built With**

This project was built using the following technologies:

- [React.js](https://react.dev/) - **Frontend JavaScript library**  
- [Sass](https://sass-lang.com/) - **CSS Preprocessor for styling**  
- [React Reveal](https://www.react-reveal.com/) - **Animation effects**  
- [React Router](https://reactrouter.com/) - **Client-side routing**  
- [Lottie React](https://github.com/LottieFiles/lottie-react) - **Animation handling**  
- [FontAwesome](https://fontawesome.com/) - **Icons and UI elements**  
- [Jest](https://jestjs.io/) - **Unit testing framework**  
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - **Component testing**  

---

## **Backend Implementation**

### **1. Projects API**
- Built a backend route (`/api/projects`) that returns all projects stored in a **JSON file**.
- Each project includes:
  - **Project Name**
  - **Author**
  - **Languages**
  - **Description**

### **2. Weather API**
- Integrated the **OpenWeatherMap API** to fetch real-time weather data for Halifax.
- The backend route (`/api/weather`) extracts and sends the following data to the frontend:
  - **City**
  - **Temperature**
  - **Humidity**

---

## **Sources Used**

### **Interactive Skill List**
#### **File Path**: `src/containers/Skills/Skills.js`
#### **Lines Modified: 12 - 133**
```jsx
const [searchQuery, setSearchQuery] = useState("");
const [selectedCategories, setSelectedCategories] = useState([]);

const filteredSkills = skills.filter((skill) => {
  const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
  const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(skill.category);
  return matchesSearch && matchesCategory;
});


##### **Original Code**
```jsx
// No filtering logic was implemented initially.
```
##### **Changes**
- **How**: Added a search bar and category filters to dynamically filter skills based on user input.
- **Why**: To provide an interactive and user-friendly way for visitors to explore skills.
- **How Modified**: Used useState to manage the search query and selected categories, and applied filtering logic to the skills array.

---

### **Dynamic Project Fetching**
#### **File Path**: `src/containers/StartupProjects/StartupProject.js`
#### **Lines Modified: 12 - 17**
```jsx
useEffect(() => {
  fetch("/api/projects")
    .then((res) => res.json())
    .then((data) => setProjects(data))
    .catch((err) => console.error("Failed to fetch projects:", err));
}, []);
```

##### **Original Code**
```jsx
// Projects were hardcoded in the frontend.
```
##### **Changes**
- **How**: Replaced hardcoded projects with a dynamic fetch from the backend.
- **Why**: To make the projects section more maintainable and scalable.
- **How Modified**: Used useEffect to fetch projects from the backend API and store them in state.

---

### **Weather Component**
#### **File Path**: `src/components/Weather/Weather.js`
#### **Lines Modified: 10 - 24**
```jsx
useEffect(() => {
  fetch("/api/weather")
    .then((res) => res.json())
    .then((data) => setWeather(data))
    .catch((err) => console.error("Failed to fetch weather:", err));
}, []);
```
##### **Original Code**
```jsx
// No weather component was implemented initially.
```
##### **Changes**
- **How**: Added a weather component that fetches real-time weather data from the OpenWeatherMap API.
- **Why**: To provide visitors with up-to-date weather information for Halifax.
- **How Modified**: Used useEffect to fetch weather data from the backend and display it in a styled component.

---

### **Backend Implementation (server.js)**
#### **File Path**: `backend/server.js`
#### **Lines Modified: 1 - 50**
```jsx
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const fetch = require("node-fetch"); // Install if not already
require("dotenv").config({ path: "../.env" }); // Load from root

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

// Route to fetch projects
app.get("/api/projects", (req, res) => {
  fs.readFile("./projects.json", "utf8", (err, data) => {
    if (err) {
      console.error("Failed to load projects:", err);
      return res.status(500).json({ error: "Failed to load projects" });
    }
    res.json(JSON.parse(data));
  });
});

// Route to fetch weather data
app.get("/api/weather", async (req, res) => {
  const city = "Halifax";
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok || !data.main || !data.weather) {
      console.error("⚠️ OpenWeatherMap error:", data);
      return res.status(500).json({ error: "Failed to fetch weather", details: data });
    }

    const result = {
      city: data.name,
      temperature: data.main.temp,
      humidity: data.main.humidity,
    };

    res.json(result);
  } catch (error) {
    console.error("❌ Weather API error:", error);
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
```
##### **Original Code**
```jsx
// No backend implementation existed initially.
```
##### **Changes**
- **How**: Added a backend server using Express.js to handle API requests for projects and weather data.
- **Why**: To decouple the frontend from hardcoded data and enable dynamic fetching.
- **How Modified**: 
    1. Created a /api/projects route to fetch projects from a JSON file.
    2. Created a /api/weather route to fetch real-time weather data from the OpenWeatherMap API.

---


## **Artificial Intelligence Tools Used**

- [ChatGPT](https://openai.com/chatgpt) - **Debugging, Code Review, & Optimization**  
- [GitHub Copilot](https://github.com/features/copilot) - **Code Autocompletion & Refactoring**  

## **Accessibility Considerations (WCAG Guidelines)**

This website implements **WCAG Guidelines** for accessibility:

**Keyboard Navigation** - Users can navigate all elements using the keyboard.  
**Semantic HTML** - Correct heading levels, `<button>`, `<a>`, `<ul>` elements are used appropriately.  
**Color Contrast** - Dark mode and light mode options enhance readability.  
**ARIA Attributes** - Used `aria-label` for screen readers where necessary.  
**Skip Links** - Added a **skip-to-content link** for screen reader users.  

---

## **Acknowledgments**

- **[Saad Pasta](https://github.com/saadpasta)** for the **DeveloperFolio** template.  
- Inspired by modern **developer portfolios**.  
- Thanks to **OpenAI** and **GitHub Copilot** for AI-powered debugging!  