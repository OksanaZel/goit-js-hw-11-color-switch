// import './sass/main.scss';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    btnStart: document.querySelector('button[data-action="start"]'),
    btnStop: document.querySelector('button[data-action="stop"]'),
}

let index = null;

const randomIntegerFromInterval = (max) => {
    index = Math.floor(Math.random() * max);
    return index;
};

randomIntegerFromInterval(colors.length);
console.log(index);
