function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");
  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Email
function sendMail(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  var params = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    phone_no: document.getElementById("phone_no").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_88jyied";
  const templateID = "template_ygmhy5w";

  emailjs.send(serviceID, templateID, params)
  .then(function(res) {
      showMessage("Message sent successfully!", "success");
  })
  .catch(function(err) {
      showMessage("Failed to send message. Please try again.", "error");
  });
}

function showMessage(message, type) {
  var messageContainer = document.getElementById("message-container");
  var messageBox = document.getElementById("message-box");
  var messageContent = document.getElementById("message-content");

  messageContent.textContent = message;

  if (type === "success") {
      messageBox.classList.add("success");
      messageBox.classList.remove("error");
  } else {
      messageBox.classList.add("error");
      messageBox.classList.remove("success");
  }

  messageContainer.style.display = "flex"; // Show the container
}

function closeMessage() {
  var messageContainer = document.getElementById("message-container");
  messageContainer.style.display = "none"; // Hide the container
}



// Function to animate the counter
function animateCounter(element, end, duration) {
  let startTimestamp = null;
  const start = 0;
  
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    element.innerText = Math.floor(progress * (end - start) + start);
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.innerText = end; // Ensure the final value is set
    }
  };
  window.requestAnimationFrame(step);
}

// Intersection Observer to trigger animation when section is in view
const counters = document.querySelectorAll('.scroll-count');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      animateCounter(entry.target, target, 2000); // Count from 0 to target
      observer.unobserve(entry.target); // Stop observing after animation
    }
  });
}, { threshold: 0.5 });

// Add data-target attribute to your HTML
counters.forEach(counter => {
  observer.observe(counter); // Start observing
});




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


// const createOdometer=(el,value)=>{
//   const odometer=new Odometer({
//     el:el,
//     value:0,
//     });
//     odometer.update(value)
// }
// const counter=document.querySelector(".scroll-count");
// createOdometer(counter,100)







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
    strings : ["Designer","Developer"],
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