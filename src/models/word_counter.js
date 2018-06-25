

const WordCounter = function (){

}

WordCounter.prototype.bindEvents = function () {

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
