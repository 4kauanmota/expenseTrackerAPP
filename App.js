import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'

import StackNavigator from './components/Navegation/Stack';
import ExpensesContextProvider from './store/expense-context';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter': require('./assets/fonts/Inter-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="auto" />

      <ExpensesContextProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}