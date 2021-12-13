import {ADD_TO_CART, REMOVE_TO_CART} from '../Constants';

const initialState = {
    cardData:[]
}
export default function cardItems(state=[], action)
{
    // eslint-disable-next-line default-case
    switch(action.type){
        case ADD_TO_CART :
            //console.log("Reducer : ",action);
            return[
                ...state, 
                {card:action.data}
            ]
            break;

        case REMOVE_TO_CART :
            //console.log("Reducer : ",action);
            state.pop();
            return[
                ...state,
            ]
            break;

        default:
        return state
    }
}