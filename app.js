$(document).ready(function() {
  
    var answer = Math.floor(Math.random() * 100) + 1;
    console.log(answer);
  
    var guess_count = 0;
    console.log(guess_count);
  
    // on submit even for the guess
    $("form").on("submit", function(e) {
      e.preventDefault();
  
      var guess = +$("input#guess").val();
      console.log(guess);
  
      guess_count++;
      
     
      $("#guesses").text(guess_count);
      
      // comparisons to see if guess is right
      if (guess > answer) {
        var high_message = "My number is less than " + guess;
        $("#header").text(high_message);
  
      } else if (guess < answer) {
        var low_message = "My number is greater than " + guess;
        $("#header").text(low_message);
        
      } else {
        var congrat_message = "Congratulations " + guess + " is the number";
        $("#header").text(congrat_message);
        
      }
    });
    
    $("input:text").focus(function(){$(this).val("")});
  
    // on click event to reset the game
    $("a").on("click", function(e) {
      e.preventDefault();
  
      answer = Math.floor(Math.random() * 100) + 1;
      $("p").text("Guess a number from 1 to 100");
      console.log(answer);
      guess_count = 0;
    })
  
  });