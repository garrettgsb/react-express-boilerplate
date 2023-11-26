export const getEntityCardRandomePosition = () => {
  const rotate = (Math.random() * 2 - 1).toFixed(1);

  const x = Math.floor(Math.random() * 11) - 5;
  const y = Math.floor(Math.random() * 11) - 5;

  return `rotate(${rotate}deg) translate(${x}px, ${y}px)`;
};
