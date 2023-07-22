// header scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header_scrolled");
    }
    else {
        nav.classList.remove("header_scrolled");
    }
}

// NAV HIDE
let navbar = document.querySelectorAll(".nav-link , .mainbtn");
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function (a) {
    a.addEventListener("click", function () {
        navcollapse.classList.remove("show");
    })

})

// local storage for hire data

function addNotes(event) {
    event.preventDefault();
    // console.log("welcome");
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;
    /*check notes to exists into localstorage or not */
    let allNotes = localStorage.getItem("myhire");
    if (allNotes != null) {
      notesArr = JSON.parse(allNotes);
    }
    else {
      notesArr = [];
    }
    notesArr.push({ name: name, number: number, email: email });
    //console.log(notesArr); 
    localStorage.setItem('myhire', JSON.stringify(notesArr));
    frm.reset();

  }