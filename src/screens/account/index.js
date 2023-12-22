import React, {useEffect, useState} from 'react';
import AccountView from './view';
import {useNavigation} from '@react-navigation/native';
import {connect} from 'react-redux';
import {saveUserToRedux, saveWalletInfo} from '../../actions/users';
import {showLoading, hideLoading} from '../../actions/loadingAction';
import {showAlert, TYPE} from '../../components/DropdownAlert';

const Account = props => {
  return <AccountView />;
};

const mapStateToProps = state => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};
export default connect(mapStateToProps, {
  saveUserToRedux,
  saveWalletInfo,
  showLoading,
  hideLoading,
})(Account);
