showComments();
 
function showTimeAndDate(){
    var date= new Date();
     return date.getHours() + ":" + date.getMinutes() + "/t/t/t" +date.getDate() +"/" + (date.getMonth()+1) +"/"+date.getFullYear();
}

function b_delete(id)
{
//     event.preventDefault();
// //  localStorage.clear(value);
//var data=JSON.parse(localStorage.getItem('comments'));
var data=JSON.parse(localStorage.getItem('comments'));
console.log(data[id]);
for(var i=0;i<data.length;i++)
{
    if (i==id)
    {
    localStorage.removeItem();
    continue;
    }
    else
    {
    
    addComment[data[i]];
    
    }
}
console.log(data);
console.log(localStorage.getItem(comments[id]));
console.log(localStorage.getItem(comments.id==id));
localStorage.removeItem(comments[id]);
//localStorage.removeItem("1");
//   var getItems = localStorage.getItem('comments');
//   var itemsArr = JSON.parse(getItems);

//   var ItemsAfterDelete = itemsArr.filter(function (itemsArr) {
//     return itemsArr.id !== (id-1);
//   });
// localStorage.setItem('comments',  JSON.stringify(ItemsAfterDelete));
}
function b_edit()


{

}
 
function addComment(val){
  event.preventDefault();
  if (val==null)
  {
  var username= document.getElementById('username').value;
  var comment= document.getElementById('comment').value;
  }
  else
  {
    var username= val.username;
    var comment= val.comment;
  }
  if(localStorage.getItem("attempts"== 0))
  {
      localStorage.setItem("attempts", "0");
  }
  localStorage.setItem("attempts",JSON.parse(localStorage.getItem("attempts"))+1);
  var attempts=localStorage.getItem("attempts");
   var usercomment= {
     //id: parseInt(localStorage.getItem(comments.id[comments.length])),
     id: attempts,
     username: username,
     comment:comment,
     time: showTimeAndDate()
 }
  //var id_val = 
//  console.log(JSON.parse(localStorage.getItem('comments')));
//   if ( id_val.id != null )
//   {
//       idv=0;
//   }
  

//   var attempts = parseInt(localStorage.getItem("attempts"));
//   localStorage.setItem("attempts",`${++attempts}`);
   //console.log(j)
  if(localStorage.getItem('comments') == null){
      localStorage.setItem('comments', JSON.stringify([]));
      var comments=JSON.parse(localStorage.getItem('comments'));
      //usercomment[id]=comments.id++;
      comments.push(usercomment);
      localStorage.setItem('comments',JSON.stringify(comments));
      //localStorage.setItem('comments.id[comments.length-1]',JSON.stringify(comments.length)) 
      //location.reload();
      emptyComments();
      showComments();
      document.getElementById('username').value='';
      document.getElementById('comment').value='';
     // localStorage.length++;
  }
  else{
    var comments=JSON.parse(localStorage.getItem('comments'));
    //usercomment[id]=comments.id++;
    comments.push(usercomment);
    localStorage.setItem('comments',JSON.stringify(comments)); 
   // localStorage.setItem('comments.id[comments.length-1]',JSON.stringify(comments.length)) 
    //location.reload();
    emptyComments();
    showComments();
    document.getElementById('username').value='';
    document.getElementById('comment').value='';
  //  localStorage.length++;
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
    for(var i=0;i<allComments.length;i++){
            //ul.innerHTML+=  "<li>"+allComments[i].username + " : \t\t\t" + allComments[i].comment+ "   -    " +allComments[i].time + "</li>" + "\t\t\t\t<button id=bdelete onclick=" + delete(this.id) +">Delete</button>\t\t<button id=bedit onclick=" + edit(this.id)+ ">Update</button>";
            //ul.innerHTML+=  "<li>"+allComments[i].username + " : \t\t\t" + allComments[i].comment+ "   -    " +allComments[i].time + "</li>" + "<button onclick='b_delete(\""+allComments[i].id+"\")'>Delete</button>"\t\t<button id=bedit onclick="+ b_edit() +">Update</button>";
            //ul.innerHTML+=  "<li>"+allComments[i].username + " : \t\t\t" + allComments[i].comment+ "   -    " +allComments[i].time + "</li>" + "<button onclick='b_delete(" + localStorage.removeItem(id) +");'>Delete</button>";

            ul.innerHTML+=  "<li>"+allComments[i].username + " : \t\t\t" + allComments[i].comment+ "   -    " +allComments[i].time + '<button onclick="b_delete('+i+')">Delete</button></li>';
            //\t\t<button id=bedit onclick=" + edit(this.id)+ ">Update</button>";;
            // + "<button onclick='b_delete(\""+allComments[i].id+"\")'>Delete</button>"+ allComments[i].name+"\t\t\t" + "<li>"+allComments[i].username + " : \t\t\t" + allComments[i].comment+ "   -    " +allComments[i].time + "</li>";
    }
    // for(var i =0; i < localStorage.length; i++){
    //     console.log(localStorage.getItem(localStorage.key(i)));
    //   }
}
