//Business Logic
var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];

function vowel(word) {
  if (vowels.includes(word[0])) { //if it starts with a vowel
    return true;
  } else {
    return false;
  }
}

function cons(word) {
  if (!vowels.includes(word[0])) {
  return alert("Cons")
}
}

function pigLatin(word) {
  for (i = 0; i < word.length; i++) {
    if (vowel(word) === true) { //if it starts with a vowel
      return word + "way";
    } else if (vowel(word) === false) { //if it starts with a consonant
      return word + "ay";
    }
  }
}


$(document).ready(function() {
  $("form#form1").submit(function(event) {
    event.preventDefault();
    var input = $("input#phrase").val();
    var output = pigLatin(input);
    $("#result").show();
    $("#result").text(output);
  });
});
