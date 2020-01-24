const priceRandomizer = () => {
  const price = Math.floor(Math.random() * (200 - 50) + 50);
  const text = ' JD/Month';

  return price + text;
};

export default priceRandomizer;
