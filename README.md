# phase-1-final-project
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MUSICBRAINZ</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>MUSICBRAINZ</h1>
    </header>
    <style>
        h1 {
        color: mediumvioletred;
        text-align: center;
    }
    h3 {
        color: blueviolet;
        text-align: left;
    }
    h2 {
        color: rgb(8, 131, 117);
        text-align: left;
        
    }


    </style>
    
    <main>
        <div class = "Music Genres">
            <h1>Music Genres</h1>
            <h2>1. Dancehall</h2>
            <h3>Skillibeng</h3>
            
            <img src ="https://images.thefacecdn.com/images/FACE_13_SKILLIBENG.jpg?auto=compress&q=25&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&w=1180&h=1475"alt="artists image"
            style="width:450px; height: 350px;">
            <ul>SONGS:</ul>
            <li>EastSyde</li>
            <audio id="myAudio"src ="https://youtu.be/wRYzBAvOFkY"></audio>
            <button id="playButton">Play</button>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#playButton").click(function(){
    let audio = document.getElementById("myAudio");
    if (audio.paused) {
      audio.play();
      $(this).text("Pause");
    } else {
      audio.pause();
      $(this).text("Play");
    }
  });
});
</script>
            <li>Deja Vu</li>
            <audio id="myAudio"src ="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DLq6ZeLDqyI0&ved=2ahUKEwil_ID1xLSFAxXTYPEDHUY6AS4Q78AJegQIHhAB&usg=AOvVaw0HvJ_bR3HGNFXPW9FT8GFa"></audio>
            <button onclick="playAudio()">Play</button>
            <li>Crocodile Teeth</li>
            <audio id="myAudio"src ="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.youtube.com/watch%3Fv%3DLq6ZeLDqyI0&ved=2ahUKEwil_ID1xLSFAxXTYPEDHUY6AS4Q78AJegQIHhAB&usg=AOvVaw0HvJ_bR3HGNFXPW9FT8GFa"></audio>
            <button onclick="playAudio()">Play</button>
            <h2>2. Pop</h2>
            <h3>Tate McRae</h3>
            
            <img src ="https://assets-global.website-files.com/64e632e1a07b9b35364590b5/6580844a658bed67264076b1_Tate-McRae-artist-bio.webp"alt = "artists image"
            style="width:450px; height:350px">
            
            

        </div>
    </main>
    <script src="script.js"></script>
    
</body>
</html>



