// JavaScript Document
console.log("hi");


// STARTSCHERM SLIDER //   // STARTSCHERM SLIDER //   // STARTSCHERM SLIDER //   // STARTSCHERM SLIDER //   // STARTSCHERM SLIDER // 
  document.addEventListener('DOMContentLoaded', () => { //pas als pagina is geladen
    const ul = document.querySelector('.startscherm ul:first-of-type'); //slider mini
    const imgWidth = ul.firstElementChild.clientWidth; //berekend de breedte van 1ste li en bewaard
    ul.innerHTML += ul.innerHTML; //verdubbelt de ul binnen de ul dus daarom blijft ie in een loop
  
    const bigImages = document.querySelectorAll('.startscherm ul:last-of-type li'); //de li

  
    ul.addEventListener('scroll', () => { //code wordt uitgevoerd na scrollen
      const scrollIndex = Math.floor(ul.scrollLeft / imgWidth); //hoe ver element is vanaf links scherm : breedte li= kijken hoeveel afbeelingen er gescrolt
      bigImages.forEach((img, index) => {
        img.style.display = index === scrollIndex ? 'grid' : 'none'; //staat de afbeeling in het midden dan komt er grid op anders niet en is ie niet zichtbaar
      });

  //kijken of de positie van de ul op de helft is
      if (ul.scrollLeft >= ul.scrollWidth / 2) { //zo ja komt de ul erbij 
        ul.scrollLeft -= ul.scrollWidth / 2; //zo nee komt de ul er niet bij
      }
    });

  });


// PLAYSTATION SHARE BUTTONS PREV + NEXT // // PLAYSTATION SHARE BUTTONS PREV + NEXT // // PLAYSTATION SHARE BUTTONS PREV + NEXT // 
var sliderCounter = 1; //houd bij welke dia zichtbaar is
var totalSlides = 7; // Pas dit aan aan het werkelijke aantal dia's
var nextButton = document.getElementById("nextBtn"); //volgende button
var prevButton = document.getElementById("prevBtn"); //vorige button
var ulElement = document.querySelector(".PSshare ul"); //conatiner dia's
var imageWidth = document.querySelector(".PSshare ul li").offsetWidth; // 1 img geselecteerd + wat de breedte ervan is

//display: none
function manageButtons() {
  prevButton.style.display = sliderCounter === 1 ? "none" : "block"; //gelijk aan 1 = knop verborgen

  nextButton.style.display = sliderCounter === totalSlides ? "none" : "block"; // gelijk aan 7 = knop verborgen
}

nextButton.addEventListener("click", function() {
  sliderCounter++;
  ulElement.scrollTo({ left: (sliderCounter - 1) * imageWidth, behavior: "smooth" });
  manageButtons();
});

prevButton.addEventListener("click", function() {
  sliderCounter--;
  ulElement.scrollTo({ left: (sliderCounter - 1) * imageWidth, behavior: "smooth" });
  manageButtons();
});

manageButtons();

  
  // FOOTER //  // FOOTER //  // FOOTER //  // FOOTER //  // FOOTER //  // FOOTER //  // FOOTER //
   
  
  document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('footer button');
   
    const articles = document.querySelectorAll('footer article');

    buttons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Toggle de "active" klasse op het bijbehorende artikel
            articles[index].classList.toggle("active");


            
            // Controleer of het bijbehorende artikel nu zichtbaar is
            if (articles[index].classList.contains("active")) {
                // Als het zichtbaar is, pas de hoogte aan om het artikel te tonen
                articles[index].style.maxHeight = articles[index].scrollHeight + "px";

               

            } else {
                // Als het verborgen is, stel de maximale hoogte in op 0 om het te verbergen
                articles[index].style.maxHeight = "0";
            }

            const img = button.querySelector('footer button img')
            if (img) {
                img.classList.toggle("active");}
        });
    });
});



    // LOADING //     // LOADING //     // LOADING //     // LOADING //     // LOADING //     // LOADING // 

  document.addEventListener("DOMContentLoaded", function() {
    var loader = document.querySelector(".loader");
    var duration = 2000; // 6 seconden (2 keer de animatie van 3 seconden)
  
    setTimeout(function() {
      loader.classList.add("fade-out");
  
      // Wacht even (bijvoorbeeld 2 seconden) en voeg dan de klasse "loaderhidden" toe
      setTimeout(function() {
        loader.classList.add("loaderhidden");
      }, 1000); // Hier wordt 2000 milliseconden (2 seconden) gewacht
    }, duration);
  });

    // DARKMODE //     // DARKMODE //     // DARKMODE //     // DARKMODE //     // DARKMODE //     // DARKMODE // 

  // Bron: https://lukelowrey.com/css-variable-theme-switcher/

  var toggle = document.querySelector("header button:nth-of-type(4)");

  function toggleTheme() {
      var currentTheme = document.documentElement.getAttribute('data-theme');
      var targetTheme = currentTheme === "light" ? "dark" : "light";
      
      document.documentElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('theme', targetTheme);
  }
  
  toggle.addEventListener("click", toggleTheme);
  
  var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  document.documentElement.setAttribute('data-theme', storedTheme);

  // DARKMODE BUTTON //   // DARKMODE BUTTON //  // DARKMODE BUTTON //  // DARKMODE BUTTON //  // DARKMODE BUTTON //

  let sun = document.getElementById("sun");
    
  sun.onclick = function(){
      sun.classList.toggle("night");
  }
  