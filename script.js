console.log("js ready");

//select all things w/ this class ??
const cards = document.querySelectorAll(".card");

//entries literally translates to "things that have entered (screen / root) ??"
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting); //targets thing we are looking at WITH CLASS LIST and in this case is "show"...if intersection is true, adds show class
  });
  console.log("entries", entries);
});

cards.forEach(card => {
    observer.observe(card);
})


 