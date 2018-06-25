const InputView = require('./views/input_view.js');
const OutputView = require('./views/output_view.js');
const WordCounter = require('./models/word_counter.js');

document.addEventListener('DOMContentLoaded', () => {
console.log('js loaded');

const inputView = new InputView();
  inputView.bindEvents();

});
