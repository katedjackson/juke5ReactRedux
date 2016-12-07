import React from 'react';
import RECEIVE_STATIONS from '../constants';
import {Link} from 'react-router';

export default function (props) {

  const genres = Object.keys(props.stations);


  return (
    <div>
      <h3>Stations</h3>
      <div className="list-group">
      {
        genres.map(genre => {
          return (
            <div className="list-group-item" key={genre}>
              <Link to={`/stations/${genre}`}>{genre}</Link>
            </div>
          );
        })
      }
      </div>
    </div>
  );
}
