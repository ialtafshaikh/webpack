export const addImage = (image) => {
  const img = document.createElement("img");
  img.src = image;
  img.style.width = "50%";
  img.style.height = "auto";
  img.style.margin = "auto";

  document.querySelector("body").appendChild(img);
};
