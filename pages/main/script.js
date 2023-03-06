import cards from './../../data/fotoCards/script.js';
import testimonials from "./../../data/testimonials/index.js";
import getRandomNum from '../../data/randomaizer.js';

let wrapper = document.querySelector('.wrapper');
// burger-menu
let popUpMenu = document.querySelector('.pop-up__menu');
let fading = document.querySelector('.fading');

// pets
let cards_copy = [].concat(cards);
let swiperWrapperPets = document.querySelector('.my-swiper .swiper-wrapper');
addSlides();

// testimonials
let swiperWrapperTestimonials = document.querySelector('.my-swiper2 .swiper-wrapper');
addSlidesTestimonials();

// pop-up testimonials
let popUpTestimonials = document.querySelector('.test-cont');

wrapper.addEventListener('click', defineTarget);
swiperWrapperTestimonials.addEventListener('click', defineTarget);

function defineTarget(e) {
  console.log(e);
  // burger-menu
  if (e.target.classList.contains('burger-menu')) {
    popUpMenu.classList.add('active');
    fading.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // fading
  if (e.target.classList.contains('fading') || e.target.classList.contains('pop-up__window-close-line') || e.target.classList.contains('test-cont') || e.target.classList.contains('test-cont__header') || e.target.tagName == 'path') {
    fading.classList.remove('active');
    popUpMenu.classList.remove('active');
    popUpTestimonials.classList.remove('active');
    document.body.style.overflow = '';
  }

  // pop-up testimonials
  if (e.path.find(e => e.className == 'testimonials-item')) {
    let testimonialsItem = document.querySelector('.pop-up__testimonials');
    testimonialsItem.innerHTML = e.path.find(e => e.className == 'testimonials-item').innerHTML;
    popUpTestimonials.classList.add('active');
    fading.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function addSlides() {
  let newInnerHTML = '';
  for (let index = 0; index < cards.length / 2; index++) {
    newInnerHTML += createSwiperSlide(index);
  }
  swiperWrapperPets.innerHTML = newInnerHTML;
}

function createSwiperSlide(index) {
  return `
          <div class="swiper-slide">
            <div class="foto-card">
              ${fotoCard(...cards_copy.splice(getRandomNum(cards_copy.length - 1, 0), 1))}
            </div>
            <div class="foto-card">
              ${fotoCard(...cards_copy.splice(getRandomNum(cards_copy.length - 1, 0), 1))}
            </div>
          </div>`
};

function fotoCard(item) {
  return `
      <div class="foto-card__image">
        <img src="./../.${item.cardFoto}" alt='dddd'>
        <div class="pop-up-foto-card">
          <div class="pop-up-foto-card-container">
            <div class="location">
              <p>${item.nameAnimal}</p>
              <p>${item.location}</p>
            </div>
            <button class="button-watch-online">Whatch online</button>
          </div>
        </div>
      </div>
      <div class="foto-card__description">
        <div class="foto-card__description-text">
          <h4>${item.nameAnimal}</h4>
          <p>${item.location}</p>
        </div>
        <div class="foto-card__description-icon ${item.food}-icon">
          <img src="./../../assets/icons/${item.food}_icon.svg" alt="${item.food}_icon.svg">
        </div>
      </div>`
}

function addSlidesTestimonials() {
  let newInnerHTML = '';
  for (let index = 0; index < testimonials.length; index++) {
    newInnerHTML += createSwiperSlideTestimonials(index);
  }
  swiperWrapperTestimonials.innerHTML = newInnerHTML;
}

function createSwiperSlideTestimonials(index) {
  return `
        <div class="swiper-slide">
                <div class="testimonials-item">
                  <div class="testimonials-item__container">
                    <div class="testimonials-item__header">
                      <div class="testimonials-item__user-avatar">
                        <img src="./../.${testimonials[index].fotoTestimonial}" alt="user-icon.svg">
                      </div>
                      <div class="testimonials-item__user-info">
                        <p class="user-name">${testimonials[index].fullName}</p>
                        <div class="user-data">
                          <p class="user-location">${testimonials[index].location}</p>
                          <p class="user-date">${testimonials[index].day}</p>
                        </div>
                      </div>
                    </div>
                    <div class="testimonials-item__text">
                    <p class="testimonials-item__textt">${testimonials[index].text}</p>
                    </div>
                  </div>
                </div>
              </div>`
}

const swiper = new Swiper(".my-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  // loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 0px
    0: {
      direction: "vertical",
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
      navigation: {
        enabled: false,
      },
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // when window width is >= 1000px
    1000: {},
    // when window width is >= 1600px
    1600: {},
  }
});

const swiper2 = new Swiper(".my-swiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  slidesPerGroup: 1,
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
    dragSize: 115,
  },

  breakpoints: {
    // when window width is >= 0px
    0: {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 15,
      slidesPerGroup: 1,
      scrollbar: {
        el: ".swiper-scrollbar",
        enabled: false,
      },
    },
    // when window width is >= 640px
    640: {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 15,
      slidesPerGroup: 1,
      scrollbar: {
        el: ".swiper-scrollbar",
        enabled: false,
      },
    },
    // when window width is >= 1000px
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
        dragSize: 75,
      },
    },
    // when window width is >= 1000px
    1600: {},
  },
});

swiper.on('slideNextTransitionStart', function () {
  console.log('slideNextTransitionStart');
  let fotoCards = document.querySelectorAll('.foto-card');
  cards_copy = [].concat(cards);

  console.log(swiper.slidesPerView);

  [...fotoCards].slice(-6).forEach(element => element.innerHTML = fotoCard(...cards_copy.splice(getRandomNum(cards_copy.length - 1, 0), 1)))
});
swiper.on('slidePrevTransitionStart', function () {
  console.log('slidePrevTransitionStart');
  let fotoCards = document.querySelectorAll('.foto-card');
  cards_copy = [].concat(cards);

  [...fotoCards].slice(0, 6).forEach(element => element.innerHTML = fotoCard(...cards_copy.splice(getRandomNum(cards_copy.length - 1, 0), 1)))
});