fetch('travel_recommendation_api.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch JSON');
    }
    return response.json();
  })
  .then(data => {
    console.log('Full JSON:', data);
    console.log('Countries:', data.countries);
    console.log('Temples:', data.temples);
    console.log('Beaches:', data.beaches);
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });
  function handleSearch() {
  const keyword = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultsContainer = document.getElementById("results");

  // Clear previous results if the container exists
  if (resultsContainer) {
    resultsContainer.innerHTML = "";
  }

  fetch("travel_recommendation_api.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch JSON");
      }
      return response.json();
    })
    .then(data => {
      let matches = [];

      if (keyword.includes("beach")) {
        matches = data.beaches;
      } else if (keyword.includes("temple")) {
        matches = data.temples;
      } else if (keyword.includes("country") || keyword.includes("city")) {
        data.countries.forEach(country => {
          country.cities.forEach(city => matches.push(city));
        });
      } else {
        // fallback: try to match by partial city name
        data.countries.forEach(country => {
          country.cities.forEach(city => {
            if (city.name.toLowerCase().includes(keyword)) {
              matches.push(city);
            }
          });
        });
      }

      if (matches.length === 0) {
        if (resultsContainer) {
          resultsContainer.innerHTML = "<p>No results found.</p>";
        } else {
          alert("No results found.");
        }
        return;
      }

      if (resultsContainer) {
        displayResults(matches, resultsContainer);
      } else {
        console.log("Results found (not displayed on this page):", matches);
      }
    })
    .catch(error => {
      console.error("Error loading JSON:", error);
    });
}
function displayResults(items, container) {
  container.innerHTML = ""; // Clear previous

  const grid = document.createElement("div");
  grid.className = "card-grid";

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "result-card";

    card.innerHTML = `
      <img src="${item.imageUrl}" alt="${item.name}">
      <div class="card-text">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <button class="visit-button">Visit</button>
      </div>
    `;

    grid.appendChild(card);
  });

  container.appendChild(grid);
}
function clearResults() {
  // Clear input box
  document.getElementById("searchInput").value = "";

  // Clear result cards (only if results container exists on the page)
  const resultsContainer = document.getElementById("results");
  if (resultsContainer) {
    resultsContainer.innerHTML = "";
  }
}