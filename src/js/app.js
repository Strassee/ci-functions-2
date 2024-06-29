// TODO: write your code here
import health, { heroSort } from './basic';

const hero = {
  name: 'Маг',
  health: 45,
};

console.log(health(hero));

const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

console.log(heroSort(heroes));
