import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import CustomDrawerContent from './src/components/navigations/CustomDrawerContent';
import StackNavigator from './src/components/navigations/StackNavigator';
import './src/lib/gesture-handler.native';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{
          drawerType: 'slide',
          headerShown: false,
        }}>
        <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
