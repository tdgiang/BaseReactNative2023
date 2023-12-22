import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import i18n from '../../helper/i18/i18n';
import R from '../../assets/R';
const HomeView = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title={i18n.t('Home')} />
        <Text>Home screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
});
