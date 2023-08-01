import { Text } from "react-native";

function Expense({expense}) {
  return (
    <Text> {expense.description} </Text>
  )
}

export default Expense;