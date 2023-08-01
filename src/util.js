export const getRandomInteger = (start = 0, end = 1) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

export const generateRandomArray = (array, minLength = 0, maxLength = array.length) => {
  let temp;
  let j;
  for (let i = array.length - 1; i > 0; i--) {
    j = getRandomInteger(0, i);
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  array.length = getRandomInteger(minLength, maxLength);
  return array;
};

export const pickOffersDependOnType = (type, offers) => {
  return offers.find((item) => item.type === type).offers;
};
