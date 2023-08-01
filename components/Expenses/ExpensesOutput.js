import { View } from "react-native";

import ExpansesSumary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpansesOutput({expenses, periodName}) {
  return (
    <View>
      <ExpansesSumary expenses={expenses} periodName={periodName} />
      <ExpensesList />
    </View>
  )
}

export default ExpansesOutput;