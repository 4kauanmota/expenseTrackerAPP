import { StyleSheet, View } from "react-native";

import ExpansesSumary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { DUMMY_DATA } from "../../constants/DUMMY_DATA";
import GlobalStyles from "../../constants/GlobalStyles";

function ExpansesOutput({expenses, periodName}) {
  return (
    <View style={styles.container}>
      <ExpansesSumary expenses={DUMMY_DATA} periodName={periodName} />
      <ExpensesList expenses={DUMMY_DATA} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.background,
    paddingHorizontal: 8
  }
})

export default ExpansesOutput;