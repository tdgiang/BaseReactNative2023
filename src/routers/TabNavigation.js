import React, {useEffect, useState} from 'react';
import {DeviceEventEmitter, Image, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import i18n from '../helper/i18/i18n';
import {connect} from 'react-redux';
import R from '../assets/R';

import Account from '../screens/account';

import Home from '../screens/home';

const Tab = createBottomTabNavigator();

const TabNavigator = props => {
  const [reload, setReload] = useState(false);
  useEffect(() => {
    let setLanguage = DeviceEventEmitter.addListener('setLanguage', value => {
      setReload(!reload);
    });
    return () => {
      setLanguage.remove();
    };
  }, []);
  return (
    <Tab.Navigator
      initialRouteName="Screen5"
      screenOptions={{headerShown: false}}
      tabBarOptions={{
        showIcon: true,
        showLabel: true,
        activeTintColor: R.colors.main,

        style: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.29,
          shadowRadius: 2,
          elevation: 7,
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="HomeScreen1"
        component={Home}
        options={{
          tabBarLabel: i18n.t('Home'),
          tabBarIcon: ({color, size}) => (
            <Image
              source={R.images.icHome}
              style={{width: size, height: size, tintColor: color}}
            />
          ),
        }}
      />

      <Tab.Screen
        name="AccountScreen"
        component={Account}
        options={{
          tabBarLabel: i18n.t('Account'),
          tabBarIcon: ({color, size}) => (
            <Image
              source={R.images.icAccount}
              style={{width: size, height: size - 3, tintColor: color}}
              resizeMode={'contain'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => {
  return {
    user: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
