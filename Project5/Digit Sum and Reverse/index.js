function d()
{
      var a,b,sum=0;
      a=parseInt(document.getElementById("s").value);
      while(a>0)
    {
        b=a%10;
        sum=sum+b;
        a=parseInt(a/10);
     }
    document.getElementById("j").value+=sum;
}
function f()
{
      var a,b,sum=0;
      a=parseInt(document.getElementById("s").value);
      while(a>0)
    {
        b=a%10;
        sum=sum*10+b;
        a=parseInt(a/10);
     }
    document.getElementById("r").value+=sum;
}
