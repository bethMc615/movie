import React from 'react';
import MovieCard from './MovieCard';
import SimilarMovies from './SimilarMovies';

const API = 'https://api.themoviedb.org/3/movie/now_playing?api_key=e7e1c27cb630e7739b0288b53d67d16e&language=en-US&page=1&region=US';

// const key = 'e7e1c27cb630e7739b0288b53d67d16e';
const movieGalleryStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    margin: '0 auto',
    justifyContent: 'center',
}

class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        movies: [],
        isLoading: false,
        error: null,
        similarID: '',
        similarTitle: '',
        };
    };    

    /* TODO: abstract out the api fetcher into helper */
    componentDidMount() {
        this.setState({ isLoading: true });
        fetch(API)
        .then(response => {
            if (response.ok) {
            return response.json();
            } else {
            throw new Error('Something went wrong ...');
            }
        })
        .then(data => this.setState({movies: data.results, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    };

    setSimilar = (id, title) => {
        this.setState({ similarID: id, similarTitle: title});
    };

render() {
    const {movies, isLoading, error, similarID, similarTitle} = this.state;
    
    if (error) {
      return <p>{error.message}</p>;
    }
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return (
        <div className="mainContent" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <div className="movies" style={ movieGalleryStyle }>
                {movies.map(movie =>
                    <MovieCard 
                    movie={movie}
                    key={movie.id}
                    onClick={this.setSimilar}
                    />
                )}
            </div>
            <SimilarMovies id={similarID.toString()} title={similarTitle} />
        </div>
    )
  }
}
export default MainContent;