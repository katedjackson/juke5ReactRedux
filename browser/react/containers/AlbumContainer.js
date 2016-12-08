import {connect} from 'react-redux';
import store from '../store';
import Album from '../components/Album';
import {toggleSong} from '../action-creators/player';

const mapStateToProps = function (state, ownProps) {
  return {
    selectedAlbum : state.albums.selected,
    currentSong: state.player.currentSong,
    isPlaying: state.player.currentSong
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    toggle: function (song, list) {
      store.dispatch(toggleSong(song, list));
    }
  };
}

const AlbumContainer = connect(mapStateToProps, mapDispatchToProps)(Album);

export default AlbumContainer;
