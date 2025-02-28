function add()
{
var a,b,c;
a=parseInt(document.getElementById("first").value);
b=parseInt(document.getElementById("second").value);
c=a+b;
document.getElementById("third").value=c;
}
function mul()
{
var a,b,c;
a=parseInt(document.getElementById("first").value);
b=parseInt(document.getElementById("second").value);
c=a*b;
document.getElementById("third").value=c;
}
function div()
{
var a,b,c;
a=parseInt(document.getElementById("first").value);
b=parseInt(document.getElementById("second").value);
c=a/b;
document.getElementById("third").value=c;
}
function sub()
{
var a,b,c;
a=parseInt(document.getElementById("first").value);
b=parseInt(document.getElementById("second").value);
c=a-b;
document.getElementById("third").value=c;
}
