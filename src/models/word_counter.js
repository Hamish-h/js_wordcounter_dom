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
  var words = event.target.files[0];
    if (words) {
        var reading = new FileReader();

        reading.onload = function(e) {
            var contents = e.target.result;
            var res = contents.split(" ");
            $("#display_File_count").text(res.length);
        }
        reading.readAsText(f);
    }
};

module.exports = PrimeChecker;
