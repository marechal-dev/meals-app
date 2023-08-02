import { StyleSheet, View, Text, Pressable, Platform } from "react-native";

const OVERFLOW_OPTION = Platform.OS === "android" ? "hidden" : "visible";

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    overflow: OVERFLOW_OPTION,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },
  button: {
    flex: 1,
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});

const ANDROID_RIPPLE_SETTINGS = {
  color: "#ccc"
};

export default function CategoryGridTile({ color, title, onPressHandler }) {
  const dynamicStyles = StyleSheet.create({
    dynamicBackgroundColor: {
      backgroundColor: color,
    }
  });

  return (
    <View
      style={styles.gridItem}
    >
      <Pressable
        android_ripple={ANDROID_RIPPLE_SETTINGS}
        onPress={onPressHandler}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null
        ]}
      >
        <View
          style={[styles.innerContainer, dynamicStyles.dynamicBackgroundColor]}
        >
          <Text
            style={styles.title}
          >
            {title}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};
