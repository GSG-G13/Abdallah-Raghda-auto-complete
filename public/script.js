const searchInput = document.getElementById('search-input');
const suggestions = document.getElementById('suggestions');
console.log("sada");
let words = [];

// Load data from JSON file
//hr
const xhr = new XMLHttpRequest();
xhr.open('GET', '/src/countries.json', true);
xhr.onreadystatechange = function() {
    console.log("reday")
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      words = data;
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function() {
  console.error(xhr.statusText);
};
xhr.send();

// Listen for input events on search input
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filteredWords = words.filter(word => word.toLowerCase().startsWith(query));
  renderSuggestions(filteredWords);
});

// Render filtered suggestions
function renderSuggestions(filteredWords) {
  suggestions.innerHTML = '';

  for (const word of filteredWords) {
    const li = document.createElement('li');
    const hr = document.createElement('hr');
    li.classList.add('suggestion');
    li.textContent = word;
    suggestions.appendChild(li);
    li.appendChild(hr);

    li.addEventListener('click', () => {
      searchInput.value = word;
      suggestions.innerHTML = '';
    });
  }
}
