import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {BaseScreen} from './BaseScreen';

export interface AppScreenProps {
    text: string;
}

export enum AppScreen {
    Home = "Home",
}

export type AppScreens = {
    Home: AppScreenProps;
}

export type BaseScreenRouteProp = RouteProp<AppScreens, AppScreen.Home>;

export type BaseScreenNavigationProp = StackNavigationProp<AppScreens, AppScreen.Home>;

const App: React.FC = (): React.ReactElement => {
  const Stack = createStackNavigator<AppScreens>();
  return (
    <>
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                  name={AppScreen.Home}
                  component={BaseScreen}
                  initialParams={{text: "Example screen"}}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
