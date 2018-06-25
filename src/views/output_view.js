const PubSub = require('../helpers/pub_sub.js');
const OutPutView = function () {
};

OutPutView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result', (event) => {
    const result = event.detail;
    this.updateView(result);
  })
};

OutPutView.prototype.updateView = function (result) {
  const resultElement = document.querySelector('#result');
//  resultElement.wordCount = ???????
};

module.exports = OutputView;
