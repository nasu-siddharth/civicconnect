# CivicConnect – Public Issue Reporting

> A clean, responsive, single-page web platform empowering citizens to report local civic issues (road damage, streetlights, garbage, water leaks) directly to responsible authorities.

Built as a **Frontend Developer Intern Assignment** demonstrating clean UI design, responsive layout patterns, semantic HTML5, modern CSS3 (Flexbox, Grid, CSS Variables, Media Queries), and Vanilla JavaScript form handling and validation.

---

## 📌 Project Overview

- **Problem:** Citizens often spot public infrastructure hazards—such as potholes, broken streetlights, overflowing waste, or water pipeline leaks—but lack a direct, straightforward channel to report them quickly to local municipal authorities.
- **Solution:** CivicConnect offers a minimal, friction-free reporting interface where citizens can select an issue category, describe the problem, pinpoint the location, attach a photo, and receive an instant reference tracking ID.
- **Value:** Bridges the communication gap between active residents and city maintenance teams, accelerating repair times and keeping neighborhoods safer.

---

## ✨ Features

- **Responsive Single-Page Layout**: Fluidly adapts across desktops, tablets, and mobile smartphones.
- **Accessible Sticky Navigation**: Quick anchor navigation with smooth scrolling and an interactive mobile drawer toggle.
- **Sample Incident Card**: Contextual hero illustration showing a reported pothole incident with real-time status badges.
- **Problem Areas Showcase**: Interactive cards detailing common civic challenges (Roads, Streetlights, Garbage, Water).
- **Interactive Reporting Form**:
  - Problem Title, Category dropdown, Description, and Location fields.
  - Image file upload with **live thumbnail preview** and remove capability.
  - Client-side input validation with friendly error hints.
  - Instant submission feedback displaying a generated issue tracking ID (e.g. `CC-1024`) and logged summary.
- **3-Step Process Guide**: Clear visual roadmap (*01 Report* &rarr; *02 Review* &rarr; *03 Resolve*).
- **Civic Impact Statistics**: Clean demographic counters showcasing platform outcomes.
- **Zero Framework Bloat**: Pure HTML, CSS, and Vanilla JavaScript with fast loading and zero heavy runtime dependencies.

---

## 🛠️ Tech Stack

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<form>`).
- **CSS3**:
  - CSS Custom Properties (Design tokens for palette, typography, radii, shadows).
  - Modern layout techniques using **CSS Grid** and **Flexbox**.
  - Responsive **Media Queries** for mobile, tablet, and desktop breakpoints.
  - Subtle hover transitions and micro-interactions.
- **Vanilla JavaScript (ES6+)**:
  - Mobile menu toggle and event delegation.
  - Smooth scroll calculations accounting for sticky navbar height.
  - FileReader API for client-side photo previews.
  - Form validation, dynamic issue ID generation, and DOM state updates.

---

## 📂 Project Structure

```text
├── index.html         # Main semantic HTML structure & markup
├── style.css          # Core stylesheet (CSS variables, responsive queries, layout)
├── script.js          # Pure JavaScript logic (Navigation, Form validation, Photo preview)
├── package.json       # Project metadata and local development scripts
└── README.md          # Project documentation
```

---

## 🚀 Getting Started

### Option 1: Direct Browser (No Build Required)
Simply open `index.html` in any modern web browser:
```bash
# On macOS:
open index.html

# On Linux:
xdg-open index.html

# On Windows:
start index.html
```

### Option 2: Local Development Server
If you prefer running a local development server with live reload:

```bash
# 1. Install project dependencies
npm install

# 2. Start the local development server
npm run dev
```

Visit `http://localhost:3000` in your browser to view the application.

---

## 🎯 Hiring Manager 30-Second Summary

1. **What is the problem?** Unreported public infrastructure issues cause safety risks, vehicle damage, and municipal delays.
2. **What is the solution?** CivicConnect provides a single, intuitive interface for citizens to report civic problems in under a minute.
3. **Why is this useful?** Organizes civic feedback into structured categories with photos and location data for fast municipal resolution.

---

## 📄 License
This project was developed as an educational frontend developer assignment.
