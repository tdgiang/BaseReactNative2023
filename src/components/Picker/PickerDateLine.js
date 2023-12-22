import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import {HEIGHTXD, WIDTHXD, getFontXD, getWidth} from '../../config/Functions';
import R from '../../assets/R';
import I18n from '../../helper/i18/i18n';
import moment from 'moment';

/**
 * Note
 *
 * placeholder: if have not value placeholder is visibled
 * defaultValue : if have defaultValue it will be seted for value of date
 * other you can make minDate,maxDate... with props of libary react-native-datepicker
 */
const PickerDate = props => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const checkDefaultValue = () => {
      if (
        props.value === undefined ||
        props.value === null ||
        props.value == ''
      ) {
        setTime(null);
      } else {
        // let str = props.defaultValue.split("-");
        let date = new Date(moment(props.value, 'DD/MM/YYYY'));
        setTime(date);
      }
    };

    checkDefaultValue();
  }, [props.value]);
  return (
    <DatePicker
      date={time}
      format="DD/MM/YYYY"
      confirmBtnText={'Đồng ý'}
      cancelBtnText={'Huỷ'}
      locale="vi"
      style={props.containerStyle}
      mode="date"
      iconComponent={
        time ? (
          <TouchableOpacity
            style={{
              marginBottom: 0,
              position: 'absolute',
              top: 10,
              right: 0,
            }}
            onPress={() => {
              setTime();
              props.pickDate(null);
            }}>
            <Image
              resizeMode="contain"
              source={R.images.icClose}
              style={{
                width: 18,
                height: 18,
                tintColor: time ? R.colors.black : '#4B4B4B',
              }}
              size={22}
            />
          </TouchableOpacity>
        ) : (
          <Image
            resizeMode="contain"
            source={R.images.icDatePicker}
            style={{
              marginBottom: 0,
              position: 'absolute',
              top: 10,
              right: 0,
              width: 18,
              height: 18,
            }}
            size={22}
            color={'#4B4B4B'}
          />
        )
      }
      placeholder={props.placeholder}
      git
      customStyles={{
        dateInput: {
          alignItems: 'flex-start',
          flex: 1,
          color: R.colors.black,
          justifyContent: 'center',
          borderWidth: 0,
        },
        dateText: {
          color: time ? 'black' : '#575757',
          fontSize: 16,
        },
        placeholderText: {
          color: '#575757',
          fontSize: 16,
        },
      }}
      onDateChange={date => {
        setTime(date);
        props.pickDate(date);
      }}
    />
  );
};
export default PickerDate;
