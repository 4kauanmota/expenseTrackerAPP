import { View, Pressable, StyleSheet, Platform } from "react-native";
import { colors } from "../GlobalStyles";

function PressArea({ children, onPress, style, pressStyle }) {
  config(style)

  return (
    <View style={[styles.container, style]}>

      {Platform.OS === 'android' 
        ?
        (
          <Pressable onPress={onPress} style={[styles.pressArea, pressStyle]} android_ripple={AndroidPressEffect}>
            {children}
          </Pressable>
        )
        :
        (
          <Pressable onPress={onPress} style={({ pressed }) => [pressed && IosPressEffect, styles.pressArea, pressStyle]}>
            {children}
          </Pressable>
        )
      }

    </View>
  )
}

function config(style) {
  styles.pressArea.borderRadius = style.borderRadius;
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },

  pressArea: {
  },
})

const AndroidPressEffect = {
  color: colors.white,
  borderless: false
}

const IosPressEffect = {
  opacity: 0.8
}

export default PressArea;