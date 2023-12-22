import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {HEIGHTXD, WIDTHXD, getFontXD} from '../../config/Functions';
import R from '../../assets/R';
import I18n from '../../helper/i18/i18n';
import Icon from 'react-native-vector-icons/Feather';
import {Image} from 'react-native';
import {NotificationAlert} from '../Aleart';
const TextField = props => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    title,
    onChangeText,
    isPassword,
    maxLength,
    isNumber,
    value,
    editable,
    error,
    onBlur,
    placeholder,
    keyboardType,
    placeHolderColor,
    textColor,
    tinColor,
    fontSize,
    borderBottomColor,
    required,
    autoCapitalize,
  } = props;
  return (
    <View>
      {title ? (
        <Text
          style={{
            fontSize: R.fontsize.fontSizeLabel,
            fontWeight: '700',
            color: R.colors.black,
            marginBottom: 8,
          }}>
          <Text>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              NotificationAlert(
                'Đối với các ngân hàng Techcombank, SeaBank,Vietcombank, OCB, TPBANK cần nhập thông tin số tài khoản tín dụng.',
              );
            }}>
            <Image
              source={R.images.iconWarn}
              style={{
                width: 22,
                height: 20,
                marginLeft: 10,
                marginTop: 10,
                resizeMode: 'cover',
              }}
            />
          </TouchableOpacity>
        </Text>
      ) : null}
      <View style={{justifyContent: 'center'}}>
        <TextInput
          onBlur={onBlur}
          maxLength={maxLength ? maxLength : 256}
          placeholderTextColor={placeHolderColor ? placeHolderColor : '#8E8E8E'}
          editable={editable != null ? editable : true}
          placeholder={placeholder ? placeHolderColor : ''}
          secureTextEntry={isPassword && !showPassword}
          autoCapitalize={autoCapitalize ? autoCapitalize : 'none'}
          value={value}
          fontSize={13}
          keyboardType={keyboardType}
          onChangeText={val => {
            if (keyboardType === 'number-pad') {
              const text = val.replace(/[^0-9]/g, '');
              onChangeText(text);
            } else {
              onChangeText(val);
            }
          }}
          style={{
            height: 42,
            color: textColor ? textColor : R.colors.black,
            borderBottomWidth: 0.5,
            fontSize: fontSize ? fontSize : R.fontsize.fontSizeInputText,
            paddingVertical: 5,
            fontWeight: '400',
            paddingHorizontal: 17,
            backgroundColor: R.colors.colorBgInputText,
            borderRadius: 10,
            borderBottomColor: 'transparent',
          }}
        />
        {isPassword && (
          <TouchableOpacity
            style={{position: 'absolute', right: 17}}
            onPress={() => setShowPassword(!showPassword)}>
            <Icon
              name={showPassword ? 'eye' : 'eye-off'}
              size={20}
              color={'#4B4B4B'}
            />
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          height: 20,
          marginTop: 5,
        }}>
        {error && (
          <Text
            style={{
              color: tinColor ? tinColor : R.colors.red1,
              fontSize: getFontXD(32),
            }}>
            {I18n.t('PleaseEnterField')}
          </Text>
        )}
      </View>
    </View>
  );
};

export default React.memo(TextField);
