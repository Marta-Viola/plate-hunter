# PlateHunter | The Road Trip License Plate Game

**PlateHunter** is a mobile-first web application designed to turn long car journeys into a competitive hunt for foreign license plates.

Inspired by a real-life game I play with my partner during our road trips, this app replaces the old pen-and-paper method with a sleek, digital interface.

## The Game
The rules are simple:
1. Spot a vehicle with a foreign license plate.
2. Shout the country name first!
3. Tap the corresponding flag in the app to score points.
4. The traveler with the most points at the end of the trip wins.

## Features (Current MVP)
- **Scoring by Rarity:** points are assigned based on "Tiers" (distance from Italy and rarity of the plate). Neighboring countries award 1 point, while "Unicorns" like San Marino or Iceland award up to 10.
- **Persistence:** uses `localStorage` to ensure your trip progress isn't lost if you close the browser or restart your phone.
- **Mobile-First Design:** large, easy-to-tap buttons designed for use on the move.

## Tech Stack
- **HTML5:** semantic structure.
- **CSS3:** custom properties (variables) and CSS Grid for a responsive, dark-mode layout.
- **Vanilla JavaScript:** dynamic DOM manipulation and state management.

## How to Play
The app is hosted via Github Pages. Simply open the link on your mobile browser, "Add to Home Screen" for the best experience, and start hunting!
[Click Here!](https://marta-viola.github.io/plate-hunter/)

---
*Status: Work in Progress - More features like History Logs and Player Customization coming soon.*
