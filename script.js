const photo = document.querySelector("#me2");
photo.addEventListener("mouseenter", () => {
  photo.src =
    "https://i.pinimg.com/1200x/09/03/ce/0903ce48b4755b69b589043a6c80a7a9.jpg";
});
photo.addEventListener("mouseleave", () => {
  photo.src =
    "https://i.pinimg.com/736x/91/a0/0a/91a00a56c7e7217a5f5301ec25190233.jpg";
});

const button = document.querySelector("#buttons");
button.addEventListener("mouseover", function () {
  button.style.backgroundColor = "white";
  button.style.color = "#f16322";
});
button.addEventListener("mouseout", function () {
  button.style.backgroundColor = "#f16322";
  button.style.color = "white";
});
