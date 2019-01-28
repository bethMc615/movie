import React from 'react';
import GalleryContainer from './GalleryContainer';
import SimilarContainer from './SimilarContainer';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            similarMovie: null,
        };
    };    
    setSimilar = (param) => {
        this.setState({ similarMovie: param });
    };
    render() {
        return (
            <div className="MainContainer">
                <GalleryContainer setSimilar={this.setSimilar} />
                <SimilarContainer similarMovie={this.state.similarMovie} />
            </div>
        );
    }
}
export default MainContainer;