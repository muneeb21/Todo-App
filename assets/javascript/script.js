// to change colors for different categories


var list = document.getElementsByClassName("category-type");

for(var i=0;i<list.length;i++){
    
    if(list[i].innerHTML==="Work"){
        list[i].style.backgroundColor="purple";
    }
    
    if(list[i].innerHTML==="General"){
        list[i].style.backgroundColor="teal";
    }
}

// to modify date
var dateList=document.getElementsByClassName("main-date");
for(var i=0;i<dateList.length;i++){
    var str=dateList[i].innerHTML;
    let t="";
    
    
    for(let j=0;j<str.length;j++){
        if(str[j]==="0" && str[j+1]==="5" && str[j+2]===":"){
            break;
        }
        else{
            
            t=t+str[j];
        }
    }
    dateList[i].innerHTML=t;
    
}