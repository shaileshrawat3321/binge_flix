import { Component } from "react";
import Navbar from "./Navbar";
import MovieList from "./MovieList";
import {movies} from "./movieData";

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: movies,
      cartCount: 0
    }
  }

  handleIncStars = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);
    if (movies[mId].stars >= 5) {
      return;
    }
    movies[mId].stars += 0.5;
    this.setState({
      movies: movies
    })
  }

  handleDecStars = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);
    if (movies[mId].stars <= 0) {
      return;
    }
    movies[mId].stars -= 0.5;
    this.setState({
      movies: movies
    })
  }

  handleFavToggle = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);
    movies[mId].fav = !movies[mId].fav;
    this.setState({
      movies: movies
    })
  }

  handleCartToggle = (movie) => {
    let { movies, cartCount } = this.state;
    const mId = movies.indexOf(movie);
    movies[mId].isInCart = !movies[mId].isInCart;
    
    if(movies[mId].isInCart) {
      cartCount += 1;
    }else{
      cartCount -= 1;
    }

    this.setState({
      movies: movies,
      cartCount: cartCount
    })
    console.log(cartCount);
  }

  render() {
    const {movies, cartCount} = this.state;
    return (
      <>
        <Navbar cartCount={cartCount}/>
        <MovieList movies = {movies}
                   addStars = {this.handleIncStars}
                   decStars = {this.handleDecStars}
                   favToggle = {this.handleFavToggle}
                   cartToggle = {this.handleCartToggle}/>
      </>
    )
  }
}

export default App;

