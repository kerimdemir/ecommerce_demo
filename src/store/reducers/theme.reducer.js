import * as keys from '../keys/theme.key';

const initialState = {Colors: []};
export default (state = initialState, action) => {
    switch (action.type) {
        case keys.SET_THEME:
            return {
                ...state,
                Colors: action.payload,
            };

        case keys.DARK_THEME:
            return {
                ...state,
                Colors: action.payload,
            };
        case keys.LIGHT_THEME:
            return {
                ...state,
                Colors: action.payload,
            };


        default:
            return state;

    }
};
