auth.onAuthStateChanged((user) => {
    if (user) {
        // console.log(user.email, "has logged in");

        var userPicture;

        if (user.photoURL == null) {
            userPicture = "/img/empty-profile.png";
        } else {
            userPicture = user.photoURL;
        }

        let navLi = `
            <a href="#user"><img class="circle" src="${userPicture}"></a>
            <a href="#name"><span class="white-text name">${user.displayName}</span></a>
            <a href="#email"><span class="white-text email">${user.email}</span></a>
            `;


        let userPanel = document.querySelector(".user-view");
        userPanel.innerHTML += navLi;
    } else {
        // console.log("user has logged out");
    }
});

$(document).ready(function () {
    $('.sidenav').sidenav();

    let taskPage = "/pages/user-main-page.html"
    let journalPage = "/pages/gratitude-journal.html"
    let quotePage = "/pages/quote-of-the-day.html"

    if (window.location.pathname == taskPage) {
        $("#task-nav").addClass('disabled');
    } else if (window.location.pathname == journalPage) {
        $("#journal-nav").addClass('disabled');
    } else if (window.location.pathname == quotePage) {
        $("#quote-nav").addClass('disabled');
    }

});

$('#logout-nav').click(() => {
    auth.signOut().then(() => {
        window.location.href = "../index.html";
    });
})