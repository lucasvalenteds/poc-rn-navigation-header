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
    Settings = "Settings",
}

export type AppScreens = {
    Home: AppScreenProps;
    Settings: AppScreenProps;
}

export type BaseScreenRouteProp =
    RouteProp<AppScreens, AppScreen.Home> |
    RouteProp<AppScreens, AppScreen.Settings>;

export type BaseScreenNavigationProp =
    StackNavigationProp<AppScreens, AppScreen.Home> |
    StackNavigationProp<AppScreens, AppScreen.Settings>;

const App: React.FC = (): React.ReactElement => {
  const Stack = createStackNavigator<AppScreens>();

  return (
    <>
      <NavigationContainer>
          <Stack.Navigator
              screenOptions={{
                  transitionSpec: {
                      open: {
                          config: {
                              duration: 0,
                          }
                      },
                      close: {
                          config: {
                              duration: 0,
                          },
                      },
                  },
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
                  initialParams={{text: "Home screen"}}
              />
              <Stack.Screen
                  name={AppScreen.Settings}
                  component={BaseScreen}
                  initialParams={{text: "Settings screen"}}
              />
          </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
