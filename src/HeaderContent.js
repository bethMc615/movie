import React from 'react';
import logo from './img/logo_small.png';


class HeaderContent extends React.Component {
render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="movie camera" />
        </div>
        <h1>Movies</h1>
      </div>
    )
  }
}
export default HeaderContent;