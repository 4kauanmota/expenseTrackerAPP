import { View, Text } from "react-native"

function ExpansesSumary({ expenses, periodName }) {
  const expensesCalc = expenses.reduce((expensesValueCont, actualExpenseValue) => expensesValueCont + actualExpenseValue.amount, 0)

  return (
    <View>
      <Text> {periodName} </Text>
      <Text> ${expensesCalc.toFixed(2)} </Text>
    </View>
  )
}

export default ExpansesSumary;