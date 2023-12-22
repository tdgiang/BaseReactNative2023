import React, {useEffect, useRef, useState} from 'react';
import StackNavigation from './routers/StackNavigation';
import {connect} from 'react-redux';
import DropdownAlert from 'react-native-dropdownalert';
import DropdownManager from './components/DropdownAlert/DropdownManager';
import R from './assets/R';
import {HEIGHTXD, WIDTHXD} from './config/Functions';
import {SkypeIndicator} from 'react-native-indicators';
import Modal from 'react-native-modal';
import {saveUserToRedux} from './actions/users';
import I18n, {setLocation} from './helper/i18/i18n';
import KEY from './assets/AsynStorage';
import {changeLanguage} from './actions/language';
import AsyncStorage from '@react-native-community/async-storage';
import NoInternetComponent from './components/NoInternet';

const RootView = props => {
  useEffect(() => {
    setInitLanguage();
    DropdownManager.register(
      dropDownAlertRef.current,
      dropDownAlertLongTimeRef.current,
    );
  }, []);
  const dropDownAlertRef = useRef(null);
  const dropDownAlertLongTimeRef = useRef(null);
  const setInitLanguage = async () => {
    // const laguage = await AsyncStorage.getItem(KEY.LANGUAGE);
    const laguage = 'vi';
    if (laguage) props.changeLanguage(laguage);
    setLocation(I18n, laguage);
  };
  return (
    <>
      <StackNavigation isLoggedIn={props.isLoggedIn} />
      <Modal isVisible={props.loadingModal.isVisible}>
        <SkypeIndicator color={'white'} />
      </Modal>
      <DropdownAlert
        inactiveStatusBarBackgroundColor={R.colors.main}
        activeStatusBarBackgroundColor={R.colors.main}
        warnImageSrc={R.images.iconWarn}
        successImageSrc={R.images.iconSuccess}
        errorImageSrc={R.images.iconError}
        titleStyle={{color: '#fff'}}
        messageStyle={{color: '#fff'}}
        updateStatusBar={false}
        closeInterval={1000}
        ref={dropDownAlertRef}
        warnColor={R.colors.orange400}
        defaultContainer={{
          borderBottomRightRadius: WIDTHXD(30),
          borderBottomLeftRadius: WIDTHXD(30),
          paddingTop: HEIGHTXD(30),
          paddingVertical: HEIGHTXD(30),
          paddingHorizontal: WIDTHXD(20),
        }}
      />
      <DropdownAlert
        updateStatusBar={false}
        inactiveStatusBarBackgroundColor={R.colors.colorMain}
        activeStatusBarBackgroundColor={R.colors.colorMain}
        warnImageSrc={R.images.iconWarn}
        successImageSrc={R.images.iconSuccess}
        errorImageSrc={R.images.iconError}
        titleStyle={{color: '#fff'}}
        messageStyle={{color: '#fff'}}
        closeInterval={600000}
        ref={dropDownAlertLongTimeRef}
        warnColor={R.colors.orange400}
        defaultContainer={{
          borderBottomRightRadius: WIDTHXD(30),
          borderBottomLeftRadius: WIDTHXD(30),
          paddingTop: HEIGHTXD(30),
          paddingVertical: HEIGHTXD(30),
          paddingHorizontal: WIDTHXD(20),
        }}
      />

      <NoInternetComponent />
    </>
  );
};

const mapStateToProps = state => {
  return {
    loadingModal: state.ModalLoadingReducer,
  };
};

export default connect(mapStateToProps, {
  saveUserToRedux,
  changeLanguage,
})(RootView);
