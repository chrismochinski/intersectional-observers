console.log("js ready");

//select all things w/ this class ??
const cards = document.querySelectorAll(".card");

//entries literally translates to "things that have entered (screen / root) ??"
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting); 
  });
  console.log("entries", entries);
},  {
    threshold: 1, //must be between 0 and 1
});

cards.forEach(card => {
    observer.observe(card); 
})


  