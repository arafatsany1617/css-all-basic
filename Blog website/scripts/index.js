const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  if (menu.className === "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});



window.addEventListener("scroll", () => {
  const header = document.getElementById("blog-header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.9)";
    header.style.transition = "0.3s";
  } else {
    header.style.background = "linear-gradient(90deg, #000, #222)";
  }
});
