var guess = "";

var index = 1;

var game = true

document.addEventListener('keydown', function(event) {
  
  if (event.keyCode > 64 && event.keyCode < 91){
    if(guess.length != 4){
      let letter = String.fromCharCode(event.keyCode);
      guess = guess += letter
      console.log(guess)
      document.getElementById("row" + String(index)).innerHTML = "<h2>" + guess + "</h2>";
    }
  }
  
  if (event.keyCode === 46 || event.keyCode === 8){
    guess = guess.slice(0, -1)
    console.log(guess);
    document.getElementById("row" + String(index)).innerHTML = "<h2>" + guess + "</h2>";
  }
  
  if (event.keyCode === 13 && guess.length === 4 && game === true){
    if (index === 6){
      game = false;
    }
    
    var isWord = check(guess);
    if (isWord === true){
      for (i=0; i < 4; i++){
        
      }
      
      guess = "";
      index++;
    } else {
      document.getElementById("banner").style.display = "block";
      setTimeout('document.getElementById("banner").style.display = "none"', 2000)
    }
  }
}, true);

function response(word, guess){
  for (i=0; i<4; i++){
    if (guess[i] === word[i]){
      console.log("Correct" + String(i))
    }
  }
}

response("WORD", "WARS")