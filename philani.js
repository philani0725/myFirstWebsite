// const output = document.querySelector('#output');

function handleClick(e){
  output.textContent += `License information currently available. Sorry for inconvenience ...\n`
}

const container = document.querySelector('#container');
container.addEventListener('click', handleClick);
const button = document.querySelector