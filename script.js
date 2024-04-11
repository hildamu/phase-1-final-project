document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const searchResults = document.getElementById("searchResults");

  searchButton.addEventListener("click", function () {
    const searchItem = searchInput.value.trim();
    if (!searchItem) {
      alert("Please enter an artist name.");
      return;
    }

    // Replace this URL with the actual API endpoint you want to use
    const apiLink = `https://musicbrainz.org/ws/2/artist/?query=${searchItem}&fmt=json`;

    fetch(apiLink)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to find search results");
        }
        return response.json();
      })
      .then((data) => {
        if (data.artists.length > 0) {
          const artist = data.artists[0];
          displayArtist(artist);
        } else {
          searchResults.textContent = "No results found.";
        }
      })
      .catch((error) => {
        console.error("Fetch error", error);
        searchResults.textContent = "An error occurred while searching.";
      });
  });
});

function displayArtist(artist) {
  const searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  const artistElement = document.createElement("div");
  artistElement.classList.add("artist");

  const nameElement = document.createElement("h2");
  nameElement.textContent = artist.name;

  const genreElement = document.createElement("h3");

  // Add this check to make sure the artist object has a "genre" property
  if (artist.genres && artist.genres.length > 0) {
    genreElement.textContent = artist.genres[0];
  } else {
    genreElement.textContent = "No genre information found.";
  }

  

  artistElement.appendChild(nameElement);
  artistElement.appendChild(genreElement);

  searchResults.appendChild(artistElement);
}


