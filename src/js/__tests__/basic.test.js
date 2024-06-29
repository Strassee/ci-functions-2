import health, { heroSort } from '../basic';

test('get level healthy', () => {
  const hero = { name: 'Маг', health: 95 };
  const result = health(hero);

  expect(result).toBe('healthy');
});

test('get level wounded', () => {
  const hero = { name: 'Маг', health: 45 };
  const result = health(hero);

  expect(result).toBe('wounded');
});

test('get level critical', () => {
  const hero = { name: 'Маг', health: 10 };
  const result = health(hero);

  expect(result).toBe('critical');
});

test('heroes sorting', () => {
  const heroes = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const heroesSorted = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = heroSort(heroes);
  expect(result).toEqual(heroesSorted);
});
