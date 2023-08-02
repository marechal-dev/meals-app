import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => { },
  removeFavorite: (id) => {}
});

export function FavoritesProvider({ children }) {
  const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

  function addFavorite(id) {
    setFavoriteMealsIds((oldState) => [...oldState, id]);
  }

  function removeFavorite(id) {
    setFavoriteMealsIds((oldState) =>
      oldState.filter(mealId => mealId !== id)
    );
  }


  return (
    <FavoritesContext.Provider
      value={{
        ids: favoriteMealsIds,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
