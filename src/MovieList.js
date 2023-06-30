import { Component } from "react";
import Moviecard from "./Moviecard";

class MovieList extends Component {
    
    render() {
        // const { title, plot, poster, price, rating, stars, fav, isInCart } = this.state.movies;
        const {movies, addStars, decStars, favToggle, cartToggle} = this.props;
        return (
            <>
                {movies.map((movie) => <Moviecard movies={movie} 
                                                  addStars = {addStars}
                                                  decStars = {decStars}
                                                  favToggle = {favToggle}
                                                  cartToggle = {cartToggle}
                                                  key = {movie.id}/> )}
                
            </>
        )
    }
}

export default MovieList;
