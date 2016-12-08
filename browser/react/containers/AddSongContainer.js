import {connect} from 'react-redux';
import React, {Component} from 'react';
import AddSong from '../components/AddSong';
import store from '../store';
import {loadAllSongs, addSongToPlaylist} from '../action-creators/playlists';

class AddSongClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = Object.assign({
      songId: 1,
      error: false
    }, store.getState());
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      songId: evt.target.value,
      error: false
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    const playlistId = this.state.playlists.selected.id;
    const songId = this.state.songId;

    store.dispatch(addSongToPlaylist(playlistId, songId))
      .catch(() => this.setState({ error: true }));

  }

  render() {
    const songs = this.state.songs;
    const error = this.state.error;

    return (
      <AddSong
        {...this.props}
        songs={songs}
        error={error}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
    );
  }
}

const mapStateToProps = function (state, ownProps) {
  return {

  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {

  };
}

const AddSongContainer = connect(mapStateToProps, mapDispatchToProps)(AddSongClass);

export default AddSongContainer;
