et img = document.querySelector('home-img');

img.addEventListener('mousemove', e => {
  x = e.clientX / 100;
  y = e.clientY / 100;
  gsap.to(img, {
  rotationY: x,
  rotationX: y,
  transformPrespective: 500,
 });
});