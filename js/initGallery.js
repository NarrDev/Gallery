export function initGallery() {
  const like = document.querySelector("#like");
  const dislike = document.querySelector("#dislike");
  const counter = document.querySelector("#likesCounter");

  const imagesSrc = document.querySelectorAll(".image");

  const previous = document.getElementById("previous");
  const next = document.getElementById("next");

  const images = [];
  for (let i = 0; i < imagesSrc.length; i++) {
    images.push({
      image: imagesSrc[i],
      likes: 0,
    });
  }
  let imageShown = 0;
  for (let i = 1; i < images.length; i++) {
    images[i].image.classList.add("none");
  }

  function updateLikes() {
    counter.innerText = images[imageShown].likes;
  }

  like.addEventListener("click", () => {
    images[imageShown].likes++;
    updateLikes();
  });

  dislike.addEventListener("click", () => {
    images[imageShown].likes--;

    updateLikes();
  });

  next.addEventListener("click", () => {
    if (imageShown + 1 < images.length) {
      images[imageShown].image.classList.add("none");
      imageShown++;
      images[imageShown].image.classList.remove("none");
    } else {
      images[imageShown].image.classList.add("none");
      imageShown = 0;
      images[imageShown].image.classList.remove("none");
    }
    updateLikes();
  });

  previous.addEventListener("click", () => {
    if (imageShown < 1) {
      images[imageShown].image.classList.add("none");
      imageShown = images.length - 1;
      images[imageShown].image.classList.remove("none");
    } else {
      images[imageShown].image.classList.add("none");
      imageShown--;
      images[imageShown].image.classList.remove("none");
    }
    updateLikes();
  });
}
