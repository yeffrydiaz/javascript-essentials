var doc              = document,
	  win              = window,
    randomUserAPIUrl = 'https://randomuser.me/api/';

 createIsIntegerHtmlComp();
  createArrSumHtmlComp();
   createFindIndexHtmlComp();
    createCountDownHtmlComp();
     createBitcoinHtmlComp();
      createRandomUserHtmlComp();
       createfEachDoubleValuesHtmlComp();
        createEvenValuesValuesHtmlComp();
         createshowFirstAndLastHtmlComp();
          createaddKeyAndValueHtmlComp();
           createvowelCountHtmlComp();
            createmapDoubleValuesHtmlComp();

win.onload = function(){
acallrandomUser();  
 findIndex(arr);
  countDown(3);
 setInterval(bitCoinPrice,5000);
};

//Javascript Essencials/////////////////////////////////////////////////////////////

//is Integer////////////
function createIsIntegerHtmlComp(){
 var title = 'Check Integer Number';
  var body = '<input type="text" id="intNumb" class="input is-small is-primary" name="Intnumb" val="" placeholder="Enter Number"><button id="sendIntNumb" class="button is-small is-primary">Check</button><div id="isInteger" class="boxContent"></div>';  
 comp(title,body);
}

 doc.querySelector("#sendIntNumb")
     .onclick = function(){
	var val = Number(doc.querySelector("#intNumb").value);
   isInteger(val);
 };

function isInteger(num){
 var resp = doc.querySelector("#isInteger");
  var intNumb = doc.querySelector("#intNumb");
  if(num === parseInt(num, 10)){
    resp.innerHTML = '<h4>' + num + ' is an integer number</h4>';
  }else{
    resp.innerHTML =  '<h4>' + num + ' is Not an integer number</h4>';
  }
  intNumb.value = "";
 intNumb.focus();
}


//arr sum using forEach////////////
function createArrSumHtmlComp(){
 var title = 'Array Elements Sum';
  var body = ' <div id="arrSum" class="boxContent"></div>';  
   comp(title,body);
 arrSum([1,2,3,4]);
}

function arrSum(arr){
 var sum=0;
  for(var numb in arr){
   if(arr[numb]){
    sum += arr[numb];
    }	 
   }	
  doc.querySelector("#arrSum")
.innerHTML = '<h4>Array Elements Sum is: ' + sum +'</h4>';
}

/////////Advance Web Dev//////////////////////////////////////////////////////////////

//find index///////////////////////
function createFindIndexHtmlComp(){
 var title = 'Find Array Element Index';
  var body = '<div id="findIndex" class="boxContent"></div>';  
 comp(title,body);
}

var arr = ["java","c#","javascript","html"];
function findIndex(arr) {
 for(var i=0; i<arr.length; i++){
  if(arr[i].toLowerCase() === "javascript"){
   doc.querySelector("#findIndex")
	  .innerHTML = '<h4>The Index of  "'+ arr[i] +'" is: ' + i +'</h4>';
	return true;
   }
  }
 doc.querySelector("#findIndex")
	  .innerHTML = '<h4>Data not found</h4>';
}

//countDown/////////////////////////
function createCountDownHtmlComp(){
 var title = 'Timer';
  var body = '<div id="countDown" class="boxContent">Timer: <span id="countDownSecs"></span></div>';  
 comp(title,body);
}

function countDown(secs){
 var spanval =  doc.querySelector("#countDownSecs");
 var interv = setInterval(function(){
  secs--;	
  if(secs > 0){
	 spanval.innerHTML = secs;
   }else{
	spanval.innerHTML = "Ring Ring Ring!!!";
   clearInterval(interv);
  }
 },1000);
}

//get bitcoin price////////////////
function createBitcoinHtmlComp(){
 var title = 'Bitcoin Price';
  var body = '<div class="boxContent">Bitcoin: <span id="price">Searching...</span></div><button id="getPrice" class="button is-success">Get BitCoin Price</button>';  
 comp(title,body);
}

doc.querySelector("#getPrice")
	.onclick = bitCoinPrice ;

function bitCoinPrice(){
 doc.querySelector("#price")
	 .innerHTML = "Searching...";
  doc.querySelector('#getPrice')
	  .className += 'button is-loading';
 fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
   .then(function(res){
    return res.json();		     
  })
   .then(function(data){
    setTimeout(function(){		 
     doc.querySelector("#price")
	  .innerHTML = data.bpi.USD.rate + " USD";
	   doc.querySelector('#getPrice')
	    .className = 'button is-success';
  },2000);
 });
}

//get random User/////////////////////////////
function createRandomUserHtmlComp(){
 var title = 'Random User';
  var body = '<div id="ramdomUser" class="boxContent"><div class="user-profile"><img id="avatar" src="" /><div>Name: <span id="fullname"></span></div><div>Username: <span id="username"></span></div><div class="description"><div>Email: <span id="email"></span></div><div>City: <span id="city"></span></div></div><button id="getRandUserAcall" class="button is-success">acall</button><button id="getRandUserFecth" class="button is-success">fecth</button><button id="getRandUserAXIOS" class="button is-success">axios</button></div></div>';  
 comp(title,body);
}

doc.querySelector("#getRandUserAcall")
   .onclick = acallrandomUser;
doc.querySelector("#getRandUserFecth")
   .onclick = fetchRandomUser;
doc.querySelector("#getRandUserAXIOS")
   .onclick = axiosRandomUser;

// acall//////////////////	
function acallrandomUser(){
 acall({
  url:randomUserAPIUrl,
   dataType:"json",
   ok:randomUserSuccess
});
}

//fetch ///////////////////
function fetchRandomUser(){
 fetch(randomUserAPIUrl)
  .then(handleErrors)
  .then(randomUserSuccess)
  .catch(showError);
}

function handleErrors(res){
  if(!res.ok) {
    throw Error(res.status);
   }
 return res.json();
}

function showError(err){
 console.log(err);	
}

function randomUserSuccess(data){
 var picture  = data.results[0].picture.thumbnail;
  var fullName = data.results[0].name.first + " " + data.results[0].name.last;
   var userName = data.results[0].login.username;
    var eMail    = data.results[0].email;
     var city     = data.results[0].location.city;	  
	   doc.querySelector("#avatar")
	       .src = picture;
	   doc.querySelector("#fullname")
	     .innerHTML = firstWordtoUpper(fullName);
	  doc.querySelector("#username")
	   .innerHTML = userName;
   doc.querySelector("#email")
	 .innerHTML = eMail;
 doc.querySelector("#city")
   .innerHTML = firstWordtoUpper(city);
}

//axios////
function axiosRandomUser(){
 axios.get(randomUserAPIUrl)
  .then(function(res){
   randomUserSuccess(res.data);
  })
  .catch(showError);
}

//forEach exercises/////////////////////////////////////////////////
/*
Write a function called doubleValues which accepts an array and returns a new array 
with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,9,20]

*/
function createfEachDoubleValuesHtmlComp(){
var values = [1,2,3,4,5,6];
 var title = 'forEach Double Values';
  var body = '<div class="boxContent">Values: '+values+'</div><div class="boxContent">Duplicated Values: <span id="forEachDoubleValues" class="strong"></span></div>';  
   comp(title,body);
  doc.querySelector("#forEachDoubleValues")
.innerHTML = doubleValues(values);
}

function doubleValues(arr){
 var dbl = [];
    arr.forEach(function(val){
        dbl.push(val*2);
    });
 return dbl;
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with 
only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function createEvenValuesValuesHtmlComp(){
var values = [1,2,3,4,5,6,7,8,9,10];
 var title = 'Even Values';
  var body = '<div class="boxContent">Values: '+values+'</div><div class="boxContent">Even Values: <span id="evenValues" class="strong"></span></div>';  
   comp(title,body);
 doc.querySelector("#evenValues")
.innerHTML = evenValues(values);
}
function evenValues(arr){
 var evenval = [];
    arr.forEach(function(val){
        if(val % 2 === 0){
        evenval.push(val);
        }
    });
return evenval;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array
with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function createshowFirstAndLastHtmlComp(){
var values = ['home','trip','javascript','html','4565'];
 var title = 'First and Last Characters';
  var body = '<div class="boxContent">Values: '+values+'</div><div class="boxContent">First and Last: <span id="firstlast" class="strong"></span></div>';  
   comp(title,body);
 doc.querySelector("#firstlast")
.innerHTML = showFirstAndLast(values);
}
function showFirstAndLast(arr){
 var lastAndFirst = [];
 var first;
 var last;
    arr.forEach(function(val){
        first = val.charAt(0);
         last = val[val.length-1];
        lastAndFirst.push(first+last);
    });
return lastAndFirst;
}

/*
Write a function called addKeyAndValue which accepts an array, a key, and a value and returns
a the array passed to the function with the new key and value added for each variable 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function createaddKeyAndValueHtmlComp(){
   var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
   var key = 'title';
 var value = 'instructor';
 var title = 'Add Key and Value';
  var body = '<div class="boxContent">Values: '+JSON.stringify(arr)+' key: '+key+' , value: '+value+'</div><div class="boxContent">Key and Value Added: <span id="addKeyAndValue" class="strong"></span></div>';  
   comp(title,body);
 doc.querySelector("#addKeyAndValue")
.innerHTML = JSON.stringify(addKeyAndValue(arr,key,value));
}
function addKeyAndValue(arr,key,value){
var arrAdded = [];
    arr.forEach(function(val){
       val[key] = value;
       arrAdded.push(val);
    });
 return arrAdded;
}

/*
Write a function called vowelCount which accepts a string and returns
an object with the keys as the vowel and the values as the number of times the vowel appears in the string.
This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function createvowelCountHtmlComp(){
var values = 'I Am awesome and so are you';
 var title = 'Vowels Counter';
  var body = '<div class="boxContent">String: '+values+'</div><div class="boxContent">Counted Vowels: <span id="vowelCount" class="strong"></span></div>';  
   comp(title,body);
 doc.querySelector("#vowelCount")
.innerHTML = JSON.stringify(vowelCount(values));
}
function vowelCount(str){
    var splitArr = str.split("");
    var obj = {};
    var vowels = "aeiou";

    splitArr.forEach(function(letter){
        if(vowels.indexOf(letter.toLowerCase()) !== -1){
            if(obj[letter]){
                obj[letter]++;
            } else{
                obj[letter] = 1;
            }
        }
    });
    return obj;
}

function vowelCountV2(str){
 var vowels = ["a","e","i","o","u"],
     newArr = []; 
        str = str.toLowerCase();        
  vowels.forEach(function(vowel){
    var vcount = 0;
	 for(var x = 0; x < str.length ; x++)
		 {
		if(str.charAt(x) === vowel)
		   {
			vcount += 1;
		   }
		  }
       if(vcount>0){
        var obj = {};
      obj[vowel] = vcount;
    newArr.push(obj);
   }
 });
return newArr;
}

//exercise map///////////////////////////////////////////////////////////////
/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([1,-2,-3]) // [2,-4,-6]
*/
function createmapDoubleValuesHtmlComp(){
var values = [1,2,3,4,5,6,7,8,9,10];
 var title = 'Array map Doubled Values';
  var body = '<div class="boxContent">String: '+values+'</div><div class="boxContent">Duplicated Values: <span id="mapDoubleValues" class="strong"></span></div>';  
   comp(title,body);
 doc.querySelector("#mapDoubleValues")
.innerHTML = mapDoubleValues(values);
}
function mapDoubleValues(arr){
    return arr.map(function(numb){
        return numb * 2;
 });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(val,i){
        return val * i;
    });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(val){
        return val[key];
    });
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
     return arr.map(function(val){
        return val.first + " " + val.last;
     });
}

//filter exersice//////////////////////////////////////////////////////
/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key){
    return arr.filter(function(val){
        return val[key]!==undefined;
    });
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue){
      return arr.filter(function(val){
        return val === searchValue; 
    })[0];
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the arrayt.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue){
    return arr.filter(function(val){
        return val[key] === searchValue;
    })[0];
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str){
 var vowels = "aeiou";
  return str.toLowerCase().split("").filter(function(val){
   return vowels.indexOf(val) === -1;
 }).join('');
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and fitler to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr){
  return arr.filter(function(val){
        return val % 2 !== 0;
    }).map(function(val){
        return val *2;
    });
}

//some and every//////////////////////////////////////////////////////////
/*
Write a function called hasOddNumber which accepts an array and returns true if the array contains at least one odd number, otherwise it returns false.

Examples:
    hasOddNumber([1,2,2,2,2,2,4]) // true
    hasOddNumber([2,2,2,2,2,4]) // false
*/

function hasOddNumber(arr){
   return arr.some(function(val){
        return val % 2 !== 0;
    });
}

/*
Write a function called hasAZero which accepts a number and returns true if that number contains at least one zero. Otherwise, the function should return false

Examples:
    hasAZero(3332123213101232321) // true
    hasAZero(1212121) // false
*/

function hasAZero(numbr){
    return numbr.toString().split('').some(function(val){
        return val === '0';
    });
}

/*
Write a function called hasOnlyOddNumbers which accepts an array and returns true if every single number in the array is odd. If any of the values in the array are not odd, the function should return false. 

Examples:
    hasOnlyOddNumbers([1,3,5,7]) // true
    hasOnlyOddNumbers([1,2,3,5,7]) // false
*/

function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val % 2 !== 0;
    });
}

/*
Write a function called hasNoDuplicates which accepts an array and returns true if there are no duplicate values (more than one element in the array that has the same value as another). If there are any duplicates, the function should return false.

Examples:
    hasNoDuplicates([1,2,3,1]) // false
    hasNoDuplicates([1,2,3]) // true
*/

function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}

/*
Write a function called hasCertainKey which accepts an array of objects and a key, and returns true if every single object in the array contains that key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainKey(arr,'first') // true
    hasCertainKey(arr,'isCatOwner') // false
*/

function hasCertainKey(arr, key){
    return arr.every(function(val){
       return val[key]; 
    });
}

/*
Write a function called hasCertainValue which accepts an array of objects and a key, and a value, and returns true if every single object in the array contains that value for the specific key. Otherwise it should return false.

Examples:
    var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
    
    hasCertainValue(arr,'title','Instructor') // true
    hasCertainValue(arr,'first','Elie') // false
    
*/

function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
        return val[key] === searchValue;
    });
}

//reduce//////////////////////////////////////////////////////////////////////////////////
/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key){
  return arr.reduce(function(accum ,nextv){
    accum.push(nextv[key]);
        return accum;
  },[]);
}


/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str){
  var vowels ='aeiou';
  return str.toLowerCase().split('').reduce(function(acc,next){
      if(vowels.indexOf(next) !== -1){
            if(acc[next]){
                acc[next]++;
            } else {
                acc[next] = 1;
            }
      }
      return acc;
  },{});
}

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(acc,next,idx){
        acc[idx][key] = value;
        return acc;
    },arr);
}


/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback){
    return arr.reduce(function(acc,next){
        if(callback(next)){
            acc[0].push(next);
        } else {
            acc[1].push(next);
        }
        return acc;
    }, [[],[]]);
}

function partitionV2(arr, callback){
 var arry    = [];
 var subarr1 = [];
 var subarr2 = [];
    arr.reduce(function(acc,next){
        if(callback(next)){
            subarr1.push(next);
        }else{
            subarr2.push(next);
        }
    },[]);
    arry.push(subarr1,subarr2);
    return arry;
}

//closures///////////////////////////////////////////////////////////////////////////////////
/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(a,b){
 if(!b){
   return function(b){
    return a*b;
   };
  }
 return a*b;
}

/* 
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/

function guessingGame(amount){
 var answer = Math.floor(Math.random() * 10); 
  var guesses = 0;
   var done = false;
    return function(guess){
      if(!done){
        guesses++;
        if(guesses === amount){
            done=true;
            return "No more guessing, the answer was" + answer;
        }
        if(guess === answer){
             done=true;
            return "You got it!";
        }
        if(guess < answer){
            return "You're too low!";
        }
        if(guess > answer){
            return "You're too high!";
        }
      }
      return "You are all done playing!";
    };
}

//Arrow Functions/////////////////////////////////////////////////////////////////////////
// function tripleAndFilter(arr){
//   return arr.map(function(value){
//     return value * 3;
//   }).filter(function(value){
//     return value % 5;
//   })
// }

// 1
let tripleAndFilter = arr => arr.map(val => val * 3).filter(val => val % 5 === 0);

// function doubleOddNumbers(arr){
//     return arr.filter(function(val){
//         return val % 2 !== 0;
//     }).map(function(val){
//         return val *2;
//     })
// }

// 2
let doubleOddNumbersES5 = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2 );

// function mapFilterAndReduce(arr){
//   return arr.map(function(val){
//     return val.firstName
//   }).filter(function(val){
//     return val.length < 5;
//   }).reduce(function(acc,next){
//     acc[next] = next.length
//     return acc;
//   }, {})
// }

// 3
let mapFilterAndReduce = arr => arr.map(val => val.firstName).filter(val => val.length < 5)
  .reduce((acc,next) => {
      acc[next] = next.length;
      return acc;
    }, {});

// 4
let createStudentObj = (firstName, lastName) => ({firstName:firstName, lastName,lastName});

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     setTimeout(function(){
//       console.log('Hello ' + this.firstName)
//     },1000)
//   }
// }

// 5
var instructor = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(() =>{
      console.log('Hello ' + this.firstName)
    }, 1000);
  }
};

//Rest and Spread//////////////////////////////////////////////////////////////////////////
/* 
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.

Examples:
    smallestValue(4,1,12,0) // 0
    smallestValue(5,4,1,121) // 1
    smallestValue(4,2) // 2
    smallestValue(99,12321,12.2) // 2
*/
//spread=============================================
//ES5+
let smallestValue = (...vals) => Math.min(...vals);
//
function smallestValue2(...vals){
	return Math.min(...vals);      
}

/* 
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.

Examples:
    placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
    placeInMiddle([1],[3,4,5]) // [3,4,5,1]
    placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
    placeInMiddle([],[2,3,4,5]) // [2,3,4,5]
*/
// 
function placeInMiddle(arr, vals){
    arr.splice(Math.floor(arr.length/2), 0, ...vals);
    return arr;
}

/* 
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together

Examples:

    joinArrays([1],[2],[3]) // [1,2,3]
    joinArrays([1],[2],[3],[1],[2],[3]) // [1,2,3,1,2,3]
    joinArrays([1,2,3],[4,5,6],[7,8,9]) // [1,2,3,4,5,6,7,8,9]
    joinArrays([1],[3],[0],[7]) // [1,3,0,7]

*/
//rest===========================
function joinArrays(...args){
  return args.reduce((acc, next) => acc.concat(next), [])
}


/* 
// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

Examples:
    sumEvenArgs(1,2,3,4) // 6
    sumEvenArgs(1,2,6) // 8
    sumEvenArgs(1,2) // 2
*/

// rest
function sumEvenArgs(...args){
  return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0)
}

/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the parameters passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function personSubtract(a,b,c){
        return this.firstName + " subtracts " + (a-b-c);
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var flipFn = flip(personSubtract, person);
    flipFn(3,2,1) // "Elie subtracts -4"
    
    var flipFn2 = flip(personSubtract, person, 5,6);
    flipFn(7,8). // "Elie subtracts -4"

    flip(subtractFourNumbers,this,1)(2,3,4) // -2
    flip(subtractFourNumbers,this,1,2)(3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4) // -2
    flip(subtractFourNumbers,this,1,2,3,4)() // -2
    flip(subtractFourNumbers,this)(1,2,3,4) // -2
    flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
    flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
    flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22

*/

// rest
function flip(fn, thisArg, ...outerArgs){
  return function(...innerArgs){
    let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
    return fn.apply(thisArg, allArgs.reverse());
  }
}

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!

Examples:

    function firstNameFavoriteColor(favoriteColor){
        return this.firstName + "'s favorite color is " + favoriteColor
    }
    
    var person = {
        firstName: 'Elie'
    }
    
    var bindFn = bind(firstNameFavoriteColor, person);
    bindFn('green') // "Elie's favorite color is green"
    
    var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
    bindFn2('green') // "Elie's favorite color is blue" 
    
    function addFourNumbers(a,b,c,d){
        return a+b+c+d;
    }

    bind(addFourNumbers,this,1)(2,3,4) // 10
    bind(addFourNumbers,this,1,2)(3,4) // 10
    bind(addFourNumbers,this,1,2,3)(4) // 10
    bind(addFourNumbers,this,1,2,3,4)() // 10
    bind(addFourNumbers,this)(1,2,3,4) // 10
    bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // 10

*/

// rest + spread
function bind(fn, thisArg, ...outerArgs){
  return function(...innerArgs){
    return fn.apply(thisArg, [...outerArgs, ...innerArgs])
  };
}

//destructuring ====================================================
/* 
Write a function called displayStudentInfo which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object inside of the function.

Examples:
    displayStudentInfo({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik')
*/

function displayStudentInfo(obj){
    var {first,last} = obj;
    return 'Your full name is ' + first + ' ' + last;
}

/* 
Write a function called printFullName which accepts an object and returns the string "Your full name is" concatenated with the value of the first key and a space and then the value of the last key. See if you can destructure this object DIRECTLY from the parameters. The output of the printFullName function should be the exact same as the displayStudentInfo function. 

Examples:
    printFullName({first: 'Elie', last:'Schoppik'}) // 'Your full name is Elie Schoppik'
*/

// you will have to pass in the correct parameters for this function!
function printFullName({first,last}){
  return `Your full name is ${first} ${last}`
}

/* 
Write a function called createStudent which accepts as a parameter, a default parameter which is a destructured object with the key of likesES2015 and value of true, and key of likesJavaScript and value of true. 

    If both the values of likesJavaScript and likesES2015 are true, the function should return the string 'The student likes JavaScript and ES2015'. 
    If the value of likesES2015 is false the function should return the string 'The student likes JavaScript!'
    If the value of likesJavaScript is false the function should return the string 'The student likesES2015!'
    If both the value of likesJavaScript and likesES2015 are false, the function should return the string 'The student does not like much...'

Examples:
    createStudent() // 'The student likes JavaScript and ES2015')
    createStudent({likesES2015:false}) // 'The student likes JavaScript!')
    createStudent({likesJavaScript:false}) // 'The student likes ES2015!')
    createStudent({likesJavaScript:false, likesES2015:false}) // 'The student does not like much...')
*/

// you will have to pass in the correct parameters for this function!
function createStudent({likesJavaScript = true, likesES2015 = true} = {}){
  var start = 'The student';
  if(likesJavaScript && likesES2015){
    start += ' likes JavaScript and ES2015';
  } else if(likesJavaScript){
    start += ' likes JavaScript!';
  } else if(likesES2015){
    start += ' likes ES2015!';
  } else {
    start += ' does not like much...';
  }
  return start;
}

/* 
Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!

Examples:
    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
    reverseArray([1,2]) // [2,1]
    reverseArray([]) // []
    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1
*/

function reverseArray(arr){
  for(var i = 0; i < arr.length/2; i++){
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }
  return arr;
}





///////////////////////////////////////////////////////////////////////////////////////////
//html component//////
function comp(title,body){
 doc.querySelector(".container")
	 .innerHTML += ('<article class="message is-info"><div class="message-header"><p>'+title+'</p></div>'+body+'</article>');
}

//first word to Upper///
function firstWordtoUpper(str) {
return str
    .toLowerCase()
    .split(' ')
    .map(function(word) {
      return word[0].toUpperCase() + word.substr(1);
    })
 .join(' ');
}

/*
function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
*/

//acall///////////////
function acall(obj) {	
 let asyncr = obj.asyn || true,
	   method = obj.method || "GET",
	      url = obj.url,
	 datasend;
  if(obj.data){
	  if(typeof obj.data === 'string'){
	    datasend = obj.data;			  
	    }else{
		  var str = "";
       for (var prop in obj.data) {
         if(!obj.data.hasOwnProperty(prop)){continue;}
          str += prop + "=" + obj.data[prop] + "&";	 
         }
		    datasend = str.slice(0,-1);		   	
	      }		
		  if(method === "GET"){
		  url = url+"?"+datasend;  
		  }	
    }else{
	   datasend = '';
      }
      let xhr = new XMLHttpRequest();	   
	       xhr.onreadystatechange = function(){
	        if (xhr.readyState === 4 && 
							(xhr.status === 200 || xhr.status === 201) ){ 
	         if(obj.dataType==="json"){
			       obj.ok(JSON.parse(xhr.responseText));	    
	         }else{
		        obj.ok(xhr.responseText);
	        }
         }
       };
	  xhr.open(method,url,asyncr);
    if(method==="POST" || method==="PUT"){
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	 }
 xhr.send(datasend);
}