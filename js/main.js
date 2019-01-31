var log = console.log

var id = document.getElementById.bind(document);
var clas = document.getElementsByClassName.bind(document);
var tag = document.getElementsByClassName.bind(document);
var body = document.getElementsByTagName("body")[0];

// var buttons = document.getElementsByTagName("button")
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", toggleModal);
// }

function toggleModal(modBoxSel){
    var modal = id(modBoxSel);
    var modalContent = document.getElementById(modBoxSel).getElementsByClassName("modal-wrapper")[0];


    modal.classList.toggle("show-modal-bg");
    modalContent.classList.toggle("show-modal-content");
    body.classList.toggle("lock-body");

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            toggleModal(modal.id);
        }
    });
}

