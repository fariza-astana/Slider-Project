let images = [{
  url: "images/image1.png",
  title: "Rostov-on-Don \n LCD admiral"
}, {
  url: "images/image2.png",
  title: "Sochi \n Thieves"
}, {
  url: "images/image3.png",
  title: "Rostov-on-Don \n Patriotic"
}];




function initSlider(options) {
if (!images || !images.length) return;

options = options || {
dots: true
};

let sliderImages = document.querySelector(".part2-content2");
let sliderArrows = document.querySelector(".arrows");
let sliderDots = document.querySelector(".dots");

initImages();
initArrows();

if (options.dots) {
initDots();
}



function initImages() {
images.forEach((image, index) => {
  let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
  sliderImages.innerHTML += imageDiv;
});
}



function initArrows() {
sliderArrows.querySelectorAll(".arrow").forEach(arrow => {
  arrow.addEventListener("click", function() {
    let curNumber = +sliderImages.querySelector(".active").dataset.index;
    let nextNumber;
    if (arrow.classList.contains("left")) {
      nextNumber = curNumber === 0? images.length - 1 : curNumber - 1;
    } else {
      nextNumber = curNumber === images.length - 1? 0 : curNumber + 1;
    }
    moveSlider(nextNumber);
  });
});
}


function initDots() {
images.forEach((image, index) => {
  let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
  sliderDots.innerHTML += dot;
});
sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
  dot.addEventListener("click", function() {
    moveSlider(this.dataset.index);
  })
})
}



function moveSlider(num) {
sliderImages.querySelector(".active").classList.remove("active");
sliderImages.querySelector(".n" + num).classList.add("active");
if (options.dots) {
  sliderDots.querySelector(".active").classList.remove("active");
  sliderDots.querySelector(".n" + num).classList.add("active");
}
if (options.titles) changeTitle(num);
}

 
}

let sliderOptions = {
dots: true,
titles: true
};

document.addEventListener("DOMContentLoaded", function() {
initSlider(sliderOptions);
});
