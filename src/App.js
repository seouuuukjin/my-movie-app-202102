import { func } from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  getMovies = async () => {
    const {
      data: { 
        data :{movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    console.log(movies)
    //console.log(moviee.data.data.movies)
    this.setState({movies:movies, isLoading: false})
     
  }
  async componentDidMount(){

    this.getMovies(); 
    //const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  render(){
    const {isLoading, movies} = this.state;
    //이걸 선언해줘야 다른 곳에서 state접근 할때, this.state.속성  이런식으로 접근안하고 
    //바로 속성이름이로 접근 할 수 있음
    return (
    <section className= "containers">
      {isLoading ? (
        <div className= "loader">
          <span className="loader__text">Loading...</span>
        </div>
         ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
              />
            ))}
          </div>
         )}
       </section>
    );
  }
}
export default App;
//https://yts-proxy.now.sh/list_movies.json