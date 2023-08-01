import { View, Text, StyleSheet } from "react-native"

import GlobalStyles from "../../constants/GlobalStyles"

function ExpansesSumary({ expenses, periodName }) {
  const expensesCalc = expenses.reduce((expensesValueCont, actualExpenseValue) => expensesValueCont + actualExpenseValue.amount, 0)

  return (
    <View style={styles.container}>
      <Text style={[styles.description, {color: GlobalStyles.lightWhite}]}> {periodName} </Text>
      <Text style={[styles.description, {fontWeight: 'bold'}]}> ${expensesCalc.toFixed(2)} </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: GlobalStyles.strongBackground,
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
  },

  description: {
    color: GlobalStyles.white,
    fontFamily: 'Inter',
  }
})

export default ExpansesSumary;