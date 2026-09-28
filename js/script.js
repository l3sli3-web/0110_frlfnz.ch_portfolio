/* ---------------------------------------------------------
   Bouncing smiley — full viewport width, bounces only
   vertically (up/down) between the header and the bottom
   of the screen.
--------------------------------------------------------- */
const logo = document.querySelector('.logo-icon');
const face = logo.querySelector('ellipse');

function updateLogo() {
  const w = window.innerWidth;

  // Bereich: ab 400px Breite beginnt das Oval flacher zu werden, ab 1600px ist es am flachsten
  const minW = 400, maxW = 600;
  const t = Math.min(Math.max((w - minW) / (maxW - minW), 0), 1);

  // ry: 45 auf kleinen Screens (hoch), 22 auf großen Screens (flach)
  const ry = 45 - t * (45 - 22);
  face.setAttribute('ry', ry);

  // viewBox mitwachsen lassen, damit das Oval nicht abgeschnitten wird
  const pad = 3;
  logo.setAttribute('viewBox', `0 ${33 - ry - pad} 120 ${2 * (ry + pad)}`);
}

updateLogo();
window.addEventListener('resize', updateLogo);

// (function bounce() {
//   const el = document.getElementById("bouncer");

//   // current vertical position + speed, in px/second
//   let y = 220;
//   let speedY = 110;
//   let dirY = 1;

//   let lastTime = null;

//   function getBounds() {
//     const headerH = document.querySelector(".site-header").offsetHeight;
//     const rect = el.getBoundingClientRect();
//     return {
//       minY: headerH * 0.55, // allow it to slightly tuck under the fade
//       maxY: window.innerHeight - rect.height,
//     };
//   }

//   function step(timestamp) {
//     if (lastTime === null) lastTime = timestamp;
//     const dt = (timestamp - lastTime) / 1000;
//     lastTime = timestamp;

//     const b = getBounds();

//     y += speedY * dirY * dt;

//     if (y <= b.minY) {
//       y = b.minY;
//       dirY = 1;
//     } else if (y >= b.maxY) {
//       y = b.maxY;
//       dirY = -1;
//     }

//     el.style.transform = `translateY(${y}px)`;

//     requestAnimationFrame(step);
//   }

//   // respect reduced-motion preference: keep it centered, no animation
//   const prefersReducedMotion = window.matchMedia(
//     "(prefers-reduced-motion: reduce)"
//   ).matches;

//   if (prefersReducedMotion) {
//     window.addEventListener("load", () => {
//       const b = getBounds();
//       y = (b.minY + b.maxY) / 2;
//       el.style.transform = `translateY(${y}px)`;
//     });
//   } else {
//     requestAnimationFrame(step);
//   }
// })();

