export class Carousel {
  constructor(element, images) {
    this.element = element;
    this.images = images;
    this.currentIndex = 0;
    this.init();
  }

  init() {
    this.render();
    this.startAutoSlide();
  }

  render() {
    this.element.innerHTML = `
      <div class="carousel-container">
        <img src="${this.images[this.currentIndex]}" class="carousel-image fade" alt="Carousel Image">
        <button class="carousel-btn prev" onclick="this.previousSlide()">&lt;</button>
        <button class="carousel-btn next" onclick="this.nextSlide()">&gt;</button>
      </div>
    `;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.render();
  }

  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.render();
  }

  startAutoSlide() {
    setInterval(() => this.nextSlide(), 5000);
  }
}