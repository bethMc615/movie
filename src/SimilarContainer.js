import React from 'react';
import { Drawer, Card } from 'antd';
import DefaultPoster from './img/default_poster.jpg';
import loading from './img/loading.gif';

class SimilarView extends React.Component {
    renderLoading() {
        return (
            <div className="loading">
                <img alt="loading..." src={loading} />
                <p>Loading...</p>
            </div>
        )
    }
    renderError() {
        return <div>I'm sorry! Please try again.</div>
    }
    renderSimilar() {
        const props = this.props;
        return (
            <div className="similar-movies">
            {
                props.similarMovies.length ? 
                (
                    props.similarMovies.map(movie =>
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
        )
    }
    render() {
        if(this.props.loading) {
            return this.renderLoading();
        } else if (this.props.similarMovies){
            return this.renderSimilar();
        } else {
            return this.renderError();
        }
    }
}

class SimilarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            visible: false,
            placement: 'right',
            currentTitle: null,
            similarMovies: [],
            error: null
        }
    };

    componentWillReceiveProps(nextProps) {
        this.setState({currentTitle: `Movies Similar to ${nextProps.similarMovie.title}`, loading:true });
        fetch(`https://api.themoviedb.org/3/movie/${nextProps.similarMovie.id}/similar?page=1&language=en-US&api_key=e7e1c27cb630e7739b0288b53d67d16e`)
        .then(res => res.json())
        .then(data =>
            this.setState({
                error: false,
                similarMovies: data.results,
                loading: false
            })
        )
        .catch(error => this.setState({ error, loading: false }))
        .finally(this.setState({visible: true}));
    };

    onClose = () => {
        this.setState({ visible: false });
    };

    render() {
        return (
            <div className="similarContainer">
                <Drawer
                title={this.state.currentTitle}
                placement={this.state.placement}
                closable={true}
                onClose={this.onClose}
                visible={this.state.visible}
                width={280}
                >
                    <SimilarView similarMovies={this.state.similarMovies}  />
                </Drawer>
            </div>
        );
    }

    
};

export default SimilarContainer;