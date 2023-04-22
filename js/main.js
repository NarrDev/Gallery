const images = document.querySelectorAll(".image");
const previous = document.getElementById("previous");
const next = document.getElementById("next");
console.log(images.length)
let imageShown = 0;
for (let i = 1; i < images.length; i++) {
  images[i].classList.add("none");
}
next.addEventListener("click", () => {
  console.log(imageShown)
  if ((imageShown + 1 < images.length)) {
    images[imageShown].classList.add("none");
    imageShown++;
    images[imageShown].classList.remove("none");
  } else {
    images[imageShown].classList.add("none");
    imageShown = 0;
    images[imageShown].classList.remove("none");
  }
});

previous.addEventListener("click", () => {
  if (imageShown < 1) {
    images[imageShown].classList.add("none");
    imageShown = images.length - 1;
    images[imageShown].classList.remove("none");
  } else {
    images[imageShown].classList.add("none");
    imageShown--;
    images[imageShown].classList.remove("none");
  }
});
