'use strict';

const getNumberRange = (min, max) => {
  return min + Math.random() * (max + 1 - min);
}

const getRandomInteger = (min, max) => {
  const random = getNumberRange(min, max);

  if (min >= max || min < 0 || max < 0) {
    console.log('Число меньше 0');
    return;
  }

  return Math.floor(random);
}

const getRandomFloatNumber = (min, max, count) => {
  const random = getNumberRange(min, max);

  if (min >= max || min < 0 || max < 0) {
    console.log('error');
    return;
  }

  return random.toFixed(count);
}
