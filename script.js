const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const serachResults =document.getElementById('searchResults');

searchButton.addEventListener('click',function(){
    const searchItem = searchInput.value;
    displaySearchResults(searchItem);

})
document.addEventListener("DOMContentLoaded", function() {
    const artists = document.querySelectorAll(".artist");
  
    artists.forEach(artist => {
      artist.addEventListener("click", function() {
        const artistName = this.querySelector("h3").innerText;
        const songsList = this.querySelectorAll("li");
        let songs = "";
        songsList.forEach(song => {
          songs += `${song.innerText}<br>`;
        });
        document.getElementById("song-details").innerHTML = `
          <h3>${artistName}</h3>
          <li>${songs}</li>
        `;
      });
  
      artist.addEventListener("mouseover", function() {
        this.style.backgroundColor = "black";
      });
  
      artist.addEventListener("mouseout", function() {
        this.style.backgroundColor = "black" ;
      });
    });
  });

    
      
        