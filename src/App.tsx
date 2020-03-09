import React from 'react';
import {NavigationContainer, RouteProp} from '@react-navigation/native';
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack';
import {BaseScreen} from './BaseScreen';
import {CustomHeader} from './CustomHeader';
import {Alert} from 'react-native';

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
          <Stack.Navigator
              screenOptions={{
                  header: (props) => 
                  <CustomHeader
                      title={props.scene.route.name}
                      onPressLeftTile={() => Alert.alert("Left", "You've clicked the left button")}
                      onPressRightTile={() => Alert.alert("Right", "You've clicked the right button")}
                  />,
              }}
          >
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
