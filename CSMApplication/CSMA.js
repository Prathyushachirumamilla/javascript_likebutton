function store()
{
    event.preventDefault();
    console.log("inside addcomment()");
    var company_name= document.getElementById('company_name').value;
    var password= document.getElementById('password').value;
    var confirm_password= document.getElementById('confirm_password').value;
    var mobile_number= document.getElementById('mobile_number').value;
    var email= document.getElementById('email').value;
    
    var registered_users= {
            company_name:company_name,
            password: password,
            confirm_passwordc:confirm_password,
            mobile_number:mobile_number,
            email:email,
            time: showTimeAndDate()
      }

      if(localStorage.getItem('users') == null){
        localStorage.setItem('users', JSON.stringify([]));
        var users=JSON.parse(localStorage.getItem('users'));
        users.push(registered_users);
        localStorage.setItem('users',JSON.stringify(users));
        console.log(users);
        console.log("inside add comments");
        empty_values();
    }
    else{
        var users=JSON.parse(localStorage.getItem('users'));
        users.push(registered_users);
        localStorage.setItem('users',JSON.stringify(users));
      //location.reload();
      empty_values();
 
   
    }
 
}

function empty_values()
{
    document.getElementById('company_name').value='';
    document.getElementById('password').value='';
    document.getElementById('confirm_password').value='';
    document.getElementById('mobile_number').value='';
    document.getElementById('email').value='';
}

function showTimeAndDate(){
    var date= new Date();
     return date.getHours() + " : " + date.getMinutes() +"\t\t\t" +date.getDate() +"/" + (date.getMonth()+1) +"/"+date.getFullYear()
}