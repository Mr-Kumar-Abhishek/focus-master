# Software Requirements Specification (SRS)

**Project Name:** Focus Master  
**Version:** 1.0.0  
**Prepared By:** Abhishek Kumar  
**Date:** July 16, 2026

---

## 1. Introduction

### 1.1 Purpose
The purpose of this document is to define the software requirements for **Focus Master**, a web-based Progressive Web App (PWA) game designed to improve the player's cognitive focus and visual tracking abilities through escalating timed challenges.

### 1.2 Scope
Focus Master is a mobile-first, browser-based game. The player must tap numbers in a grid in ascending order. The system tracks time and penalizes mistakes. The game includes multiple levels that introduce new visual distractions (colors) and dynamic shifting (shuffling) to increase cognitive load.

## 2. Overall Description

### 2.1 Product Perspective
Focus Master is a standalone client-side web application built using Vanilla JavaScript, CSS3, and HTML5. It utilizes Vite for fast development and building. As a PWA, it leverages a Service Worker and Web Manifest to allow installation on mobile devices and offline play capability.

### 2.2 User Classes and Characteristics
- **Casual Gamers:** Looking for a quick cognitive workout during breaks.
- **Cognitive Training Users:** Users intentionally practicing visual tracking and focus exercises.

## 3. Functional Requirements

### 3.1 Core Gameplay Loop
- **FR1:** The system shall display a grid of numbers starting from 1 up to $N$ (where $N$ is the grid size squared).
- **FR2:** The system shall require the user to tap the numbers in sequential ascending order.
- **FR3:** The system shall visually indicate a correct tap and hide/remove the tapped number.
- **FR4:** The system shall visually indicate an incorrect tap and apply a 3-second time penalty to the ongoing timer.

### 3.2 Level Progression
- **FR5:** The system shall advance the player to the next level upon successfully tapping all numbers in the current grid within the maximum allowed time.
- **FR6:** The system shall terminate the game (Game Over) if the player exceeds the maximum allowed time for a level ($N \times 2$ seconds).

### 3.3 Dynamic Mechanics
- **FR7:** The system shall support applying random colors to text in advanced levels to act as visual distractions.
- **FR8:** The system shall support shuffling the positions of all remaining unclicked numbers at fixed time intervals (e.g., every 3-5 seconds) on advanced levels.

### 3.4 PWA Features
- **FR9:** The system shall register a Service Worker to cache core assets (`index.html`, `style.css`, `main.js`, `manifest.json`, `icon.svg`).
- **FR10:** The system shall load successfully offline after the initial caching.

## 4. Non-Functional Requirements

### 4.1 Performance
- **NFR1:** The game must load in under 2 seconds on a standard 3G/4G mobile connection.
- **NFR2:** The game UI must maintain 60 Frames Per Second (FPS) for animations (CSS transitions) to ensure a fluid experience.

### 4.2 Usability & UI/UX
- **NFR3:** The interface must be completely responsive and optimized for mobile screens (portrait orientation).
- **NFR4:** The application must disable double-tap zooming and text-selection to prevent accidental interruptions during rapid tapping.

### 4.3 Reliability & Availability
- **NFR5:** As a PWA, the game must have 100% availability for users who have installed it locally, regardless of internet connectivity.
