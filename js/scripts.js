var pigLatin = function(word) {
    return false;

}

$(document).ready(function() {
  $("form#pig-latin").submit(function(event) {
    event.preventDefault();
    var word = $("input#word").val();
    var result = pigLatin(word);



    $("#result").text(result);
  });
});
