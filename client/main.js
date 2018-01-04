import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players, calculatePlayerPos, calcualtePlayerPos } from './../imports/api/players';
import App from './../imports/ui/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {sort:{score: -1}}).fetch();
        let posPlayers = calcualtePlayerPos(players);
        let title = 'Score Keep';
        ReactDOM.render(<App title={title} players={posPlayers}/>, document.getElementById('app'));
    });

});