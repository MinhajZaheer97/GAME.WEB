# GAME.WEB

GAME.WEB is a browser-based gaming platform built with HTML, CSS, and JavaScript. It provides a central place to register or log in, choose a game, and play lightweight games either against an AI opponent or with another player on the same device.

## Features

- Supabase email/password registration and login
- Username validation during registration
- Authenticated start page with logout support
- Profile panel with username editing and avatar selection
- Avatar selection persisted in `localStorage`
- Game selection screen with a “coming soon” placeholder
- Game information pages for the available modes
- Sound effects, button sounds, and looping background music
- Responsive layouts for smaller screens
- Vite multi-page build configuration

## Games

### Tic-Tac-Toe

- Single-player mode against a computer opponent
- Two-player mode on the same device
- Win detection for rows, columns, and diagonals
- Draw detection
- New game/reset control
- Turn indicators and game sound effects

### Rock Paper Scissors

- Single-player mode against a computer opponent
- Two-player mode on the same device
- Classic Rock, Paper, Scissors rules
- Random computer move in single-player mode
- Score tracking
- Winner overlay and new game control
- Game sound effects and background music

## Tech Stack

- HTML5
- CSS3
- JavaScript using ES modules
- Vite
- Supabase JavaScript client (`@supabase/supabase-js`) for authentication and user data
- Browser `localStorage` for selected avatar and locally edited profile values
- Browser `Audio` API for music and sound effects

## How It Works

The application is organized as multiple HTML pages configured through `vite.config.js`. The login and registration pages use the Supabase client created in `backend.js`. Registration checks the username and password rules, checks username availability in the `users` table, creates the Supabase account, and stores the username profile.

After authentication, the start page can load the current user profile, open the game list, display project information, change the selected avatar, edit the displayed username, and log out. The game list links to separate menus for Tic-Tac-Toe and Rock Paper Scissors.

The game logic is implemented with DOM event listeners and page-specific JavaScript modules. Tic-Tac-Toe stores the board in the nine button elements and checks all possible winning combinations. Its single-player mode selects an empty square randomly for the computer. Rock Paper Scissors compares the selected moves using the standard rules; its single-player mode generates one of the three computer moves with `Math.random()`.

The visual design uses dark backgrounds, glowing purple controls, blur effects, game-specific layouts, and responsive CSS media queries. Sound files in `assets/sounds` are played for actions, wins, draws, and background music.

## Project Structure

```text
GAME.WEB/
├── assets/
│   ├── images/                  # Game, profile, avatar, and interface images
│   └── sounds/                  # Button, game, result, and background audio
├── componenets/                 # Shared background, button, heading, and navbar CSS
├── games/
│   ├── games.html              # Game selection page
│   ├── games.js
│   ├── rock-paper-scissor/     # Menus, modes, styles, and game logic
│   └── tic-tac-toe/            # Menus, modes, styles, and game logic
├── info/                       # Project and game information pages
├── login-page/                 # Login and registration pages, scripts, and styles
├── start-page/                 # Authenticated landing page and profile controls
├── backend.js                  # Supabase client setup
├── index.html                  # Registration entry page
├── vite.config.js              # Vite multi-page build inputs
├── package.json                # Scripts and dependencies
└── .env                        # Local environment variables; not committed
```

## Getting Started

### Prerequisites

- Node.js and npm
- A Supabase project with the credentials used by the application

### Installation

```bash
git clone https://github.com/MinhajZaheer97/GAME.WEB.git
cd GAME.WEB
npm install
```

Create a `.env` file in the project root with the variables read by `backend.js`:

```env
VITE_URL=your_supabase_project_url
VITE_KEY=your_supabase_anon_key
```

Start the Vite development server:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

To preview the production build locally after building:

```bash
npm run preview
```

## What I Learned

This project demonstrates practical experience with:

- Structuring a multi-page Vite application
- Connecting browser JavaScript to Supabase authentication and table queries
- Managing DOM events and UI state without a front-end framework
- Implementing board-game rules, win checks, draw checks, and random computer moves
- Persisting small pieces of interface state with `localStorage`
- Using CSS layout, effects, and media queries to support different screen sizes
- Handling relative asset paths and module scripts across nested game pages

## Future Improvements

These are possible next steps, not current features:

- Add automated tests for authentication flows and game rules
- Improve the computer opponents with a stronger Tic-Tac-Toe strategy
- Move all profile updates to a consistent Supabase-backed profile flow
- Add more games to the game selection page
- Improve error handling and user feedback for network and authentication failures

## Live Demo

https://gameweb-by-minhaj.netlify.app/

## Author

Minhaj Zaheer  
GitHub: https://github.com/MinhajZaheer97
