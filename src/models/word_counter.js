const PubSub = require('../helpers/pub_sub.js');
const WordCounter = function (){
}

WordCounter.prototype.bindEvents = function () {
  PubSub.subscribe('InputView:words-inputted', (event) => {
    const inputtedWords = event.detail;
    const result = this.wordsAreCounted(inputtedWords);
    PubSub.publish('WordCounter:result', result);
    console.log(inputtedWords);
  })
};

WordCounter.prototype.wordsAreCounted = function (text) {
  return text.split(" ").length;
};

module.exports = PrimeChecker;
