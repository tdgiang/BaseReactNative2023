import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/AntDesign';
import {HEIGHTXD, WIDTHXD, getFontXD, HEIGHT} from '../../config/Functions';
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
        props.defaultValue === undefined ||
        props.defaultValue === null ||
        props.defaultValue == ''
      ) {
        setTime(null);
      } else {
        // let str = props.defaultValue.split("-");
        let date = new Date(moment(props.defaultValue, 'DD/MM/YYYY'));
        setTime(date);
      }
    };

    checkDefaultValue();
  }, []);
  return (
    <>
      {props.title ? (
        <Text
          style={{
            fontSize: R.fontsize.fontSizeLabel,
            fontWeight: '700',
            color: R.colors.black,
            marginBottom: 8,
          }}>
          <Text>{props.title}</Text>
          {props.required && <Text style={{color: R.colors.red1}}> *</Text>}
        </Text>
      ) : null}
      {props.disable ? (
        <View
          style={{
            flexDirection: 'row',
            height: HEIGHT(40),
            fontWeight: '400',
            paddingHorizontal: 17,
            borderRadius: 10,
            borderBottomColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: R.colors.borderGray,
          }}>
          <Text
            style={{
              flex: 1,
              color: R.colors.black,
              fontSize: R.fontsize.fontSizeContent,
            }}>
            {props.defaultValue}
          </Text>
          <Icon name={'calendar'} size={24} color={'#4B4B4B'} />
        </View>
      ) : (
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            height: HEIGHT(40),
            fontWeight: '400',
            paddingHorizontal: 17,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: R.colors.borderGray,
          }}>
          <DatePicker
            date={time}
            format="DD/MM/YYYY"
            confirmBtnText={I18n.t('Ok')}
            cancelBtnText={I18n.t('Cancel')}
            locale="vi"
            style={{flex: 1}}
            mode="date"
            iconComponent={
              <Icon name={'calendar'} size={24} color={'#4B4B4B'} />
            }
            placeholder={props.placeholder}
            git
            customStyles={{
              dateIcon: {
                position: 'absolute',
                top: 4,
                right: 10,
                marginLeft: 0,
              },
              dateInput: {
                alignItems: 'flex-start',
                flex: 1,
                width: '100%',
                borderWidth: 0,
                marginLeft: WIDTHXD(0),
                color: R.colors.black,
              },
              dateText: {
                color: R.colors.black,
                fontSize: R.fontsize.fontSizeContent,
              },
              placeholderText: {
                color: R.colors.colorNhap,
                fontSize: 16,
              },
            }}
            onDateChange={date => {
              setTime(date);
              props.pickDate(date);
            }}
          />
        </TouchableOpacity>
      )}

      <View
        style={{
          height: 20,
          marginTop: 5,
        }}>
        {props.error ? (
          <Text
            style={{
              color: R.colors.red1,
              fontSize: getFontXD(32),
            }}>
            {`${I18n.t('PleaseSelect')}${props.title.toLowerCase()}`}
          </Text>
        ) : null}
      </View>
    </>
  );
};
export default PickerDate;
