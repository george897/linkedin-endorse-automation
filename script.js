let btn= document.getElementsByClassName("artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view" );
let i=0;
setInterval(()=>{
if(btn[i].innerText==='Endorse'){
        btn[i].click();
        i++;
    }
    else if(i>btn.length){
clearInterval();
    }
    else{
        i++;
    }
},1000);

