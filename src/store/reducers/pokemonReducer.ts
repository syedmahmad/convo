import { PokemonInterFace } from '../../interfaces/pokemon';
import { AnyAction } from 'redux';

const initialState: PokemonInterFace = {
  pokemons: [],
  favorits: [],
  loading: false
};

const PokemonReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'GET_POKEMONS_SUCCESS': {
      return { ...state, pokemons: action.payload };
    }
    case 'ADD_TO_FAVORITE': {
      // should have to update same pokemon object and just insert new fovorite property...
      let index = state.pokemons.findIndex((x) => x.name == action.payload?.name);
      if (index !== -1) {
        state.pokemons[index].favorite = true;
      }

      // need to add pokemon in favorite list to get count ....
      let i = state.favorits.findIndex((x) => x.name == action.payload?.name);
      if (i === -1) {
        state.favorits.push(action.payload);
      }
      return { ...state };
    }
    case 'START_LOADING_STATE': {
      return { ...state, loading: true };
    }
    case 'STOP_LOADING_STATE': {
      return { ...state, loading: false };
    }
    default:
      return state;
  }
};

export default PokemonReducer;
