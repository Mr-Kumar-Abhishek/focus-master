# Game Design Document (GDD)

**Game Title:** Focus Master  
**Genre:** Puzzle / Cognitive Training / Arcade  
**Platform:** Web / Progressive Web App (Mobile & Desktop)  

---

## 1. Game Concept
**Focus Master** is a fast-paced cognitive training game inspired by the classic Schulte Table. The objective is to find and tap a sequence of numbers in ascending order as quickly as possible. As the player progresses, the grid grows larger, the colors become chaotic, and the numbers begin to shuffle positions, intensely testing the player's visual tracking and concentration.

## 2. Core Mechanics
- **Grid Tapping:** A grid of tiles contains numbers. The player must tap the lowest available number.
- **Timer:** A precision timer tracks how long the player takes to complete the grid.
- **Penalty System:** Tapping the wrong tile shakes the tile, flashes the screen red, and adds a **3-second penalty** to the timer.
- **Time Limit:** Each level has a maximum allowed time calculated as `Max Number × 2 seconds`. Failing to finish before this time results in a Game Over.

## 3. Level Design & Progression
The game currently consists of 7 escalating levels.

| Level | Grid Size | Tile Count | Distractions | Shuffle Mechanic |
|-------|-----------|------------|--------------|------------------|
| **1** | 3x3       | 9          | None         | None             |
| **2** | 4x4       | 16         | None         | None             |
| **3** | 4x4       | 16         | Multi-color  | None             |
| **4** | 5x5       | 25         | None         | None             |
| **5** | 5x5       | 25         | Multi-color  | Every 5 seconds  |
| **6** | 6x6       | 36         | Multi-color  | Every 4 seconds  |
| **7** | 6x6       | 36         | Multi-color  | Every 3 seconds  |

*In shuffling levels, all unclicked tiles randomly swap positions when the interval hits, forcing the player to rapidly re-evaluate the board state.*

## 4. Visual & Audio Style
### 4.1 Visuals
- **Aesthetic:** Dark Mode, Glassmorphism, Premium UI.
- **Background:** Deep blue/slate `var(--bg-color): #0f172a` with subtle, glowing ambient radial gradients.
- **Panels/Tiles:** Semi-transparent glass (`backdrop-filter: blur(10px)`) with glowing borders.
- **Typography:** `Outfit` (Google Fonts), highly legible, rounded, friendly but modern.
- **Animations:** 
  - Tiles slide and fade in at the start of a level.
  - Correct taps trigger a satisfying "pop" scale animation and turn emerald green.
  - Wrong taps trigger a horizontal "shake" and turn ruby red.

### 4.2 Audio
*(Currently Unimplemented - Planned for future updates)*
- **Success:** Soft digital chime.
- **Error:** Low-pitched, non-jarring buzz.
- **Level Up:** Triumphant synth chord.

## 5. UI Layout / Screens
1. **Start Screen:** Title, brief instructions, and a glowing "Start Game" button.
2. **Play Screen:** 
   - **Header:** Current Level Badge and active Timer.
   - **Center:** The interactive Grid.
   - **Footer:** Target indicator (e.g., "Find: 4").
3. **Level Up Screen:** Congratulatory text, time taken to complete the level, and "Next Level" button.
4. **Game Over Screen:** Final level reached, and a "Play Again" button.
