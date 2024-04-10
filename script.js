const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const serachResults =document.getElementById('searchResults');

searchButton.addEventListener('click',function(){
    const searchItem = searchInput.value;
    displaySearchResults(searchItem);

})
const songsDatabase = [
    { title: 'EastSyde', artist: 'Skiliibeng', audioUrl: 'https://soundcloud.com/krossfayahsound/krossfayah-presents-skillibeng-the-eastsyde-mixtape-2021?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    { title: 'Tyrant', artist: 'Masicka', audioUrl: 'https://soundcloud.com/masickamusic/tyrant-1?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    { title: 'Jigga', artist: 'Tar1q', audioUrl:'https://soundcloud.com/snowziga/tar1q-khaid-jigga?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    { title: 'Dancehall Baddest Ting', artist: 'Rygin King', audioUrl: 'https://soundcloud.com/dancehall-exclusives/rygin-king-dancehall-baddest-ting?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    { title: 'Run For The Hills', artist: 'Tate McRae', audioUrl: 'https://soundcloud.com/dj_pressplay/tate-mcrae-run-for-the-hills-dj-press-play-remix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing' },
    
  ];
  
  
  function searchSong() {
    const searchTerm = document.getElementById("song-search").value.toLowerCase();
    const results = songsDatabase.filter(song =>
      song.title.toLowerCase().includes(searchTerm) || song.artist.toLowerCase().includes(searchTerm)
    );
    displayResults(results);
  }
  
  function displayResults(results) {
    const songResultDiv = document.getElementById("song-result");
    songResultDiv.innerHTML = "";
  
    if (results.length === 0) {
      songResultDiv.innerHTML = "No results found.";
      return;
    }
  
    results.forEach(song => {
      const songElement = document.createElement("div");
      songElement.classList.add("song-info");
      songElement.innerHTML = `
        <h3>${song.title}</h3>
        <p>Artist: ${song.artist}</p>
      `;
      const audioContainer = document.createElement("div");
      audioContainer.classList.add("audio-container");
      const audioElement = document.createElement("audio");
      audioElement.controls = true;
      audioElement.innerHTML = `
        <source src="${song.audioUrl}" type="audio/mp3">
        Your browser does not support the audio element.
      `;
      audioContainer.appendChild(audioElement);
      songElement.appendChild(audioContainer);
      songResultDiv.appendChild(songElement);
    });
  }

    
      
        