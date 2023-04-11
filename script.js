const imgSliderContainer = document.querySelectorAll(".img-container");

const imgSliderPrevBtn = document.querySelector(".img-slider-prev");
const imgSliderNextBtn = document.querySelector(".img-slider-next");

let imgSliderArr = [];

// show first image only and hide other images
imgSliderContainer.forEach((container, index) => {
  container.style.display = "none";
  imgSliderArr.push(container);
});

function hideAllImgContainer() {
  imgSliderContainer.forEach((container) => {
    container.style.display = "none";
  });
}

imgSliderContainer[0].style.display = "block";

let count = 0;

imgSliderNextBtn.addEventListener("click", function () {
  if (count < imgSliderArr.length - 1) {
    count += 1;
    hideAllImgContainer();
    imgSliderArr[count].style.display = "block";
  } else {
    count = 0;
    hideAllImgContainer();
    imgSliderArr[count].style.display = "block";
  }
});

imgSliderPrevBtn.addEventListener("click", function () {
  if (count > 0) {
    count -= 1;
    hideAllImgContainer();
    imgSliderArr[count].style.display = "block";
  } else {
    count = imgSliderArr.length - 1;
    hideAllImgContainer();
    imgSliderArr[count].style.display = "block";
  }
});
