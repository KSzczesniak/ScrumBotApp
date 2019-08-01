import * as actionTypes from './actionTypes'
import axios from 'axios'

export const personsLoaded = persons => {
    return {
        type: actionTypes.PERSONS_LOADED,
        persons: persons
    }
}

export const fetchPersons = () => {
    return dispatch => {
        axios.get('https://scrumbot-c59e1.firebaseio.com/persons.json')
            .then(response => {
                const personsWithIds = Object.entries(response.data).map(([key, value]) => {
                    return {
                        ...value,
                        id: key
                    };
                });
                dispatch(personsLoaded(personsWithIds));
            })
    }
}
