# 🛡️ Digital Chaff Generator (DCG)

<div align="center">
  <h3>Reduce the clarity of your browsing patterns.</h3>
  <p>DCG adds controlled background activity to help make behavioral tracking signals less precise.</p>
</div>

---

## 📖 Overview

Digital Chaff Generator (DCG) is a privacy-supporting tool designed to generate low-impact, automated browsing actions based on configurable personas. These actions run alongside your normal usage, introducing deliberate variability into behavioral data profiles and making automated tracking signals less accurate. 

This repository contains the **Landing Page** and **Web Interface** for DCG, presenting its core features, architecture, and installation instructions.

## ✨ Key Features

- **👤 Persona-Based Activity:** Simulates different browsing styles (e.g., casual reader, shopper, researcher) with adjustable intensity and frequency.
- **⚡ Background Execution:** Runs seamlessly without interrupting active browsing, optimized for minimal system resource usage.
- **⚙️ Configurable Behavior:** Total control over timing, targeted domains, and activity patterns. Ability to pause or limit activity at any time.
- **🔒 Local Processing:** All activity generation happens entirely within the browser. No external behavioral data is required or transmitted.

---

## 🛠️ Tech Stack

We utilize a modern, high-performance web stack to ensure a smooth and responsive user experience.

| Technology | Description |
| :---: | :--- |
| &nbsp; &nbsp; ⚛️ &nbsp; &nbsp; | **React 18** — Component-based UI library for dynamic interfaces |
| &nbsp; &nbsp; ⚡ &nbsp; &nbsp; | **Vite** — Next-generation frontend tooling and ultra-fast bundler |
| &nbsp; &nbsp; 🎨 &nbsp; &nbsp; | **Vanilla CSS** — Custom-tailored, lightweight styling system without heavy frameworks |
| &nbsp; &nbsp; 🚀 &nbsp; &nbsp; | **Vercel** — Edge network deployment and hosting platform |

---

## 🏗️ Project Architecture

The landing page is organized into modular React components for maintainability and scalability:

- `Hero.jsx` — High-impact introduction and Call-to-Action.
- `Features.jsx` — Detailed breakdown of core capabilities.
- `Architecture.jsx` — Visual explanation of how DCG operates under the hood.
- `TechStack.jsx` — Overview of the technologies powering the extension.
- `Install.jsx` — Step-by-step instructions for getting started.
- `Contact.jsx` — Integrated communication form via FormSubmit.

## 🚀 Getting Started

To run the landing page locally, follow these steps:

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rajghorpade28/dcgLandingPage.git
   cd dcgLandingPage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🛡️ Privacy & Disclaimer

**Important:** DCG does *not* claim to make users anonymous, nor does it replace ad blockers, VPNs, or tracker blockers. It does not collect personal browsing history, and users retain full control over when the extension runs. Effectiveness may vary depending on the tracking methods used by individual websites.

---

<div align="center">
  <p>&copy; 2026 Digital Chaff Generator. Built for a more private web.</p>
</div>
