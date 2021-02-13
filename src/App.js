import { func } from "prop-types";
import React from "react"
import axios from "axios"

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
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading" : "we are ready"}</div>;
  }
}
export default App;
//https://yts-proxy.now.sh/list_movies.json