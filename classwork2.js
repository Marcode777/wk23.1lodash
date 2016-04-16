//be aware of what lodash version you have
//need to watch this in conjunction with the class video
var _ = require("lodash");


var presidentialCandidatesOfDoom = [
        {
            "name": "Bern",
            "lairs": [{"name":"Washington"}, {"name": "Vermont"}, {"name": "Brooklyn"}]
        },
        {
            "name": "Hillary",
            "lairs": [{"name":"Washington"}, {"name": "New York"}, {"name": "Arkansas"}]
        },
        {
            "name": "Trump",
            "lairs": [{"name":"New York"}]
        },
        {
            "name": "Cruz",
            "lairs": [{"name": "Washington"}, {"name": "New York"}]
        }
    ]

// need to write something that will print ot WASHINGTON, WASHINGTON, NEW YORK, WASHINGTON

// for(i=0; i < presidentialCandididatesOfDoom.length; i++){
//     console.log(presidentialCandididatesOfDoom[i].lairs[0].name);
// }
//now do this with lodash

    //console.log(_.map(presidentialCandididatesOfDoom, 'lairs[0].name'));

//now to print out all of the cities where Bern is

    // var lairs = _.map(presidentialCandididatesOfDoom, function (candidate){
    //     return_.map(candidate.lairs, function(lair){
    //         return lair.name;
    //     });
    // });
    // console.log(lairs);

//here's a way to do it using a for-loop

// for(var i = 0; i < presidentialCandidatesOfDoom.length; i++){
//     for(var j = 0; j = < presidentialCandidatesOfDoom[i].lairs.length; j++){
//         console.log(presidentialCandidatesOfDoom[i].lairs[j].name);
//     }
// }

//now the simplest code to do it

// _.each(presidentialCandidatesOfDoom, function(candidate){
//     _.each(candidate.lairs, function(lair){
//         console.log(lair.name);
//     });
// });


// to get them all in alhpabetical order

   // var lairs = _.map(presidentialCandidatesOfDoom, function (candidate){
   //      return_.map(candidate.lairs, function(lair){
   //          return lair.name;
   //      });
   //  });

   // var flattenedLairs = _.flatten(lairs);
   //  console.log(lairs);

// now to sort them

 var lairs = _.map(presidentialCandidatesOfDoom, function (candidate){
        return _.map(candidate.lairs, function(lair){
            return lair.name;
        });
    });
    var flattenedLairs = _.flatten(lairs);
    var uniqueLairs = _.uniq(flattenedLairs);
    var sortedLairs = uniqueLairs.sort();
    console.log(sortedLairs);
