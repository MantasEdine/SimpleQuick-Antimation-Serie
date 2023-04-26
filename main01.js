let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};
const observer = new IntersectionObserver((entries) => {
  console.log("hey");
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("observe");
    } else {
      entry.target.classList.remove("observe");
    }
  });
});
const Elements = document.querySelectorAll(".observed");
Elements.forEach((element) => observer.observe(element));
