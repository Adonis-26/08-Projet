
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".close-lightbox");
  const prevBtn = document.querySelector(".lightbox-prev");
  const nextBtn = document.querySelector(".lightbox-next");

  let currentIndex = 0;

  const openLightbox = (index) => {
    currentIndex = index;
    lightboxImage.src = galleryImages[currentIndex].src;
    lightbox.style.display = "flex";
  };

  const closeLightbox = () => {
    lightbox.style.display = "none";
  };

  const showPrev = () => {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentIndex].src;
  };

  const showNext = () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    lightboxImage.src = galleryImages[currentIndex].src;
  };

  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
  });

  closeBtn.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", showPrev);
  nextBtn.addEventListener("click", showNext);

  // Fermer si clic en dehors de l’image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Navigation clavier (facultatif)
  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    }
  });
});

