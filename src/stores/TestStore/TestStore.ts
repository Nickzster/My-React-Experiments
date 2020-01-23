import { Effects, createConnectedStore } from 'undux';
import { CardData } from '../../types/Interfaces';
import { debounceTime, take } from 'rxjs/operators';
import SampleData from '../../SampleData/data.json';

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
  store
    .on('loading')
    .pipe(debounceTime(200))
    .subscribe(() => {
      console.log('Do we need more?');
      if (store.get('loading')) {
        let numberOfNewElems = 5;
        fetch(`https://randomuser.me/api/?results=${numberOfNewElems}`)
          .then(response => response.json())
          .then(users => {
            let newData: Array<CardData> = [];
            const { results } = users;
            console.log(results);
            for (var i = 0; i < results.length; i++) {
              newData.push({
                title: `${results[i].name.first}  ${results[i].name.last}`,
                description: results[i].email,
                image: results[i].picture.large
              });
            }
            console.log(newData);
            let tempData = store.get('data');
            console.log('loading new users now!');
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
