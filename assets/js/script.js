// carrossel
const carouselContainer = document.querySelector(".carousel");
const buttonsContainer = document.querySelector(".btn-arrow");
const cards = document.querySelectorAll(".cards");

class Carousel {
  constructor(container, cards, btns) {
    this.carouselContainer = container;
    this.buttonsContainer = btns;
    this.carouselArray = [...cards];
  }

  updateCarousel() {
    this.carouselArray.forEach((el) => {
      el.classList.remove("card-0");
      el.classList.remove("card-1");
      el.classList.remove("card-2");
      el.classList.remove("card-3");
      el.classList.remove("card-4");
      el.classList.remove("card-5");
      el.classList.remove("card-6");
      el.classList.remove("card-7");
      el.classList.remove("card-8");
    });

    this.carouselArray.slice(0, 8).forEach((el, i) => {
      el.classList.add(`card-${i}`);
    });
  }

  setCurrentState(direction) {
    if (direction.className == "button-preview") {
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateCarousel();
  }

  useControls() {
    const triggers = [...buttonsContainer.childNodes];
    triggers.forEach((control) => {
      control.addEventListener("click", (e) => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(
  carouselContainer,
  cards,
  buttonsContainer
);

exampleCarousel.useControls();
