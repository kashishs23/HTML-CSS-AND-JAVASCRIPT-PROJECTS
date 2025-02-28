function d()
{
     var a,b,rev=0;
    a=parseInt(document.getElementById("r").value);
    while(a>0)
{
     b=a%10;
     rev=rev*10+b;
     a=parseInt(a/10);
}
document.getElementById("j").value+=rev;
}
