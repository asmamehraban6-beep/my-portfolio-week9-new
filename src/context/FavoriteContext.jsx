import { createContext, useEffect, useState } from "react";


export const FavoriteContext = createContext();


export function FavoriteProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {

    const savedFavorites = localStorage.getItem("favorites");

    return savedFavorites
      ? JSON.parse(savedFavorites)
      : [];

  });


  useEffect(() => {

    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );

  }, [favorites]);



  function toggleFavorite(id) {

    setFavorites((prev) => {

      if (prev.includes(id)) {

        return prev.filter(
          (item) => item !== id
        );

      } else {

        return [...prev, id];

      }

    });

  }



  return (

    <FavoriteContext.Provider
      value={{
        favorites,
        toggleFavorite
      }}
    >

      {children}

    </FavoriteContext.Provider>

  );

}