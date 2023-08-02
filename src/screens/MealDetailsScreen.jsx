import { useContext, useLayoutEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { MEALS } from "../../data/dummy-data";

import { MealDetails } from "../components/MealDetails";
import { Subtitle } from "../components/MealDetails/Subtitle";
import { List } from "../components/MealDetails/List";
import { IconButton } from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/redux/favorites"
// import { FavoritesContext } from "../store/context/favorites-context";

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  outerListContainer: {
    width: "100%",
    alignItems: "center",
  },
  listContainer: {
    maxWidth: "80%",
  }
});

export function MealDetailsScreen({ navigation, route }) {
  // const { ids, addFavorite, removeFavorite } = useContext(FavoritesContext)
  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch()

  const { mealId } = route.params;

  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  function onChangeFavoriteStatus() {
    if (mealIsFavorite) {
      // removeFavorite(mealId);
      dispatch(removeFavorite({
        id: mealId,
      }))
      return;
    }

    // addFavorite(mealId);
    dispatch(addFavorite({
      id: mealId,
    }))
  }

  useLayoutEffect(() => {
    const meal = MEALS.find((item) => item.id === mealId);

    navigation.setOptions({
      title: meal.title,
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color="white"
            onPressHandler={onChangeFavoriteStatus}
          />
        )
      },
    });
  }, [navigation, mealId, onChangeFavoriteStatus]);

  const mealData = MEALS.find((item) => item.id === mealId);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        style={styles.image}
        source={{
          uri: mealData.imageUrl
        }}
      />
      <Text style={styles.title}>{mealData.title}</Text>
      <MealDetails
        duration={mealData.duration}
        complexity={mealData.complexity}
        affordability={mealData.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.outerListContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List
            data={mealData.ingredients}
          />
          <Subtitle>Steps</Subtitle>
          <List
            data={mealData.steps}
          />
        </View>
      </View>
    </ScrollView>
  );
}
