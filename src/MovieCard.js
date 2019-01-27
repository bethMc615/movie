import React from 'react';
import PropTypes from 'prop-types';
import { Card, Rate, Icon, Button} from 'antd';
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
        const { Meta } = Card;
        const { movie } = this.props;
        return (
            <Card
                className="movie"
                hoverable
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
                <div className="cardMeta">
                    <Meta title={movie.title} />
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