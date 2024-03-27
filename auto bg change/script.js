const changingText = document.getElementById('changingText');
const images = [
  "/images/img-1.jpeg",
  "/images/img-2.jpeg",
  "/images/img-3.webp",
  "/images/img-4.jpeg",
  "/images/img-5.jpeg",
  "/images/img-6.jpeg"
];
const cities = ["Pokhara", "Kathmandu", "Jhapa", "Syangja", "Chitwan", "Mustang"];
let index = 0;
function changeTextAndImage() {
  changingText.textContent = cities[index];
  document.querySelector('header').style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
}
setInterval(changeTextAndImage, 2500); 
