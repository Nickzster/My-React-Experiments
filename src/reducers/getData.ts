import { FETCH_DATA } from '../types/ActionTypes';

const initalState = {
  users: null,
  loading: true,
  error: {}
};

export default (state = initalState, action: any) => {
  console.log(action);
};
