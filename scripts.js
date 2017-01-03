// FILL IN THE FUNCTIONS BELOW

var sprintFunctions = {
  largestEl: function(arr){ 
    var max ; 
    arr.forEach(function(el) {
      if (max === undefined || el > max) {
        max = el;
      }
    } );
    return max;
  },
  
  reversed: function(str){  
    var arr = str.split("");
    var revArr = [];
    arr.forEach(function(el) {
      revArr.unshift(el);
    } );
    return revArr.join("");
  },

  loudSnakeCase: function(str){
    var arr = str.split("");
    var output = [];
    var nextCap = false;
    arr.forEach(function(el) {
      if (el === " " && nextCap === false) {
        output.push("_");
        nextCap = true;
      }
      else if (/^[a-zA-Z]+$/.test(el)) {
        if (nextCap === true) {
          output.push(el.toUpperCase());
          nextCap = false;
        }
        else {
          output.push(el);
        }
      }
    } );
    return output.join("");
  },

  compareArrays: function(arr1, arr2){ 
     if (arr1.length !== arr2.length) {
      return false;
     }
     else {
      var i;
      for(i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
     }
     return true;
  },

  fizzBuzz: function(){  
    // your code here
  },

  myMap: function(){  
    // your code here
  },

  primes: function(){  
    // your code here
  },
}