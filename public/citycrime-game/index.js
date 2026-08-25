// index.js - Main Entry Point
import { initializeGame } from './game/babylon-game.js';
import { createVueApp } from './vue-app.js';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Starting Babylon.js Car Game...');

    // Create and mount Vue app
    const vueApp = createVueApp();

    // Initialize Babylon.js game with Vue app reference
    initializeGame(vueApp);

    console.log('✅ Game initialization complete!');
});