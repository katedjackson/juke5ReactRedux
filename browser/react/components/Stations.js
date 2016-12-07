import React from 'react';
import RECEIVE_STATIONS from '../constants';
import {Link} from 'react-router';

export default function (props) {

  const getGenres = () => {
    const genres = Object.keys(props.stations);
    return genres;
  }

  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        getGenres().map(station => {
          return (
            <div className="list-group-item" key={station}>
              <Link to={'fill/me/in/later'}>{station}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}
