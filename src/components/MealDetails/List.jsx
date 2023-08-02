import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  itemText: {
    color: "#351401",
  },
  itemText: {
    textAlign: "center",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  }
});

export function List({ data }) {
  return data.map((item) => (
    <View
      key={item}
      style={styles.itemText}
    >
      <Text
        style={styles.itemText}
      >
        {item}
      </Text>
    </View>
  ));
}
