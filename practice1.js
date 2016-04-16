var _ = require("lodash");


// var M = [{
//   "age": 32, 
//   "names": [{"nickname": "M"}, {"nickname": "Mark"} ]
// }]

var M = [{"nicknames": [{"name": "M"}, {"name":"Mark"}, {"name":"Marco"}],
  "skills": [{"skillset": "tech"}, {"skillset": "charm"}, {"skillset": "determination"}] 
}]


// _.each(presidentialCandidatesOfDoom, function(candidate){
//     _.each(candidate.lairs, function(lair){
//         console.log(lair.name);
//     });
// });

//     _.each(M, function(S){
//     _.each(S.skills, function(skills){
//         console.log(skills.skillset);
//     });
// });

       _.each(M, function(S){
       _.each(S.nicknames, function(nicknames){
        console.log(nicknames.name);
    });
});