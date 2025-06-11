import React from "react";
import api from "../../services/api";

function Home() {

  async function getMovies() {
    const data = await api.get('/movie/popular');
    console.log(data);
  }

  getMovies()

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
    </div>
  );
}

export default Home;