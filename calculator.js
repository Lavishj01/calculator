let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenvalue='';
for(i of buttons){
i.addEventListener('click',(e) => {
        buttonText=e.target.innerText;
        // console.log('button text is :', buttonText);
        // if (buttonText=='*'){
        //     screenvalue +=buttonText;
        //     screen.value=screenvalue;
        // }
         if(buttonText=='C'){
            screenvalue= "";
            screen.value=screenvalue;

        }
        else if(buttonText=='='){
           screen.value= eval(screenvalue);
        }
        else{
            screenvalue +=buttonText;
            screen.value=screenvalue;
        }
})
}
