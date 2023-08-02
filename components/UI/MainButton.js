import { StyleSheet, Text } from "react-native";
import PressArea from "../4kauanmotaPatterns/components/PressArea";
import { colors } from "../4kauanmotaPatterns/GlobalStyles";

function MainButton({ onPress, children, mode }) {
  return (
    <PressArea onPress={onPress} style={[styles.container, mode === 'flat' && {backgroundColor: 'transparent'}]} pressStyle={styles.pressArea}>
      <Text style={styles.buttonText}> {children} </Text>
    </PressArea>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 4,
    marginHorizontal: 5,
    backgroundColor: colors.strongBackground,
  },

  pressArea: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  buttonText: {
    color: colors.white
  }
})

export default MainButton;