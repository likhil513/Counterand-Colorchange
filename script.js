var val=document.getElementById('num');
var eveod=document.getElementById('counter');
var count=0;
function add(){
    if(count<20)
    {
        count++;
        if(count%2==0)
        {   
            eveod.textContent="Even"
            val.textContent=count
        }
        else
        {
            eveod.textContent="Odd"
            val.textContent=count
        }
    }
    else
    alert("You cannot increase more than 20")
}
function sub(){
    if(count>0)
        {
            count--;
            if(count%2==0)
            {   
                eveod.textContent="Even"
                val.textContent=count
            }
            else
            {
                eveod.textContent="Odd"
                val.textContent=count
            }
        }
        else
        alert("You cannot decrease less than 0")
}
function res(){
    count=0;
    val.textContent=count

}

function changeColor(){
    var val = '#'+ Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = val;
}__