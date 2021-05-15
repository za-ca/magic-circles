setInterval(() => {
  const circle = document.createElement("span");
  circle.classList.add("circle");

  let size = Math.random() * 300 + 20 + "px";
  circle.style.height = size;
  circle.style.width = size;

  circle.style.left = Math.random() * 100 + "%";
  circle.style.top = Math.random() * 100 + "%";

  document.body.appendChild(circle);

  circle.addEventListener("click", () => {
    circle.remove();
  });

  setTimeout(() => {
    circle.remove();
  }, 5000);
}, 300);

const cursor1 = document.querySelector(".cursor1");
const cursor2 = document.querySelector(".cursor2");
const cursor3 = document.querySelector(".cursor3");

document.body.addEventListener("mousemove", (e) => {
  cursor1.style.left = e.x + "px";
  cursor1.style.top = e.y + "px";

  cursor2.style.left = e.x + "px";
  cursor2.style.top = e.y + "px";

  cursor3.style.left = e.x + "px";
  cursor3.style.top = e.y + "px";
});

document.body.addEventListener("mousedown", () => {
  cursor1.style.transform = "scale(2)";
});
document.body.addEventListener("mouseup", () => {
  cursor1.style.transform = "scale(1)";
});
