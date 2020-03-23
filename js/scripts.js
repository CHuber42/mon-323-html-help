$(document).ready(function(){
    
  var userInput = prompt("Please enter a sentence.");
//   console.log(userInput);
  alert(userInput);
  var end2 = userInput.charAt(0).toUpperCase() + userInput.charAt(userInput.length-1).toUpperCase();
  var inverted = end2.charAt(1) + end2.charAt(0);


  alert(end2);
  alert(inverted);
});
 

$(document).ready(function(){
  $('div').click(function(){
    alert('hello');
  });
});

//  var end2 = userInput.charAt(0).toUpperCase() + userInput.charAt(4).toUpperCase();
//  alert(end2);



// apple
// ApplE

// https://joshtronic.com/2016/02/14/how-to-capitalize-the-first-letter-in-a-string-in-javascript/