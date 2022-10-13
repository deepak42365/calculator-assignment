let screen =document.getElementById('screen');
buttons= document.querySelectorAll('button');
let screenvalue="";


for(item of buttons )
{ 

item.addEventListener('click',(e)=> {

    buttontext = e.target.innerText;

console.log('button Text is', buttontext)

if(buttontext== 'x')
{
  buttontext = '*';

  screenvalue+=buttontext;

  screen.value = screenvalue;
}

else if(buttontext =='c') 
{
  screenvalue="";

  screen.value = screenvalue;
}

else if(buttontext=='=')
{ 
  console.log(eval(screenvalue));  
  screen.value = eval(screenvalue);

}

else{

     screenvalue+= buttontext;
     screen.value = screenvalue; 
}



})
}


