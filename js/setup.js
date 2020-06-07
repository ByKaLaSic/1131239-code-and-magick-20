'use strict';

var wizardsFragment = document.createDocumentFragment();
var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var setupList = document.querySelector('.setup-similar-list');
var setup = document.querySelector('.setup');
setup.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];
var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'];
var WIZARD_COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'];

var getRandomLineArr = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var wizards = [
  {
    name: getRandomLineArr(WIZARD_NAMES) + ' ' + getRandomLineArr(WIZARD_SURNAMES),
    coatColor: getRandomLineArr(WIZARD_COAT_COLOR),
    eyesColor: getRandomLineArr(WIZARD_EYES_COLOR)
  },
  {
    name: getRandomLineArr(WIZARD_NAMES) + ' ' + getRandomLineArr(WIZARD_SURNAMES),
    coatColor: getRandomLineArr(WIZARD_COAT_COLOR),
    eyesColor: getRandomLineArr(WIZARD_EYES_COLOR)
  },
  {
    name: getRandomLineArr(WIZARD_NAMES) + ' ' + getRandomLineArr(WIZARD_SURNAMES),
    coatColor: getRandomLineArr(WIZARD_COAT_COLOR),
    eyesColor: getRandomLineArr(WIZARD_EYES_COLOR)
  },
  {
    name: getRandomLineArr(WIZARD_NAMES) + ' ' + getRandomLineArr(WIZARD_SURNAMES),
    coatColor: getRandomLineArr(WIZARD_COAT_COLOR),
    eyesColor: getRandomLineArr(WIZARD_EYES_COLOR)
  }
];

var getCreateWizard = function (wizard) {
  var wizzardElement = wizardTemplate.cloneNode(true);
  wizzardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizzardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizzardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizzardElement;
};

var getCreateWizzardsFragment = function () {
  for (var i = 0; i < wizards.length; i++) {
    wizardsFragment.appendChild(getCreateWizard(wizards[i]));
  }
};

getCreateWizzardsFragment();
setupList.appendChild(wizardsFragment);
