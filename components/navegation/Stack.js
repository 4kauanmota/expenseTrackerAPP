import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabsNavigator from "./BottomTabs";
import ManageExpenses from "../../screens/ManageExpense";
import { colors } from "../4kauanmotaPatterns/GlobalStyles";


function StackNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerTintColor: colors.lightWhite,
      headerStyle: { backgroundColor: colors.strongestBackground },
      contentStyle: { backgroundColor: colors.background }
    }}>

      <Stack.Screen name="ExpensesOverview" component={BottomTabsNavigator} options={{
        headerShown: false,
      }} />

      <Stack.Screen name='ManageExpense' component={ManageExpenses} options={{
        presentation: 'modal'
      }}/>
      
    </Stack.Navigator>
  )
}

export default StackNavigator;