//switch cases

//printTime Function

//setInterval

//new Date()
function printTime(){
    //assigning variables
    let d=new Date();
    let hours=d.getHours();
    let minutes=d.getMinutes();
    let seconds=d.getSeconds();
    let day=d.getDay();
    let date=d.getDate();
    let month=d.getMonth();
    let year=d.getFullYear();

    //assigning days based on number
    switch(day){
        case 0:
            day="sunday";
            break;
        case 1:
            day="monday";
            break;
        case 2:
            day="tuesday";
            break;
        case 3:
            day="wednesday";
            break;
        case 4:
            day="thursday";
            break;
        case 5:
            day="friday";
            break;
        case 6:
            day="saturday";
            break;
    }

    if(hours<10){
        hours="0"+hours;
    }
    if(minutes<10){
        minutes="0"+minutes;
    }
    if(seconds<10){
        seconds="0"+seconds;
    }

    month=month+1;
    document.getElementById('clock').innerHTML=hours+":"+minutes+":"+seconds;
    document.getElementById('day-date').innerHTML=day+","+date+"."+month+"."+year;


}

window.onload=function(){
    printTime()
}

setInterval(printTime,1000);