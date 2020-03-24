$(document).ready(function(){
    
  var userInput = prompt("Please enter a sentence.");
//   console.log(userInput);
  alert(userInput); // apple
  var firstLetter = userInput.charAt(0).toUpperCase(); // A
  var lastLetter = userInput.charAt(userInput.length - 1).toUpperCase(); // E
    
  function upperCase(firstLetter, lastLetter) {
     return firstLetter.concat(lastLetter);
  };
    
  function reverseCase(bonkers){
    return bonkers.charAt(1) + bonkers.charAt(0);
  };
  
  function thirdFunc(oneString, twoString) {
    return oneString.concat(twoString);
  };
  
  function forthFunc(origInput, first, last){
    var index = Math.floor(origInput.length / 2);
    var indexLetter = origInput.charAt(index);
    var postProcess = thirdFunc(origInput,reverseCase(upperCase(first,last)));
    return indexLetter + postProcess;
  };

  alert(upperCase(firstLetter, lastLetter));
 
  alert(reverseCase(upperCase(firstLetter,lastLetter)));

  alert(thirdFunc(userInput,reverseCase(upperCase(firstLetter,lastLetter))));

  alert(forthFunc(userInput, firstLetter, lastLetter));
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