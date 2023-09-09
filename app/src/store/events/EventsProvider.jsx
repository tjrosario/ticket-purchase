import { createContext, useReducer } from 'react';
import { SELECT_EVENT } from './eventsActionTypes';
import { eventsReducer, initialState } from './eventsReducer';

export const Events = createContext();
Events.displayName = 'Events';

export const EventsProvider = ({ children }) => {
    const [eventsState, dispatch] = useReducer(eventsReducer, initialState);

    const eventsActions = {
        selectEvent: (event) => {
            dispatch({
                type: SELECT_EVENT,
                event,
            });
        },
    };

    const value = {
        eventsActions,
        eventsState,
    };

    return <Events.Provider value={value}>{children}</Events.Provider>;
};
