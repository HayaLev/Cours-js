const mouses = document.querySelectorAll(".mouse");
console.log(mouses);

mouses.forEach((mouse) => {
  window.addEventListener("mousemove", (e) => {
    mouse.style.left = e.pageX + "px";
    mouse.style.top = e.pageY + "px";
  });
});
