import { Component } from "react";

class Moviecard extends Component {
    
    render() {
        const {title, plot, poster, price, rating, stars, fav, isInCart} = this.props.movies;
        const {movies, addStars, decStars, favToggle, cartToggle} = this.props;
        return (
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img src={poster} alt="poster"></img>
                    </div>

                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>


                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png" 
                                alt="decrease" onClick={() => {decStars(movies)}}/>

                                <img className="stars" src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png" alt="stars"></img>

                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" 
                                alt="increase" onClick={() => {addStars(movies)}}/>

                                <span className="starCount">{stars}</span>
                            </div>

                            {fav ? <button className="unfavourite-btn" onClick={() => {favToggle(movies)}}>Un-favourite</button> : 
                            <button className="favourite-btn" onClick={() => {favToggle(movies)}}>Favourite</button>}
                                                     
                            {isInCart ? <button className="removeCart-btn" onClick={() => {cartToggle(movies)}}>Remove from cart</button> :
                            <button className="cart-btn" onClick={() => {cartToggle(movies)}}>Add to cart</button> }
                            
                            
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Moviecard;