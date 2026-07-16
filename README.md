# Focus Master

**Focus Master** is a premium, mobile-friendly Progressive Web App (PWA) game designed to train your focus and visual tracking skills through escalating levels.

## 🌟 Features

- **Progressive Difficulty**: 7 unique levels ranging from simple 3x3 grids up to chaotic 6x6 grids.
- **Dynamic Challenges**: As you level up, you'll encounter colored text distractions and shifting grid numbers on a timer to test your focus.
- **Modern UI/UX**: Built with stunning glassmorphism effects, a sleek dark mode, and smooth micro-animations.
- **PWA Ready**: Can be installed to your device's home screen and played fully offline.
- **Fully Responsive**: Designed mobile-first, but looks great and works flawlessly on desktop browsers as well.

## 🎮 How to Play

1. Tap or click on the numbers in ascending order (1, 2, 3, ...).
2. Complete the grid as fast as possible.
3. Be careful—tapping the wrong number adds a **3-second penalty** to your time!
4. If you take too long to complete a level, it's Game Over!

## 📚 Documentation & Estimation

To understand the architecture and design of this project in detail, please refer to the following documents:
- [Game Design Document (GDD)](./GDD.md): Details the core mechanics, level progression, and visual style.
- [Software Requirements Specification (SRS)](./SRS.md): Outlines the functional and non-functional technical requirements.
- [COCOMO Calculations](./COCOMO.md): Time tested software engineering estimates based on the project's lines of code.

## 🚀 Running Locally

This project is built using vanilla JavaScript and Vite.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   *The game will be available at `http://localhost:5173/`.*

### Building for Production

To build the production-ready bundle, run:
```bash
npm run build
```
The optimized files will be generated in the `dist` folder. 

## 📦 Packaging for itch.io

If you want to package the game for upload to HTML5 game portals like itch.io:
1. Build the game: `npm run build`
2. Change directory: `cd dist`
3. Zip the contents: `zip -r ../focus-master.zip .`
4. Upload `focus-master.zip` to itch.io!
