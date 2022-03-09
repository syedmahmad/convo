import { AnyAction, Dispatch } from 'redux';
import { getPokemons } from '../../api/pokemon';

export const GetPokemonSuccess = (data: any) => {
  return {
    type: 'GET_POKEMONS_SUCCESS',
    payload: data,
  };
};

export const AddToFavorite = (data: any) => {
  return {
    type: 'ADD_TO_FAVORITE',
    payload: data,
  };
};

export function StartLoading() {
  return {
    type: 'START_LOADING_STATE',
  };
}

export function StopLoading() {
  return {
    type: 'STOP_LOADING_STATE',
  };
}

export const GetPokemons = () => async (dispatch: Dispatch<AnyAction>) => {
  dispatch(StartLoading());
  const response = await getPokemons();
  if (Object.keys(response).length && response?.status == 200 && response?.data) {
    dispatch(GetPokemonSuccess(response?.data?.results));
  }
  dispatch(StopLoading());
};

export const AddToFavoriteList = (item: any) => async (dispatch: Dispatch<AnyAction>) => {
  if (Object.keys(item)) {
    dispatch(AddToFavorite(item));
  }
};
