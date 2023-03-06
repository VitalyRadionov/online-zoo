let progressBar = document.querySelector('.progress-bar');
let wrapper = document.querySelector('.wrapper');

// burger-menu
let popUpMenu = document.querySelector('.pop-up__menu');
let fading = document.querySelector('.fading');

// amount

let inputRange = document.querySelector('input[id="r1/999w"]');
console.log(inputRange);

wrapper.addEventListener('click', defineTarget);
progressBar.addEventListener('change', changeColor);

function defineTarget(e) {
  // burger-menu
  if (e.target.classList.contains('burger-menu')) {
    popUpMenu.classList.add('active');
    fading.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // fading
  if (e.target.classList.contains('fading') || e.target.classList.contains('pop-up__window-close-line') || e.target.classList.contains('test-cont') || e.target.classList.contains('test-cont__header')) {
    fading.classList.remove('active');
    popUpMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function changeColor(e) {
  if (e.target.tagName == 'INPUT') {

    let option = document.querySelectorAll('option')[e.target.value];
    let optionActive = document.querySelector('option.active');

    option.classList.add('active');
    optionActive.classList.remove('active');
  }
}