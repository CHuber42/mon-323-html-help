$(document).ready(function(){
    
  var userInput = prompt("Please enter a sentence.");
//   console.log(userInput);
  alert(userInput); // apple
  var firstLetter = userInput.charAt(0).toUpperCase(); // A
  var lastLetter = userInput.charAt(userInput.length - 1).toUpperCase(); // E
    
  function upperCase(firstLetter, lastLetter) {
     return firstLetter.concat(lastLetter);
  };
    
  function reverseCase(firstLetter, lastLetter){
    return lastLetter.concat(firstLetter);
  };
 
  alert(upperCase(firstLetter, lastLetter))
 
  alert(reverseCase(firstLetter, lastLetter));


  });

  
// $(document).ready(function(){
//   $('div').click(function(){
//     alert('hello');
//   });
// });

//  var end2 = userInput.charAt(0).toUpperCase() + userInput.charAt(4).toUpperCase();
//  alert(end2);



// apple
// ApplE

// https://joshtronic.com/2016/02/14/how-to-capitalize-the-first-letter-in-a-string-in-javascript/