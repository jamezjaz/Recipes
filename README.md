<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jamezjaz/Recipes">
    <img src="./src/assets/recipeImg.jpg" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">Catalogue Of Recipes</h3>

  <p align="center">
    This is a catalogue of recipes. It's a Single Page Application (SPA) that shows list of food items that can be filtered based on food type. It also shows the details of individual food items.
    <br />
    <a href="https://github.com/jamezjaz/Recipes"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/jamezjaz/Recipes/issues">Report Bug</a>
    ·
    <a href="https://github.com/jamezjaz/Recipes/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
## Table Of Contents

* [About The Project](#about-the-project)
* [Preview](#preview)
* [Live Demo](#live-demo)
* [Video Presentation](#video-presentation)
* [Built With](#built-with)
* [Getting Started](#getting-started)
* [Author](#author)
* [Acknowledgements](#acknowledgements)
* [License](#license)

<!-- ABOUT THE PROJECT -->
## About The Project

This is a catalogue of recipes. It's a single page application that shows list of food items that can be filtered based on food type. It also shows the details of individual food items.
It's built with React and Redux.
It's also built with an API (Application Programming Interface). The data on the API are obtained, stored on Redux store, and then displayed on the browser through async fetch request.
It's a SPA application (with both main, show, and About Us pages). These pages are implemented using React's Router feature.
All the data from the API are displayed on the index page. The API employed here is [themealdb API](https://www.themealdb.com/api.php).
The details of individual food items are displayed on the show page, and the About Us page tells more about the Catalogue Of Recipes.
The application throws an error when a user inputs the wrong url on the browser.

## Preview
![Recipes](https://user-images.githubusercontent.com/57812000/109842050-493cb100-7c0f-11eb-9a93-21ee2511e433.png)

## Live Demo
It's deployed [HERE](https://jaz-recipe.herokuapp.com/) on heroku

## Video Presentation
[![Presentation](https://user-images.githubusercontent.com/57812000/109846436-cf5af680-7c13-11eb-988a-e7dba7b9f511.png)](https://www.youtube.com/watch?v=gnNMmkN40yw&feature=youtu.be)

### Built With
This project was built using these technologies.
* Create-React-App
* React
* Redux
* JavaScript
* [themealdb API](https://www.themealdb.com/api.php)
* Axios
* React-DOM
* Bootstrap
* PropTypes
* Redux-thunk
* ES6
* Jest
* Enzyme
* CSS modules
* React Testing Library
* GitHub Action :muscle:
* Eslint
* Stylelint
* VScode


### Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

 * [Node.js](https://nodejs.org/) is required to install dependencies and run scripts via npm.
 * A modern browser

### Clone
* Clone this repo:
  - Clone with SSH:
  ```
    git@github.com:jamezjaz/Recipes.git
  ```
  - Clone with HTTPS
  ```
    https://github.com/jamezjaz/Recipes.git
  ```
  - Clone with GitHub CLI
  ```
    gh repo clone jamezjaz/Recipes
    
 - cd to Recipes

### Setup
To install dependencies:

Run ```$ npm install```

To start the local webserver and have the application run live on http://localhost:3000/:

Run ```$ npm start```

To run tests:

Run ```$ npm run test``` or simply ```$ npm test```


<!-- CONTACT -->
## Author

## 👤 Odufu James Chigozie

 [![Website](https://img.shields.io/badge/-Website-black?style=for-the-badge&logo=Julia&logoColor=white)](http://jamezjaz.com/)
 [![LINKEDIN](https://img.shields.io/badge/-LINKEDIN-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/jamesgozieodufu/)
 [![EMAIL](https://img.shields.io/badge/-EMAIL-D14836?style=for-the-badge&logo=Mail.Ru&logoColor=white)](mailto:jamezjaz@gmail.com)
 [![TWITTER](https://img.shields.io/badge/-TWITTER-1DA1F2?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/jamezjaz90)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/jamezjaz/Recipes/issues).

## Show your support

Give a :star: if you like this project!


<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Microverse](https://www.microverse.org/) - Microverse website

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/jamezjaz/Platform_Game.svg?style=flat-square
[contributors-url]: https://github.com/jamezjaz/Platform_Game/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/jamezjaz/Platform_Game.svg?style=flat-square
[forks-url]: https://github.com/jamezjaz/Platform_Game/network/members
[stars-shield]: https://img.shields.io/github/stars/jamezjaz/Platform_Game.svg?style=flat-square
[stars-url]: https://github.com/jamezjaz/Platform_Game/stargazers
[issues-shield]: https://img.shields.io/github/issues/jamezjaz/Platform_Game.svg?style=flat-square
[issues-url]: https://github.com/jamezjaz/Platform_Game/issues

## 📝 License

This project is [MIT](https://opensource.org/licenses/MIT) licensed.