import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
import LinesEllipsis from 'react-lines-ellipsis';
import moment from 'moment';
import DefaultBackdrop from './img/default_backdrop.jpg';

class MovieCard extends React.Component {
    formatDate = origDate => {
        // origDate format "2019-01-25" to newDate format "January 25, 2019" "MMMM D, YYYY"
        const newDate = moment(origDate, "YYYY-MM-DD").format("MMMM D, YYYY");
        return newDate;
    };
    
    render(){
        const { movie } = this.props;
        return (
            <Card
                className="movie-card"
                cover = {
                    <img 
                        alt = { movie.title } 
                        src = {'http://image.tmdb.org/t/p/w500/' + movie.backdrop_path} 
                        onError = { (e) => {e.target.src = DefaultBackdrop} }
                        />
                    }
                actions = {[
                    <Button onClick={()=>this.props.setSimilar(movie)}>See Similar Movies</Button>
                    ]}
                >
                <div className="card-meta">
                    <div className="meta-title">{movie.title}</div>
                    <div className="meta-rating">
                        <div className="star-holder">
                            <div className="star-fill">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 50 50">
                                    <g><polygon fill="yellow" points="25,40.9 10.2,49.1 13,31.7 1,19.4 17.6,16.9 25,1.2 32.4,16.9 49,19.4 37,31.7 39.8,49.1 	"/>
                                    <path d="M25,2.4l6.8,14.5l0.2,0.5l0.5,0.1l15.4,2.3L36.8,31.2l-0.4,0.4l0.1,0.5l2.6,16.1l-13.6-7.5L25,40.3l-0.5,0.3l-13.6,7.5
                                        l2.6-16.1l0.1-0.5l-0.4-0.4L2.1,19.8l15.4-2.3l0.5-0.1l0.2-0.5L25,2.4 M25,0l-7.7,16.5L0,19.1l12.5,12.8L9.5,50L25,41.5L40.5,50
                                        l-3-18.1L50,19.1l-17.3-2.6L25,0L25,0z"/></g>
                                </svg>
                            </div>
                        </div>
                        <div className="meta-rating-text">{ movie.vote_average.toFixed(1)}</div>
                    </div>
                    <div className="meta-date">{this.formatDate(movie.release_date)}</div>
                    <div className="meta-description">
                        <LinesEllipsis
                        text={movie.overview}
                        maxLine='3'
                        />
                    </div>
                </div> 
            </Card>
        )
    }
}
MovieCard.propTypes = {
    movie: PropTypes.object.isRequired
}
export default MovieCard;