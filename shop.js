//Первая модалка

function openModal() {
    document.getElementById("first").style.display = "block";
}

function closeModal() {
    document.getElementById("first").style.display = "none";
}

const images = ["img/carpet1/carpet.png", "img/carpet1/carpet2.png", "img/carpet1/carpet3.png"];
    let currentIndex = 0;

    function showImage(index) {
      const img = document.getElementById("firstGallery");
      img.src = images[index];
    }

    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
