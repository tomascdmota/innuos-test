import { act } from "react-dom/test-utils";
import { ALBUMS } from "./constants";


const initialState = {
    albumData: [],
    isLoading: false,
    isError: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ALBUMS.LOAD:
            return {
                ...state,
                isLoading: true,
                isError: false,
            }

        case ALBUMS.LOAD_SUCCESS:
            return {
                ...state,
                albumData: action.albumData,
                isLoading: false
            }


        default:
            return state;
    }
};

export default reducer;