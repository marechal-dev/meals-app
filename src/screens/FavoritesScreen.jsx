import { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";

import { MEALS } from "../../data/dummy-data";

import { FavoritesContext } from "../store/context/favorites-context"
import { MealsList } from "../components/MealsList/MealsList";
import { useSelector } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noFavoriteMealsText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
  },
})

export function FavoritesScreen() {
  // const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext)
  const ids = useSelector((state) => state.favoriteMeals.ids)

  const favoriteMeals = MEALS.filter((meal) => ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noFavoriteMealsText}>You have no favorite meals (yet)...</Text>
      </View>
    )
  }

  return <MealsList items={favoriteMeals} />
}