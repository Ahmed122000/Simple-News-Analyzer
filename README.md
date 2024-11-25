
# Sentiment Analysis Web App

This web application analyzes the sentiment of online articles using the MeaningCloud API. 
The app provides insights into the polarity, subjectivity, and extracts snippets from the article for each sentiment case (positive, negative, neutral).


## Udacity Course

This project is part of the **Udacity Front-End Web Developer Nanodegree**.

## Features

- Accepts URLs for online articles as input.
- Uses the MeaningCloud API for sentiment analysis.
- Displays results such as polarity, subjectivity, and article snippets.
- Developed with modern build tools like Webpack.
- Supports both development and production builds.
- CSS is minified for production to reduce the size of styling.
- All styles are written in Sass.
- Implements service workers using `WorkboxPlugin.GenerateSW`.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Scripts

- **Development Build**: Run the development version of the project.

  ```bash
  npm run build-dev
  ```

- **Production Build**: Build the project for production.

  ```bash
  npm run build-prod
  ```

- **Start Server**: Start the server.

  ```bash
  npm run start
  ```
- **Run test cases**: run unit test cases for each function. 

  ```bash
  npm run test
  ```
## Usage

1. run the client server using `npm run build-dev` | `npm run build-prod`
2. Start the server using the `npm run start` command.
3. Open your browser and navigate to `http://localhost:3000` | `http://localhost:8000`.
4. Enter the URL of an online article into the input field.
5. View the sentiment analysis results, including polarity, subjectivity, and snippets.

## Development

This project uses Webpack for building and bundling assets. 

### Key Features of the Build

- **Development**: Use `npm run build-dev` for a live development experience with source maps enabled.
- **Production**: Use `npm run build-prod` for an optimized and minified production build.
  - CSS is minified to reduce the file size.
  - Service workers are generated using `WorkboxPlugin.GenerateSW` for offline support.

### Styles

All styles in the project are written in **Sass** and compiled into CSS during the build process.

## API

This project uses the [MeaningCloud API](https://www.meaningcloud.com/) for sentiment analysis. Ensure you have a valid API key and replace the placeholder in the code with your key.

## Technologies

- **Frontend**: HTML, Sass (CSS preprocessor), JavaScript
- **Backend**: Node.js with Express.js
- **Build Tool**: Webpack
- **API**: MeaningCloud API

## Acknowledgments

- Thanks to Udacity for providing the course and [starter code](https://github.com/Mido055/evaluate-news-nlp).