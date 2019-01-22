// function openBoxOne(){
//     let modBox = document.getElementById("modBox1")
//     let body = document.getElementsByTagName("body")[0]

//     modBox.style.display = "block";
//     body.style.overflowY = "hidden";
// }

// function closeBoxOne(){
//     let modBox = document.getElementById("modBox1")
//     let body = document.getElementsByTagName("body")[0]
    
    
//     modBox.style.display = "none";
//     body.style.overflowY = "inherit";
// }


var modalBg = document.getElementById("modBox1");
var modalContent = document.getElementsByClassName("modal-wrapper")[0];
var body = document.getElementsByTagName("body")[0];
// var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modalBg.classList.toggle("show-modal-bg");
    modalContent.classList.toggle("show-modal-content");
    body.classList.toggle("lock-body")
}

function windowOnClick(event) {
    if (event.target === modalBg) {
        toggleModal();
    }
}

// trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);