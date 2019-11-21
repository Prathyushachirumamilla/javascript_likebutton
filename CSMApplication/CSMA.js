function store()
{
    event.preventDefault();
    console.log("inside addcomment()");
    var company_name= document.getElementById('company_name').value;
    var password= document.getElementById('password').value;
    var confirm_password= document.getElementById('confirm_password').value;
    var mobile_number= document.getElementById('mobile_number').value;
    var email= document.getElementById('email').value;
    console.log(company_name);
    console.log(mobile_number);
    console.log(email);
    if (confirm_password != password)
    {
        alert("Password and confirm Password did not match")
    }
    else if (company_name=="" || mobile_number=="" || email=="" )
    {
        alert("Fields must not be empty");
    }
    //if(confirm_password == password)
    /* else if(localStorage.getItem('users') != null)
    {
        var save_data=JSON.parse(localStorage.getItem('users'));
        for ( var i=0;i<save_data.length;i++)
        {
            if(save_data[i].company_name==company_name)
            {
                alert("Company with name "+company_name+" already exists. Try again!");
                break;
                //empty_values();
            }
        }

        ///adding data below
       /*  var registered_users= {
            company_name:company_name,
            password: password,
            mobile_number:mobile_number,
            email:email,
            time: showTimeAndDate()
      }
        var users=JSON.parse(localStorage.getItem('users'));
        users.push(registered_users);
        localStorage.setItem('users',JSON.stringify(users));
      empty_values(); */
 
   
        ///adding data below
  //  } */
    else 
    {
        /* if(localStorage.getItem('users') != null)
        var save_data=JSON.parse(localStorage.getItem('users'));
        for ( var i=0;i<save_data.length;i++)
        {
            if(save_data[i].company_name==company_name)
            {
                alert("Company with name "+company_name+" already exists. Try again!");
                //empty_values();
                break;
            }
        } */
            var registered_users= {
            company_name:company_name,
            password: password,
            mobile_number:mobile_number,
            email:email,
            time: showTimeAndDate()
      }
      var flag=0;

      if(localStorage.getItem('users') == null){
        localStorage.setItem('users', JSON.stringify([]));
        var users=JSON.parse(localStorage.getItem('users'));
        users.push(registered_users);
        localStorage.setItem('users',JSON.stringify(users));
        console.log(users);
        console.log("inside add comments");
        empty_values();
        alert("Data saved successfully! Redirecting to login page");
        location.href="login.html";
    }
    else{
        var users=JSON.parse(localStorage.getItem('users'));
        //adding code here
        for ( var i=0;i<users.length;i++)
        {
            if(users[i].company_name==company_name)
            {
                alert("Company with name "+company_name+" already exists. Try again!");
                //empty_values();
                flag=1;
                break;
            }
        } 
        //adding code here
        if ( flag!=1 )
        {
        users.push(registered_users);
        localStorage.setItem('users',JSON.stringify(users));
        empty_values();
        alert("Data saved successfully! Redirecting to login page");
        location.href="login.html";
        }
      //location.reload();
     // empty_values();
    }
 
    }
    /* else
    { alert("Password and confirm Password did not match")
      //empty_values();
    } */
}
function empty_values()
{
    document.getElementById('company_name').value='';
    document.getElementById('password').value='';
    document.getElementById('confirm_password').value='';
    document.getElementById('mobile_number').value='';
    document.getElementById('email').value='';
}

function showTimeAndDate()
{
    var date= new Date();
     return date.getHours() + " : " + date.getMinutes() +"\t\t\t" +date.getDate() +"/" + (date.getMonth()+1) +"/"+date.getFullYear()
}