import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"

import RecentExpenses from "../../screens/RecentExpenses";
import AllExpenses from "../../screens/AllExpenses";
import GlobalStyles from "../../constants/GlobalStyles";

function BottomTabsNavigator() {
  const BottomTabs = createBottomTabNavigator();

  return (
    <BottomTabs.Navigator screenOptions={{
      headerStyle: { backgroundColor: GlobalStyles.strongestBackground },
      tabBarStyle: { backgroundColor: GlobalStyles.strongestBackground },
      headerTintColor: GlobalStyles.lightWhite,
      tabBarInactiveTintColor: GlobalStyles.light + 'aa',
      tabBarActiveTintColor: GlobalStyles.highlight
    }}>

      <BottomTabs.Screen name="RecentExpenses" component={RecentExpenses} options={{
        title: 'Recent Expanses',
        headerTitleStyle: {fontFamily: 'Inter'},
        tabBarLabel: 'Recent',
        tabBarLabelStyle: {fontFamily: 'Inter'},
        tabBarIcon: ({ color, size }) => <Ionicons name="hourglass" color={color} size={size} />
      }} />

      <BottomTabs.Screen name="AllExpenses" component={AllExpenses} options={{
        title: 'All Expanses',
        headerTitleStyle: {fontFamily: 'Inter'},
        tabBarLabel: 'All',
        tabBarLabelStyle: {fontFamily: 'Inter'},
        tabBarIcon: ({ color, size }) => <Ionicons name="calendar" color={color} size={size} />
      }} />

    </BottomTabs.Navigator>
  )
}

export default BottomTabsNavigator;