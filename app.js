const hero = document.querySelector(".hero");
const navBar = document.querySelector('nav-bar');

const t1 = new TimelineMax();

t1.fromTo(hero,1, {height: "0%"}, {height: "100%"});