// hook that compute some value for each class category with inversion every 6 items

export const useResultColRowArray = (lengthCount) => {
  const resultColArray = [1];
  let counter = 1;
  let i = 1;
  while (i < lengthCount) {
    if (counter === 1) {
      i += 3;
      resultColArray.push(i);
      counter++;
    }
    if (counter === 2) {
      i += 5;
      resultColArray.push(i);
      counter++;
    }
    if (counter === 3) {
      i += 1;
      resultColArray.push(i);
      counter++;
    }
    if (counter === 4) {
      i += 3;
      resultColArray.push(i);
      counter = 1;
    }
  }

  const resultRowArray = [1];
  counter = 1;
  i = 1;
  while (i < lengthCount) {
    if (counter === 1) {
      i += 8;
      resultRowArray.push(i);
      counter++;
    }
    if (counter === 2) {
      i += 4;
      resultRowArray.push(i);
      counter = 1;
    }
    if (counter === 3) i += 8;
    resultRowArray.push(i);
    counter = 1;
  }
  return { resultColArray, resultRowArray };
};
