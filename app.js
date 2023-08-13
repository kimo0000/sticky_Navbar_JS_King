const nav = document.querySelector("nav");
const btn = document.querySelector("#btn");

window.addEventListener("scroll", () => {
  console.log(scrollY);
  if (scrollY > 415) {
    nav.style.backgroundColor = "#000";
    nav.style.color = "#fff";
    btn.classList.add("active");
  } else {
    nav.style.backgroundColor = "";
    nav.style.color = "";
    btn.classList.remove("active");
  }
});

btn.addEventListener("click", () => {
  if (btn.classList.contains("active")) {
    scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
});
