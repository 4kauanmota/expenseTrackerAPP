import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"

import RecentExpenses from "../../screens/RecentExpenses";
import AllExpenses from "../../screens/AllExpenses";
import GlobalStyles from "../../constants/GlobalStyles";

function BottomTabsNavigator() {
  const BottomTabs = createBottomTabNavigator();

  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.strongBackground },
      tabBarStyle: { backgroundColor: GlobalStyles.strongBackground },
      headerTintColor: GlobalStyles.lightText,
      tabBarInactiveTintColor: GlobalStyles.light + 'aa',
      tabBarActiveTintColor: GlobalStyles.highlight
    }}>

      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} options={{
        title: 'Recent Expanses',
        tabBarLabel: 'Recent',
        tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" color={color} size={size} />
      }} />

      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} options={{
        title: 'All Expanses',
        tabBarLabel: 'All',
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />
      }} />

    </BottomTabs.Navigator>
  )
}

export default BottomTabsNavigator;