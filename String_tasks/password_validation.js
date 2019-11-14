var p_str = "SftDghrwqui";
var ucl = /[A-Z]/g;
var lcl = /[a-z]/g;
//var sc = /[!@#$%^&*{}'()-~.,]/g;
var num = /[0-9]/g;
if (p_str.match(ucl) && p_str.match(lcl))
{
 //console.log("password is valid");
 if ( p_str.match(num))
 {
     console.log("Password is invalid");
 }
 else
 {
     console.log("password is valid");
 }
}