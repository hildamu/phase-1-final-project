document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchResults = document.getElementById("searchResults");

  searchButton.addEventListener("click", function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      fetch("db.json")
          .then(response => response.json())
          .then(data => {
              const artists = data.artists;
              const filteredArtists = artists.filter(artist => artist.name.toLowerCase().includes(searchTerm));
              displaySearchResults(filteredArtists);
          })
          .catch(error => {
              console.error("Error fetching data:", error);
          });
  });

  function displaySearchResults(artists) {
      searchResults.innerHTML = "";
      if (artists.length === 0) {
          searchResults.textContent = "Artist not found.";
      } else {
          artists.forEach(artist => {
              const artistDiv = document.createElement("div");
              artistDiv.textContent = `Name: ${artist.name}, Genre: ${artist.genre}`;
              searchResults.appendChild(artistDiv);
          });
      }
  }
});
