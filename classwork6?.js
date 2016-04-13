var _ = require("lodash");
var request = require("request");

request("http://jsonplaceholder.typicode.com/users", function(error, response, body){
 if(error || response.statusCode !== 200){
   console.log(error);
   return;
 }


 var users = JSON.parse(body);
 var usersGrouped;

 usersGrouped = _.groupBy(users, "id");


// console.log(usersGrouped);

 request("http://jsonplaceholder.typicode.com/posts", function(error1, response1, body1){
  debugger
   if(error1 || response1.statusCode !== 200){
     console.log(error1);
     return;
   }
   var postsGrouped;
   var posts = JSON.parse(body1);

   postsGrouped = _.groupBy(posts,function(post){
     return post.id;
   });


   request("http://jsonplaceholder.typicode.com/comments", function(error2, response2, body2){
     if(error2 || response2.statusCode !== 200){
       console.log(error2);
       return;
     }

     var comments = JSON.parse(body2);
     var commentsGroup;

     commentsGroup = _.groupBy(comments, function(comment){
       return comment.postId;
     });


     _.forEach(commentsGroup, function(value, key){
       postsGrouped[key].comments = value;
     });


     var postGroupedByUserId = _.groupBy(postsGrouped, function(postG){

       return postG[0].userId;
     });

     //console.log(postGroupedByUserId);


     _.forEach(postGroupedByUserId, function(value, key){
       //console.log(key);
       usersGrouped[key].posts = value;
     });


     console.log(usersGrouped);
   })
 })
});
