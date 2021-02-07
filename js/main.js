'use strict';

const getNumberRange = (min, max) => {
  return min + Math.random() * (max + 1 - min);
}

const getRandomInteger = (min, max) => {
  const random = getNumberRange(min, max);

  if (min >= max || min < 0 || max < 0) {
    throw new Error('Число меньше 0!');
  }

  return Math.floor(random);
}

getRandomInteger(1,10);

const getRandomFloatNumber = (min, max, count) => {
  const random = getNumberRange(min, max);

  if (min >= max || min < 0 || max < 0) {
    throw new Error('Число меньше 0!');
  }

  return random.toFixed(count);
}

getRandomFloatNumber(1,10,3);
