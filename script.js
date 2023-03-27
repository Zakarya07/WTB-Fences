/*          Top Button           */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("myBtn").style.display = "flex";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  

  /*          DATE          */
// Add of the date (month/year) dynamically in the footer's copyright

// Get the HTML element <span> that we are gonna add the date into
let copyrightDate = document.querySelector(".copyrightDate");
// Create an Date object
let date = new Date();
// Using the getFullYear() method of the Date object that return us the current year
let currentYear = date.getFullYear();

copyrightDate.innerHTML = currentYear;