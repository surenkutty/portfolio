window.addEventListener('load', function() {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(progressBar => {
      const width = progressBar.style.width;
      progressBar.style.width = 0;
      setTimeout(() => {
          progressBar.style.width = width;
      }, 500);
  });
});


const createOdometer=(el,value)=>{
  const odometer=new Odometer({
    el:el,
    value:0,
    });
    odometer.update(value)
}
const counter=document.querySelector(".scroll-count");
createOdometer(counter,100)





function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  window.onscroll = function() {headerShadow()};
  function headerShadow() {
    const navHeader =document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
    }
  }

  var typingEffect = new Typed(".typedText",{
    strings : ["Designer","Fullstack Developer","AppDeveloper"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })

 const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true     
})
/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

const srleft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  
  reset: false    
})

srleft.reveal('.about-image-container',{delay:400})
srleft.reveal('.s2-title',{})
srleft.reveal('.card',{delay:100})
srleft.reveal('.progress',{delay:100})
const srright = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  easing:'ease-out',
  reset: false    
})
srright.reveal('.info',{})
srright.reveal('.about-content',{delay:200})
const srbottom = ScrollReveal({
  origin: 'bottom',
  distance: '80px',
  duration: 2000,
  reset: false    
})
srbottom.reveal('.contact-form',{delay:400})