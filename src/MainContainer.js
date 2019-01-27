import React from 'react';
import GalleryContainer from './GalleryContainer';
import SimilarContainer from './SimilarContainer';

class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            similarID: '',
            similarTitle: '',
        };
    };    
    setSimilar = (param) => {
        this.setState({ similarID: param.id, similarTitle: param.title });
    };
    render() {
        const {similarID, similarTitle} = this.state;
        return (
            <div className="MainContainer">
                <GalleryContainer setSimilar={this.setSimilar} />
                <SimilarContainer id={similarID.toString()} title={similarTitle} />
            </div>
        );
    }
}
export default MainContainer;