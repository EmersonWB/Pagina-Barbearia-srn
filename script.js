let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-track img');
const totalSlides = slides.length;

function moveSlide(direction) {
  currentSlide += direction;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  if (currentSlide >= totalSlides) currentSlide = 0;
  updateCarousel();
}

function updateCarousel() {
  const track = document.querySelector('.carousel-track');
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function openModal(src) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('modal-img');
  modal.style.display = 'flex';
  modalImg.src = src;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Fecha modal ao clicar fora da imagem
document.getElementById('modal').addEventListener('click', function(event) {
  if (event.target === this) {
    closeModal();
  }
});