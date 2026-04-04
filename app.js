const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
}

let nextDom = document.getElementById('next');
let carasuelDom = document.querySelector('.carausel');
let listItemDom = document.querySelector('.carausel .list');
let thumbnailDom = document.querySelector('.carausel .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
}
let timeRunning =1000;
let timeAutoNext=7000; 
let runTimeOut;
let runAutoRun = setTimeout(() =>{
    nextDom.click();
}, timeAutoNext); 
function showSlider(type){
    let itemSlider = document.querySelectorAll('.carausel .list .item');
    let itemThumbnail = document.querySelectorAll('.carausel .thumbnail .item');

    if(type === 'next'){
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carasuelDom.classList.add('next');
    }
clearTimeout(runTimeOut);
runTimeOut = setTimeout(() =>{
    carasuelDom.classList.remove('next');
    carasuelDom.classList.remove('prev');
}, timeRunning)

clearTimeout(runAutoRun);
runAutoRun = setTimeout(() =>{
    nextDom.click();
}, timeAutoNext);

}

let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}
showSlides();

function showTimeTable() {
    alert("Time Table Clicked!");
}

