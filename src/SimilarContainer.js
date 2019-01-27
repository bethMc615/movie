import React from 'react';
import { Drawer, Card } from 'antd';
import DefaultPoster from './img/default_poster.jpg';

class SimilarView extends React.Component {
    renderLoading() {
        return <div>Loading...</div>;
    }
    renderError() {
        return <div>I'm sorry! Please try again.</div>
    }
    onClose = () => {
        this.props.onClose();
    }
    renderSimilar() {
        const props = this.props;
        return (
            <Drawer
            title={props.currentTitle}
            placement={props.placement}
            closable={true}
            onClose={this.onClose}
            visible={props.visible}
            width={280}
            >
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
            </Drawer>
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
        this.setState({currentTitle: `Movies Similar to ${nextProps.title}`});
        fetch(`https://api.themoviedb.org/3/movie/${nextProps.id}/similar?page=1&language=en-US&api_key=e7e1c27cb630e7739b0288b53d67d16e`)
        .then(res => res.json())
        .then(data =>
            this.setState({
                error: false,
                similarMovies: data.results,
                loading: false
            })
        )
        .then(this.setState({visible: true}))
        .catch(error => this.setState({ error, loading: false }));
    };

    onClose = () => {
        this.setState({ visible: false });
    };

    render() {
        return (
            <div className="galleryContainer">
                <SimilarView {...this.state} onClose={this.onClose}  />
            </div>
        );
    }

    
};

export default SimilarContainer;