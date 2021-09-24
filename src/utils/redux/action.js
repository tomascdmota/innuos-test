// Carries a payload of information from the app to the actual store

// Redux relies on these to get dispatched and listened to by reducers. These reducers, after getting dispatched and listened to, update the state

// Actions are signals sent to the store to change some state within. 
import { ALBUMS } from "./constants";
import axios from "axios";
import albumsData from "../data/albums.json"


export const requestAlbum = (data) => async (dispatch) => {
    dispatch({
        type: ALBUMS.LOAD,
    });

    try {
        const json = await axios.get(albumsData);
        console.log(json);

        dispatch({
            type: ALBUMS.LOAD_SUCCESS,
            albumData: json.data,
            isError: false
        });
    } catch (e) {
        dispatch({
            type: ALBUMS.LOAD_SUCCESS,
            albumData: [],
            isError: true
        })
    }

}
export default requestAlbum;