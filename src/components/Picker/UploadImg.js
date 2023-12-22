import React, {useState, useEffect} from 'react';
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
  getWidth,
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

const PickerImgUni = props => {
  const {title} = props;

  const [isModalVisible, setModalVisible] = useState(false);
  const [urlImg, setUrlImg] = useState('');

  const checkPermissionAndroid = () => {
    if (!PermissionsAndroid.check('CAMERA')) {
      requestCameraPermission();
    }
  };

  const onchoosGalery = () => {
    ImagePicker.openPicker({
      mediaType: 'photo',
      multiple: false,
      height: 350,
      width: 575,
      cropping: true,
    }).then(image => {
      setModalVisible(false);
      setUrlImg(image.path);
      parseData(image);
    });
  };

  const onCapture = () => {
    if (Platform.OS == 'android') checkPermissionAndroid();
    ImagePicker.openCamera({
      mediaType: 'photo',
      height: 350,
      width: 575,
      cropping: true,
    }).then(image => {
      setModalVisible(false);
      setUrlImg(image.path);
      parseData(image);
    });
  };

  const parseData = photo => {
    const data = new FormData();
    let fileName = photo.filename;
    if (!fileName || fileName === undefined) {
      let pathArray = photo.path.split('/');
      fileName = pathArray[pathArray.length - 1];
    }
    data.append('files', {
      name: fileName.replace(/HEIC/g, 'jpg'),
      type: photo.mime,
      size: photo.size,
      uri: photo.path,
    });
    callApi(data);
  };

  const callApi = () => {
    console.log('call');
  };

  return (
    <View onPress={() => setModalVisible(true)}>
      <View style={{marginBottom: 5}}>
        <Text style={styles.txt}>{title}:</Text>
      </View>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        {urlImg ? (
          <Image
            resizeMode={'contain'}
            source={{uri: urlImg}}
            style={styles.containerIdentify}
          />
        ) : (
          <View style={styles.containerIdentify}>
            <Image source={R.images.icCamera} style={styles.image} />
          </View>
        )}
      </TouchableOpacity>

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
              textAlign: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#1473E6',
            }}
          />

          <View style={styles.line} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity style={styles.selectionImg} onPress={onCapture}>
              <Image style={styles.imgIcon} source={R.images.iconCamera} />

              <AppText i18nKey={'Take_photo'} style={styles.txtTitleBtn} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.selectionImg}
              onPress={onchoosGalery}>
              <Image style={styles.imgIcon} source={R.images.iconImg} />

              <AppText i18nKey={'Photo_library'} style={styles.txtTitleBtn} />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: R.colors.white,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    fontSize: 16,
    color: R.colors.color777,
    marginBottom: 5,
  },
  selectionImg: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSelect: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderRadius: 8,
  },
  line: {
    height: 1,
    backgroundColor: '#929292',
    width: '100%',
    marginTop: 5,
  },
  imgIcon: {
    width: 40,
    height: 40,
  },
  txtTitleBtn: {
    textAlign: 'center',
    fontSize: 16,
    color: '#1473E6',
  },
  containerIdentify: {
    height: HEIGHTXD(500),
    marginHorizontal: 30,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.6,
    borderStyle: 'dashed',
    borderColor: R.colors.gray1,
    backgroundColor: R.colors.colorBgScreen,
  },
  image: {
    height: 48,
    width: 48,
  },
});

export default React.memo(PickerImgUni);
