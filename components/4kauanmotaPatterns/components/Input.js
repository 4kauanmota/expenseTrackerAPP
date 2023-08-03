import { View, Text, TextInput, StyleSheet } from "react-native";
import { colors } from "../GlobalStyles";


function Input({label, inputConfig, style, labelStyle, inputStyle, isValid}) {
  config();

  return (
    <View style={[styles.container, style]}>

      {label &&
        <Text style={[styles.label, !isValid && styles.invalidLabel,  labelStyle]}>{label}</Text>
      }
      <TextInput style={[styles.input, !isValid && styles.invalidInput, inputStyle]} {...inputConfig} />

    </View>
  )
}

function config(){

}

const styles = StyleSheet.create({
  container: {
  },

  label: {
    color: colors.white,
    fontSize: 16,
    marginBottom: 4,
  },

  invalidLabel: {
    color: colors.error
  },

  input: {
    backgroundColor: colors.white + 'ee',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
  },

  invalidInput: {
    backgroundColor: colors.error + 'ee',
  }
})

export default Input;