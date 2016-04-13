//now doing this with posts
//filter 
// will loop over all posts and grab only posts beginning with "dolor"

var _ = require("lodash");
var request = require ("request-promise");

request("http://jsonplaceholder.typicode.com/posts")
    .then(function(response){
    var posts = JSON.parse(response);

    //loop over all posts and grab only ones beginning with 'dolor'

    var importantPosts = _.filter(posts, function(post){
      return _.startsWith(post.title, "dolor");
    })
    console.log(importantPosts);
    console.log(importantPosts.length);
  });