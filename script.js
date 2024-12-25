
        const checkbox = document.getElementById('bgChanger');

        checkbox.addEventListener('change', () => {
            document.body.style.background = checkbox.checked
                ? "#151515"
                : "  linear-gradient(to right, #000000, #1a0033, #4d004d, #800080, #cc0099)";


            
        });


    
const navbar = document.querySelector('.navbar'); 

checkbox.addEventListener('change', () => {
    navbar.style.background = checkbox.checked
        ? "#650062 "  
        : "#121212"; 
});
const shadowCustom = document.querySelector('.shadow-custom'); 

checkbox.addEventListener('change', () => {
    shadowCustom.style.boxShadow = checkbox.checked
        ? "0px 5px 15px 0px #650062"  
        : "0px 5px 5px 0px #dce91e"; 
});


    
const scrollToTopBtn = document.getElementById('scrollToTopBtn');


// Scroll to Top Smoothly
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling
  });
});
        




const div = document.querySelector(".scroll-line");
window.addEventListener("scroll",()=>{
  const {scrollTop,clientHeight,scrollHeight}=
  document.documentElement;
  const scrolled = (scrollTop/(scrollHeight - clientHeight)*88);

  div.style.width= `${scrolled}%`;
})



const projects = document.querySelectorAll(".projects-container");

// Trigger animation on scroll
window.addEventListener("scroll", checkVisibility);

// Initial check for visible projects
checkVisibility();

function checkVisibility() {
  const triggerBottom = window.innerHeight / 5 * 4;

  projects.forEach((project) => {
    const projectTop = project.getBoundingClientRect().top;

    if (projectTop < triggerBottom) {
      project.classList.add("show");
    } else {
      project.classList.remove("show");
    }
  });
}



function sendEmail() {

  Email.send({
    SecureToken: "8e7b22f0-4f3c-4842-a094-652c3c39a77b",
   
    To : 'mkp062285@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact From Enquiry",
    Body : "Name: " + document.getElementById("name").value
        + "<br> Email: " + document.getElementById("email").value
        + "<br> message: " + document.getElementById("message").value
}).then(
  message => alert("message send Succesfully")
);
console.log(alert);

}




