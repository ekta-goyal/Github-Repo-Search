# GitHub Repo Search

A React application to search and display public GitHub repositories using the GitHub Search API. This app allows users to search for repositories and sort the results based on various criteria.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [API Reference](#api-reference)

## Features

- Search for public GitHub repositories using a search field.
- Display repository information in cards, including:
  - Avatar
  - Repo name
  - Stars
  - Description
  - Language
- Sort repositories by:
  - Stars
  - Watchers count
  - Score
  - Name
  - Created date
  - Updated date

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/ekta-goyal/github-repo-search.git
   cd github-repo-search

2. Install the dependencies: 

    npm install

3. Start the development server:

    npm start

Open your browser and go to http://localhost:3000 to see the app in action.

## Usage

1. Enter a search query in the search field and click the "Search" button.
2. Use the dropdown menu to sort the results based on your preferred criteria.
3. Browse through the displayed repository cards.

## Technologies

1. ReactJS
2. Axios
3. GitHub Search API
4. CSS

## API Reference

This application uses the GitHub Search API to fetch repository data.

Example API endpoint: 
https://api.github.com/search/repositories?q={query}&sort={sort}
