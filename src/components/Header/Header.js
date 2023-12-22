import React, {useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import R from '../../assets/R';
import {
  getWidth,
  HEIGHTXD,
  WIDTHXD,
  WIDTHXDICON,
  HEIGHT,
  getFontSize,
  WIDTH,
} from '../../config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import SnackBar from '../SnackBar';
const Header = props => {
  const {title, isBack} = props;
  const navigate = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Text numberOfLines={1} style={styles.txtTitle}>
        {title}
      </Text>
      {isBack && (
        <TouchableOpacity
          style={styles.btnBack}
          onPress={() => navigate.goBack()}>
          <Icon color={R.colors.black} name={'arrowleft'} size={22} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: HEIGHT(45),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
    justifyContent: 'center',
    backgroundColor: R.colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  txtTitle: {
    flex: 1,
    fontSize: getFontSize(16),
    textAlign: 'center',
    fontWeight: 'bold',
    color: R.colors.black,
  },
  btnBack: {
    position: 'absolute',
    left: WIDTH(10),
    width: WIDTH(35),
    height: HEIGHT(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
