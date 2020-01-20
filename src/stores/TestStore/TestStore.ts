import { Effects, createConnectedStore } from 'undux';
import { CardData } from '../../types/Interfaces';
import { debounceTime } from 'rxjs/operators';

// Declare your store's types.
interface State {
  loading: boolean;
  data: Array<CardData>;
  needMore: boolean;
}

// Declare your store's initial state.
const initialState: State = {
  loading: true,
  data: [],
  needMore: true
};

let effects: StoreEffects = store => {
  store
    .on('data')
    .pipe(debounceTime(1000))
    .subscribe(() => store.set('loading')(false));
  return store;
};

// Create & export a store with an initial value.
export default createConnectedStore(initialState, effects);

// Export a concrete type for effects.
export type StoreEffects = Effects<State>;
