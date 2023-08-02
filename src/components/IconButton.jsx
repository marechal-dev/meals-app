import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
})

export function IconButton({ icon, color, onPressHandler }) {
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressed} 
      onPress={onPressHandler}
    >
      <Ionicons name={icon} size={24} color={color} />
    </Pressable>
  )
}
