import { View } from "react-native";

import ExpansesSumary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { DUMMY_DATA } from "../../constants/DUMMY_DATA";

function ExpansesOutput({expenses, periodName}) {
  return (
    <View>
      <ExpansesSumary expenses={DUMMY_DATA} periodName={periodName} />
      <ExpensesList expenses={DUMMY_DATA} />
    </View>
  )
}

export default ExpansesOutput;