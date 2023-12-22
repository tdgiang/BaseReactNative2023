/* eslint-disable no-console */
import React, {useEffect} from 'react';
import {Platform, View, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {ASYNC_STORE_KEY} from '../config/constants';
import messaging from '@react-native-firebase/messaging';
import {showNotificaton} from '../actions/SnackBarAction';
import {connect} from 'react-redux';

import {convertScreen} from '../config/Functions';
import {updateWalletInfo} from '../actions/walletAction';

const FirebaseNotification = props => {
  // messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //   console.log("Message handled in the background!", remoteMessage);
  // });
  // messaging().onNotificationOpenedApp(async (remoteMessage) => {
  //   console.log("On notifi open app-----", remoteMessage);
  // });

  useEffect(() => {
    checkPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message arrived!', remoteMessage);
      const {body, title} = remoteMessage.notification;
      const {action_type, record_id} = remoteMessage.data;
      console.log('action_type', action_type);
      props.showNotificaton({
        title,
        content: body,
        screen: convertScreen(action_type),
        id_record: record_id,
      });

      props.updateWalletInfo();
    });

    // messaging().onNotificationOpenedApp((remoteMessage) => {
    //   console.log(
    //     'Notification caused app to open from background state:',
    //     remoteMessage,
    //   );
    //   const {action_type, body, title, record_id} = remoteMessage.data;
    //   if (action_type == 'REDIRECT') {
    //     Linking.openURL(remoteMessage.data.redirect_to);
    //   } else {
    //     props.newScreenInit({
    //       screen: convertScreen(action_type),
    //       id_record: record_id,
    //     });
    //   }
    // });
    // messaging()
    //   .getInitialNotification()
    //   .then((remoteMessage) => {
    //     console.log(remoteMessage);
    //     if (remoteMessage) {
    //       console.log(
    //         'Notification caused app to open from quit state:',
    //         remoteMessage.data,
    //       );
    //       const {action_type, body, title, record_id} = remoteMessage.data;
    //       if (action_type == 'REDIRECT') {
    //         Linking.openURL(remoteMessage.data.redirect_to);
    //       } else {
    //         props.newScreenInit({
    //           screen: convertScreen(action_type),
    //           id_record: record_id,
    //         });
    //       }
    //     }
    //   });

    return unsubscribe;
  }, []);

  const checkPermission = async () => {
    const enabled = await messaging().hasPermission();
    if (enabled == 1) {
      getFcmToken();
    } else {
      requestPermission();
    }
  };
  const requestPermission = async () => {
    try {
      await messaging().requestPermission();
      getFcmToken();
    } catch (error) {
      // If user do not allow Push Notification
      console.log('Rejected');
    }
  };

  const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem(ASYNC_STORE_KEY.FIREBASE);
    console.log('fcmToken save', fcmToken);
    if (!fcmToken) {
      fcmToken = await messaging().getToken();
      console.log('fcmToken create', fcmToken);
      if (fcmToken) {
        AsyncStorage.setItem(ASYNC_STORE_KEY.FIREBASE, fcmToken);
      }
    }
  };
  return <View />;
};

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, {
  showNotificaton,
  updateWalletInfo,
})(FirebaseNotification);
