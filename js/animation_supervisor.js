let options = {
  root: null,
  rootMargin: "5px",
  threshold: 0.5,
};
let callback = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-show");
      observer.unobserve(entry.target);
    }
  });
};

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll(".price__item-animate");
targets.forEach((target) => {
  observer.observe(target);
});
