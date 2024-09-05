let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScroll) {
    navbar.style.top = "-60px";
    lastScroll = window.scrollY;
  } else {
    navbar.style.top = 0;
  }
});

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)
