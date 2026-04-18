# 🚗 PlateHunter | "Cacciatori di Targhe"

**PlateHunter** is a mobile-first web application designed to turn long car journeys into a competitive hunt for foreign license plates.

Inspired by a real-life game I play with my partner during our road trips, this app replaces the old pen-and-paper method with a sleek, interactive, and persistent digital interface.

## 🎮 The Game
The rules are simple:
1. **Spot** a vehicle with a foreign license plate.
2. **Shout** the country name first to claim it!
3. **Tap** the corresponding flag in the app to score points.
4. The traveler with the most points at the end of the trip wins.

## 🚀 Key Features

### 🧠 Smart Dynamic Grid
The main dashboard features a **12-button grid (3x4)** designed for high-speed action:
- **6 Fixed Slots:** the most common Tier 1 countries (neighbors) are always at your fingertips.
- **5 Dynamic Slots:** these slots automatically update to show the 5 most recent "rare" plates you've spotted or searched for, keeping your current hunt efficient.
- **The "More" Button:** a searchable full database of countries for those rare "Unicorn" sightings.

### 📊 Tier-Based Scoring
Points are weighted based on rarity and distance from Italy:
- **Tier 1 (1 pt):** neighbors and very common travelers (e.g., Germany, France, Spain).
- **Tier 2 (3 pts):** common European travelers (e.g., Netherlands, Poland).
- **Tier 3 (5 pts):** long-haul travelers (e.g., UK, Portugal, Greece).
- **Tier 4 (10 pts):** "the Unicorns" - Micro-states and rare sightings (e.g., Iceland, San Marino, Vatican City).

### 📱 Superior UX/UI
- **Swipe-to-Switch:** seamlessly switch between active players by swiping right or left on the player cards.
- **Live Notifications:** a dynamic status bar confirms the last spotted plate, the player who claimed it, and the exact time.
- **Visual Feedback:** color-coded scores and active player cards (Purple vs. Blue) for instant recognition during the drive.
- **Detailed Logs:** track the full "Current Log" of the trip or view the "Hall of Fame" with past trip winners marked with 🏆.

### 💾 Persistence
Built with **Vanilla JavaScript** and **localStorage**, ensuring your trip progress and global history are never lost, even if you refresh the page or close your browser.

## 🛠️ Tech Stack
- **HTML5:** semantic structure.
- **CSS3:** custom properties (variables), Flexbox, and CSS Grid for a responsive, dark-mode layout.
- **Vanilla JavaScript:** advanced DOM manipulation, state management and touch event handling.

## 🔗 Live Demo
The app is hosted via **Github Pages**. Simply open the link on your mobile browser, "Add to Home Screen" for the best experience, and start hunting!

👉 [**Play PlateHunter Now**](https://marta-viola.github.io/plate-hunter/)

---
*Status: MVP Complete. Future updates may include global statistics and a tutorial.*
