import React from 'react';
import { Select } from 'antd';
import MovieCard from './MovieCard';

const Option = Select.Option;

class GalleryView extends React.Component {
    renderLoading() {
        return <div>Loading...</div>;
    }
    renderError() {
        return <div>I'm sorry! Please try again.</div>;
    }
    renderGallery() {
        const movies = this.props.movies.results;
        return (
            <div className="movies">
                {movies.filter(
                    movie => Number(this.props.genreFilter) === 0 || 
                    movie.genre_ids.includes(Number(this.props.genreFilter)))
                    .map(movie =>
                        <MovieCard 
                        movie={movie}
                        key={movie.id}
                        setSimilar={this.props.setSimilar}
                        />
                    )
                }
            </div>
        )
    }
    render() {
        if (this.props.loading) {
            return this.renderLoading();
        } else if (this.props.movies) {
            return this.renderGallery();
        } else {
            return this.renderError();
        }
    }
}

class FilterGenre extends React.Component{
    onGenreChange = (value) => {
        this.props.onGenreChange(value);
    }
    render() {
        return (
            <Select 
            defaultValue="0" 
            id="genre" 
            style={{ width: 120 }}
            onChange={this.onGenreChange}
            >
                <Option value="0">All Genres</Option>
                <Option value="28">Action</Option>
                <Option value="18">Drama</Option>
                <Option value="35">Comedy</Option>
                <Option value="10749">Romance</Option>
                <Option value="14">Fantasy</Option>
            </Select>
        )
    }
}
      

class GalleryContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            genreFilter: '',
        };
    };    

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=US&api_key=e7e1c27cb630e7739b0288b53d67d16e")
        .then(res => res.json())
        .then(
            movies => this.setState({ loading: false, movies }),
            error => this.setState({ loading: false, error })
        );
    };

    onGenreChange = (param) => {
        this.setState({ genreFilter: param });
    };

    render() {
        return (
            <div className="galleryContainer">
                <FilterGenre onGenreChange={this.onGenreChange} />
                <GalleryView {...this.state} setSimilar={this.props.setSimilar} />
            </div>
        );
    }
}

export default GalleryContainer;