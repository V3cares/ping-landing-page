const form = document.getElementById("form");
const errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  const email = document.getElementById("email").value.trim();
  const emailInput = document.getElementById("email");
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  
   if(email === "") {
    errorMsg.textContent = "Email address cannot be empty.";
    emailInput.style.border = "2px solid hsl(354, 100%, 66%)";
    console.log("Empty email address entered.");
  }

 else if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please provide a valid email address.";
     emailInput.style.border = "2px solid hsl(354, 100%, 66%)";
    console.log("Invalid email address entered:", email);
  }
    else {
    errorMsg.textContent = "";
    emailInput.style.border = "2px solid hsl(223, 100%, 88%)";
    console.log("Valid email address entered:", email);
    // You can add further actions here, such as sending the email to a server
    form.submit()
  }
 
 

});

const body = document.querySelector("body");
body.addEventListener("click", function() {
  errorMsg.textContent = "";
  const emailInput = document.getElementById("email");
  emailInput.style.border = "2px solid hsl(223, 100%, 88%)";
});

 