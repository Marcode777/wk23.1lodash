
// var _ = require("lodash");
// for( var i =0; i < 10; i++){
//     console.log(Math.floor(Math.random(100) * 100));
// }

// You can't print the same number twice


// var randomArray = [];

// _.times(100, function(){
//     var random = (_.random(100));

//     if(randomArray.length == 0){
//       randomArray.push(random);
//     } else {
//       while(randomArray.indexOf(random) != -1){
//         random = _.random(100);
//       }
//       randomArray.push(random);
//     }    
// })
//   console.log(randomArray);
//   console.log(randomArray.length);


// the fact that the prior code is not DRY is a concern, because when a different specification is asked for, and not all of the repeated codes are changed as well, there might be a random error
//here's a better version

var _ = require("lodash");

var numberCount = 100;
var randomArray = [];
var steps = 0;
_.times(numberCount, function(){
    var random = _.random(numberCount);
    while(_.includes(randomArray, random)){
        random = _.random(numberCount);
        console.log(steps);
    }

    randomArray.push(random);
})

console.log(randomArray);
console.log(randomArray.length);