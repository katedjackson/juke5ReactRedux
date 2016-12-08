import store from '../store';
import Stations from '../components/Stations';
import {connect} from 'react-redux';

const convertSongsToGenres = function (songsArray) {
  const stations = {};
  songsArray.forEach(song => {
    const genre = song.genre;
    stations[genre] = stations[genre] || [];
    stations[genre].push(song);
  });
  return stations;

  //This would be a great time to use REDUCE!
  // return songsArray.reduce((stationsObj, song) => {
    // const g = song.genre;
    // if (!stations[g]) stations[g] = [g];
    // stations[g].pudh(song);
    // return stations;
  // }, {});
};

const mapStateToProps = function (state) {
  return {
    stations: convertSongsToGenres(state.songs)
  };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {};
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations);

export default StationsContainer;
