import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {WIDTHXD, getFontXD, WIDTH, HEIGHT} from '../../config/Functions';
import R from '../../assets/R';
import {RFValue} from 'react-native-responsive-fontsize';
const TextField = props => {
  const {
    title,
    onChangeText,
    isPassword,
    maxLength,
    isNumber,
    value,
    editable,
    error,
  } = props;
  const renderMess = () => {
    if (value && value.trim().length > 0) return `${title} không hợp lệ`;
    return `Vui lòng nhập ${title ? title.toLowerCase() : messageError} `;
  };

  return (
    <View style={{marginVertical: 5, marginHorizontal: WIDTH(15)}}>
      <Text
        style={{
          fontSize: 16,
          color: R.colors.color777,
          marginBottom: 5,
        }}>
        {title ? title : ''}
      </Text>
      <TextInput
        maxLength={maxLength ? maxLength : 256}
        placeholderTextColor={R.colors.placeHolder}
        editable={editable != null ? editable : true}
        secureTextEntry={isPassword}
        autoCapitalize="none"
        value={value}
        keyboardType={isNumber ? 'number-pad' : 'default'}
        onChangeText={val => onChangeText(val)}
        style={{
          height: HEIGHT(35),
          color: 'black',
          borderRadius: HEIGHT(6),
          fontSize: 16,
          paddingVertical: 5,
          paddingHorizontal: 10,
          backgroundColor: '#EFF3F5',
        }}
      />
      <View
        style={{
          height: HEIGHT(20),
          marginTop: 5,
        }}>
        {error && !error.ref?.value && (
          <Text
            ellipsizeMode={'tail'}
            numberOfLines={1}
            style={{
              flex: 1,
              color: R.colors.red,
              fontSize: RFValue(10),
            }}>
            {error.message ? error.message : renderMess()}
          </Text>
        )}
      </View>
    </View>
  );
};

export default React.memo(TextField);
