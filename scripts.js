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

  fizzBuzz: function(num){  
    var i;
    var arr = [];
    for (i = 1; i < num + 1; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("FIZZBUZZ");
      } else if (i % 5 === 0) {
        arr.push("BUZZ");
      } else if (i % 3 === 0) {
        arr.push("FIZZ");
      } else {
        arr.push(i);
      }
    }
    return arr;
  },

  myMap: function(arr, fun){  
    var mappedArr = [];
    arr.forEach(function(el){
      mappedArr.push(fun(el));
    })
    return mappedArr;
  },

  primes: function(num){  
    var arr = [];
    var i;
    var isPrime = function(n){
      if (n <= 1) {
        return false;
      } else {
        var i;
        for (i = 2; i < n; i++) {
          if (n % i === 0) {
            return false;
          }
        }
      }
      return true;
    };

    for (i = 1; i < num; i++) {
      if (isPrime(i) === true ) {
        arr.push(i);
      }
    }
    return arr;
  },
}

var biggerProblems = {
  bubbleSort: function(arr) {
    var i;
    var swapped = true;
    while (swapped === true) {
      for (i = 0; i < arr.length - 1; i++) {
        swapped = false;
        if (arr[i] > arr[i + 1]) {
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    }
    return arr;
  },
  merge: function(left, right) {
    var result = [];
    while (left.length > 0 || right.length > 0) {
      if (left.length === 0) {
        result.push(right.shift());
      } else if (right.length === 0) {
        result.push(left.shift());
      } else if (left[0] <= right[0]) {
        result.push(left.shift());
      } else if (right[0] <= left[0]) {
        result.push(right.shift());
      }
    }
    return result;
  },
  mergeSort: function(arr) {
    if (arr.length < 2) {
      return arr;
    }
    var midpoint = Math.floor(arr.length / 2),
    left = arr.slice(0, midpoint),
    right = arr.slice(midpoint);
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  },
  quickSort: function(arr) {
    if (arr.length === 0) {
      return [];
    }
    var left = [],
        right = [],
        pivot = arr[0],
        i;
    
    for (i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return this.quickSort(left).concat(pivot, this.quickSort(right));
  }
}

function Roulette(initial_bankroll){
  this.bankroll = initial_bankroll;
  this.get_bankroll = function(){
    return this.bankroll;
  }
  this.spin = function(bet, selection){
    result = Math.floor((Math.random() * 35 + 1)
    if (result === selection) 
  };
  this.buyIn = function(){};
}

var testArr = [4,1,7,8765,1,2,2,-12,0];
console.log(biggerProblems.quickSort(testArr));