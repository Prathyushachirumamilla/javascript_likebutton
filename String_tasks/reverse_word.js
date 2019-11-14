var name="prathyusha";
console.log("String entered is : "+name)
//console.log(name.length);
var i=(name.length-1);
var rev_str="";
while(i>=0){
    //console.log(name[i]);
    rev_str+=name[i];
    /* if(rev_str=="")
    {
        rev_str=name[i];
    }
    else
    {
        rev_str+=name[i];
    } */
    i--;
}
console.log("Its reverse string is : "+rev_str);
