
import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
const idproof_img = "../ src/assets/images/idprofile.png"
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './pages/HomeScreen';
import ExploreScreen from './pages/ExploreScreen';
import SettingScreen from './pages/SettingScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => toggleDrawer()}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const getHeaderTitle = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'HomeScreen':
      return 'Home';
    case 'ExploreScreen':
      return 'Explore';
    case 'BottomTabStack':
      return 'Home';
  }
};

const BottomTabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: { backgroundColor: '#e0e0e0' },
        labelStyle: { textAlign: 'center', fontSize: 16, },
      }}>
      <Tab.Screen  name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: 'Home Screen', }}
      />
      <Tab.Screen name="ExploreScreen" component={ExploreScreen} options={{ tabBarLabel: 'Explore Screen', }}
      />
    </Tab.Navigator>
  );
};

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen" >
      <Stack.Screen
        name="BottomTabStack"
        component={BottomTabStack}
        
      />
    </Stack.Navigator>
  );
};

const SettingScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: { backgroundColor: '#f4511e', },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold', },
      }}>
      <Stack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{ title: 'Setting' }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen name="HomeScreenStack" options={{ drawerLabel: 'Home Screen Option' }} component={HomeScreenStack} />
        <Drawer.Screen name="SettingScreenStack" options={{ drawerLabel: 'Setting Screen Option' }} component={SettingScreenStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
