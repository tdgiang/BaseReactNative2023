import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Linking,
  Platform,
} from 'react-native';
import R from '../assets/R';
import {
  getFontXD,
  getHeight,
  getWidth,
  HEIGHTXD,
  WIDTHXD,
} from '../config/Functions';
import I18n from '../helper/i18/i18n';
import DeviceInfo from 'react-native-device-info';
import {connect} from 'react-redux';
import {getNewestVersionInfo} from '../apis/Functions/home';
import {showLoading, hideLoading} from '../actions/loadingAction';

const VersionChecker = props => {
  const [visible, setVisible] = useState(false);
  const [isForceUpdate, setIsForceUpdate] = useState(false);
  const [version, setVersion] = useState('1.0');
  useEffect(() => {
    checkVersion();
  }, []);

  const checkVersion = async () => {
    const res = await getNewestVersionInfo(
      Platform.OS == 'ios' ? 'ios' : 'android',
    );
    if (res.data.code == 200 && res.data.data) {
      if (
        res.data.data.value.version_name != DeviceInfo.getVersion() ||
        res.data.data.value.build != DeviceInfo.getBuildNumber()
      ) {
        setVersion(res.data.data.value.version_name);
        setVisible(true);
        setIsForceUpdate(res.data.data.value.is_require_update);
      }
    }
  };
  const onUpdatePressed = async () => {
    try {
      if (Platform.OS === 'ios') {
        Linking.openURL(
          'itms-services://?action=download-manifest&url=https://investing.dcvfinance.com/public/assets/app/DCV.plist',
        );
        setVisible(false);
      } else {
        Linking.openURL(
          'https://play.google.com/store/apps/details?id=com.dcvcard',
        );
      }
    } catch (error) {}
  };

  const onRequestClose = () => null;

  const renderBackdrop = () => {
    return (
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.30)',
          // backgroundColor: 'red',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,

          width: getWidth(),
          height: getHeight(),
        }}
      />
    );
  };

  const cancelUpdate = () => {
    setVisible(false);
  };

  return (
    <Modal
      onRequestClose={() => onRequestClose()}
      transparent
      animationType="fade"
      style={{position: 'absolute'}}
      visible={visible}>
      {renderBackdrop()}
      <View pointerEvents="box-none" style={styles.containerStyle}>
        <View style={styles.imageUpgradeContainer} zIndex={100}>
          <Image
            source={R.images.iconUpgrade}
            style={[styles.imageUpgradeStyle, {tintColor: R.colors.main}]}
          />
        </View>
        <View style={styles.contentContainerStyle}>
          <Text style={styles.titleStyle}>
            {props.language.language == 'vi' ? 'Cập nhật' : 'Update'}
          </Text>
          <Text style={styles.versionLabelStyle}>
            {I18n.t('Version')}
            {': '}
            {version}
          </Text>

          <Text style={styles.descStyle}>
            {' '}
            {props.language.language == 'vi'
              ? 'Đã có phiên bản DCVFinance mới. Cập nhật ngay để tiếp tục sử dụng và trải nghiệm những tính năng mới nhất của hệ thống!'
              : 'A new version of DCVFinance is available. Update now to continue using and experiencing the latest system features!'}
          </Text>

          {isForceUpdate ? (
            <TouchableOpacity
              onPress={() => onUpdatePressed()}
              style={styles.notNowContainerStyle}>
              <Text style={[styles.textNotNowStyle, {color: R.colors.main}]}>
                {props.language.language == 'vi' ? 'Cập nhật' : 'Update'}
              </Text>
            </TouchableOpacity>
          ) : (
            <View
              style={[
                styles.notNowContainerStyle,
                {
                  flexDirection: 'row',
                  marginHorizontal: WIDTHXD(100),
                },
              ]}>
              <TouchableOpacity
                onPress={() => cancelUpdate()}
                style={[styles.btnButton, {paddingRight: WIDTHXD(60)}]}>
                <Text
                  style={[
                    styles.textNotNowStyle,
                    {color: R.colors.color777, textAlign: 'right'},
                  ]}>
                  {props.language.language == 'vi' ? 'Bỏ qua' : 'Cancel'}
                </Text>
              </TouchableOpacity>
              <View style={styles.dividerStyleVertical}></View>
              <TouchableOpacity
                onPress={() => onUpdatePressed()}
                style={[styles.btnButton, {paddingLeft: WIDTHXD(60)}]}>
                <Text
                  style={[
                    styles.textNotNowStyle,
                    {color: R.colors.main, textAlign: 'left'},
                  ]}>
                  {I18n.t('Update')}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  imageUpgradeStyle: {
    width: 50,
    height: 50,
    tintColor: R.colors.primaryColor,
  },
  imageUpgradeContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {
    flex: 1,
    width: getWidth() * 0.8,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentContainerStyle: {
    marginTop: -40,
    paddingTop: 40,
    width: getWidth() * 0.9,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },

  logoStyle: {
    width: 65,
    height: 65,
    marginVertical: 20,
  },
  titleStyle: {
    fontWeight: '600',
    fontSize: 20,
    color: 'black',
    paddingHorizontal: 8,
    textAlign: 'center',
  },

  versionLabelStyle: {
    fontSize: 14,
    color: R.colors.grey600,
    marginTop: 5,
    marginBottom: 15,
    paddingHorizontal: 8,
    textAlign: 'center',
  },

  descStyle: {
    fontSize: getFontXD(46),
    color: R.colors.grey900,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  notNowContainerStyle: {
    height: HEIGHTXD(160),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnButton: {
    flex: 1,
  },

  textNotNowStyle: {
    fontSize: getFontXD(46),
    width: '100%',
    textAlign: 'center',
    color: R.colors.primaryColor,
  },

  starContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  dividerStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: R.colors.borderC,
  },
  dividerStyleVertical: {
    height: HEIGHTXD(160),
    width: 0.5,
    backgroundColor: R.colors.borderC,
  },
});

const mapStateToProps = state => {
  return {
    language: state.languageReducer,
  };
};

export default connect(mapStateToProps, {showLoading, hideLoading})(
  VersionChecker,
);
