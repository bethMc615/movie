import React from 'react';
import PropTypes from 'prop-types';
import { Card, Rate, Icon, Button} from 'antd';
import LinesEllipsis from 'react-lines-ellipsis';
import moment from 'moment';
import DefaultBackdrop from './img/default_backdrop.jpg';

const galleryMovieStyle = {
    width: '43%',
    height: 'auto',
    margin: '2%',
    minWidth: '240px',
};

class MovieCard extends React.Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };
    static defaultProps = {
        onClick: () => {},
    };
    seeSimilar = (id, title) => {
        // call to setSimilar on owner
        this.props.onClick(id, title);
    };
    formatDate = origDate => {
        // origDate format "2019-01-25" to newDate format "January 25, 2019" "MMMM D, YYYY"
        const newDate = moment(origDate, "YYYY-MM-DD").format("MMMM D, YYYY");
        return newDate;
    };
    render(){
        const { Meta } = Card;
        const { movie } = this.props;
        return (
            <Card
                className="movie"
                hoverable
                style = { galleryMovieStyle }
                cover = {
                    <img 
                        alt = { movie.title } 
                        src = {'http://image.tmdb.org/t/p/w500/'+movie.backdrop_path} 
                        onError = { (e) => {e.target.onerror = null; e.target.src = DefaultBackdrop} }
                        style = {{}}
                        />
                    }
                actions = {[
                    <Button onClick = {() => this.props.onClick(movie.id, movie.title)}>See Similar Movies</Button>
                    ]}
                >
                <div className="cardMeta">
                <Meta
                    title={movie.title}
                />
                <Rate character = {<Icon type="smile" />} allowHalf disabled defaultValue = { movie.vote_average / 2 } />
                <div className="releaseDate">Release Date: {this.formatDate(movie.release_date)}</div>
                <div className="metaDescription">
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

/* <Button onClick={() => this.fullDetails(movie.id)}>View Full Details</Button>, 
    fullDetails = id => {
        // route to full details page
        console.log(`full details ${id}`);
    };
*/