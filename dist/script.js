// navbar fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.getElementById("to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("block");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("block");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.getElementById("nav-menu");

document.querySelector("#hamburger").onclick = (e) => {
  navMenu.classList.toggle("hidden");
};

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target)) {
    navMenu.classList.add(
      "hidden"
    ); /*class yang dituju tidak menggunakan TITIK*/
  }
});

// to top icon
const toTop = document.getElementById("to-top");

// theme
const toggleButton = document.getElementById("toggle-button");
const html = document.querySelector("html");

toggleButton.addEventListener("click", (e) => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    toggleButton.innerHTML = '<i data-feather="toggle-right"></i>';
    localStorage.theme = "dark";
  } else {
    toggleButton.innerHTML = '<i data-feather="toggle-left"></i>';
    localStorage.theme = "light";
  }

  feather.replace();
});

// pindahkan posisi toggle sesuai mode
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
  toggleButton.innerHTML = '<i data-feather="toggle-right"></i>';
} else {
  document.documentElement.classList.remove("dark");
  toggleButton.innerHTML = '<i data-feather="toggle-left"></i>';
}
