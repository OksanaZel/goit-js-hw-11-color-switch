import './main.scss';

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

const DELAY = 1000;
const DEFAULT_COLOR = '#FFFFFF';
let index = null;
let timeIntervalId = null;

refs.btnStart.addEventListener('click', onStartBtnClick);
refs.btnStop.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  refs.btnStart.disabled = true;
  timeIntervalId = setInterval(onChangeBodyColor, DELAY);
}

function onStopBtnClick() {
  refs.btnStart.disabled = false;
  clearInterval(timeIntervalId);
  document.body.style.backgroundColor = DEFAULT_COLOR;
}

function onChangeBodyColor() {
  index = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[index];
}


