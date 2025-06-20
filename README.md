# 🌍 Travel Recommendation Website

A responsive, front-end travel recommendation website built with HTML, CSS, and JavaScript. The site allows users to explore beautiful destinations across the globe and get personalized suggestions based on keywords like **beach**, **temple**, or **country**.

**🔗 Live Demo:** [https://gusvik2025.github.io/travelRecommendation/](https://gusvik2025.github.io/travelRecommendation/)

---

## ✨ Features

- ✅ Clean navigation bar with Home, About Us, and Contact Us links
- 🔍 Search functionality with keyword matching (`beach`, `temple`, `country`)
- 🖼️ Dynamic results rendered from a JSON file with images, titles, and descriptions
- 🧹 Clear button to reset the search input and results
- 💬 Contact form with name, email, and message fields
- 👥 About Us page with team photos and roles
- 🌐 Social media sidebar with hover effects

---

## 🗂️ Project Structure
ravelRecommendation/
│
├── index.html                # Homepage
├── about.html                # About Us page
├── contact.html              # Contact Us page
├── travel_recommendation.js  # Main JavaScript logic
├── travel_recommendation_api.json # Data source (countries, temples, beaches)
├── logo.png
├── background.jpg
├── about_background.jpg
├── [destination images].jpg  # Dynamic search result images
├── [team member images].jpg
├── facebook.png / twitter.png / instagram.png
└── README.md
---

## 🔧 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (DOM manipulation + `fetch()` API)
- Git & GitHub Pages

---

## 🚀 Getting Started

To run the project locally:

1. Clone this repo:
   ```bash
   git clone https://github.com/gusvik2025/travelRecommendation.git
   2.	Open index.html in your browser (or use Live Server in VSCode).
	3.	Try typing beach, temple, or a city/country into the search bar and click Search.

📥 How It Works
	•	Keyword Search: Typed input is converted to lowercase and matched against categories in travel_recommendation_api.json.
	•	Results: At least two cards with an image, name, and description are shown for each matched category.
	•	Clear Button: Empties the input and removes the search results from the page.

🧑‍💻 Author

Built by @gusvik2025 as part of the IBM Front-End Development Capstone.

📄 License

This project is open source and free to use for educational purposes.
