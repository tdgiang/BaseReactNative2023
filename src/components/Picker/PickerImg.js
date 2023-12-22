import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import R from '../../assets/R';
import {
  HEIGHTXD,
  WIDTHXD,
  getFontXD,
  requestCameraPermission,
} from '../../config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';

import ImagePicker from 'react-native-image-crop-picker';
import AppText from '../AppText';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const checkPermissionAndroid = () => {
  if (!PermissionsAndroid.check('CAMERA')) {
    requestCameraPermission();
  }
};

const PickerImg = props => {
  const {onClickImage, isModalVisible, setModalVisible} = props;
  let option;
  if (props.cropping) {
    option = {
      mediaType: 'photo',
      multiple: false,
      cropping: true,
      width: 300,
      height: 300,
    };
  } else {
    option = {
      mediaType: 'photo',
      multiple: false,
    };
  }
  const onChooseGallery = () => {
    ImagePicker.openPicker(option).then(image => {
      setModalVisible(false);
      onClickImage(image);
    });
  };

  const onCapture = () => {
    if (Platform.OS == 'android') checkPermissionAndroid();
    let option;
    if (props.cropping) {
      option = {
        mediaType: 'photo',
        multiple: false,
        cropping: true,
        width: 300,
        height: 300,
      };
    } else {
      option = {
        mediaType: 'photo',
        multiple: false,
      };
    }
    ImagePicker.openCamera(option).then(image => {
      setModalVisible(false);
      onClickImage(image);
    });
  };

  return (
    <Modal
      isVisible={isModalVisible}
      style={{margin: 0, justifyContent: 'flex-end'}}
      onSwipeComplete={() => setModalVisible(false)}
      swipeDirection={['up', 'left', 'right', 'down']}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
        <View style={{flex: 1}}></View>
      </TouchableWithoutFeedback>

      <View style={styles.containerSelect}>
        <AppText
          i18nKey={'Select_source_image'}
          style={{
            paddingVertical: 15,
            fontSize: 16,
            color: R.colors.black,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        />

        <View style={styles.line} />
        <View
          style={{
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TouchableOpacity style={styles.selectionImg} onPress={onCapture}>
            <Image style={styles.imgIcon} source={R.images.iconCamera} />

            <AppText i18nKey={'Take_photo'} style={styles.txtTitleBtn} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.selectionImg}
            onPress={onChooseGallery}>
            <Image style={styles.imgIcon} source={R.images.icGallery} />

            <AppText i18nKey={'Photo_library'} style={styles.txtTitleBtn} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTHXD(350),
    height: HEIGHTXD(280),
    backgroundColor: R.colors.white,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#DBDBDB',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 16,
    color: R.colors.color777,
    marginBottom: 5,
    paddingLeft: 10,
  },
  selectionImg: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSelect: {
    backgroundColor: 'white',
    paddingTop: 5,
    paddingBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  line: {
    height: 0.5,
    backgroundColor: R.colors.gray1,
    width: '100%',
    marginTop: 5,
  },
  imgIcon: {
    width: 40,
    height: 40,
  },
  txtTitleBtn: {
    textAlign: 'center',
    fontSize: 14,
    color: R.colors.black,
  },
});

export default React.memo(PickerImg);
