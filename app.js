function longestWord(str) {
  var split = str.split(' ');
  var longWord = split[0]

  for (var i = 0; i < split.length; i++) {
    if (split[i].length > longWord.length) {
      longWord = split[i];
    }
  }
  return longWord;
}

 //Example
  //Input: "What's the longest word in this sentence"
  //Output: "sentence"
 //longestWord("What is the longest word in this string")