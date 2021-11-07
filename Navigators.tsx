import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginScreen from './src/screen/LoginScreen/LoginScreen';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';
import CatalogueScreen from './src/screen/CatalogueScreen/CatalogueScreen';
import FavouritesScreen from './src/screen/FavouritesScreen/FavouritesScreen';
import ProfileScreen from './src/screen/ProfileScreen/ProfileScreen';
import CartScreen from './src/screen/CartScreen/CartScreen';
import {appColors} from './src/utils/colors';
import AppHamburgerMenu from './src/component/AppHamburgerMenu';
import RegistrationScreen from './src/screen/RegistrationScreen/RegistrationScreen';
import ForgetScreen from './src/screen/ForgetScreen/ForgetScreen';
import CatalogueScreenLvlTwo from './src/screen/CatalogueScreen/CatalogueScreenLvlTwo';
import AppSearchBarHeader from './src/component/AppSearchBar';
import SearchScreen from './src/screen/SearchScreen/SearchScreen';
import AppHeaderBackButton from './src/component/AppHeaderBackButton';
import ItemScreen from './src/screen/ItemScreen/ItemScreen';
import ProductDetailScreen from './src/screen/ProductDetailScreen/ProductDetailScreen';
import ProductFilterScreen from './src/screen/ProductFilterScreen/ProductFilterScreen';
import CheckoutScreen from './src/screen/CheckoutScreen/CheckoutScreen';
import OrderScreen from './src/screen/OrderScreen/OrderScreen';

const MainStack = createStackNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{width: 220, height: 40}}
      source={require('./src/assets/imgs/logoWhite.jpg')}
      resizeMode={'contain'}
    />
  );
};

export function MainFlow() {
  return (
    <MainStack.Navigator
      // initialRouteName="LoginScreen"
      initialRouteName="BottomTabNavigator"
      screenOptions={{
        headerTintColor: 'black',
        cardStyle: {backgroundColor: '#fff'},
      }}>
      <MainStack.Screen
        options={{
          headerShown: false,
        }}
        name="LoginScreen"
        component={LoginScreen}
      />

      <MainStack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />
      <MainStack.Screen
        options={{
          headerShown: false,
        }}
        name="RegistrationScreen"
        component={RegistrationScreen}
      />
      <MainStack.Screen
        options={{
          headerShown: false,
        }}
        name="ForgetScreen"
        component={ForgetScreen}
      />
      <MainStack.Screen
        options={{
          // headerShown: false,
          headerLeft: () => <AppHeaderBackButton />,
          headerTitle: () => <LogoTitle />,
        }}
        name="SearchScreen"
        component={SearchScreen}
      />
      <MainStack.Screen
        options={{
          headerShown: false,
        }}
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </MainStack.Navigator>
  );
}

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = 'home';
          if (route.name === 'MainScreenStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'CatalogueScreenStack') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'CartScreenStack') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'FavouritesScreenStack') {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === 'ProfileScreenStack') {
            iconName = focused ? 'person' : 'person-outline';
          }
          return (
            <Ionicons name={iconName} size={size} color={appColors.darkGrey} />
          );
        },
      })}>
      <Tab.Screen
        name="MainScreenStack"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={MainScreenStack}
      />
      <Tab.Screen
        name="CatalogueScreenStack"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={CatalogueScreenStack}
      />
      <Tab.Screen
        name="CartScreenStack"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={CartScreenStack}
      />
      <Tab.Screen
        name="FavouritesScreenStack"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={FavouritesScreenStack}
      />
      <Tab.Screen
        name="ProfileScreenStack"
        options={{
          tabBarShowLabel: false,
          headerShown: false,
        }}
        component={ProfileScreenStack}
      />
    </Tab.Navigator>
  );
}
function MainScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <AppHamburgerMenu />,
        headerTitle: () => <LogoTitle />,
        headerRight: () => <AppSearchBarHeader />,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
      <Stack.Screen
        name="ProductFilterScreen"
        component={ProductFilterScreen}
        options={{
          headerLeft: () => <AppHeaderBackButton />,
        }}
      />

      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
}

function CatalogueScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <AppHamburgerMenu />,
        headerTitle: () => <LogoTitle />,
        headerRight: () => <AppSearchBarHeader />,
      }}>
      <Stack.Screen name="CatalogueScreen" component={CatalogueScreen} />

      <Stack.Screen
        name="CatalogueScreenLvlTwo"
        options={{
          headerLeft: () => <AppHeaderBackButton />,
        }}
        component={CatalogueScreenLvlTwo}
      />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />

      <Stack.Screen
        name="ProductFilterScreen"
        component={ProductFilterScreen}
        options={{
          headerLeft: () => <AppHeaderBackButton />,
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
}

function CartScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <AppHamburgerMenu />,
        headerTitle: () => <LogoTitle />,
        headerRight: () => <AppSearchBarHeader />,
      }}>
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen
        name="CheckoutScreen"
        component={CheckoutScreen}
        options={{headerLeft: () => <AppHeaderBackButton />}}
      />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
      <Stack.Screen
        name="ProductFilterScreen"
        component={ProductFilterScreen}
        options={{
          headerLeft: () => <AppHeaderBackButton />,
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
    </Stack.Navigator>
  );
}

function FavouritesScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <AppHamburgerMenu />,
        headerTitle: () => <LogoTitle />,
        headerRight: () => <AppSearchBarHeader />,
      }}>
      <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
      <Stack.Screen
        name="ProductFilterScreen"
        component={ProductFilterScreen}
        options={{
          headerLeft: () => <AppHeaderBackButton />,
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
    </Stack.Navigator>
  );
}

function ProfileScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <AppHamburgerMenu />,
        headerTitle: () => <LogoTitle />,
        headerRight: () => <AppSearchBarHeader />,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
      />
      <Stack.Screen
        name="ProductFilterScreen"
        component={ProductFilterScreen}
        options={{
          headerLeft: () => <AppHeaderBackButton />,
        }}
      />
      <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
    </Stack.Navigator>
  );
}
