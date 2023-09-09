import { SELECT_EVENT } from "./eventsActionTypes";
import EVENTS from "../../data/events";

export const initialState = {
    events: EVENTS,
    selected: null
};

export const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_EVENT:
            return {
                ...state,
                selected: action.event
            };

        default:
            return state;
    }
};
