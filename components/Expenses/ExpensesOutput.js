import { StyleSheet, View, Text } from "react-native";

import ExpansesSumary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { colors } from "../4kauanmotaPatterns/GlobalStyles";

function ExpansesOutput({expenses, periodName, fallbackText}) {
  if(expenses.length > 0) {
    return (
      <View style={styles.container}>
        <ExpansesSumary expenses={expenses} periodName={periodName} />
        <ExpensesList expenses={expenses} />
      </View>
    )
  }
  else {
    return (
      <View style={[styles.container, {alignItems: 'center', justifyContent: 'center'}]}>
        <Text style={{color: colors.white}}> {fallbackText} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 8,
  }
})

export default ExpansesOutput;