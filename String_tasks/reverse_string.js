/* var sentense="This is me";
var rev_str="",rev_word="";
console.log(sentense.length);
var length=sentense.length-1;
var i,count;
for(i=0;i<length;i++)
{
    count=i;
    if(sentense[i]==" ")
    {
        j=count-1;
        while( j >= 0 )
        {
            rev_word+=sentense[j];
            j--;
        }
    }
    console.log(sentense[i]);
    rev_str+=rev_word;
    console.log(rev_str);
}
console.log(rev_str); */
var input_string="Reverse of a string";
var rev_string="";
var arr=input_string.split(" ");
for(var i=0;i<arr.length;i++)
{
    //console.log(arr[i]);
    rev_string=rev_string+" "+rev_word(arr[i]);
    //console.log(rev_string);

}
console.log("Input string is : "+input_string);
console.log("Reverse of above sentence is : "+rev_string);

function rev_word(value)
{
    var j=(value.length-1);
    var rev_str="";
    while(j>=0)
    {
    //console.log(name[i]);
        rev_str+=value[j];
        j--;
    }
    return rev_str;
}