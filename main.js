let composeBtn = document.getElementById('compose-btn');
let offcanvasRight = document.getElementById('offcanvasRight');

composeBtn.onclick = function(){
    offcanvasRight.classList.toggle('show')
};
let closeOffCanvas = document.getElementsByClassName('close-offcanvas')[0];
console.log(closeOffCanvas);


    closeOffCanvas.onclick = function () {
        offcanvasRight.classList.toggle('show')
    }