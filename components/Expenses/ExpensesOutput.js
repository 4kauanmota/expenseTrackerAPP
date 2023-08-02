import { StyleSheet, View } from "react-native";

import ExpansesSumary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { colors } from "../4kauanmotaPatterns/GlobalStyles";

function ExpansesOutput({expenses, periodName}) {
  return (
    <View style={styles.container}>
      <ExpansesSumary expenses={expenses} periodName={periodName} />
      <ExpensesList expenses={expenses} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 8
  }
})

export default ExpansesOutput;