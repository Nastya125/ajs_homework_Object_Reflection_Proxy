// eslint-disable-next-line import/extensions, import/no-unresolved
import orderByProps from '../app';

// eslint-disable-next-line no-undef
test('Сортировка name level', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const order = orderByProps(obj, ['name', 'level']);
  const sortable = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  // eslint-disable-next-line no-undef
  expect(order).toEqual(sortable);
});

// eslint-disable-next-line no-undef
test('Сортировка health level', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const order = orderByProps(obj, ['health', 'level']);
  const sortable = [
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'name', value: 'мечник' },
  ];
  // eslint-disable-next-line no-undef
  expect(order).toEqual(sortable);
});
