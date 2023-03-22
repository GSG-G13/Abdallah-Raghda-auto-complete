const searchInput = document.getElementById('search-input');
const suggestions = document.getElementById('suggestions');
let words = [];

// Load data from JSON file
//hr
const xhr = new XMLHttpRequest();
const xhr2 = new XMLHttpRequest();

var model = 'camry';
var apiKey = 'Ax8a4LTa+oHEClExlAPgeA==p13w3co5JrIe6ky1';
var url = 'https://api.api-ninjas.com/v1/cars?model=' + model;
xhr2.open('GET', url);
xhr2.setRequestHeader('X-Api-Key', apiKey);
xhr2.onload = function() {
  if (xhr2.status === 200) {
    console.log(xhr2.responseText);
  } else {
    console.error('Error:', xhr2.status, xhr2.responseText);
  }
};
xhr2.onerror = function() {
  console.error('Request failed:', xhr2.statusText);
};
xhr2.send();

xhr.open('GET', '/countries', true);
xhr.onreadystatechange = function() {
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


//const request = require('request');


