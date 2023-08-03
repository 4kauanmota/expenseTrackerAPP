import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../GlobalStyles";


function Input({label, inputConfig, style, labelStyle, inputStyle}) {
  return (
    <View style={[styles.container, style]}>

      {label &&
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      }
      <TextInput style={[styles.input, inputStyle]} {...inputConfig} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
  },

  label: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 4,
  },

  input: {
    backgroundColor: colors.white + 'ee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
  }
})

export default Input;