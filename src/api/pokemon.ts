import ServiceCalls from '../services/serviceCalls';

export const getPokemons = async () => {
  try {
    let result = await ServiceCalls.get(`/pokemon?limit=5`, null, true);
    return result;
  } catch (err) {
    return {};
  }
};
