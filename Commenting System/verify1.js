checkIfCommentsExist();
showComments();
disableAddComment();
//disableUpdateComment();
function checkIfCommentsExist(){
  console.log("inside");
  if(localStorage.getItem("comments") == "[]"){
    console.log("hello");
    document.getElementById('comments').innerHTML="No Comments Yet!";
  }
}
function verifyData() 
     {
       disableAddComment();
      
       console.log("verifydata");
      var x = document.getElementById('username').value;
      var y = document.getElementById('comment').value;
      if ((x.length < 5) && (y.length < 1))
      {
        console.log("if part");
        disableAddComment();
        setTimeout( function ( ) { alert( "username > 5 and comment != 0 " ); }, 1000 );
      //  document.getElementById("addComment").disabled = true;
        //alert("user name should be greater than 5 \n Comment should not be empty");
        return false;
      }
      else
       { 
        console.log(x.length);
        console.log(y.length);
        console.log("else part");
        if ((x.length > 5) && (y.length > 1))
        {
          enableAddComment();
        }
        //  return true;
      // document.getElementById("addComment").disabled = false;
      }
      
      
      /* console.log(x.length);
      console.log(y);
      if (x.length > 5 & ( y.length < 1 )) 
      {
        alert("Characters in username has to be more than 5 and comment should not be empty");
        return false;
      }
      else 
      {
            // document.getElementById('addComment').
            return true;
      } */
    }

function disableAddComment()
{
  console.log("disable add comment");
  document.getElementById("addComment").disabled = true;
 // document.getElementById("uComment").disabled = true;
}

function enableAddComment()
{
  console.log("enable add comment");
  document.getElementById("addComment").disabled = false;
  //document.getElementById("uComment").disabled = false;

}

/* function disableUpdateComment()
{
  document.getElementById("uComment").disabled = true;
}
function enableUpdateComment()
{
  document.getElementById("uComment").disabled = false;
} */
makeVisible('addComment');
function makeInvisible(id){
    document.getElementById(id).style.display="none";
}
function makeVisible(id){
  document.getElementById(id).style.display="inline";
}
function showTimeAndDate(){
    var date= new Date();
     return date.getHours() + ":" + date.getMinutes() +"\t\t\t" +date.getDate() +"/" + (date.getMonth()+1) +"/"+date.getFullYear()
}

function addUserComment(){
  event.preventDefault();
  disableAddComment();
  //disableUpdateComment();
  console.log("inside addcomment()");
  var username= document.getElementById('username').value;
  var comment= document.getElementById('comment').value;
  var x = document.getElementById('username').value;
  var y = document.getElementById('comment').value;
  if (x.length < 5 && y.length < 1)
  {
    disableAddComment();
    //disableUpdateComment();
    // console.log("if part");
    // setTimeout( function ( ) { alert( "username > 5 and comment != 0 " ); }, 5000 );
  //  document.getElementById("addComment").disabled = true;
    //alert("user name should be greater than 5 \n Comment should not be empty");
  }
  else
   { 
    // console.log("else part");
    enableAddComment();
    //enableUpdateComment();
    //  return true;
  // document.getElementById("addComment").disabled = false;
      var usercomment= 
      {
        commentId:getUniqueId(),
        username: username,
        comment:comment,
        time: showTimeAndDate()
      }
      if(localStorage.getItem('comments') == null)
      {
        localStorage.setItem('comments', JSON.stringify([]));
        var comments=JSON.parse(localStorage.getItem('comments'));
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
      else
      {
        var comments=JSON.parse(localStorage.getItem('comments'));
        comments.push(usercomment);
        localStorage.setItem('comments',JSON.stringify(comments));  
        //location.reload();
        emptyComments();
        showComments();
        document.getElementById('username').value='';
        document.getElementById('comment').value='';

        }
        disableAddComment();
       // disableUpdateComment();
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
            ul.innerHTML+=  "<li>"+allComments[i].username + " : \t\t\t" + allComments[i].comment+ "   -    " +allComments[i].time + "</li>" + "<button onclick=edit("+allComments[i].commentId+")>Edit</button>"+"      "+ "<button onclick=deleteComment("+allComments[i].commentId+")>Delete</button>";
    }
  }
  else
  {
   ul.innerHTML="No comments yet!!";
  }
}

function edit(commentId){
  event.preventDefault();
  var txt;
  var r = confirm("Are you sure you wanted to edit the comment");
  if (r == true) 
    {
      // txt = "You pressed OK!";
      var comment=getUserCommentById(commentId);
       console.log(comment);
       document.getElementById('username').value=comment.username;
       document.getElementById('comment').value=comment.comment;
       makeInvisible("addComment");
       
       var form=document.getElementById('form');
        var button=document.createElement('button');
        button.innerHTML="Update Comment";
        button.setAttribute('onclick',"updateComment("+commentId+")");
        button.id="uComment";
        
        form.appendChild(button);
        document.getElementById("uComment").disabled=true;
        var x = document.getElementById('username').value;
        var y =  document.getElementById('comment').value;
        if( x.length < 5 && y.length < 1)
        {
          document.getElementById("uComment").disabled=true;
        }
        else
        {
          document.getElementById("uComment").disabled=false;
        }
    } 
  else 
    {
      // txt = "You pressed Cancel!";
      return;
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
    if(username.length < 5 && comment.length < 1)
    {
      // disableUpdateComment();
      document.getElementById("uComment").disabled = true;
      return;
    }
    else
    {
      /* if(username.length < 5 && comment.length < 1)
    {
      // disableUpdateComment();
      document.getElementById("uComment").disabled = true;
      return;
    } 
    else{*/
      document.getElementById("uComment").disabled = false;
      var allComments=fetchComments();
     console.log("Before",allComments);
     for(var i=0;i<allComments.length;i++){
         if(allComments[i].commentId == commentId){
           allComments[i].username= username;
           allComments[i].comment= comment;
           allComments[i].time=showTimeAndDate();
         /* } */
        }
     }
     localStorage.setItem('comments',JSON.stringify(allComments));
     emptyComments();
     showComments();
     document.getElementById('username').value='';
    document.getElementById('comment').value='';
    makeVisible('addComment');
    makeInvisible('uComment');
    }
     
  }
  
  function deleteComment(id){
     event.preventDefault();
     var allComments=fetchComments();
     console.log("Before",allComments);
     var txt;
    var r = confirm("Are you sure you wanted to delete the comment");
    if (r == true) 
    {
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
    else{
      return;
    } 
  
  }
