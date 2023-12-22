import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  TouchableHighlight,
  View,
} from 'react-native';

import {SwipeListView} from 'react-native-swipe-list-view';
import {WIDTHXD, getWidth, HEIGHTXD, WIDTHXDICON} from '../../config/Functions';
import R from '../../assets/R';
import ItemEmpty from './ItemEmpty';

const rowSwipeAnimatedValues = [];

/**
 * Displays a swipe use as FlatList
 *@param listIcon list image icon in swipe (for example :  [R.image.iconDelete] )
 *@param widthListIcon with of list icon
 *@callback onPressIcon call when you choice one of list icon return index of icon and index of item
 *@param rightOfList end of list icon margin Right screen
 *@param styleOfIcon custom style of icon
 *@param data is a Array [Object1,Object2]
 */
export default class FlatListSwipe extends React.Component {
  indexOfItem = 0;
  rowMap = [];

  constructor(props) {
    super(props);
    this.state = {
      isDisable: false,
    };
  }

  closeRowItem = () => {
    if (this.rowMap[this.indexOfItem]) {
      this.rowMap[this.indexOfItem].closeRow();
    }
  };

  closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  renderRightAction = (rowMap, image, indexOfIcon) => {
    return (
      <View style={{marginRight: indexOfIcon === 0 ? 10 : 0}}>
        <TouchableHighlight
          underlayColor="transparent"
          key={indexOfIcon.toString()}
          disabled={this.state.isDisable}
          onPress={() => {
            this.closeRow(rowMap, this.indexOfItem);
            this.setState(
              {
                isDisable: true,
              },
              () => {
                setTimeout(() => {
                  if (this.props.isListRequestPartners)
                    this.props.onPressIcon(indexOfIcon + 1, this.indexOfItem);
                  else this.props.onPressIcon(indexOfIcon, this.indexOfItem);
                  this.setState({
                    isDisable: false,
                  });
                }, 1000);
              },
            );
          }}
          style={{
            height: 65,
            width: 55,
            borderRadius: 10,
            marginTop: 10,
            backgroundColor: indexOfIcon === 0 ? R.colors.gray1 : R.colors.red1,
            flex: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={image}
            style={[
              styles.trash,
              this.props.styleOfIcon !== null && this.props.styleOfIcon,
            ]}
          />
        </TouchableHighlight>
      </View>
    );
  };

  onRowOpen = (rowKey, rowMap) => {
    this.indexOfItem = rowKey;
    this.rowMap = rowMap;
  };

  onSwipeValueChange = swipeData => {
    const {key, value} = swipeData;
    rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  convertData = data => {
    // if (rowSwipeAnimatedValues['0'] === undefined) {
    this.props.data.forEach((_, i) => {
      rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
    });
    // }
    let dataTmp = [];
    data.map((item, index) => {
      dataTmp.push({...item, key: index.toString()});
    });
    return dataTmp;
  };

  renderHiddenItem = (data, rowMap) => {
    return (
      <Animated.View
        style={[
          styles.backRightBtnRight,
          this.props.rightOfList && {right: this.props.rightOfList},
          {
            transform: [
              {
                translateX: rowSwipeAnimatedValues[data.item.key].interpolate({
                  inputRange: [0, getWidth()],
                  outputRange: [getWidth(), 0],
                }),
              },
            ],
          },
        ]}>
        {this.props.listIcons.map((item, index) =>
          this.renderRightAction(rowMap, item, index),
        )}
      </Animated.View>
    );
  };

  render() {
    const data = this.convertData(this.props.data);
    const {widthListIcon} = this.props;
    return (
      <View style={styles.container}>
        <SwipeListView
          {...this.props}
          data={data}
          showsVerticalScrollIndicator={false}
          renderHiddenItem={this.renderHiddenItem}
          rightOpenValue={-widthListIcon || -WIDTHXD(387)}
          onRowOpen={this.onRowOpen}
          onSwipeValueChange={this.onSwipeValueChange}
          disableRightSwipe={true}
          swipeToOpenPercent={10}
          swipeToClosePercent={10}
          ListEmptyComponent={!this.props.isLoading && <ItemEmpty />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  backRightBtnRight: {
    flexDirection: 'row',
    flex: 1,
    // right: 20
  },
  trash: {
    height: 21,
    width: 21,
  },
});
