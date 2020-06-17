console.log("yo");
var list = document.getElementsByClassName("category-type");
// console.log(list);
// console.log(document.getElementById("category-type").innerHTML);
for(var i=0;i<list.length;i++){
    console.log(list[i].innerHTML);
    if(list[i].innerHTML==="Work"){
        list[i].style.backgroundColor="purple";
    }
    
    if(list[i].innerHTML==="General"){
        list[i].style.backgroundColor="teal";
    }
}
var dateList=document.getElementsByClassName("main-date");
for(var i=0;i<dateList.length;i++){
    var str=dateList[i].innerHTML;
    let t="";
    // console.log(str[2]);
    console.log(str);
    for(let j=0;j<str.length;j++){
        if(str[j]==="0" && str[j+1]==="5" && str[j+2]===":"){
            break;
        }
        else{
            // console.log(str[j]);
            t=t+str[j];
        }
    }
    dateList[i].innerHTML=t;
    console.log(t);
}