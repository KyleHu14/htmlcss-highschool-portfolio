// Index Page (Start)

function goAbout(){
  window.location = "about.html";
}

function goEd(){
  window.location = "education.html";
}

function goExp(){
  window.location = "exp.html";
}

function goSkills(){
  window.location = "skills.html";
}

function goInt(){
  window.location = "int.html";
}

// Index Page (End)

function goHome(){
  window.location = "index.html";
}

// Navigation Bar responsiveness / animations
const navSlide = () =>{
  const smallNav = document.querySelector(".smallNav");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // On click, display the smallNav
  smallNav.addEventListener("click", ()=>{
    nav.classList.toggle("nav-active");
  });

  // Trigger animation
  navLinks.forEach((link, index)=>{
    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+2}s`;
  });
}
navSlide();

$(".main-content").delay(800).animate({"opacity": "1"}, 700);

// Onclick functions in int.html
function lolPage(){
  window.location = "https://lol.moa.tw/summoner/show/LloydPearce";
}

function csPage(){
  window.location = "https://csgo-stats.com/player/76561198230231288";
}

function osuPage(){
  window.location = "https://osu.ppy.sh/users/9052731";
}

function sgatePage(){
  window.location = "https://myanimelist.net/anime/9253/Steins_Gate";
}

function kgatariPage(){
  window.location = "https://myanimelist.net/anime/6594/Katanagatari";
}

function oregairuPage(){
  window.location = "https://myanimelist.net/anime/14813/Yahari_Ore_no_Seishun_Love_Comedy_wa_Machigatteiru";
}
