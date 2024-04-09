const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const serachResults =document.getElementById('searchResults');

searchButton.addEventListener('click',function(){
    const searchItem = searchInput.value;
    displaySearchResults(searchItem);

})
function displaySearchResults(searchItem){
    serachResults.innerHTML = '';
    const resultElement = document.createElement('p');
    resultElement.textContent = `Search results for:${searchItem}`;
    searchResults.appendChild(resultElement);
}