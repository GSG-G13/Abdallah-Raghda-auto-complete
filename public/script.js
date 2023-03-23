const searchInput = document.getElementById('search-input');
const suggestions = document.getElementById('suggestions');
let words = [];

// Load data from JSON file
//hr
const xhr = new XMLHttpRequest();
<<<<<<< HEAD
const container = document.querySelector('#container');
const modelInput = document.querySelector('#search-input');


suggestions.addEventListener('click', function() {
  const xhr3 = new XMLHttpRequest();

  const url = `https://api.unsplash.com/search/photos?query=${searchInput.value}&client_id=MGOmGN5eZ9eQ5rlhqYHKVKFMBA2RCC5KeEuxe88Mo00`;
console.log(searchInput.value);
  xhr3.open("GET", url);
  xhr3.onload = function () {
    console.log("jgjhgh")
    if (xhr3.status === 200) {
      const response = JSON.parse(xhr3.responseText);
      const results = response.results;
      
      const container = document.getElementById("container");
      container.innerHTML = ''; // clear previous results
      results.forEach((result) => {
        const imgLink = document.createElement('a');
        imgLink.href = result.urls.full;
        imgLink.target = '_blank';

        const img = document.createElement('img');
        img.src = result.urls.small;
        img.alt = result.alt_description;
        img.title = result.description;

        imgLink.appendChild(img);
        container.appendChild(imgLink);
      });
    } else {
      console.log("Request failed. Status: " + xhr3.status);
    }
  };
  xhr3.send();
=======
const xhr2 = new XMLHttpRequest();
const container = document.querySelector('#container');
const modelInput = document.querySelector('#search-input');

modelInput.addEventListener('input', () => {
  const model = modelInput.value;
  const apiKey = 'Ax8a4LTa+oHEClExlAPgeA==p13w3co5JrIe6ky1';
  const url = 'https://api.api-ninjas.com/v1/cars?model=' + model;
  xhr2.open('GET', url);
  xhr2.setRequestHeader('X-Api-Key', apiKey);
  xhr2.onload = function() {
    if (xhr2.status === 200) {
      const cars = JSON.parse(xhr2.responseText);

      // Clear existing car elements
      container.innerHTML = '';

      cars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car');

        const makeModelDiv = document.createElement('div');
        makeModelDiv.textContent = `${car.make} ${car.model}`;
        carDiv.appendChild(makeModelDiv);

        const yearDiv = document.createElement('div');
        yearDiv.textContent = `Year: ${car.year}`;
        carDiv.appendChild(yearDiv);

        const mpgDiv = document.createElement('div');
        mpgDiv.textContent =` MPG: ${car.city_mpg} (city) / ${car.highway_mpg} (highway) / ${car.combination_mpg} (combined)`;
        carDiv.appendChild(mpgDiv);

        const cylindersDiv = document.createElement('div');
        cylindersDiv.textContent = `Cylinders: ${car.cylinders}`;
        carDiv.appendChild(cylindersDiv);

        container.appendChild(carDiv);
      });
    } else {
      console.error('Error:', xhr2.status, xhr2.responseText);
    }
  };
  xhr2.onerror = function() {
    console.error('Request failed:', xhr2.statusText);
  };
  xhr2.send();
>>>>>>> main
});


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
      model=words;
      suggestions.innerHTML = '';
    });
  }
}

