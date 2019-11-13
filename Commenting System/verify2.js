checkIfCommentsExist();
showComments();
function checkIfCommentsExist(){
  console.log("inside");
  if(localStorage.getItem("comments") == "[]"){
    console.log("hello");
    document.getElementById('comments').innerHTML="No Comments Yet!";
  }
}
makeVisible('addComment');
function makeInvisible(id){
  console.log("inside invisible")
    document.getElementById(id).style.display="none";
}
function makeVisible(id){
  document.getElementById(id).style.display="inline";
}
function showTimeAndDate(){
    var date= new Date();
     return date.getHours() + " : " + date.getMinutes() +"\t\t\t" +date.getDate() +"/" + (date.getMonth()+1) +"/"+date.getFullYear()
}
 
function addUserComment(){
  event.preventDefault();
  console.log("inside addcomment()");
 var username= document.getElementById('username').value;
  var comment= document.getElementById('comment').value;
 
  var usercomment= {
    commentId:getUniqueId(),
      username: username,
      comment:comment,
      time: showTimeAndDate(),
      likes:0,
      dislikes:0,
      replies: [
        // {userename: username,
        // comment: comment}
      ]
  }
  if(localStorage.getItem('comments') == null){
      localStorage.setItem('comments', JSON.stringify([]));
      var comments=JSON.parse(localStorage.getItem('comments'));
      usercomment.likes=0;
      comments.push(usercomment);
      localStorage.setItem('comments',JSON.stringify(comments));
      console.log(comments);
      //location.reload();
      emptyComments();
      showComments();
      console.log("inside add comments");
      document.getElementById('username').value='';
      document.getElementById('comment').value='';
  }
  else{
    var comments=JSON.parse(localStorage.getItem('comments'));
    comments.push(usercomment);
    localStorage.setItem('comments',JSON.stringify(comments));  
    //location.reload();
    emptyComments();
    showComments();
    document.getElementById('username').value='';
 document.getElementById('comment').value='';
 
  }
}
function getUniqueId(){
  var uniqueId;
    if(localStorage.getItem('commentId') == null){
      localStorage.setItem('commentId',0);
        uniqueId=parseInt(localStorage.getItem('commentId'))+1;
        localStorage.setItem('commentId', uniqueId);
       return uniqueId;
    }
    else
    {
     uniqueId=parseInt(localStorage.getItem('commentId'))+1;
     localStorage.setItem('commentId', uniqueId);
     return uniqueId;
 
    }
}
function fetchComments(){
    return JSON.parse(localStorage.getItem('comments'));
}
 
function emptyComments(){
 document.getElementById('comments').innerHTML='';
}
 
function showComments(){
    var allComments=fetchComments();
    var ul=document.getElementById('comments');
 
     if(allComments!= null){
 
    for(var i=0;i<allComments.length;i++){
      if(allComments[i].replies.length > 0)
        {
          var data=JSON.stringify(allComments[i].replies);
          //console.log(JSON.parse(data[i].username));
          //console.log(data[i].username);
          //console.log(data["username"]);
            ul.innerHTML+=  "<li>"+allComments[i].username + " : \t\t\t" + allComments[i].comment+ "   -    " +allComments[i].time
             + "</li>" + "<button onclick=edit("+allComments[i].commentId+")>Edit</button>"+"      "+ 
             "<button onclick=deleteComment("+allComments[i].commentId+")>Delete</button>" + "    " +
             "<i class='fa fa-thumbs-up' style='font-size:18px;color:red' onclick=like("+allComments[i].commentId+")></i>"
             + allComments[i].likes + "<i class='fa fa-thumbs-down' style='font-size:18px;color:red' onclick=dislike("+allComments[i].commentId+")></i>" + allComments[i].dislikes + " " +  "<button onclick=reply("+allComments[i].commentId+")>Reply</button>" 
             + "<ul>" +allComments[i].replies[i].username+"</ul>";
        }
      else
        {
          ul.innerHTML+=  "<li>"+allComments[i].username + " : \t\t\t" + allComments[i].comment+ "   -    " +allComments[i].time
          + "</li>" + "<button onclick=edit("+allComments[i].commentId+")>Edit</button>"+"      "+ 
          "<button onclick=deleteComment("+allComments[i].commentId+")>Delete</button>" + "    " +
          "<i class='fa fa-thumbs-up' style='font-size:18px;color:red' onclick=like("+allComments[i].commentId+")></i>"
          + allComments[i].likes + "<i class='fa fa-thumbs-down' style='font-size:18px;color:red' onclick=dislike("+allComments[i].commentId+")></i>" + allComments[i].dislikes + " " +  "<button onclick=reply("+allComments[i].commentId+")>Reply</button>" ;
        }
      }
  }
  else
  {
   ul.innerHTML="No comments yet!!";
  }
}
 
function reply(commentId){
 event.preventDefault();
 console.log("inside reply");
 makeInvisible('addComment');
 if(document.getElementById('reply') == null){
  var button=document.createElement('button');
  button.innerHTML="Reply to Comment";
  button.setAttribute('onclick',"replyComment("+commentId+")");
  button.id="reply";
  form.appendChild(button);
 }
 else{
   makeVisible('reply');
 }
}
 
function replyComment(commentId){
  event.preventDefault();
  var username=document.getElementById('username').value;
var comment=document.getElementById('comment').value;
var replyComment= {
     username:username,
     comment:comment,
     time:showTimeAndDate()
}
var allComments=fetchComments();
for(var i=0;i<allComments.length;i++){
  if(allComments[i].commentId == commentId){
   allComments[i].replies.push(replyComment);
  }
}
localStorage.setItem('comments',JSON.stringify(allComments));
emptyComments();
showComments();
document.getElementById('username').value='';
document.getElementById('comment').value='';
makeVisible('addComment');
makeInvisible('reply');
}
 
function like(commentId){
  var allComments=fetchComments();
  for(var i=0;i<allComments.length;i++){
       if(allComments[i].commentId == commentId){
        allComments[i].likes=allComments[i].likes+1;
       }
  }
  localStorage.setItem('comments',JSON.stringify(allComments));
  emptyComments();
  showComments();
  document.getElementById('username').value='';
document.getElementById('comment').value='';
}
function dislike(commentId){
  var allComments=fetchComments();
  for(var i=0;i<allComments.length;i++){
       if(allComments[i].commentId == commentId){
        allComments[i].dislikes=allComments[i].dislikes+1;
       }
  }
  localStorage.setItem('comments',JSON.stringify(allComments));
  emptyComments();
  showComments();
  document.getElementById('username').value='';
document.getElementById('comment').value='';
}
 
function edit(commentId){
  event.preventDefault();
       var comment=getUserCommentById(commentId);
       console.log(comment);
       document.getElementById('username').value=comment.username;
       document.getElementById('username').disabled=true;
       document.getElementById('comment').value=comment.comment;
       makeInvisible("addComment");
       
       var form=document.getElementById('form');
       if(document.getElementById('uComment') == null){
        var button=document.createElement('button');
        button.innerHTML="Update Comment";
        button.setAttribute('onclick',"updateComment("+commentId+")");
        button.id="uComment";
        form.appendChild(button);
       }
    //makeVisible("updateComment");
}
 
function getUserCommentById(commentId){
 
  // iterate over all comments and find the respective comment by its id and return it.
  var allComments=fetchComments();
    for(var i=0;i<allComments.length;i++){
         if(allComments[i].commentId == commentId){
           return allComments[i];
         }
    }
 
}
 
function updateComment(commentId){
  event.preventDefault();
  var username= document.getElementById('username').value;
  var comment= document.getElementById('comment').value;
  //var actualComment=getUserCommentById(commentId);
  //console.log(actualComment,"ss");
   var allComments=fetchComments();
   console.log("Before",allComments);
   for(var i=0;i<allComments.length;i++){
       if(allComments[i].commentId == commentId){
         allComments[i].username= username;
         allComments[i].comment= comment;
         allComments[i].time=showTimeAndDate()
       }
   }
   localStorage.setItem('comments',JSON.stringify(allComments));
   emptyComments();
   showComments();
   document.getElementById('username').value='';
document.getElementById('comment').value='';
makeVisible('addComment');
makeInvisible('uComment');
document.getElementById('username').disabled=false;
}
 
function deleteComment(id){
   event.preventDefault();
   var allComments=fetchComments();
   console.log("Before",allComments);
   for(var i=0;i<allComments.length;i++){
       if(allComments[i].commentId == id){
            allComments.splice(i,1);
       }
   }
   console.log("After",allComments);
   localStorage.setItem('comments', JSON.stringify(allComments));
   emptyComments();
   showComments();
   checkIfCommentsExist();
 
}
