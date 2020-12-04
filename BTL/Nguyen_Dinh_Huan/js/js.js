var left = -28;
const slide = function(){
    let x = document.getElementById("slide");
    x.style.left = left + '%';
    x.style.transition = ".7s";
    left -= 28;
    if(left == -364){
        left = -28;
    }
}

setInterval(slide, 2000);













var check = true;
function myF1(){
    if(check){
        document.getElementById("idBars").style.display = "none";
        document.getElementById("idRemove").style.display = "block";
        document.getElementById("menu-left").style.display = "block";
        check = false;
    }else {
        document.getElementById("idBars").style.display = "block";
        document.getElementById("idRemove").style.display = "none";
        document.getElementById("menu-left").style.display = "none";
        check = true;
    }
}

function myF2(){
    if(!check){
        document.getElementById("idBars").style.display = "block";
        document.getElementById("idRemove").style.display = "none";
        document.getElementById("menu-left").style.display = "none";
        check = true;
    }
}


window.onscroll = function(){
    console.info(document.documentElement.scrollTop);
    var x = document.getElementById('header');
    if(document.documentElement.scrollTop > 60){
        x.style.height = "60px"; 
        x.style.transition = "0.5s"; 
    }else {
        x.style.height = "90px"; 
    }
}



var checkPlayPause = false;
function play_pause(){
    if(checkPlayPause){
        document.getElementById('pause').style.display = "none";
        document.getElementById('play').style.display = "block";
        checkPlayPause = false;
    }else {
        document.getElementById('pause').style.display = "block";
        document.getElementById('play').style.display = "none";
        checkPlayPause = true;
    }
}
var checkPlayPause2 = false;
function play_pause2(){
    if(checkPlayPause2){
        document.getElementById('pause2').style.display = "none";
        document.getElementById('play2').style.display = "block";
        checkPlayPause2 = false;
    }else {
        document.getElementById('pause2').style.display = "block";
        document.getElementById('play2').style.display = "none";
        checkPlayPause2 = true;
    }
}
var checkPlayPause3 = false;
function play_pause3(){
    if(checkPlayPause3){
        document.getElementById('pause3').style.display = "none";
        document.getElementById('play3').style.display = "block";
        checkPlayPause3 = false;
    }else {
        document.getElementById('pause3').style.display = "block";
        document.getElementById('play3').style.display = "none";
        checkPlayPause3 = true;
    }
}
var checkPlayPause4 = false;
function play_pause4(){
    if(checkPlayPause4){
        document.getElementById('pause4').style.display = "none";
        document.getElementById('play4').style.display = "block";
        checkPlayPause4 = false;
    }else {
        document.getElementById('pause4').style.display = "block";
        document.getElementById('play4').style.display = "none";
        checkPlayPause4 = true;
    }
}
var checkPlayPause5 = false;
function play_pause5(){
    if(checkPlayPause5){
        document.getElementById('pause5').style.display = "none";
        document.getElementById('play5').style.display = "block";
        checkPlayPause5 = false;
    }else {
        document.getElementById('pause5').style.display = "block";
        document.getElementById('play5').style.display = "none";
        checkPlayPause5 = true;
    }
}
