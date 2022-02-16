const generateRandomNumber = (max, min) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};

export default generateRandomNumber;
