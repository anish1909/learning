function withoutVowels(string) {

  var withoutVowels = "";
  for (var i = 0; i < string.length; i++) {
      if (!isVowel(string[i])) {
        withoutVowels += string[i];
      }
    }
    return withoutVowels;
}

function isVowel(char) {
  return 'aeiou'.includes(char);
}

console.log(withoutVowels('Hello World!'));