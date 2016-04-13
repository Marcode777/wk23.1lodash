// pull out the user ID and be able to create a new hash with user id
// parse JSON

//loop over array of objects
//check user_id and create new key if unique
//add album object to new hash
//doing this with albums

var _ = require("lodash");
var request = require("request-promise");

request("http://jsonplaceholder.typicode.com/albums")
    .then(function(response){
        var albums = JSON.parse(response);
        var result = {};

        _.each(albums, function(album){
            if(result[album.userId]){
                result[album.userId].push(album);
            } else {
                result[album.userId] = [album];
            }
        })

        // loop over array of objects
            // check user_id and create new key if unique
                // add album object to new hash
        console.log(result[7]);
    });


    // now to turn this into just a few lines of code


var _ = require("lodash");
var request = require("request-promise");

  request("http://jsonplaceholder.typicode.com/albums")
    .then(function(response){
    var result = _.groupBy(albums, 'userId');
    console.log(result);
  });