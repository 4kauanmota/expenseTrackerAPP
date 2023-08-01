import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import StackNavigator from './components/navegation/Stack';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />

      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </>
  );
}