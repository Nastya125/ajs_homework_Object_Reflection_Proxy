// eslint-disable-next-line no-unused-vars
const obj = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

export default function orderByProps(object, array) {
  const sortable = [];

  for (const prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop) && !array.includes(prop)) {
      sortable.push({ key: prop, value: object[prop] });
    }
  }

  sortable.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    return -1;
  });

  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (Object.prototype.hasOwnProperty.call(object, array[i])) {
      sortable.unshift({
        key: array[i],
        value: object[array[i]],
      });
    }
  }

  return sortable;
}
