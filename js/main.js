'use strict';

const getNumberRange = (min, max) => {
  return min + Math.random() * (max + 1 - min);
}

const getRandomInteger = (min, max) => {
  if (min >= max || min < 0 || max < 0) {
    throw new Error('Число меньше 0!');
  }

  const random = getNumberRange(min, max);

  return Math.floor(random);
}

getRandomInteger(1,10);

const getRandomFloatNumber = (min, max, count) => {
  if (min >= max || min < 0 || max < 0) {
    throw new Error('Число меньше 0!');
  }

  const random = getNumberRange(min, max);

  return random.toFixed(count);
}

getRandomFloatNumber(1,10,3);
