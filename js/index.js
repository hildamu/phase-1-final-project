//document.getElementById("playButton").addEventListener("click",function(){
   //let audio=document.getElementById("myAudio");
    //if(audio.paused){
        //audio.play();
        //document.getElementById("playButton").innerHTML="Pause";

    //}else{
      // audio.pause();
       // document.getElementById("playButton").innerHTML="Play";
    //}
//})

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll(".playButton");
    
    buttons.forEach(function(button) {
      button.addEventListener("click", function() {
        let song = this.getAttribute("data-song");
        let audio = new Audio(song);
        audio.play();
      });
    });
  });

