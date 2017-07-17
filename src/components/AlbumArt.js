import React, {PropTypes} from 'react';

class AlbumArt extends React.Component {
  render() {
    return (
      <div className='album_art'>
        <img src={this.props.albumImage} alt={this.props.albumName}/>
      </div>
    );
  }
}

export default AlbumArt;
