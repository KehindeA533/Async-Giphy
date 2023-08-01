require("dotenv").config();
const fs = require("fs");
const API_KEY = process.env.API_KEY;
let randomImage = [];

async function getIamge(query, limit) {
  //   const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`;
  for (let i = 0; i < limit - 1; i++) {
    const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
    const response = await fetch(endpoint);
    const data = await response.json();
    randomImage.push(data.data.url);
  }
  console.log(randomImage);
}

getIamge("cat", 25);
