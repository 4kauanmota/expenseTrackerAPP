import { View } from "react-native";

import ExpansesSumary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

function ExpansesOutput({expenses}) {
  return (
    <View>
      <ExpansesSumary />
      <ExpensesList />
    </View>
  )
}

export default ExpansesOutput;