import { useContext } from 'react';
import { Events } from '../store/events/EventsProvider';

export const useEvents = () => useContext(Events);