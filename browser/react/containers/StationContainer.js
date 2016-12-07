import React, {Component} from 'react';
import store from '../store';
import Station from '../components/Station';
import {connect} from 'react-redux'

const findSongsForStation = function(genreName) {

	var songsArray = [];
	for (var genre in stations) {
		if (stations[genre] === genreName) songsArray = stations[genre]
	}
	return songsArray;
}	

const mapStateToProps = function(state, ownProps){
	return {
		genreName : ownProps.params.genreName
	}
}

const StationContainer = connect(mapStateToProps, mapDispatchToProps)(Station);

export default StationContainer;