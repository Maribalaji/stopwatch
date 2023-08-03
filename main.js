var cout=document.getElementById("count")
var second=document.getElementById("second");
var minute=document.getElementById("min");
var hours=document.getElementById("hours");
var count=0;
var sec=0;
var min=0;
var hrs=0;

var startbtn=document.getElementById("start");
var stopbtn=document.getElementById("stop");
var resetbtn=document.getElementById("reset");

startbtn.addEventListener("click",function(){
    startTimer=setInterval(timer,15);

})
stopbtn.addEventListener("click",function(){
    clearInterval(startTimer);
})
resetbtn.addEventListener("click",function(){
    clearInterval(startTimer);
    count="00";
    sec="00";
    min="00";
    hrs="00";
    cout.innerHTML=count;
    second.innerHTML=sec;
    minute.innerHTML=min;
    hours.innerHTML=hrs;
})


// var set=setInterval(timer,100);


function timer(){
    if(count<9){
        count++;
        cout.innerHTML="0"+count;
       
    }
    else if(count>=9&&count<59){
        count++;
        cout.innerHTML=count;
        

    }
    else{
        clearInterval(cout);
        count=0;
        cout.innerHTML=count;
        
        // second.innerHTML=sec;
        if(sec<9){
            sec++;
            second.innerHTML="0"+sec;
            
            
        }

        else if(sec>=9&&sec<59){
            sec++;
            second.innerHTML=sec;
            

        }
        else{
            clearInterval(second);
            sec=0;
            second.innerHTML=sec;

            if(min<9){
                min++;
                minute.innerHTML="0"+min
            }
            else if(min>=9&&min<59){
                min++;
                minute.innerHTML=min
            }
            else{
                clearInterval(minute);
                min=0;
                minute.innerHTML=min;
                if(hrs<9){
                    hrs++;
                    hours.innerHTML="0"+hrs;
                }
                else if(hrs>=9&&hrs<24){
                    hrs++;
                    hours.innerHTML=hrs;
                }
                else{
                    clearInterval(hours);
                    hrs=0;
                }
            }

        }
       
    }
    

}
    

   
    
    

    
    
    

    
        
        

