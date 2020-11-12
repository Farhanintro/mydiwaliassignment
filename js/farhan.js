// background audio volume control

var vid = document.getElementById("backmp3");

function setHalfVolume() {
    vid.volume = 0.6;
}

//   background music script start;

function playsound() { 
  vid.play();
} 

function stopsound(){
  vid.pause();
}

// my credit change script

var credit = document.getElementById("change_credit");

function credit_change(){
  credit.innerHTML = "Check Out My Github Profile &#8608;"
}