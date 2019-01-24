//Business Logic
var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "qu", "r", "s", "t", "v", "w", "x", "y", "z"];

function addWay(word) {
  if (vowels.includes(word[0])) {
  return word + "way";
  }
}

function addAy(word) {
  if (consonants.includes(word[0])) {
      return word + "ay"
  }
}

$(document).ready(function() {
  $("form#form1").submit(function() {
    event.preventDefault();
    var input = $("input#phrase").val();
    var output = addWay(input);
    $("#result").show();
  });
});
