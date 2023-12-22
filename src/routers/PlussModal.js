import React, {Component, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import R from '../assets/R';

import Modal from 'react-native-modal';

import {useNavigation} from '@react-navigation/native';
import {
  DEPOSIT,
  MY_WALLET,
  WITHDRAW,
  BORROW_REQUEST,
} from '../routers/ScreenNames';
import AppText from '../components/AppText';

const WalletModal = props => {
  const [isModalVisible, setModalVisible] = useState(false);

  const navigate = useNavigation();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wraper}>
        <TouchableOpacity onPress={toggleModal} style={styles.btn}>
          <Icon name={'plus'} size={16} color={R.colors.white} />
        </TouchableOpacity>
      </View>

      <Modal style={{margin: 0}} isVisible={isModalVisible}>
        <View style={{flex: 1}}>
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={{flex: 1}}></View>
          </TouchableWithoutFeedback>
          <View style={styles.footer}>
            <TouchableOpacity
              onPress={() => {
                navigate.navigate(DEPOSIT);
                toggleModal();
              }}
              style={styles.wraper1}>
              <View style={styles.containerIcon}>
                <Image style={styles.imgIcon} source={R.images.icDeposit} />
              </View>
              <AppText i18nKey={'Deposit'} style={styles.txt}></AppText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigate.navigate(WITHDRAW);
                toggleModal();
              }}
              style={styles.wraper1}>
              <View style={styles.containerIcon}>
                <Image style={styles.imgIcon} source={R.images.icWithdraw} />
              </View>
              <AppText i18nKey={'Withdraw'} style={styles.txt}></AppText>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigate.navigate(MY_WALLET);
                toggleModal();
              }}
              style={styles.wraper1}>
              <View style={styles.containerIcon}>
                <Image
                  style={{height: 28, width: 28}}
                  source={R.images.icWallet}
                />
              </View>
              <AppText i18nKey={'Wallet'} style={styles.txt}></AppText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigate.navigate(BORROW_REQUEST);
                toggleModal();
              }}
              style={styles.wraper1}>
              <View style={styles.containerIcon}>
                <Image
                  style={{height: 28, width: 28}}
                  source={R.images.icRequestLoan}
                />
              </View>
              <AppText i18nKey={'Loan'} style={styles.txt}></AppText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WalletModal;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: R.colors.main,
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    borderRadius: 40,
  },
  container: {
    flex: 1,
  },
  wraper: {
    backgroundColor: R.colors.white,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: -25,
    borderRadius: 25,
  },
  footer: {
    backgroundColor: 'white',
    height: 165,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  imgIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
  wraper1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIcon: {
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D7E6FF',
    borderRadius: 10,
  },
  txt: {
    fontSize: 12,
    color: R.colors.main,
    fontWeight: '600',
    marginTop: 12,
  },
});
