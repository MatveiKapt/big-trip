import { POINT_TYPES, CITYES, DESCRIPTION_TEXT } from './const.js';
import { getRandomInteger, pickOffersDependOnType } from '../util.js';
import { generateTime } from './date.js';
import { generateRandomOffers } from './offer-data-generator.js';

const generatePointType = () => {
  return POINT_TYPES[getRandomInteger(0, POINT_TYPES.length - 1)];
};

const generateCity = () => {
  return CITYES[getRandomInteger(0, CITYES.length - 1)];
};

const generateDescriptionText = () => {
  const arr = [];

  for (let i = 0; i < getRandomInteger(1, 5); i++) {
    arr.push(DESCRIPTION_TEXT[getRandomInteger(0, DESCRIPTION_TEXT.length - 1)]);
  };

  return arr.join(' ');
};

const generatePhoto = () => {
  return `../public/img/photos/${getRandomInteger(1, 5)}.jpg`;
};

const generateDescriptionPhotos = () => {
  const arr = [];

  for (let i = 0; i < getRandomInteger(1, 5); i++) {
    arr.push(generatePhoto());
  };

  return arr;
};

export const generatePoint = () => {
  const type = generatePointType();
  const offers = generateRandomOffers(POINT_TYPES);

  return {
    type,
    offers: pickOffersDependOnType(type, offers),
    city: generateCity(),
    description: {
      text: generateDescriptionText(),
      photo: generateDescriptionPhotos(),
    },
    time: generateTime(),
    isFavorite: Boolean(getRandomInteger()),
  };
};

console.log(generatePoint());