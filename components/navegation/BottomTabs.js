import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"

import RecentExpenses from "../../screens/RecentExpenses";
import AllExpenses from "../../screens/AllExpenses";
import { colors } from "../4kauanmotaPatterns/GlobalStyles";
import IconButton from "../UI/IconButton";

function BottomTabsNavigator() {
  const BottomTabs = createBottomTabNavigator();

  return (
    <BottomTabs.Navigator screenOptions={({navigation}) => ({
      headerStyle: { backgroundColor: colors.strongestBackground },
      tabBarStyle: { backgroundColor: colors.strongestBackground },
      headerTintColor: colors.lightWhite,
      tabBarInactiveTintColor: colors.light + 'aa',
      tabBarActiveTintColor: colors.highlight,
      headerRight: ({ tintColor }) =>  <IconButton icon='add' color={tintColor} size={24} onPress={() => navigation.navigate('ManageExpense')}  />
      })
    }>

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