import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

const LoginView = ({params}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <TouchableOpacity>
      <Text>Login</Text>
    </TouchableOpacity>
  </View>
);

export default LoginView;
