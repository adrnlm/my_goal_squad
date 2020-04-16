// listen for auth changes
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log(user.email, "has logged in");
    document.querySelector(".container").style.display = "none";
  } else {
    console.log("user has logged out");
    document.querySelector("#signin-form").style.display = "block";
  }
});

// Log in Form
const signinForm = document.querySelector("#signin-form");

signinForm.addEventListener("submit", (e) => {
  //   prevent page refresh
  e.preventDefault();

  const email = signinForm["signin-email"].value;
  const password = signinForm["signin-password"].value;

  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    signinForm.reset();
    auth.onAuthStateChanged((user) => {
      if (user.email == "it.mygoalsquad@gmail.com") {
        window.location.href = "/pages/admin-page.html";
      } else {
        window.location.href = "/pages/user-main-page.html";
      }
    });
  });
});
