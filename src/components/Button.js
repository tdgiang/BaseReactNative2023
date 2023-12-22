import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import R from '../assets/R';
import {colors, sizes} from '../assets/theme';
import {
  getFontSize,
  getFontXD,
  getWidth,
  HEIGHT,
  WIDTH,
} from '../config/Functions';

const Button = props => {
  const {title, onPress, containerStyle, txtStyle, backgroundColor} = props;

  return (
    <TouchableOpacity
      style={[
        {
          height: HEIGHT(40),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F2B60D',
          marginHorizontal: WIDTH(15),
          borderRadius: HEIGHT(6),
          marginTop: HEIGHT(30),
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
        },
        {...containerStyle},
      ]}
      disabled={props.disabled}
      onPress={onPress}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={[
            {
              fontSize: getFontSize(18),
              color: R.colors.white,
              fontWeight: 'bold',
            },
            {...txtStyle},
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Button;
