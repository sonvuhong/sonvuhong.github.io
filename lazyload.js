document.addEventListener("DOMContentLoaded", function () {
  let images = document.querySelectorAll("img.lazy");

  images.forEach(img => {
      let originalSrc = img.dataset.src;
      compressImage(originalSrc, 0.5, (compressedSrc) => {
          img.src = compressedSrc;
      });

      img.addEventListener("load", () => {
          setTimeout(() => {
              img.src = originalSrc;
          }, 10000);
      });
  });
});

function compressImage(imgUrl, quality, callback) {
  let img = new Image();
  img.crossOrigin = "anonymous";
  img.src = imgUrl;

  img.onload = function () {
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");

      canvas.width = img.width / 2;
      canvas.height = img.height / 2;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      let compressedSrc = canvas.toDataURL("image/jpeg", quality);
      callback(compressedSrc);
  };
}
