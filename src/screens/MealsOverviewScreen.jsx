import { useLayoutEffect } from "react";

import { CATEGORIES, MEALS } from "../../data/dummy-data";

import { MealsList } from "../components/MealsList/MealsList";

export function MealsOverviewScreen({ navigation, route }) {
  const { categoryId } = route.params;
  
  const displayedMeals = MEALS.filter((item) => item.categoryIds.includes(categoryId));

  useLayoutEffect(() => {
    const category = CATEGORIES.find((item) => item.id === categoryId);
    
    navigation.setOptions({
      title: category.title,
    });
  }, [categoryId, navigation])
  

  return <MealsList items={displayedMeals} />
}
