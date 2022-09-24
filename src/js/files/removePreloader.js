//Удаляет анимацию загрузки

window.addEventListener("load", function (e) {
  const pagePreloader = document.querySelector(".preloader");
  setTimeout(() => {
    // if (elementPreloader) {
    //   elementPreloader.remove();
    // }
    pagePreloader?.remove();
  }, 1500);
});
