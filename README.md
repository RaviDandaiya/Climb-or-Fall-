# Climb-or-Fall 🧗‍♂️🌋

**Climb-or-Fall** is a high-intensity, endless 2D physics platformer where you must scale an infinite tower while escaping the rapidly rising lava below! With challenging gravity, deadly hazards, and precise movement mechanics, one wrong jump could send you plummeting to your doom.

![Climb-or-Fall Banner](logo.svg)

## 🎮 Play the Game
*(Add link to live version if applicable, e.g., CrazyGames URL)*

## 🔥 Features
- **Endless Physics Platforming:** Navigate tricky ledges and avoid the rising lava pool using a robust physics engine (Matter.js).
- **Responsive Controls:** Snappy movement, momentum-based actions, and a life-saving dash mechanic.
- **Dynamic Difficulty:** Choose your fate from 'Easy' (steady climb), 'Normal' (balanced pain), or 'Hard' (pure agony) modes. The game scales in speed and introduces red hazards as you climb higher.
- **Global Leaderboard:** Compete for the #1 Global rank using fully automatic Firebase Anonymous Auth and unique generated player IDs.
- **Battle Pass & Progression:** Gain XP based on maximum altitude reached to climb Battle Pass tiers and unlock new visual themes (Lava, Frost, Void, Gold).
- **Skin Boutique:** Collect coins scattered throughout the tower to purchase premium player skins (Phantom, Cyberpunk, Inferno, etc.).
- **Mobile Friendly:** Fully responsive design with an integrated on-screen touch controller and scrollable menus for smaller devices.
- **CrazyGames Ready:** Fully integrated with the CrazyGames SDK v3 for gameplay event tracking and interstitial/rewarded AD triggers.

## 🛠️ Built With
- **Vanilla JavaScript:** No massive frontend frameworks, just clean JS logic.
- **Matter.js:** For comprehensive 2D rigid body physics (gravity, collision, friction).
- **Firebase:** Firestore and Authentication for seamless leaderboard tracking and data persistence without annoying signups.
- **Vite:** Next-generation frontend tooling. Configured to build purely as a `SingleFile` standalone application mapping to CrazyGame's exact requirements.

## ⚙️ Development & Build Setup

### Prerequisites
Make sure you have Node.js installed.

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/RaviDandaiya/Climb-or-Fall-.git
cd Climb-or-Fall-
npm install
```

### Local Development Server
To start the local development server (Vite):
```bash
npm run dev
```

### Building for CrazyGames / Production
The build pipeline has been aggressively optimized to output a single, universally compatible HTML file with no cross-origin asset linking to respect strict iframe sandbox rules.

1. Build the single-file source:
```bash
npm run build
```
2. Automatically package it into a 100% compliant `.zip` on your Desktop:
```bash
node zip_build.js
```
The resulting `ClimbOrFall_CrazyGames.zip` on your Desktop is ready for direct upload to web portals like CrazyGames or Itch.io!

## 📜 License
All assets, logos, and game logic within this repository are the property of the Developer.
