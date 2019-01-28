import React from 'react';
import movieDB from './img/logo_movieDB.png';

class FooterContainer extends React.Component {
render() {
    return (
      <div className="footer" style={{ textAlign: 'center' }}>
        <p><img alt="Powered by The Movie DB" src={movieDB} /></p>
        <p>&copy;2019 Beth McKnight</p>
      </div>

    )
  }
}
export default FooterContainer;