import { StyleSheet, View, FlatList } from "react-native";

import { MealItem } from "./MealItem"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export function MealsList({ items }) {
  const itemKeyExtractor = (item) => item.id;
  const renderMealItem = (itemData) => {
    const item = itemData.item;

    return (
      <MealItem
        id={item.id}
        imageUrl={item.imageUrl}
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={itemKeyExtractor}
        renderItem={renderMealItem}
      />
    </View>
  )
}