import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabsNavigator from "./BottomTabs";
import ManageExpenses from "../../screens/ManageExpense";

function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="ExpensesOverview" component={BottomTabsNavigator} />
      <Stack.Screen name='ManageExpense' component={ManageExpenses} />
    </Stack.Navigator>
  )
}

export default StackNavigator;