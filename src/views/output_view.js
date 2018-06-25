const PubSub = require('../helpers/pub_sub.js');
const OutputView = function () {
};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result', (event) => {
    const result = event.detail;
    this.updateView(result);
  })
};

module.exports = OutputView;
