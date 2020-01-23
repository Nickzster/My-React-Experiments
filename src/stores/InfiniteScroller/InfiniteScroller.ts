import { Effects, createConnectedStore } from 'undux';
import { CardData } from '../../types/Interfaces';
import { getUsers } from '../../fetchers/GetSomeData/GetSomeData';
import { Users } from '../../types/Users';

// Declare your store's types.
interface State {
  loading: boolean;
  data: Array<CardData>;
}

// Declare your store's initial state.
const initialState: State = {
  loading: false,
  data: []
};

let effects: StoreEffects = store => {
  store.on('loading').subscribe(() => {
    if (store.get('loading')) {
      getUsers(10, (results: Array<Users>) => {
        let newData: Array<CardData> = [];
        for (var i = 0; i < results.length; i++) {
          newData.push({
            title: `${results[i].name.first}  ${results[i].name.last}`,
            description: results[i].email,
            image: results[i].picture.large
          });
        }
        let tempData = store.get('data');
        store.set('data')(tempData.concat(newData));
      });
      store.set('loading')(false);
    }
  });
  return store;
};

// Create & export a store with an initial value.
export default createConnectedStore(initialState, effects);

// Export a concrete type for effects.
export type StoreEffects = Effects<State>;
