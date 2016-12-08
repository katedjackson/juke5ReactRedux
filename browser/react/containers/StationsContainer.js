import store from '../store';
import Stations from '../components/Stations';
import {connect} from 'react-redux';

const convertSongsToStations = function (songsArray) {
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });

  return stations;
};

const mapStateToProps = function (state) {
  return {
    stations: convertSongsToStations(state.songs)
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {};
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;
