import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'Infinite Dreams', duration: '6:09'},
        { title: 'Aces High', duration: '4:29'},
        { title: 'Powerslave', duration: '6:48'},
        { title: 'Wasted Years', duration: '5:06'}
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});