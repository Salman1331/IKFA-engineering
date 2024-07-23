
/* HAMBURGER  */
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});


/* SLIDE-IN  */
document.addEventListener("DOMContentLoaded", function() {
    const slideInElements = document.querySelectorAll('.slide-in');
  
    const handleScroll = () => {
      slideInElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Add 'visible' class to trigger slide-in effect
          element.classList.add('visible');
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger the function on page load
  });


/* POPUP-BANNER  */
document.addEventListener("DOMContentLoaded", function() {
  // Function to show the popup banner
  function showPopupBanner() {
      const popupBanner = document.getElementById('popup-banner');
      if (popupBanner) {
          popupBanner.style.display = 'flex';
      }
  }

  // Show the popup banner after 7 seconds
  setTimeout(showPopupBanner, 7000);

  // Close button functionality
  const closeBtn = document.querySelector('.popup-banner .close-btn');
  if (closeBtn) {
      closeBtn.addEventListener('click', function() {
          const popupBanner = document.getElementById('popup-banner');
          if (popupBanner) {
              popupBanner.style.display = 'none';
          }
      });
  }
});

function sendToWhatsapp(event) {
  event.preventDefault(); // Prevent the default form submission

  // Retrieve form data
  const form = event.target;
  const name = form.querySelector('input[name="name"]').value;
  const email = form.querySelector('input[name="email"]').value;
  const phone = form.querySelector('input[name="phone"]').value;
  const message = form.querySelector('textarea[name="message"]').value;

  // WhatsApp number
  const number = "+919880309808";

  // Construct WhatsApp URL
  const url = "https://wa.me/" + number + "?text="
      + "Name: " + name + "%0a"
      + "Email: " + email + "%0a"
      + "Phone: " + phone + "%0a"
      + "Message: " + message;

  // Open WhatsApp URL in a new tab
  window.open(url, '_blank').focus();
}