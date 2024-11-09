import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmIxYjQ0NjNkZWM4YzA3NjJiZjc3MTBhY2QwN2MyZCIsIm5iZiI6MTczMDkxNTc2OS45MjcyOTEsInN1YiI6IjY3MmJhYjRmZGU1NDY1ODVkMDRkYTJiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b__53TklruP2h7XTvR-Z2P5pN2rXO8Og5Mej3meQan0",
  },
});

export default instance;
