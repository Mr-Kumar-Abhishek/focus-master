import './style.css';

// DOM Elements
const screens = {
  start: document.getElementById('start-screen'),
  play: document.getElementById('play-screen'),
  levelUp: document.getElementById('level-up-screen'),
  gameOver: document.getElementById('game-over-screen')
};

const header = document.querySelector('header');
const grid = document.getElementById('grid');
const timeDisplay = document.getElementById('time-display');
const maxTimeDisplay = document.getElementById('max-time-display');
const levelDisplay = document.getElementById('level-display');
const targetDisplay = document.querySelector('#target-number span');
const levelTimeDisplay = document.getElementById('level-time');
const finalLevelDisplay = document.getElementById('final-level');

const btns = {
  start: document.getElementById('start-btn'),
  nextLevel: document.getElementById('next-level-btn'),
  restart: document.getElementById('restart-btn')
};

// Game Config
const LEVELS = [
  { level: 1, size: 3, colors: false, shuffleTimer: 0 },
  { level: 2, size: 4, colors: false, shuffleTimer: 0 },
  { level: 3, size: 4, colors: true, shuffleTimer: 0 },
  { level: 4, size: 5, colors: false, shuffleTimer: 0 },
  { level: 5, size: 5, colors: true, shuffleTimer: 5000 },
  { level: 6, size: 6, colors: true, shuffleTimer: 4000 },
  { level: 7, size: 6, colors: true, shuffleTimer: 3000 }
];

const COLORS = [
  '#ef4444', '#f97316', '#eab308', '#22c55e', '#0ea5e9', '#6366f1', '#d946ef', '#f43f5e'
];

// State
let currentLevel = 1;
let currentTarget = 1;
let maxNumber = 9;
let startTime = 0;
let timerInterval = null;
let shuffleInterval = null;
let numbers = [];

let maxUnlockedLevel = parseInt(localStorage.getItem('focusMaster_unlockedLevel')) || 1;

if (maxUnlockedLevel > 1) {
  btns.start.textContent = `Continue Level ${maxUnlockedLevel}`;
}

// Events
btns.start.addEventListener('click', () => initGame(maxUnlockedLevel));
btns.nextLevel.addEventListener('click', () => initGame(currentLevel + 1));
btns.restart.addEventListener('click', () => initGame(currentLevel));

function showScreen(screenName) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[screenName].classList.add('active');
  
  if (screenName === 'play') {
    header.classList.add('visible');
  } else {
    header.classList.remove('visible');
  }
}

function initGame(levelIndex) {
  currentLevel = levelIndex;
  currentTarget = 1;
  const config = LEVELS[Math.min(currentLevel - 1, LEVELS.length - 1)];
  const size = config.size;
  maxNumber = size * size;
  const maxAllowedTime = maxNumber * 2;
  
  levelDisplay.textContent = currentLevel;
  targetDisplay.textContent = currentTarget;
  timeDisplay.textContent = '0.00';
  maxTimeDisplay.textContent = maxAllowedTime;
  
  generateNumbers(maxNumber);
  renderGrid(config);
  
  showScreen('play');
  
  startTime = Date.now();
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(updateTimer, 50);

  if (shuffleInterval) clearInterval(shuffleInterval);
  if (config.shuffleTimer > 0) {
    shuffleInterval = setInterval(() => {
      shuffleNumbers();
      renderGrid(config);
    }, config.shuffleTimer);
  }
}

function generateNumbers(max) {
  numbers = Array.from({length: max}, (_, i) => i + 1);
  shuffleNumbers();
}

function shuffleNumbers() {
  for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
  }
}

function renderGrid(config) {
  grid.innerHTML = '';
  grid.style.gridTemplateColumns = `repeat(${config.size}, 1fr)`;
  
  numbers.forEach((num, index) => {
    const tile = document.createElement('div');
    tile.className = 'tile animate-in';
    tile.style.animationDelay = `${index * 20}ms`;
    
    // If it was already clicked (in a shuffle scenario), keep it empty
    if (num < currentTarget) {
      tile.style.visibility = 'hidden';
      tile.dataset.val = -1;
    } else {
      tile.textContent = num;
      tile.dataset.val = num;
      
      if (config.colors) {
        const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        tile.style.color = randomColor;
        // Optionally add slight background tint
        // tile.style.backgroundColor = `${randomColor}15`; 
      }
    }
    
    tile.addEventListener('mousedown', handleTileClick);
    tile.addEventListener('touchstart', handleTileClick, {passive: false});
    
    grid.appendChild(tile);
  });
}

function handleTileClick(e) {
  e.preventDefault();
  const tile = e.currentTarget;
  const val = parseInt(tile.dataset.val);
  
  if (val === -1) return; // Already clicked
  
  if (val === currentTarget) {
    // Correct
    tile.classList.add('correct');
    setTimeout(() => {
      tile.style.visibility = 'hidden';
      tile.dataset.val = -1;
    }, 200);
    
    currentTarget++;
    
    if (currentTarget > maxNumber) {
      handleLevelComplete();
    } else {
      targetDisplay.textContent = currentTarget;
    }
  } else {
    // Wrong
    tile.classList.add('wrong');
    setTimeout(() => {
      tile.classList.remove('wrong');
    }, 400);
    
    // Penalty
    startTime -= 3000; // 3 second penalty
    
    // Slight red flash on screen
    document.body.style.backgroundColor = '#ef4444';
    setTimeout(() => {
      document.body.style.backgroundColor = '';
    }, 150);
  }
}

function updateTimer() {
  const elapsed = (Date.now() - startTime) / 1000;
  const maxAllowedTime = maxNumber * 2;
  
  if (elapsed >= maxAllowedTime) {
    timeDisplay.textContent = maxAllowedTime.toFixed(2);
    triggerGameOver();
  } else {
    timeDisplay.textContent = elapsed.toFixed(2);
  }
}

function triggerGameOver() {
  clearInterval(timerInterval);
  if (shuffleInterval) clearInterval(shuffleInterval);
  finalLevelDisplay.textContent = currentLevel;
  showScreen('gameOver');
}

function handleLevelComplete() {
  clearInterval(timerInterval);
  if (shuffleInterval) clearInterval(shuffleInterval);
  
  const finalTime = ((Date.now() - startTime) / 1000).toFixed(2);
  levelTimeDisplay.textContent = finalTime;
  
  // Save progress to localStorage
  const nextLevel = currentLevel + 1;
  if (nextLevel <= LEVELS.length && nextLevel > maxUnlockedLevel) {
    maxUnlockedLevel = nextLevel;
    localStorage.setItem('focusMaster_unlockedLevel', maxUnlockedLevel);
  }
  
  // Save best time
  const bestTimeKey = `focusMaster_bestTime_lvl_${currentLevel}`;
  const bestTime = localStorage.getItem(bestTimeKey);
  if (!bestTime || parseFloat(finalTime) < parseFloat(bestTime)) {
    localStorage.setItem(bestTimeKey, finalTime);
  }
  
  showScreen('levelUp');
}

// Initial
showScreen('start');
