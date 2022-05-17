// alert("welcome");

//for buttons
const startbt=document.querySelector('#start');
const stopbt=document.querySelector('#stop');
const resetbt=document.querySelector('#reset');

//for clock oo:00
const hours=document.querySelector('.hour');
const mins=document.querySelector('.min');
const secs=document.querySelector('.sec');

//varible declare
let intervalId;
let timerTime=0;



stopbt.style.display='none';    //used for hiding the buttons

//function to call start buttoms

function startTimer(){
intervalId=setInterval(incrementTimer,1000);

startbt.style.display='none';  //for hiding

stopbt.style.display='inline-block';
}

//function to call stop buttons

function stopTimer(){
    clearInterval(intervalId);
    stopbt.style.display='none';
    startbt.style.display='inline-block';
}

//functiom to call reset buttoms\

function resetTimer(){
stopTimer();
timerTime=0;
secs.innerText='00';
mins.innerText='00';
hours.innerText='00';
}

function incrementTimer(){
    timerTime++;
    const numberOfHour=timerTime;
   const numberOfMintue=Math.floor(timerTime / 60);
   const numberOfSec=timerTime % 60;

    secs.innerText=zeroPadding(numberOfSec);

    mins.innerText=zeroPadding(numberOfMintue);

    // console.log('increment Timer',timerTime);
}

//for count 00 if the number is less than 10
function zeroPadding(number){                    
    return number<10?`0${number}`:`${number}`;
}


//used for event
startbt.addEventListener('click',startTimer);
stopbt.addEventListener('click',stopTimer);
resetbt.addEventListener('click',resetTimer);