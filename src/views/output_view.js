const PubSub = require('../helpers/pub_sub.js');

const OutputView = function () {

};

InputView.prototype.bindEvents = function () {
  const input = document.querySelector('#text');
  input.addEventListener('input',(event) =>{
    const inputtedNumber = event.target.value;
};



module.exports = OutputView;
