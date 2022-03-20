console.log('js ready');

const cards = document.querySelectorAll(".card");

 const observer = new IntersectionObserver(entries => {
     console.log('entries', entries);
 })

 observer.observe(cards[0]);