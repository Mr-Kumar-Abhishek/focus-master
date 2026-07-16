import { defineConfig } from 'vite';

export default defineConfig({
  // Set the base path to relative so that the built assets resolve correctly 
  // when embedded in an iframe on itch.io or served from a subdirectory.
  base: './'
});
