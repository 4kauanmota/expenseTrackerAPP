import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"
import PressArea from "../4kauanmotaPatterns/components/PressArea";

function IconButton({ onPress, icon, color, size }) {
  return (
    <PressArea onPress={onPress} style={styles.container} pressStyle={styles.pressArea}>
      <View>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </PressArea>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 50,
    marginRight: 8
  },

  pressArea: {
  }
})

export default IconButton;