## Getting Started

- nvm use - use node version in .nvmrc
- npm install
- npm run dev (also runs build-sass - see package.json)
- npm build-sass
  - To create
    - /public/assets/styles/primary/primary.css
    - /public/assets/styles/secondary/secondary.css
  - From
    - /app/styles/primary.scss
    - /app/styles/secondary.scss

<br><br>

## Styles/Themes and preloading

- 2 Themes used **primary.css** & **secondary.css**
- App loads relevant css based on gameSettings.theme within **gameData.json** (change to 'primary' or 'secondary') - See **GameLoader.js**
- 'import' of scss removed from src files
- Button SVGs are now external for easy updating
  <br><br>
- **THIS MEANS ANY CHANGES TO /app/styles/primary.scss OR /app/styles/secondary.scss NEED AN npm build-sass OR npm run dev AND BROWSER RELOAD**
  <br><br>
- SVG preloader in /app/utils/preloadSVGsByTheme.js
- Also seperated fetching gamedata and handleResize - see /app/utils

<br><br>

## Notes - 01.10.24

- Game now based on 1920x1080 - see
  - /app/utils/handleResize.js
  - .scale-container in /app/styles/main.scss
- Buttons are sized to fit on 1920x1080
- 2 progress bars, 1 (striped) for loading, 1 for timer
- Replay audio button in center under caption - instead of clicking characters
- Use a single background image across all screens
- See public/assets/images/background-faded.webp for layout and positioning, I will also send link to figma files.

## Still to come

- Stars/character anims (so don't work on these assets yet)
- Frame svg around slide
