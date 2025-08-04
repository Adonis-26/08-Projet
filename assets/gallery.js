document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-item");
  const nav = document.getElementById("gallery-navbar");
  const tags = new Set(["Tous"]);

  images.forEach(img => {
    const tag = img.dataset.galleryTag;
    if (tag) tags.add(tag);
  });

  tags.forEach(tag => {
    const button = document.createElement("button");
    button.textContent = tag;
    button.dataset.tag = tag;
    button.addEventListener("click", () => {
      nav.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      filterImages(tag);
    });
    nav.appendChild(button);
  });

function filterImages(tag) {
  images.forEach(img => {
    const imageTag = img.dataset.galleryTag;

    if (tag === "Tous" || imageTag === tag) {
      img.style.display = "block"; 
    } else {
      img.style.display = "none";
    }
  });
}

  nav.querySelector("button").classList.add("active");
  filterImages("Tous");
});


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

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox.style.display === "flex") {
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "Escape") closeLightbox();
    }
  });
  
});

