import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

export const calcualtePlayerPos = (players) => {
    let rank = 1;

    return players.map((player, index) => {
        if (index !== 0 && players[index - 1].score > player.score) {
            rank++;
        }

        return {
            ...player,
            rank,
            pos: numeral(rank).format('0o')
        };
    });
};