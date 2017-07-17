import React, {PropTypes} from 'react';

class NowPlaying extends React.Component {
  render() {
    return (
      <div className="now_playing">
        <div className="header">
          {this.props.currentSpeaker}
        </div>
        <div className="song-cont">
          <h3 className='song-title'>
            {this.props.songTitle}
          </h3>
        </div>
      </div>
    );
  }
}

export default NowPlaying;
