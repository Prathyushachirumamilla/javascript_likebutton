showComments();
 
function showTimeAndDate(){
    var date= new Date();
     return date.getHours() + ":" + date.getMinutes() + ":" +date.getDate() +"/" + (date.getMonth()+1) +"/"+date.getFullYear();
}

function b_delete(id)
{
//     event.preventDefault();
// //  localStorage.clear(value);
//var data=JSON.parse(localStorage.getItem('comments'));
// var data=JSON.parse(localStorage.getItem('comments'));
// console.log(data[id]);
// for(var i=0;i<data.length;i++)
// {
//     if (i==id)
//     {
//     localStorage.removeItem();
//     continue;
//     }
//     else
//     {
    
//     addComment[data[i]];
    
//     }
// }
// console.log(data);
// console.log(localStorage.getItem(comments[id]));
// console.log(localStorage.getItem(comments.id==id));
localStorage.removeItem(id+1);
emptyComments();
showComments();
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
 
function addComment(){
  event.preventDefault();
  
  var username= document.getElementById('username').value;
  var comment= document.getElementById('comment').value;
 
//   if(localStorage.getItem("attempts"== 0))
//   {
//       localStorage.setItem("attempts", "0");
//   }
//   localStorage.setItem("attempts",JSON.parse(localStorage.getItem("attempts"))+1);
  var attempts=localStorage.getItem("attempts");
   var usercomment= {
     //id: parseInt(localStorage.getItem(comments.id[comments.length])),
     //id: attempts,
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
   //var attempts=localStorage.getItem('attempts';)
   if(localStorage.getItem("attempts")== null){
      //localStorage.setItem(attempts, JSON.stringify([]));
      //var comments=JSON.parse(localStorage.getItem('attempts'));
      //usercomment[id]=comments.id++;
      //comments.push(usercomment);
    localStorage.setItem("attempts", 1);
    localStorage.setItem("attempts",JSON.parse(localStorage.getItem("attempts"))+1);
      localStorage.setItem(attempts,JSON.stringify(usercomment));
      //localStorage.setItem('comments.id[comments.length-1]',JSON.stringify(comments.length)) 
      //location.reload();
    //   attempts++;
      
      emptyComments();
      showComments();
      document.getElementById('username').value='';
      document.getElementById('comment').value='';
     // localStorage.length++;
     console.log("1st iteem");
  }
  else{
   // var comments=JSON.parse(localStorage.getItem('comments'));
    //usercomment[id]=comments.id++;
   // comments.push(usercomment);
   console.log("else iteem");
   localStorage.setItem("attempts",JSON.parse(localStorage.getItem("attempts"))+1);
    localStorage.setItem(attempts,JSON.stringify(usercomment));
    
   // localStorage.setItem('comments.id[comments.length-1]',JSON.stringify(comments.length)) 
    //location.reload();
    emptyComments();
    showComments();
    document.getElementById('username').value='';
    document.getElementById('comment').value='';
  //  localStorage.length++;
  }
  
 
}
 
// function fetchComments(){
//     //console.log(localStorage.getItem('3'));
//     for(var i=0;i<(JSON.parse(localStorage.getItem('attempts')));i++)
//     {
//         //console.log(JSON.parse(localStorage.getItem(i)));
//         var data=JSON.parse(localStorage.getItem(i));
//         // console.log(data[1]);
//     }
//     return JSON.parse(localStorage.getItem('key'));
// }
 
function emptyComments(){
 document.getElementById('comments1').innerHTML='';
}
 
function showComments(){
    //var allComments=fetchComments();
    //console.log(allComments.value);
    var ul=document.getElementById('comments1');
    for(var i=0;i<(JSON.parse(localStorage.getItem('attempts')));i++)
    {
        // ul.innerHTML+="<li>"+localStorage.getItem((localStorage.key(i)))+"</li>";
        if(localStorage.key(i)=='attempts')
        {continue;
        }
        else
        {
        var data=JSON.parse(localStorage.getItem(localStorage.key(i)));
        ul.innerHTML+="<li>"+data.username+":"+data.comment+'<button onclick="b_delete('+i+')">Delete</button></li>';
        }
    }
    // for(var i =0; i < localStorage.length; i++){
    //     console.log(localStorage.getItem(localStorage.key(i)));
    //   }
}
