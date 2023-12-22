import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import LoginView from './view';
import {TABNAVIGATOR} from '../../routers/ScreenNames';
const Login = ({params}) => {
  const navigate = useNavigation();

  const onLogin = () => {
    navigate.navigate(TABNAVIGATOR);
    console.log('Hello');
  };

  return <LoginView onLogin={onLogin} />;
};

export default Login;
