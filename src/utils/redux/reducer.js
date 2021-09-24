import { GET_ALBUMS } from "./constants";

const initialState = {
    albums: []
};

function reducer (state = initialState, action) {
    if(action.type === GET_ALBUMS){
        return Object.assign({}, state, {
            albums: state.albums.concat(action.payloadj)
        })
    }
    return state;
};


export default reducer;
