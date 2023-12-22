import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {HEIGHT, getFont, getWidth} from '../../config/Functions';
import R from '../../assets/R';
import i18n from '../../helper/i18/i18n';

const ItemEmpty = props => {
  let paddingHorizontal = props.paddingHorizontal ? props.paddingHorizontal : 0;
  const {title} = props;
  return (
    <View
      style={{...styles.container, width: getWidth() - paddingHorizontal * 2}}>
      <View style={{alignItems: 'center'}}>
        <Text style={{fontSize: getFont(16), color: R.colors.black}}>
          {title || i18n.t('NullDataSearch')}
        </Text>
      </View>
    </View>
  );
};

ItemEmpty.defaultProps = {
  paddingHorizontal: 0,
};

export default ItemEmpty;

const styles = StyleSheet.create({
  container: {
    width: getWidth(),
    height: HEIGHT(50),
    flexDirection: 'row',
    paddingTop: HEIGHT(16),
    paddingBottom: HEIGHT(10),
    paddingRight: HEIGHT(10),
    paddingLeft: HEIGHT(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
