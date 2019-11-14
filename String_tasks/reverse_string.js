var sentense="This is me";
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
        while(j >=0 )
        {
            rev_word+=sentense[j];
            j--;
        }
    }
    console.log(sentense[i]);
    rev_str+=rev_word;
    console.log(rev_str);
}
console.log(rev_str);