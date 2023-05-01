export function initGallery() {
  const like = document.querySelector("#like");
  const dislike = document.querySelector("#dislike");
  const counter = document.querySelector("#likesCounter");

  const imagesSrc = document.querySelectorAll(".image");

  const previous = document.getElementById("previous");
  const next = document.getElementById("next");

  const bulletpoints = document.querySelector(".bulletpoints");

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

  function goToImage(numberOfImage) {
    images[imageShown].image.classList.add("none");
    imageShown = numberOfImage;
    images[imageShown].image.classList.remove("none");
    updateLikes();
  }

  next.addEventListener("click", () => {
    if (imageShown + 1 < images.length) {
      goToImage(imageShown + 1);
    } else {
      goToImage(0);
    }
  });

  previous.addEventListener("click", () => {
    if (imageShown < 1) {
      goToImage(images.length - 1);
    } else {
      goToImage(imageShown - 1);
    }
  });
  for (let i = 0; i < images.length; i++) {
    const button = document.createElement("button");
    button.className = "bulletpoint";
    button.addEventListener("click", () => {
      document.querySelectorAll(".bulletpoint").forEach((element) => {
        element.classList.remove("active");
      });
      button.classList.add("active");
      goToImage(i);
    });
    bulletpoints.appendChild(button);
  }
}
