import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';

const RootReducer = combineReducers({
  pokemonReducer,
});

export default RootReducer;
