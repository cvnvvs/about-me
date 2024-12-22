let colors = ["#606363", "#393b3b", "#252626", "#0d1f1f"];
function createSquare() {
  const section = document.querySelector("section");
  const square = document.createElement("span");
  let size = Math.random() * 50;
  square.style.width = 20 + size + "px";
  square.style.height = 20 + size + "px";
  let bg = colors[Math.floor(Math.random() * colors.length)];
  square.style.background = bg;
  square.style.top = Math.random() * innerHeight + "px";
  square.style.left = Math.random() * innerWidth + "px";
  section.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, 5000);
}
setInterval(createSquare, 150);
