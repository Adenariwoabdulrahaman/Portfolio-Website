const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const divId = link.getAttribute('href').split('#')[1];
    const div = document.getElementById(divId);
    div.scrollIntoView({ behavior: 'smooth' });
  });
});


//Contact Section Submt Button
document.addEventListener("DOMContentLoaded", function() {
  const button = document.querySelector("button");
  button.addEventListener("click", function() {
    alert("Message sent successfully!");
  });
});


