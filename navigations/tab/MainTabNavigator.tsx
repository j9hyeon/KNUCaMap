import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import MapHomeScreen from '../../screens/MapHomeScreen';
import TimetableScreen from '../../screens/TimetableScreen';
import RestaurantScreen from '../../screens/RestaurantScreen';
import FavoriteScreen from '../../screens/FavoriteScreen';
import MoreScreen from '../../screens/MoreScreen';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconSource;
          let iconWidth;
          let iconHeight;
          let iconColor = focused ? '#000000' : '#FDF5E6';

          switch (route.name) {
            case 'Timetable':
              iconSource = require('../../assets/timetable-icon.png');
              iconWidth = 24;
              iconHeight = 24;
              break;
            case 'Restaurants':
              iconSource = require('../../assets/restaurant-icon.png');
              iconWidth = 24;
              iconHeight = 24;
              break;
            case 'Home':
              iconSource = require('../../assets/maphome-icon.png');
              iconWidth = 60; // 홈 아이콘 크기
              iconHeight = 60; // 홈 아이콘 크기
              break;
            case 'Favorites':
              iconSource = require('../../assets/favorite-icon.png');
              iconWidth = 29;
              iconHeight = 29;
              break;
            case 'More':
              iconSource = require('../../assets/more-icon.png');
              iconWidth = 25;
              iconHeight = 6;
              break;
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: iconWidth,
                height: iconHeight,
                tintColor: iconColor,
                borderRadius: route.name === 'Home' ? 30 : 0, // 홈 아이콘을 둥글게
                backgroundColor: route.name === 'Home' ? '#F5E5C0' : 'transparent', // 홈 아이콘 배경색
              }}
            />
          );
        },
        tabBarActiveTintColor: '#FDF5E6',
        tabBarInactiveTintColor: '#FDF5E6',
        tabBarStyle: {
          backgroundColor: '#9A2828',
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Timetable" component={TimetableScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Restaurants" component={RestaurantScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Home" component={MapHomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Favorites" component={FavoriteScreen} options={{ headerShown: false }} />
      <Tab.Screen name="More" component={MoreScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
