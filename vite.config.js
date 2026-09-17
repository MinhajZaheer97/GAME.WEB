import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: `${root}index.html`,
        "login-page/login": `${root}login-page/login.html`,
        "login-page/register": `${root}login-page/register.html`,
        "start-page/startpage": `${root}start-page/startpage.html`,
        "games/games": `${root}games/games.html`,
        "info/aboutweb": `${root}info/aboutweb.html`,
        "games/rock-paper-scissor/main-menu": `${root}games/rock-paper-scissor/main-menu.html`,
        "games/rock-paper-scissor/singlePlayer/r-p-s": `${root}games/rock-paper-scissor/singlePlayer/r-p-s.html`,
        "games/rock-paper-scissor/multiplayer/r-p-s": `${root}games/rock-paper-scissor/multiplayer/r-p-s.html`,
        "games/tic-tac-toe/main-menu": `${root}games/tic-tac-toe/main-menu.html`,
        "games/tic-tac-toe/singleplayer/tic-tac-toe": `${root}games/tic-tac-toe/singleplayer/tic-tac-toe.html`,
        "games/tic-tac-toe/multiplayer/tic-tac-toe": `${root}games/tic-tac-toe/multiplayer/tic-tac-toe.html`,
        "info/rock-paper-scissor.about/rps-singleplayer": `${root}info/rock-paper-scissor.about/rps-singleplayer.html`,
        "info/rock-paper-scissor.about/rps-multiplayer": `${root}info/rock-paper-scissor.about/rps-multiplayer.html`,
        "info/tic-tac-toe.about/tttsingle": `${root}info/tic-tac-toe.about/tttsingle.html`,
        "info/tic-tac-toe.about/tttmultiplayer": `${root}info/tic-tac-toe.about/tttmultiplayer.html`,
      },
    },
  },
});
