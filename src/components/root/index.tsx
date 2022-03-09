import react, { Fragment, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import styles from '../../../styles/Home.module.css';
import { GetPokemons, AddToFavoriteList } from '../../../src/store/actions/pokemonAction';
import { setDefaultResultOrder } from 'dns';

function RootComponent(params:any) {
  const dispatch = useDispatch();

  const { processing, pokemons, favorits } = useSelector((state) => ({
    processing: state.pokemonReducer.loading,
    pokemons: state.pokemonReducer.pokemons,
    favorits: state.pokemonReducer.favorits,
  }));

  useEffect(() => {
    dispatch(GetPokemons());
  }, [])

  // add to favorite, will add interface later.
  const addToFavorite = (item: any) => {
    dispatch(AddToFavoriteList(item));
  };  

  // const getFavoriteLength = () => {
    
  //   if (Object.keys(pokemons).length) {
  //     let count = pokemons.reduce((acc: number, item: any) => {
  //       if (item.favorite) {
  //         return acc++;
  //       } else {
  //         return acc;
  //       }
  //     }, 0)

  //     return count;
  //   }
    
  //   return 0;
  // };

	return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Welcome to Pokemon App</h3>

        <div className={styles.grid}>
          {processing ? (
            <div>Loading...</div>
          ) : (
            <Fragment>
              <p>{favorits.length} Favorite Pokemon</p>
              <ul className={styles.list}>
                {pokemons.map((item: any, index: number) => {
                  return (
                    <li className={styles.list_item} key={index}>
                      <p>{item.name}</p>
                      <div>
                        <span className={styles.shape}>{favorits.length} &nbsp; &nbsp;</span>
                        <button
                          className={styles.btn}
                          style={item.favorite ? { backgroundColor: 'blue' } : {}}
                          onClick={() => addToFavorite(item)}
                        >
                          Favorite
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Fragment>
          )}
        </div>
      </main>
    </div>
  );
} 

export default RootComponent;
