// Carries a payload of information from the app to the actual store

// Redux relies on these to get dispatched and listened to by reducers. These reducers, after getting dispatched and listened to, update the state

// Actions are signals sent to the store to change some state within. 
import { GET_ALBUMS } from "./constants"

export function getAlbums(payload) {
    return {type: GET_ALBUMS, payload}
};
