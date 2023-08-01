import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabsNavigator from "./BottomTabs";
import ManageExpenses from "../../screens/ManageExpense";
import GlobalStyles from "../../constants/GlobalStyles";

function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="ExpensesOverview" component={BottomTabsNavigator} options={{
        headerShown: false,
      }} />
      <Stack.Screen name='ManageExpense' component={ManageExpenses} />
    </Stack.Navigator>
  )
}

export default StackNavigator;