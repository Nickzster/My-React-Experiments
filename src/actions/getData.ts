import { FETCH_DATA } from '../types/ActionTypes';

export const getSomeData = () => (dispatch: Function) => {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(users => dispatch({ type: FETCH_DATA, payload: users }));
};
