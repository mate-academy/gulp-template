'use strict';

const popupWindow = document.querySelector('.popup');
const popupOpener = document.querySelector('.section-top__button');
const popupCloser = document.querySelector('.popup__close-btn');

popupOpener.onclick = function() {
  popupWindow.style.transform = 'translateX(0)';
};

popupCloser.onclick = function() {
  popupWindow.style.transform = 'translateX(100%)';
};
