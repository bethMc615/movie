import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, Card } from 'antd';
import DefaultPoster from './img/default_poster.jpg';

const SimilarAPI = 'https://api.themoviedb.org/3/movie/{id}/similar?page=1&language=en-US&api_key=e7e1c27cb630e7739b0288b53d67d16e';

class SimilarMovies extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        visible: false, 
        placement: 'right',
        similarMovies: [],
        isLoadingSimilar: false,
        errorSimilar: null,
        currentTitle: null,
        };
    };    
    
    //listen for change on props
    componentWillReceiveProps(nextProps) {
        this.setState({currentTitle: `Movies Similar to ${nextProps.title}`});
        let customAPI = SimilarAPI.replace('{id}',nextProps.id);
        this.setState({ isLoadingSimilar: true });
        fetch(customAPI)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Something went wrong loading similar movies ...');
            }
        })
        .then(data => this.setState({similarMovies: data.results, isLoadingSimilar: false }))
        .then(this.setState({visible: true}))
        .catch(errorSimilar => this.setState({ errorSimilar, isLoading: false }));
    };

    onClose = () => {
        this.setState({
        visible: false,
        });
    };

    render(){
        const {similarMovies, isLoadingSimilar, errorSimilar} = this.state;
        if (errorSimilar) {
            return <p>{errorSimilar.message}</p>;
        }
        if (isLoadingSimilar) {
            return <div>Loading...</div>;
        }
        return (
            <Drawer
                title={this.state.currentTitle}
                placement={this.state.placement}
                closable={true}
                onClose={this.onClose}
                visible={this.state.visible}
                width={280}
            >
                <div className="similar-movies">
                    {
                        similarMovies.length ? 
                        (
                            similarMovies.map(movie =>
                            <Card
                                hoverable
                                key={movie.id}
                                style={{ width: '100%' }}
                                cover={
                                    <img 
                                        alt={movie.title} 
                                        src={'http://image.tmdb.org/t/p/w500/'+movie.poster_path} 
                                        ref={img => this.img = img} 
                                        onError={() => this.img.src = DefaultPoster}
                                        style={{}}
                                    />
                                }
                            />)
                        ):(
                            <p>I can't find any similar titles for that movie. Please select a different movie.</p>
                        )
                    }
                </div>
            </Drawer>
        )
    }
}
SimilarMovies.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
export default SimilarMovies;