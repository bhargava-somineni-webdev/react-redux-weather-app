import { FETCH_WEATHER } from '../actions/index';
//below we decided to have array as our data structure for this reducer
//this is because we are displaying a list of cities and array need to be used for lists
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            //every new city user searches need to be returned along with the previously searched cities
            //this is the reason we are concatenating new city data(in action.payload.data) with the state
            //state holds previously searched cities    
            // return state.concat([action.payload.data]);
            return [action.payload.data, ...state]; //ES6 syntax of concat
    }
    return state;
}