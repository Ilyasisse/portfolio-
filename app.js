function openMenu() {
  const body = document.body;
  body.classList.add("open");
}
function closeMenu() {
  const body = document.body;

  body.classList.remove("open");
}

// template_7w4jfyr
// service_64cdtx5
// zsvSQeP-OUNi0dCTu

async function sendEmail(event) {
  event.preventDefault();
  const body = document.body;
  const loading = document.querySelector(".contact__form__loading");

  const form = document.querySelector(".contact__form");


try{
    // Loading State
  console.log("loading");
  loading.classList.remove("hidden");

  await emailjs.sendForm(
    "service_64cdtx5",
    "template_7w4jfyr",
    event.target,
    "zsvSQeP-OUNi0dCTu"
  );

  //   Success State

  form.reset();

  console.log("hey, the email has been sent");
  loading.classList.add("hidden");

  body.classList.add("success-open");
  setTimeout(() => {
    body.classList.remove("success-open");
  }, 5000);

}

catch{
   loading.classList.add("hidden");

   alert("An error has occured.Please try again later or contact me at Ilyasisse574@gmail.com")
}


}
