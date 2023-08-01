import { FlatList } from "react-native";
import Expense from "./Expense";

function ExpensesList({expenses}) {
  return (
    <FlatList 
      data={expenses}
      renderItem={({item}) => <Expense expense={item} />}
      keyExtractor={(item) => item.id}
    />
  )
}

export default ExpensesList;